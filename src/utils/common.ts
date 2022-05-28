import { Selector } from 'aws-cdk-lib/aws-eks';
import * as eks from 'aws-cdk-lib/aws-eks';
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
} from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { InternalMap } from '../constructs/eks-cluster';
export interface NodeLabels {
  [name: string]: string;
}

export function ObjToStrMap(obj: any) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}
export function GetKubernetesLabels(labels: Map<string, string>): NodeLabels {
  let label: NodeLabels = {};
  if (labels.size != 0) {
    labels.forEach((value, key) => {
      label[key] = value;
    });
  }
  // labels.forEach((value, key) => {
  //   label[key] = value;
  // });
  return label;
}

export function GetFargateProfilesNamespace(
  namespaces: string[],
  labels?: InternalMap,
): Selector[] {
  let fargateSelectors: Selector[] = [];
  namespaces.forEach((ns) => {
    let fargateSelector: Selector = {
      namespace: ns,
      labels: labels ? GetKubernetesLabels(ObjToStrMap(labels)) : undefined,
    };
    fargateSelectors.push(fargateSelector);
  });
  // namespaces.forEach((ns) => {
  //   console.log(`namespace ${ns}`);
  //   let fargateSelector: Selector = {
  //     namespace: ns,
  //     labels: GetKubernetesLabels(labels),
  //   };
  //   fargateSelectors.push(fargateSelector);
  // });
  return fargateSelectors;
}

export function setupClusterLogging(
  scope: Construct,
  region: string,
  cluster: eks.Cluster,
): AwsCustomResource {
  return new AwsCustomResource(scope, 'ClusterLogsEnabler', {
    policy: AwsCustomResourcePolicy.fromSdkCalls({
      resources: [`${cluster.clusterArn}/update-config`],
    }),
    onCreate: {
      physicalResourceId: { id: `${cluster.clusterArn}/LogsEnabler` },
      service: 'EKS',
      action: 'updateClusterConfig',
      region: region,
      parameters: {
        name: cluster.clusterName,
        logging: {
          clusterLogging: [
            {
              enabled: true,
              types: [
                'api',
                'audit',
                'authenticator',
                'controllerManager',
                'scheduler',
              ],
            },
          ],
        },
      },
    },
    onDelete: {
      physicalResourceId: { id: `${cluster.clusterArn}/LogsEnabler` },
      service: 'EKS',
      action: 'updateClusterConfig',
      region: region,
      parameters: {
        name: cluster.clusterName,
        logging: {
          clusterLogging: [
            {
              enabled: false,
              types: [
                'api',
                'audit',
                'authenticator',
                'controllerManager',
                'scheduler',
              ],
            },
          ],
        },
      },
    },
  });
}
