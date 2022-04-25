import { AwsClusterAutoScalerPolicyHelper } from '@opencdk8s/cdk8s-cluster-autoscaler-aws';
import { AwsExternalDnsPolicyHelper } from '@opencdk8s/cdk8s-external-dns-route53';
import { CfnOutput, Tags } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as eks from 'aws-cdk-lib/aws-eks';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import { Construct } from 'constructs';
// import {
//   AwsLoadBalancerPolicy,
//   VersionsLists,
// } from '@opencdk8s/cdk8s-aws-lb-controller';
import {
  VpcCniAddonVersion,
  VpcEniAddon,
} from '../constructs/eks-managed-addon';
import {
  GetFargetProfilesNamespace,
  GetKubernetesLabels,
  ObjToStrMap,
} from '../utils/common';
import { CommonHelmCharts, StandardHelmProps } from './common-helm-charts';

export interface FargetProfile {
  readonly profileName: string;
  readonly namespaces: string[];
  readonly labels: InternalMap;
}

export interface NodeGroupConfig {
  readonly name: string;
  readonly instanceTypes: ec2.InstanceType[];
  readonly minSize: number;
  readonly maxSize: number;
  readonly desiredSize?: number;
  readonly diskSize?: number;
  readonly sshKeyName?: string;
  readonly subnetGroupName: string;
  readonly subnetAz?: string[];
  readonly labels: InternalMap;
  readonly taints: InternalMap;
  readonly tags?: InternalMap;
  // replace node
  readonly nodeAMIVersion?: string;
  readonly launchTemplateSpec?: eks.LaunchTemplateSpec;
  readonly capacityType?: eks.CapacityType;

}

export interface InternalMap {
  readonly [name: string]: string;
}
export interface ClusterConfig {
  readonly clusterName: string;
  readonly clusterVersion: eks.KubernetesVersion;
  readonly addAutoscalerIam?: boolean;
  readonly defaultCapacity: number;
  readonly subnets: InternalMap;
  readonly publicAllowAccess?: string[];
  readonly teamMembers: string[];
  readonly albControllerVersion?: eks.AlbControllerVersion;
  readonly teamExistingRolePermission?: Record<string, string>;
  readonly tags: InternalMap;
  readonly nodeGroups: NodeGroupConfig[];
  readonly fargetProfiles?: FargetProfile[];
  readonly argoCD?: ArgoCD;
  readonly commonComponents?: Record<string, ICommonComponentsProps>;
}

export interface ICommonComponentsProps {
  helm: StandardHelmProps;
  serviceAccounts?: string[];
  iamPolicyPath?: string[];
}
export interface ArgoCD {
  readonly assumeRoleArn: string;
  readonly clusterRoleName: string;
}

export interface EKSClusterProps {
  readonly availabilityZones: string[];
  readonly clusterVPC?: ec2.IVpc;
  readonly kmsKey: kms.Key;
  readonly workerSecurityGroup: ec2.SecurityGroup;
  readonly clusterConfig: ClusterConfig;
  readonly addonProps?: AddonProps;
  readonly region: string;
}

export interface AddonProps {
  readonly vpnCniAddonVersion?: VpcCniAddonVersion;
}

export class EKSCluster extends Construct {
  public readonly cluster: eks.Cluster;
  private props: EKSClusterProps;
  readonly additionalNodegroups: eks.Nodegroup[] = [];
  readonly additionalFargetProfile: eks.FargateProfile[] = [];
  readonly fargetProfiles: FargetProfile[] = [];
  constructor(scope: Construct, id: string, props: EKSClusterProps) {
    super(scope, id);
    this.props = {
      ...props,
    };
    const commonCompoents: Map<string, ICommonComponentsProps> = this.basicCommonComponents(props.kmsKey.keyArn);
    // console.log(this.availabilityZones);
    const clusterAdmin = new iam.Role(this, 'AdminRole', {
      assumedBy: new iam.AccountRootPrincipal(),
    });
    let subnets: Map<string, string> = ObjToStrMap(
      JSON.parse(JSON.stringify(props.clusterConfig.subnets)),
    );

    this.cluster = new eks.Cluster(this, props.clusterConfig.clusterName, {
      albController: props.clusterConfig.albControllerVersion != undefined ? {
        version: props.clusterConfig.albControllerVersion,
      } : undefined,
      version: props.clusterConfig.clusterVersion,
      clusterLogging: [
        eks.ClusterLoggingTypes.API,
        eks.ClusterLoggingTypes.AUTHENTICATOR,
        eks.ClusterLoggingTypes.SCHEDULER,
        eks.ClusterLoggingTypes.CONTROLLER_MANAGER,
        eks.ClusterLoggingTypes.AUDIT,
      ],
      clusterName: props.clusterConfig.clusterName,
      mastersRole: clusterAdmin,
      defaultCapacity: props.clusterConfig.defaultCapacity,
      vpc: props.clusterVPC,
      securityGroup: props.workerSecurityGroup,
      secretsEncryptionKey: props.kmsKey,
      endpointAccess:
        subnets.get('publicSubnetGroupName') != undefined
          ? eks.EndpointAccess.PUBLIC_AND_PRIVATE.onlyFrom(
            ...props.clusterConfig.publicAllowAccess!,
          )
          : eks.EndpointAccess.PRIVATE,
      vpcSubnets:
        subnets.get('publicSubnetGroupName') != undefined
          ? [
            {
              // subnetType: SubnetType.PRIVATE,
              subnetGroupName: subnets.get('privateSubnetGroupName'),
            },
            {
              // subnetType: SubnetType.PUBLIC,
              subnetGroupName: subnets.get('publicSubnetGroupName'),
            },
          ]
          : [
            {
              // subnetType: SubnetType.PRIVATE,
              subnetGroupName: subnets.get('privateSubnetGroupName'),
            },
          ],
    });
    this.cluster;
    // Attach IAM Policy to cluster role (required for VPC SG)
    // https://docs.aws.amazon.com/eks/latest/userguide/security-groups-for-pods.html
    const clusterRole = iam.Role.fromRoleArn(this, 'clusterRole', this.cluster.role.roleArn);
    clusterRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonEKSVPCResourceController'));

    // add nodeGroups
    for (const nodeGroup of props.clusterConfig.nodeGroups) {
      // Configure taints
      let nodeTaints: Map<string, string> = ObjToStrMap(
        JSON.parse(JSON.stringify(nodeGroup.taints)),
      );
      let taints: eks.TaintSpec[] = [];
      nodeTaints.forEach((value, key) => {
        let taint: eks.TaintSpec = {
          key: key,
          value: value,
          effect: eks.TaintEffect.NO_SCHEDULE,
        };
        taints.push(taint);
      });
      if (props.clusterConfig.publicAllowAccess != undefined) {
        props.clusterConfig.publicAllowAccess.forEach((ipAddress) => {
          this.cluster.clusterSecurityGroup.addIngressRule(
            ec2.Peer.ipv4(ipAddress),
            ec2.Port.tcp(443),
          );
        });
      }
      //Configure labels
      let nodeLabels: Map<string, string> = ObjToStrMap(
        JSON.parse(JSON.stringify(nodeGroup.labels)),
      );
      // eslint-disable-next-line max-len
      const nodeSubnets: ec2.SubnetSelection | undefined = nodeGroup.subnetAz ? { subnetGroupName: nodeGroup.subnetGroupName, availabilityZones: nodeGroup.subnetAz } : {
        subnetGroupName: nodeGroup.subnetGroupName,
      };

      if (nodeGroup?.sshKeyName) {
        const node = new eks.Nodegroup(this, nodeGroup.name, {
          cluster: this.cluster,
          nodegroupName: nodeGroup.name,
          releaseVersion: nodeGroup.nodeAMIVersion,
          capacityType: nodeGroup.capacityType,
          instanceTypes: nodeGroup.instanceTypes,
          minSize: nodeGroup.minSize,
          maxSize: nodeGroup.maxSize,
          diskSize: nodeGroup.diskSize,
          desiredSize: nodeGroup.desiredSize,
          subnets: nodeSubnets,
          taints: taints,
          labels: GetKubernetesLabels(nodeLabels),
          tags: nodeGroup.tags,
          remoteAccess: {
            sshKeyName: nodeGroup.sshKeyName,
          },
        });
        node.role.addManagedPolicy(
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            'AmazonSSMManagedInstanceCore',
          ),
        );
        this.additionalNodegroups.push(node);
      } else {
        const node = new eks.Nodegroup(this, nodeGroup.name, {
          cluster: this.cluster,
          nodegroupName: nodeGroup.name,
          instanceTypes: nodeGroup.instanceTypes,
          releaseVersion: nodeGroup.nodeAMIVersion,
          launchTemplateSpec: nodeGroup.launchTemplateSpec,
          capacityType: nodeGroup.capacityType,
          minSize: nodeGroup.minSize,
          maxSize: nodeGroup.maxSize,
          desiredSize: nodeGroup.desiredSize,
          diskSize: nodeGroup.diskSize,
          subnets: nodeSubnets,
          taints: taints,
          labels: GetKubernetesLabels(nodeLabels),
          tags: nodeGroup.tags,
        });
        node.role.addManagedPolicy(
          iam.ManagedPolicy.fromAwsManagedPolicyName(
            'AmazonSSMManagedInstanceCore',
          ),
        );
        this.additionalNodegroups.push(node);
      }
    }

    // farget Profile
    props.clusterConfig.fargetProfiles?.forEach((farget) => {
      this.fargetProfiles.push(farget);
    });
    //tagging eks cluster
    let taggs: Map<string, string> = ObjToStrMap(
      JSON.parse(JSON.stringify(props.clusterConfig.tags)),
    );
    taggs.forEach((v, k) => {
      Tags.of(scope).add(k, v);
    });
    props.clusterConfig.teamMembers.forEach((user) => {
      this.cluster.awsAuth.addUserMapping(
        iam.User.fromUserName(this, user, user),
        {
          groups: ['system:masters'],
        },
      );
    });
    //existing Role Permission
    let awsAuthExistingRolePermission: Map<string, string> = ObjToStrMap(props.clusterConfig.teamExistingRolePermission);
    awsAuthExistingRolePermission.forEach((eksPermission, role)=> {
      this.cluster.awsAuth.addRoleMapping(iam.Role.fromRoleArn(this, role, role), {
        groups: [eksPermission],
      });
    });
    if (props.clusterConfig.argoCD) {
      const targetClusterRole = new iam.Role(this, 'target-cluster-role', {
        roleName: props.clusterConfig.argoCD.clusterRoleName,
        assumedBy: new iam.ArnPrincipal(
          props.clusterConfig.argoCD.assumeRoleArn,
        ),
        inlinePolicies: {
          describeCluster: new iam.PolicyDocument({
            statements: [
              new iam.PolicyStatement({
                resources: [this.cluster.clusterArn],
                actions: ['eks:DescribeCluster', 'eks:ListClusters'],
                effect: iam.Effect.ALLOW,
              }),
            ],
          }),
        },
        description: 'crossaccount iam roles',
      });
      this.cluster.awsAuth.addRoleMapping(targetClusterRole, {
        groups: ['system:masters'],
      });
      new CfnOutput(
        this,
        `${props.clusterConfig.clusterName}-TargetClusterRoleARN`,
        {
          value: targetClusterRole.roleArn,
          exportName: `${props.clusterConfig.clusterName}-TargetClusterRoleARN`,
          description: 'target role which will be assume by argocd',
        },
      );
      new CfnOutput(this, `${props.clusterConfig.clusterName}-ClusterName`, {
        value: this.cluster.clusterName,
        exportName: `${props.clusterConfig.clusterName}-ClusterName`,
        description: 'clusterName which is required to onboard argo to cluster',
      });
    }

    if (props.clusterConfig.addAutoscalerIam) {
      const clusterAutoScalerSa = new eks.ServiceAccount(
        this,
        `autoscaler-cluster-${props.clusterConfig.clusterName}`,
        {
          cluster: this.cluster,
          name: 'cluster-autoscaler',
          namespace: 'kube-system',
        },
      );
      AwsClusterAutoScalerPolicyHelper.addPolicy(clusterAutoScalerSa);
    }

    const clusterDnsSa = new eks.ServiceAccount(
      this,
      `dnsserviceaccount-cluster-${props.clusterConfig.clusterName}`,
      {
        cluster: this.cluster,
        name: 'external-dns',
        namespace: 'kube-system',
      },
    );
    AwsExternalDnsPolicyHelper.addPolicy(clusterDnsSa);
    clusterDnsSa.node.addDependency(this.cluster.openIdConnectProvider);
    clusterDnsSa.node.addDependency(this.cluster.awsAuth);

    this.fargetProfiles.forEach((item) => {
      let fargetProfile: FargetProfile = JSON.parse(JSON.stringify(item));
      const farget = this.cluster.addFargateProfile(fargetProfile.profileName, {
        fargateProfileName: fargetProfile.profileName,
        selectors: GetFargetProfilesNamespace(
          fargetProfile.namespaces,
          fargetProfile.labels,
        ),
      });
      farget.podExecutionRole.addManagedPolicy(
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          'AmazonEKSVPCResourceController',
        ),
      );
    });

    this.addManagedVpcCniAddon();
    const storageclassDefault = new eks.KubernetesManifest(this, 'gp2', {
      overwrite: true,
      cluster: this.cluster,
      manifest: [
        {
          kind: 'StorageClass',
          apiVersion: 'storage.k8s.io/v1',
          metadata: {
            name: 'gp2',
            annotations: {
              'storageclass.kubernetes.io/is-default-class': 'false',
            },
          },
          allowVolumeExpansion: true,
          provisioner: 'kubernetes.io/aws-ebs',
          volumeBindingMode: 'WaitForFirstConsumer',
          parameters: {
            type: 'gp2',
            fsType: 'ext4',
          },
        },
      ],
    });
    storageclassDefault.node.addDependency(this.cluster);

    if (props.clusterConfig.commonComponents != undefined ) {
      let additionCommonCompoents: Map<string, ICommonComponentsProps> = ObjToStrMap(props.clusterConfig.commonComponents);
      additionCommonCompoents.forEach((common, key) => {
        if (commonCompoents.has(key) != true ) {
          new CommonHelmCharts(this, `${common.helm.chartName}-common`, {
            cluster: this.cluster,
            helmProps: common.helm,
            iamPolicyPath: common.iamPolicyPath,
            serviceAccounts: common.serviceAccounts,
          });
        }
      });
      commonCompoents.forEach((common, key)=> {
        if (additionCommonCompoents.has(key)) {
          new CommonHelmCharts(this, `${additionCommonCompoents.get(key)?.helm.chartName ?? common.helm.chartName}-common`, {
            cluster: this.cluster,
            helmProps: additionCommonCompoents.get(key)?.helm ?? common.helm,
            iamPolicyPath: additionCommonCompoents.get(key)?.iamPolicyPath ?? common.iamPolicyPath,
            serviceAccounts: additionCommonCompoents.get(key)?.serviceAccounts ?? common.serviceAccounts,
          });
        } else {
          new CommonHelmCharts(this, `${common.helm.chartName}-common`, {
            cluster: this.cluster,
            helmProps: common.helm,
            iamPolicyPath: common.iamPolicyPath,
            serviceAccounts: common.serviceAccounts,
          });
        }
      });
    } else {
      commonCompoents.forEach((common)=> {
        new CommonHelmCharts(this, `${common.helm.chartName}-common`, {
          cluster: this.cluster,
          helmProps: common.helm,
          iamPolicyPath: common.iamPolicyPath,
          serviceAccounts: common.serviceAccounts,
        });
      });
    }
  }

  private addManagedVpcCniAddon() {
    const addonVersion = this.props.addonProps?.vpnCniAddonVersion
      ? { addonVersion: this.props.addonProps.vpnCniAddonVersion }
      : {};
    const vpcCniAddon = new VpcEniAddon(this, 'VpcCniAddon', {
      cluster: this.cluster,
      ...addonVersion,
      resolveConflicts: true,
    });
    this.cluster.defaultNodegroup?.node.addDependency(vpcCniAddon);
    this.additionalNodegroups.forEach((nodeGroup) => {
      nodeGroup.node.addDependency(vpcCniAddon);
    });
  }

  public addServiceAccountWithIamRole(serviceAccountName: string, serviceAccountNamespace: string, policy: any, saNamespaceCreate?: boolean ) {
    var create = saNamespaceCreate ?? false;
    if (create) {
      new eks.KubernetesManifest(this, `${serviceAccountName}-ns`, {
        overwrite: true,
        cluster: this.cluster,
        manifest: [
          {
            kind: 'Namespace',
            apiVersion: 'v1',
            metadata: {
              name: serviceAccountNamespace,
            },
          },
        ],
      });
    }

    const sa = new eks.ServiceAccount(this, serviceAccountName, {
      cluster: this.cluster,
      name: serviceAccountName,
      namespace: serviceAccountNamespace,
    });


    policy.forEach((item: any) => {
      sa.addToPrincipalPolicy(iam.PolicyStatement.fromJson(item));
    });

  }

  private basicCommonComponents(kmsKeyArn: string ): Map<string, ICommonComponentsProps> {
    let helmChartMap: Map<string, ICommonComponentsProps> = ObjToStrMap({
      'aws-ebs-csi-driver': {
        iamPolicyPath: ['../../assets/policy/aws-ebs-csi-driver-policy.json'],
        serviceAccounts: ['aws-ebs-csi-driver'],
        helm: {
          chartName: 'aws-ebs-csi-driver',
          chartVersion: '2.6.2',
          helmRepository: 'https://kubernetes-sigs.github.io/aws-ebs-csi-driver/',
          namespace: 'kube-system',
          helmValues: {
            node: {
              tolerateAllTaints: true,
            },
            controller: {
              serviceAccount: {
                create: false,
                name: 'aws-ebs-csi-driver',
              },
            },
            storageClasses: [
              {
                kind: 'StorageClass',
                apiVersion: 'storage.k8s.io/v1',
                metadata: {
                  name: 'gp3',
                  annotations: {
                    'storageclass.kubernetes.io/is-default-class': 'true',
                  },
                },
                allowVolumeExpansion: true,
                provisioner: 'ebs.csi.aws.com',
                volumeBindingMode: 'WaitForFirstConsumer',
                parameters: {
                  type: 'gp3',
                  encrypted: 'true',
                  kmsKeyId: kmsKeyArn,
                },
              },
              {
                kind: 'StorageClass',
                apiVersion: 'storage.k8s.io/v1',
                metadata: {
                  name: 'gp2-encrypt',
                  annotations: {
                    'storageclass.kubernetes.io/is-default-class': 'false',
                  },
                },
                allowVolumeExpansion: true,
                provisioner: 'ebs.csi.aws.com',
                volumeBindingMode: 'WaitForFirstConsumer',
                parameters: {
                  type: 'gp2',
                  encrypted: 'true',
                  kmsKeyId: kmsKeyArn,
                },
              },
            ],
          },
        },
      },
      'aws-efs-csi-driver': {
        iamPolicyPath: ['../../assets/policy/aws-efs-csi-driver-policy.json'],
        serviceAccounts: ['efs-csi-controller-sa', 'efs-csi-node-sa'],
        helm: {
          chartName: 'aws-efs-csi-driver',
          chartVersion: '2.2.0',
          helmRepository: 'https://kubernetes-sigs.github.io/aws-efs-csi-driver/',
          namespace: 'kube-system',
        },
      },
      'node-problem-detector': {
        helm: {
          chartName: 'node-problem-detector',
          chartVersion: '2.0.9',
          localHelmChart: '../../assets/helmCharts/node-problem-detector',
          namespace: 'kube-system',
          helmValues: {
            serviceAccount: {
              create: true,
            },
          },
        },
      },
    });
    return helmChartMap;
  }
}
