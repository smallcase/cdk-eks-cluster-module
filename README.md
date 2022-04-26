# cdk-eks-cluster-module
cdk-eks-cluster-module  is a [CDK](<(github.com/aws-cdk/cdk)>) that helps you configure complete EKS clusters that are fully bootstrapped with the operational software that is needed to deploy and operate workloads. You can describe the configuration for the desired state of your EKS cluster, such as the control plane, worker nodes, and Kubernetes add-ons, as an IaC 


## :sparkles: Features

- :white_check_mark: AWS EKS Cluster Addons
- :white_check_mark: Support for Multiple NodeGroup with label and taits
- :white_check_mark: Support for Multiple fargate profile with label and namespace
- :white_check_mark: AWS EKS Identity Provider Configuration
- :white_check_mark: Support for custom AMI, custom launch template, and custom user data including custom user data template
- :white_check_mark: Ingress management with the [AWS Load Balancer Controller](https://github.com/kubernetes-sigs/aws-load-balancer-controller)
- :white_check_mark: commonComponents interface allow to install custom repo/local helm chart
- :white_check_mark: install aws-ebs-csi-driver,aws-efs-csi-driver,node-problem-detector helm chart and created storageclass(gp2/gp3) with encryption

## :clapper: Quick Start

The quick start shows you how to create an **AWS-EKS** using this module.

### Prerequisites

- A working [`aws`](https://aws.amazon.com/cli/) CLI installation with access to an account and administrator privileges
- You'll need a recent [NodeJS](https://nodejs.org) installation
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) to interact with your fresh cluster


To get going you'll need a CDK project. For details please refer to the [detailed guide for CDK](https://docs.aws.amazon.com/cdk/latest/guide/hello_world.html).

Create an empty directory on your system.

```bash
mkdir aws-quick-start-eks && cd aws-quick-start-eks
```

Bootstrap your CDK project, we will use TypeScript, but you can switch to any other supported language.

```bash
npx cdk init sample-eks  --language typescript
npx cdk bootstrap 
```

Install using NPM:
```
npm install @smallcase/cdk-eks-cluster-module
```
Using yarn
```
yarn add @smallcase/cdk-eks-cluster-module
```
Using eks cluster can be deployed using the following sample code snippet:
```typescript
import {
  EKSCluster,
  VpcCniAddonVersion,
} from '@smallcase/cdk-eks-cluster-module';

const key = new kms.Key(this, 'EKS-KMS', {
      enabled: true,
      alias: 'EKS-KMS',
    });
key.addToResourcePolicy(new iam.PolicyStatement({
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
    }));

  const securityGroup = new ec2.SecurityGroup(
      this,
      'EKS-WORKER-SG',
      {
        vpc: vpc,
        description: 'Kubernetes Worker SecurityGroup',
      },
    );

  const testNodeTemplete = new ec2.LaunchTemplate(this, 'testNodeTemplete', {
      instanceType: new ec2.InstanceType('m5a.large'),
      blockDevices: [
        {
          deviceName: '/dev/xvda',
          volume: ec2.BlockDeviceVolume.ebs(40,
            {
              deleteOnTermination: true,
              encrypted: true,
              volumeType: ec2.EbsDeviceVolumeType.GP3,
              kmsKey: key,
            },
          ),
          mappingEnabled: true,
        },
      ],
    });
let ekscluster = new EKSCluster(this, 'EKS-CLUSTER', {
      availabilityZones: Stack.of(this).availabilityZones,
      clusterVPC: vpc,
      kmsKey: key,
      region: Stack.of(this).region,
      workerSecurityGroup: securityGroup,
      addonProps: {
        vpnCniAddonVersion: VpcCniAddonVersion.V1_11_0,
      },
      clusterConfig: {
        clusterName: 'EKS-CLUSTER',
        clusterVersion: eks.KubernetesVersion.V1_22,
        // it will create cluster autoscaler service account with iam role
        addAutoscalerIam: true,
        albControllerVersion: eks.AlbControllerVersion.V2_2_4,
        defaultCapacity: 3,
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
              version: testNodeTemplete.versionNumber,
              id: testNodeTemplete.launchTemplateId!,
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
              'k8s.io/cluster-autoscaler/EKS-CLUSTER':
                'owned',
            },
          },
        ]
        commonComponents: {
          'aws-efs-csi-driver': {
            iamPolicyPath: ['../../assets/policy/aws-efs-csi-driver-policy.json'],
            // above mention iam policy will be use this service account
            serviceAccounts: ['efs-csi-controller-sa', 'efs-csi-node-sa'],
            helm: {
              chartName: 'aws-efs-csi-driver',
              chartVersion: '2.2.0',
              helmRepository: 'https://kubernetes-sigs.github.io/aws-efs-csi-driver/',
              namespace: 'kube-system',
            },
          },
        },
        teamMembers: [
          "your-aws-user",
        ],
        teamExistingRolePermission: { //optional
          '<YOUR_ROLE_ARN>': 'system:masters',
        },
      }
  })
```

## [API.md](./API.md)