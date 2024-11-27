import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as eks from 'aws-cdk-lib/aws-eks';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as mod from '../src/index';

describe('Test', () => {
  test('synthesizes the way we expect', () => {
    const app = new cdk.App();
    const test = new cdk.Stack(app, 'TopicsStack');

    // Optionally create a KMS key
    const useKms = true; // Set to false to skip custom KMS creation
    const key = useKms
      ? new kms.Key(test, 'EKS-KMS', {
          enabled: true,
          alias: 'EKS-KMS',
        })
      : new kms.Key(test, 'Default-EKS-KMS', {
          enabled: true,
          alias: 'Default-EKS-KMS',
        }); // Create a default KMS key if not provided

    if (useKms) {
      key.addToResourcePolicy(
        new iam.PolicyStatement({
          sid: 'encrypt root volumes of nodeGroup using kms',
          actions: [
            'kms:Encrypt',
            'kms:Decrypt',
            'kms:ReEncrypt*',
            'kms:GenerateDataKey*',
            'kms:CreateGrant',
            'kms:DescribeKey',
          ],
          resources: ['*'],
          principals: [new iam.AnyPrincipal()],
          conditions: {
            StringEquals: {
              'kms:CallerAccount': '<YOUR-AWS-ID>',
              'kms:ViaService': 'ec2.<REGION>.amazonaws.com',
            },
          },
        })
      );
    }

    const vpc = new ec2.Vpc(test, 'VPC');

    const securityGroup = new ec2.SecurityGroup(test, 'EKS-WORKER-SG', {
      vpc: vpc,
      description: 'Kubernetes Worker SecurityGroup',
    });

    const testNodeTemplate = new ec2.LaunchTemplate(test, 'testNodeTemplate', {
      instanceType: new ec2.InstanceType('m5a.large'),
      blockDevices: [
        {
          deviceName: '/dev/xvda',
          volume: ec2.BlockDeviceVolume.ebs(40, {
            deleteOnTermination: true,
            encrypted: true, // Always true because KMS key is always present
            volumeType: ec2.EbsDeviceVolumeType.GP3,
            kmsKey: key,
          }),
          mappingEnabled: true,
        },
      ],
    });

    new mod.EKSCluster(test, 'EKS-CLUSTER', {
      availabilityZones: ['ap-south-1a'],
      clusterVPC: vpc,
      kmsKey: key, // Always pass a valid KMS key
      region: 'ap-south-1',
      workerSecurityGroup: securityGroup,
      addonProps: {
        vpnCniAddonVersion: mod.VpcCniAddonVersion.V1_11_0,
      },
      clusterConfig: {
        tags: {},
        debugLogs: true,
        clusterName: 'EKS-CLUSTER',
        clusterVersion: eks.KubernetesVersion.V1_20,
        defaultCommonComponents: {
          clusterAutoscaler: {
            namespace: 'kube-system',
          },
          externalDns: {
            namespace: 'kube-system',
          },
        },
        namespaces: {
          'internal-system': {
            annotations: {
              owner: 'infra-team',
            },
            labels: {
              team: 'infra',
              'used-by': 'infra',
            },
          },
        },
        addAutoscalerIam: true,
        albControllerVersion: eks.AlbControllerVersion.V2_2_4,
        defaultCapacity: 3,
        fargateProfiles: [
          {
            namespaces: ['workflows'],
            profileName: 'workflows',
          },
        ],
        subnets: {
          privateSubnetGroupName: 'Private',
        },
        nodeGroups: [
          {
            name: 'test-node',
            instanceTypes: [],
            minSize: 3,
            maxSize: 6,
            launchTemplateSpec: {
              version: testNodeTemplate.versionNumber,
              id: testNodeTemplate.launchTemplateId!,
            },
            subnetGroupName: 'Private',
            labels: {
              role: 'test-eks-cluster',
            },
            taints: {
              role: 'test-eks-cluster',
            },
            tags: {
              'k8s.io/cluster-autoscaler/enabled': 'TRUE',
              'k8s.io/cluster-autoscaler/EKS-CLUSTER': 'owned',
            },
          },
        ],
        commonComponents: {},
        teamMembers: [],
        teamExistingRolePermission: {}, // optional
      },
    });
  });
});
