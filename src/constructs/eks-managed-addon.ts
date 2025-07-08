import * as cdk from 'aws-cdk-lib';
import * as eks from 'aws-cdk-lib/aws-eks';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
export interface VpcCniAddonProps extends EksManagedAddonProps {
  readonly addonVersion?: VpcCniAddonVersion;
  readonly configurationValues?: string;
}

interface EksManagedAddonProps {
  readonly cluster: eks.Cluster;
  readonly addonVersion?: AddonVersion;
  readonly resolveConflicts?: boolean;
  readonly namespace?: string;
}

abstract class AddonVersion {
  // @ts-ignore
  static of(version: string) {
    throw new Error('Implement static method of(version: string)');
  }
  constructor(public readonly version: string) { }
}

export class VpcCniAddonVersion extends AddonVersion {
  /**
   * vpc-cni version 1.6.3
   */
  public static readonly V1_6_3 = VpcCniAddonVersion.of('v1.6.3-eksbuild.1');

  /**
   * vpc-cni version 1.7.5
   */
  public static readonly V1_7_5 = VpcCniAddonVersion.of('v1.7.5-eksbuild.2');

  /**
   * vpc-cni version 1.7.6
   */
  public static readonly V1_7_6 = VpcCniAddonVersion.of('v1.7.6-eksbuild.2');

  /**
   * vpc-cni version 1.7.9
   */
  public static readonly V1_7_9 = VpcCniAddonVersion.of('v1.7.9-eksbuild.2');

  /**
   * vpc-cni version 1.7.10
   */
  public static readonly V1_7_10 = VpcCniAddonVersion.of('v1.7.10-eksbuild.2');

  /**
   * vpc-cni version 1.8.0
   */
  public static readonly V1_8_0 = VpcCniAddonVersion.of('v1.8.0-eksbuild.1');

  /**
   * vpc-cni version 1.9.0
   */
  public static readonly V1_9_0 = VpcCniAddonVersion.of('v1.9.0-eksbuild.1');

  /**
   * vpc-cni version 1.9.1
   */
  public static readonly V1_9_1 = VpcCniAddonVersion.of('v1.9.1-eksbuild.1');

  /**
   * vpc-cni version 1.9.3
   */
  public static readonly V1_9_3 = VpcCniAddonVersion.of('v1.9.3-eksbuild.1');

  /**
   * vpc-cni version 1.10.1
   */
  public static readonly V1_10_1 = VpcCniAddonVersion.of('v1.10.1-eksbuild.1');

  /**
   * vpc-cni version 1.10.2
   */
  public static readonly V1_10_2 = VpcCniAddonVersion.of('v1.10.2-eksbuild.1');

  /**
   * vpc-cni version 1.10.3
   */
  public static readonly V1_10_3 = VpcCniAddonVersion.of('v1.10.3-eksbuild.1');

  /**
   * vpc-cni version 1.11.0
   */
  public static readonly V1_11_0 = VpcCniAddonVersion.of('v1.11.0-eksbuild.1');

  /**
   * vpc-cni version 1.11.2
   */
  public static readonly V1_11_2 = VpcCniAddonVersion.of('v1.11.2-eksbuild.3');


  /**
  * vpc-cni version 1.11.3
  */
  public static readonly V1_11_3 = VpcCniAddonVersion.of('v1.11.3-eksbuild.3');

  /**
  * vpc-cni version 1.11.4
  */
  public static readonly V1_11_4 = VpcCniAddonVersion.of('v1.11.4-eksbuild.3');

  /**
  * vpc-cni version 1.12.0
  */
  public static readonly V1_12_0 = VpcCniAddonVersion.of('v1.12.0-eksbuild.3');

  /**
 * vpc-cni version 1.12.1
 */
  public static readonly V1_12_1 = VpcCniAddonVersion.of('v1.12.1-eksbuild.1');

  /**
* vpc-cni version 1.12.2
*/
  public static readonly V1_12_2 = VpcCniAddonVersion.of('v1.12.2-eksbuild.1');

  /**
* vpc-cni version 1.12.5
*/
  public static readonly V1_12_5 = VpcCniAddonVersion.of('v1.12.5-eksbuild.1');

  /**
 * vpc-cni version 1.12.5.2
 */
  public static readonly V1_12_5_2 = VpcCniAddonVersion.of('v1.12.5-eksbuild.2');

  /**
 * vpc-cni version 1.17.1.1
 */
  public static readonly V1_17_1_1 = VpcCniAddonVersion.of('v1.17.1-eksbuild.1');

  /**
 * vpc-cni version 1.18.6.1
 */
  public static readonly V1_18_6_1 = VpcCniAddonVersion.of('v1.18.6-eksbuild.1');

  /**
 * vpc-cni version 1.19.0.1
 */
  public static readonly V1_19_0_1 = VpcCniAddonVersion.of('v1.19.0-eksbuild.1');

  /**
 * vpc-cni version 1.19.2.1
 */
  public static readonly V1_19_2_1 = VpcCniAddonVersion.of('v1.19.2-eksbuild.1');

  /**
 * vpc-cni version 1.19.2.5
 */
  public static readonly V1_19_2_5 = VpcCniAddonVersion.of('v1.19.2-eksbuild.5');
  /**
 * vpc-cni version 1.19.3.1
 */
  public static readonly V1_19_3_1 = VpcCniAddonVersion.of('v1.19.3-eksbuild.1');

  /**
 * vpc-cni version 1.19.5
 */
  public static readonly V1_19_5_3 = VpcCniAddonVersion.of('v1.19.5-eksbuild.3');

  /**
   * Custom add-on version
   * @param version custom add-on version
   */
  public static of(version: string) {
    return new VpcCniAddonVersion(version);
  }
}

interface EksManagedAddonAbstractProps {
  readonly cluster: eks.Cluster;
  readonly addonName: string;
  readonly addonVersion?: AddonVersion;
  readonly configurationValues?: string;
  readonly resolveConflicts?: boolean;
  readonly serviceAccountName?: string;
  readonly awsManagedPolicyName?: string;
  readonly namespace?: string;
}

abstract class EksManagedAddonAbstract extends eks.CfnAddon {
  protected constructor(
    scope: Construct,
    id: string,
    props: EksManagedAddonAbstractProps,
  ) {
    const cluster = props.cluster;
    const namespace = props.namespace || 'kube-system';
    super(scope, id, {
      clusterName: cluster.clusterName,
      addonName: props.addonName,
      addonVersion: props.addonVersion?.version,
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
export class VpcEniAddon extends EksManagedAddonAbstract {
  /**
   *
   */
  constructor(scope: Construct, id: string, props: VpcCniAddonProps) {
    super(scope, id, {
      ...props,
      addonName: 'vpc-cni',
      serviceAccountName: 'aws-node',
      awsManagedPolicyName: 'AmazonEKS_CNI_Policy',
    });
  }
}
