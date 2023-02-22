import { CfnOutput, Tags } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as eks from 'aws-cdk-lib/aws-eks';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { CommonHelmCharts, StandardHelmProps } from './common-helm-charts';
import {
  VpcCniAddonVersion,
  VpcEniAddon,
} from '../constructs/eks-managed-addon';
import {
  GetFargateProfilesNamespace,
  GetKubernetesLabels,
  ObjToStrMap,
} from '../utils/common';

export interface FargateProfile {
  readonly profileName: string;
  readonly namespaces: string[];
  readonly labels?: InternalMap;
  readonly subnetSelection?: ec2.SubnetSelection;
  readonly podExecutionRole?: iam.Role;
}

export interface NamespaceSpec {
  readonly annotations?: InternalMap;
  readonly labels?: InternalMap;
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
  readonly kubectlLayer?: lambda.ILayerVersion;
  readonly subnets: InternalMap;
  readonly publicAllowAccess?: string[];
  readonly namespaces?: Record<string, NamespaceSpec>;
  readonly teamMembers: string[];
  readonly albControllerVersion?: eks.AlbControllerVersion;
  readonly teamExistingRolePermission?: Record<string, string>;
  readonly tags: InternalMap;
  readonly nodeGroups: NodeGroupConfig[];
  readonly fargateProfiles?: FargateProfile[];
  readonly argoCD?: ArgoCD;
  readonly commonComponents?: Record<string, ICommonComponentsProps>;
  readonly defaultCommonComponents?: DefaultCommonComponents;
  readonly debugLogs?: boolean;
}

export interface DefaultCommonComponents {
  readonly externalDns?: DefaultCommonComponentsProps;
  readonly clusterAutoscaler?: DefaultCommonComponentsProps;
  readonly awsEfsCsiDriver?: DefaultCommonComponentsProps;
  readonly awsEbsCsiDriver?: DefaultCommonComponentsProps;
}

export interface DefaultCommonComponentsProps {
  readonly namespace?: string;
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
  readonly configurationValues?: string;
}

export class EKSCluster extends Construct {
  public readonly cluster: eks.Cluster;
  private props: EKSClusterProps;
  readonly additionalNodegroups: eks.Nodegroup[] = [];
  readonly additionalFargateProfile: eks.FargateProfile[] = [];
  readonly fargateProfiles: FargateProfile[] = [];
  constructor(scope: Construct, id: string, props: EKSClusterProps) {
    super(scope, id);
    this.props = {
      ...props,
    };
    const commonCompoents: Map<string, ICommonComponentsProps> = this.basicCommonComponents(
      props.kmsKey.keyArn,
      props.clusterConfig.clusterName,
      props.clusterConfig.defaultCommonComponents,
    );
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
      kubectlLayer: props.clusterConfig.kubectlLayer,
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


    var createdNamespaces: eks.KubernetesManifest[] = [];

    if (props.clusterConfig.namespaces != undefined) {
      let namespaces: Map<string, NamespaceSpec> = ObjToStrMap(props.clusterConfig.namespaces);
      namespaces.forEach((namespaceSpec, name) => {
        var ns = new eks.KubernetesManifest(this, `${name}-namespaces`, {
          overwrite: true,
          cluster: this.cluster,
          manifest: [
            {
              kind: 'Namespace',
              apiVersion: 'v1',
              metadata: {
                name: name,
                labels: namespaceSpec.labels ?? {},
                annotations: namespaceSpec.annotations ?? {},
              },

            },
          ],
        });
        createdNamespaces.push(ns);
      });

    }
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

    // fargate Profile
    props.clusterConfig.fargateProfiles?.forEach((fargate) => {
      this.fargateProfiles.push(fargate);
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
    awsAuthExistingRolePermission.forEach((eksPermission, role) => {
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
    this.fargateProfiles.forEach((item) => {
      let fargateProfile: FargateProfile = JSON.parse(JSON.stringify(item));
      const fargate = this.cluster.addFargateProfile(fargateProfile.profileName, {
        fargateProfileName: fargateProfile.profileName,
        selectors: GetFargateProfilesNamespace(
          fargateProfile.namespaces,
          fargateProfile.labels,
        ),
        subnetSelection: fargateProfile.subnetSelection,
        vpc: fargateProfile.subnetSelection ? props.clusterVPC : undefined,
        podExecutionRole: fargateProfile.podExecutionRole,
      });
      fargate.podExecutionRole.addManagedPolicy(
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

    if (props.clusterConfig.commonComponents != undefined) {
      let additionCommonCompoents: Map<string, ICommonComponentsProps> = ObjToStrMap(props.clusterConfig.commonComponents);
      additionCommonCompoents.forEach((common, key) => {
        if (commonCompoents.has(key) != true) {
          new CommonHelmCharts(this, `${common.helm.chartReleaseName ?? common.helm.chartName}-common`, {
            cluster: this.cluster,
            helmProps: common.helm,
            iamPolicyPath: common.iamPolicyPath,
            serviceAccounts: common.serviceAccounts,
            dependentNamespaces: createdNamespaces,
            logCharts: props.clusterConfig.debugLogs,
          });
        }
      });
      commonCompoents.forEach((common, key) => {
        if (additionCommonCompoents.has(key)) {
          new CommonHelmCharts(this, `${additionCommonCompoents.get(key)?.helm.chartName ?? common.helm.chartName}-common`, {
            cluster: this.cluster,
            helmProps: additionCommonCompoents.get(key)?.helm ?? common.helm,
            dependentNamespaces: createdNamespaces,
            iamPolicyPath: additionCommonCompoents.get(key)?.iamPolicyPath ?? common.iamPolicyPath,
            serviceAccounts: additionCommonCompoents.get(key)?.serviceAccounts ?? common.serviceAccounts,
            logCharts: props.clusterConfig.debugLogs,
          });
        } else {
          new CommonHelmCharts(this, `${common.helm.chartReleaseName ?? common.helm.chartName}-common`, {
            cluster: this.cluster,
            helmProps: common.helm,
            iamPolicyPath: common.iamPolicyPath,
            serviceAccounts: common.serviceAccounts,
            dependentNamespaces: createdNamespaces,
            logCharts: props.clusterConfig.debugLogs,
          });
        }
      });
    } else {
      commonCompoents.forEach((common) => {
        new CommonHelmCharts(this, `${common.helm.chartReleaseName ?? common.helm.chartName}-common`, {
          cluster: this.cluster,
          helmProps: common.helm,
          iamPolicyPath: common.iamPolicyPath,
          serviceAccounts: common.serviceAccounts,
          dependentNamespaces: createdNamespaces,
          logCharts: props.clusterConfig.debugLogs,
        });
      });
    }
  }

  private addManagedVpcCniAddon() {
    const addonVersionConfig = this.props.addonProps?.vpnCniAddonVersion && this.props.addonProps?.configurationValues
      ? { addonVersion: this.props.addonProps.vpnCniAddonVersion, configurationValues: this.props.addonProps?.configurationValues }
      : {};
    const vpcCniAddon = new VpcEniAddon(this, 'VpcCniAddon', {
      cluster: this.cluster,
      ...addonVersionConfig,
      resolveConflicts: true,
    });
    this.cluster.defaultNodegroup?.node.addDependency(vpcCniAddon);
    this.additionalNodegroups.forEach((nodeGroup) => {
      nodeGroup.node.addDependency(vpcCniAddon);
    });
  }

  public addServiceAccountWithIamRole(serviceAccountName: string, serviceAccountNamespace: string, policy: any) {
    const sa = new eks.ServiceAccount(this, serviceAccountName, {
      cluster: this.cluster,
      name: serviceAccountName,
      namespace: serviceAccountNamespace,
    });


    policy.forEach((item: any) => {
      sa.addToPrincipalPolicy(iam.PolicyStatement.fromJson(item));
    });

  }

  private basicCommonComponents(kmsKeyArn: string, clusterName: string, props?: DefaultCommonComponents): Map<string, ICommonComponentsProps> {
    let helmChartMap: Map<string, ICommonComponentsProps> = ObjToStrMap({
      'aws-ebs-csi-driver': {
        iamPolicyPath: [`${__dirname}/../../assets/policy/aws-ebs-csi-driver-policy.json`],
        serviceAccounts: ['aws-ebs-csi-driver'],
        helm: {
          chartName: 'aws-ebs-csi-driver',
          chartVersion: '2.16.0',
          helmRepository: 'https://kubernetes-sigs.github.io/aws-ebs-csi-driver/',
          namespace: props?.awsEbsCsiDriver?.namespace ?? 'kube-system',
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
        iamPolicyPath: [`${__dirname}/../../assets/policy/aws-efs-csi-driver-policy.json`],
        serviceAccounts: ['efs-csi-controller-sa', 'efs-csi-node-sa'],
        helm: {
          chartName: 'aws-efs-csi-driver',
          chartVersion: '2.3.6',
          helmRepository: 'https://kubernetes-sigs.github.io/aws-efs-csi-driver/',
          namespace: props?.awsEfsCsiDriver?.namespace ?? 'kube-system',
          helmValues: {
            controller: {
              serviceAccount: {
                create: false,
                name: 'efs-csi-controller-sa',
              },
            },
            node: {
              serviceAccount: {
                create: false,
                name: 'efs-csi-node-sa',
              },
            },
          },
        },
      },
      'node-problem-detector': {
        helm: {
          chartName: 'node-problem-detector',
          chartVersion: '2.0.9',
          localHelmChart: `${__dirname}/../../assets/helmCharts/node-problem-detector`,
          namespace: 'kube-system',
          helmValues: {
            serviceAccount: {
              create: true,
            },
          },
        },
      },
      'private-external-dns': {
        iamPolicyPath: [`${__dirname}/../../assets/policy/aws-external-dns-policy.json`],
        serviceAccounts: ['private-external-dns'],
        helm: {
          chartName: 'external-dns',
          chartReleaseName: 'private-external-dns',
          chartVersion: '1.12.0',
          helmRepository: 'https://kubernetes-sigs.github.io/external-dns/',
          namespace: props?.externalDns?.namespace ?? 'internal-system',
          helmValues: {
            interval: '5m',
            triggerLoopOnEvent: true,
            extraArgs: [
              '--aws-zone-type=private',
              '--annotation-filter=external-dns.alpha.kubernetes.io/dns-type in (private)',
              `--txt-owner-id=${clusterName}`,
              '--aws-zones-cache-duration=1h',
              '--aws-batch-change-size=4000',
              '--aws-batch-change-interval=10s',
            ],
            serviceAccount: {
              create: false,
              name: 'private-external-dns',
            },
          },
        },
      },
      'public-external-dns': {
        iamPolicyPath: [`${__dirname}/../../assets/policy/aws-external-dns-policy.json`],
        serviceAccounts: ['public-external-dns'],
        helm: {
          chartName: 'external-dns',
          chartReleaseName: 'public-external-dns',
          chartVersion: '1.12.0',
          helmRepository: 'https://kubernetes-sigs.github.io/external-dns/',
          namespace: props?.externalDns?.namespace ?? 'internal-system',
          helmValues: {
            interval: '5m',
            triggerLoopOnEvent: true,
            extraArgs: [
              '--annotation-filter=external-dns.alpha.kubernetes.io/dns-type in (public)',
              `--txt-owner-id=${clusterName}`,
              '--aws-zones-cache-duration=1h',
              '--aws-batch-change-size=4000',
              '--aws-batch-change-interval=10s',
            ],
            serviceAccount: {
              create: false,
              name: 'public-external-dns',
            },
          },
        },
      },
      'cluster-autoscaler': {
        iamPolicyPath: [`${__dirname}/../../assets/policy/aws-cluster-autoscaler-policy.json`],
        serviceAccounts: ['cluster-autoscaler'],
        helm: {
          chartName: 'cluster-autoscaler',
          chartVersion: '9.21.1',
          helmRepository: 'https://kubernetes.github.io/autoscaler',
          namespace: props?.clusterAutoscaler?.namespace ?? 'internal-system',
          helmValues: {
            awsRegion: 'ap-south-1',
            autoDiscovery: {
              clusterName: clusterName,
            },
            rbac: {
              serviceAccount: {
                create: false,
                name: 'cluster-autoscaler',
              },
            },
          },
        },
      },
    });
    return helmChartMap;
  }
}
