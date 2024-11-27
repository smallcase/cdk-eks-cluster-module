import * as cdk from 'aws-cdk-lib';
import * as eks from 'aws-cdk-lib/aws-eks';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
export interface CoreAddonProps extends CoreAddonInternalProps {
  readonly addonVersion?: string;
  readonly configurationValues?: string;
}

interface CoreAddonInternalProps {
  readonly cluster: eks.Cluster;
  readonly addonVersion?: string;
  readonly resolveConflicts?: boolean;
  readonly namespace?: string;
}


interface CoreAddonAbstractProps {
  readonly cluster: eks.Cluster;
  readonly addonName: string;
  readonly addonVersion?: string;
  readonly configurationValues?: string;
  readonly resolveConflicts?: boolean;
  readonly serviceAccountName?: string;
  readonly awsManagedPolicyName?: string;
  readonly namespace?: string;
}

abstract class CoreAddonAbstract extends eks.CfnAddon {
  protected constructor(
    scope: Construct,
    id: string,
    props: CoreAddonAbstractProps,
  ) {
    const cluster = props.cluster;
    const namespace = props.namespace || 'kube-system';
    super(scope, id, {
      clusterName: cluster.clusterName,
      addonName: props.addonName,
      addonVersion: props.addonVersion,
      configurationValues: props.configurationValues,
      resolveConflicts: props.resolveConflicts ? 'OVERWRITE' : 'NONE',
    });
    if (props.serviceAccountName) {
      const serviceAccountRole = new iam.Role(this, 'ServiceAccountRole', {
        assumedBy: new iam.OpenIdConnectPrincipal(
          cluster.openIdConnectProvider,
        ).withConditions({
          StringEquals: new cdk.CfnJson(
            this,
            'ServiceAccountRolePrincipalCondition',
            {
              value: {
                [`${cluster.clusterOpenIdConnectIssuer}:aud`]:
                  'sts.amazonaws.com',
                [`${cluster.openIdConnectProvider.openIdConnectProviderIssuer}:sub`]: `system:serviceaccount:${namespace}:${props.serviceAccountName}`,
              },
            },
          ),
        }),
      });
      if (props.awsManagedPolicyName) {
        serviceAccountRole.addManagedPolicy(
          iam.ManagedPolicy.fromAwsManagedPolicyName(props.awsManagedPolicyName),
        );
      }
      this.serviceAccountRoleArn = serviceAccountRole.roleArn;
    }
  }
}
export class CoreDnsAddon extends CoreAddonAbstract {
  /**
   *
   */
  constructor(scope: Construct, id: string, props: CoreAddonProps) {
    super(scope, id, {
      ...props,
      addonName: 'coredns',
      serviceAccountName: 'coredns',
    });
  }
}

export class KubeProxyAddon extends CoreAddonAbstract {
  /**
   *
   */
  constructor(scope: Construct, id: string, props: CoreAddonProps) {
    super(scope, id, {
      ...props,
      addonName: 'kube-proxy',
      serviceAccountName: 'kube-proxy',
    });
  }
}