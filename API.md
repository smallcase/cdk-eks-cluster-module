# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CommonHelmCharts <a name="@smallcase/cdk-eks-cluster-module.CommonHelmCharts"></a>

#### Initializers <a name="@smallcase/cdk-eks-cluster-module.CommonHelmCharts.Initializer"></a>

```typescript
import { CommonHelmCharts } from '@smallcase/cdk-eks-cluster-module'

new CommonHelmCharts(scope: Construct, id: string, props: CommonHelmChartsProps)
```

##### `scope`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.CommonHelmCharts.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.CommonHelmCharts.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.CommonHelmCharts.parameter.props"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps`](#@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps)

---





### CoreDnsAddon <a name="@smallcase/cdk-eks-cluster-module.CoreDnsAddon"></a>

#### Initializers <a name="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.Initializer"></a>

```typescript
import { CoreDnsAddon } from '@smallcase/cdk-eks-cluster-module'

new CoreDnsAddon(scope: Construct, id: string, props: CoreAddonProps)
```

##### `scope`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.parameter.props"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.CoreAddonProps`](#@smallcase/cdk-eks-cluster-module.CoreAddonProps)

---





### EKSCluster <a name="@smallcase/cdk-eks-cluster-module.EKSCluster"></a>

#### Initializers <a name="@smallcase/cdk-eks-cluster-module.EKSCluster.Initializer"></a>

```typescript
import { EKSCluster } from '@smallcase/cdk-eks-cluster-module'

new EKSCluster(scope: Construct, id: string, props: EKSClusterProps)
```

##### `scope`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSCluster.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSCluster.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSCluster.parameter.props"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.EKSClusterProps`](#@smallcase/cdk-eks-cluster-module.EKSClusterProps)

---

#### Methods <a name="Methods"></a>

##### `addServiceAccountWithIamRole` <a name="@smallcase/cdk-eks-cluster-module.EKSCluster.addServiceAccountWithIamRole"></a>

```typescript
public addServiceAccountWithIamRole(serviceAccountName: string, serviceAccountNamespace: string, policy: any)
```

###### `serviceAccountName`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSCluster.parameter.serviceAccountName"></a>

- *Type:* `string`

---

###### `serviceAccountNamespace`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSCluster.parameter.serviceAccountNamespace"></a>

- *Type:* `string`

---

###### `policy`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSCluster.parameter.policy"></a>

- *Type:* `any`

---


#### Properties <a name="Properties"></a>

##### `additionalFargateProfile`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSCluster.property.additionalFargateProfile"></a>

```typescript
public readonly additionalFargateProfile: FargateProfile[];
```

- *Type:* [`aws-cdk-lib.aws_eks.FargateProfile`](#aws-cdk-lib.aws_eks.FargateProfile)[]

---

##### `additionalNodegroups`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSCluster.property.additionalNodegroups"></a>

```typescript
public readonly additionalNodegroups: Nodegroup[];
```

- *Type:* [`aws-cdk-lib.aws_eks.Nodegroup`](#aws-cdk-lib.aws_eks.Nodegroup)[]

---

##### `cluster`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSCluster.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* [`aws-cdk-lib.aws_eks.Cluster`](#aws-cdk-lib.aws_eks.Cluster)

---

##### `fargateProfiles`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSCluster.property.fargateProfiles"></a>

```typescript
public readonly fargateProfiles: FargateProfile[];
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.FargateProfile`](#@smallcase/cdk-eks-cluster-module.FargateProfile)[]

---


### KubeProxyAddon <a name="@smallcase/cdk-eks-cluster-module.KubeProxyAddon"></a>

#### Initializers <a name="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.Initializer"></a>

```typescript
import { KubeProxyAddon } from '@smallcase/cdk-eks-cluster-module'

new KubeProxyAddon(scope: Construct, id: string, props: CoreAddonProps)
```

##### `scope`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.parameter.props"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.CoreAddonProps`](#@smallcase/cdk-eks-cluster-module.CoreAddonProps)

---





### VpcEniAddon <a name="@smallcase/cdk-eks-cluster-module.VpcEniAddon"></a>

#### Initializers <a name="@smallcase/cdk-eks-cluster-module.VpcEniAddon.Initializer"></a>

```typescript
import { VpcEniAddon } from '@smallcase/cdk-eks-cluster-module'

new VpcEniAddon(scope: Construct, id: string, props: VpcCniAddonProps)
```

##### `scope`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.VpcEniAddon.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.VpcEniAddon.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.VpcEniAddon.parameter.props"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonProps`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonProps)

---





## Structs <a name="Structs"></a>

### AddonProps <a name="@smallcase/cdk-eks-cluster-module.AddonProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { AddonProps } from '@smallcase/cdk-eks-cluster-module'

const addonProps: AddonProps = { ... }
```

##### `configurationValues`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.AddonProps.property.configurationValues"></a>

```typescript
public readonly configurationValues: string;
```

- *Type:* `string`

---

##### `vpnCniAddonVersion`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.AddonProps.property.vpnCniAddonVersion"></a>

```typescript
public readonly vpnCniAddonVersion: VpcCniAddonVersion;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

---

### ArgoCD <a name="@smallcase/cdk-eks-cluster-module.ArgoCD"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ArgoCD } from '@smallcase/cdk-eks-cluster-module'

const argoCD: ArgoCD = { ... }
```

##### `assumeRoleArn`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.ArgoCD.property.assumeRoleArn"></a>

```typescript
public readonly assumeRoleArn: string;
```

- *Type:* `string`

---

##### `clusterRoleName`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.ArgoCD.property.clusterRoleName"></a>

```typescript
public readonly clusterRoleName: string;
```

- *Type:* `string`

---

### ClusterConfig <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { ClusterConfig } from '@smallcase/cdk-eks-cluster-module'

const clusterConfig: ClusterConfig = { ... }
```

##### `clusterName`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* `string`

---

##### `clusterVersion`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: KubernetesVersion;
```

- *Type:* [`aws-cdk-lib.aws_eks.KubernetesVersion`](#aws-cdk-lib.aws_eks.KubernetesVersion)

---

##### `defaultCapacity`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.defaultCapacity"></a>

```typescript
public readonly defaultCapacity: number;
```

- *Type:* `number`

---

##### `nodeGroups`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.nodeGroups"></a>

```typescript
public readonly nodeGroups: NodeGroupConfig[];
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.NodeGroupConfig`](#@smallcase/cdk-eks-cluster-module.NodeGroupConfig)[]

---

##### `subnets`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.subnets"></a>

```typescript
public readonly subnets: InternalMap;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.InternalMap`](#@smallcase/cdk-eks-cluster-module.InternalMap)

---

##### `tags`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.tags"></a>

```typescript
public readonly tags: InternalMap;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.InternalMap`](#@smallcase/cdk-eks-cluster-module.InternalMap)

---

##### `teamMembers`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.teamMembers"></a>

```typescript
public readonly teamMembers: string[];
```

- *Type:* `string`[]

---

##### `addAutoscalerIam`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.addAutoscalerIam"></a>

```typescript
public readonly addAutoscalerIam: boolean;
```

- *Type:* `boolean`

---

##### `albControllerVersion`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.albControllerVersion"></a>

```typescript
public readonly albControllerVersion: AlbControllerVersion;
```

- *Type:* [`aws-cdk-lib.aws_eks.AlbControllerVersion`](#aws-cdk-lib.aws_eks.AlbControllerVersion)

---

##### `argoCD`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.argoCD"></a>

```typescript
public readonly argoCD: ArgoCD;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.ArgoCD`](#@smallcase/cdk-eks-cluster-module.ArgoCD)

---

##### `commonComponents`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.commonComponents"></a>

```typescript
public readonly commonComponents: {[ key: string ]: ICommonComponentsProps};
```

- *Type:* {[ key: string ]: [`@smallcase/cdk-eks-cluster-module.ICommonComponentsProps`](#@smallcase/cdk-eks-cluster-module.ICommonComponentsProps)}

---

##### `debugLogs`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.debugLogs"></a>

```typescript
public readonly debugLogs: boolean;
```

- *Type:* `boolean`

---

##### `defaultCommonComponents`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.defaultCommonComponents"></a>

```typescript
public readonly defaultCommonComponents: DefaultCommonComponents;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.DefaultCommonComponents`](#@smallcase/cdk-eks-cluster-module.DefaultCommonComponents)

---

##### `deprecateClusterAutoScaler`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.deprecateClusterAutoScaler"></a>

```typescript
public readonly deprecateClusterAutoScaler: boolean;
```

- *Type:* `boolean`

---

##### `fargateProfiles`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.fargateProfiles"></a>

```typescript
public readonly fargateProfiles: FargateProfile[];
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.FargateProfile`](#@smallcase/cdk-eks-cluster-module.FargateProfile)[]

---

##### `kubectlLayer`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.kubectlLayer"></a>

```typescript
public readonly kubectlLayer: ILayerVersion;
```

- *Type:* [`aws-cdk-lib.aws_lambda.ILayerVersion`](#aws-cdk-lib.aws_lambda.ILayerVersion)

---

##### `namespaces`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.namespaces"></a>

```typescript
public readonly namespaces: {[ key: string ]: NamespaceSpec};
```

- *Type:* {[ key: string ]: [`@smallcase/cdk-eks-cluster-module.NamespaceSpec`](#@smallcase/cdk-eks-cluster-module.NamespaceSpec)}

---

##### `publicAllowAccess`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.publicAllowAccess"></a>

```typescript
public readonly publicAllowAccess: string[];
```

- *Type:* `string`[]

---

##### `teamExistingRolePermission`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.teamExistingRolePermission"></a>

```typescript
public readonly teamExistingRolePermission: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

### CommonHelmChartsProps <a name="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CommonHelmChartsProps } from '@smallcase/cdk-eks-cluster-module'

const commonHelmChartsProps: CommonHelmChartsProps = { ... }
```

##### `cluster`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* [`aws-cdk-lib.aws_eks.ICluster`](#aws-cdk-lib.aws_eks.ICluster)

---

##### `helmProps`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.helmProps"></a>

```typescript
public readonly helmProps: StandardHelmProps;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.StandardHelmProps`](#@smallcase/cdk-eks-cluster-module.StandardHelmProps)

---

##### `dependentNamespaces`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.dependentNamespaces"></a>

```typescript
public readonly dependentNamespaces: KubernetesManifest[];
```

- *Type:* [`aws-cdk-lib.aws_eks.KubernetesManifest`](#aws-cdk-lib.aws_eks.KubernetesManifest)[]

---

##### `iamPolicyPath`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.iamPolicyPath"></a>

```typescript
public readonly iamPolicyPath: string[];
```

- *Type:* `string`[]

---

##### `logCharts`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.logCharts"></a>

```typescript
public readonly logCharts: boolean;
```

- *Type:* `boolean`

---

##### `serviceAccounts`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.serviceAccounts"></a>

```typescript
public readonly serviceAccounts: string[];
```

- *Type:* `string`[]

---

### CoreAddonProps <a name="@smallcase/cdk-eks-cluster-module.CoreAddonProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CoreAddonProps } from '@smallcase/cdk-eks-cluster-module'

const coreAddonProps: CoreAddonProps = { ... }
```

##### `cluster`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* [`aws-cdk-lib.aws_eks.Cluster`](#aws-cdk-lib.aws_eks.Cluster)

---

##### `addonVersion`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.addonVersion"></a>

```typescript
public readonly addonVersion: string;
```

- *Type:* `string`

---

##### `configurationValues`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.configurationValues"></a>

```typescript
public readonly configurationValues: string;
```

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

---

##### `resolveConflicts`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.resolveConflicts"></a>

```typescript
public readonly resolveConflicts: boolean;
```

- *Type:* `boolean`

---

### CoreAddonValuesProps <a name="@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CoreAddonValuesProps } from '@smallcase/cdk-eks-cluster-module'

const coreAddonValuesProps: CoreAddonValuesProps = { ... }
```

##### `addonVersion`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps.property.addonVersion"></a>

```typescript
public readonly addonVersion: string;
```

- *Type:* `string`

---

##### `configurationValues`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps.property.configurationValues"></a>

```typescript
public readonly configurationValues: string;
```

- *Type:* `string`

---

### DefaultCommonComponents <a name="@smallcase/cdk-eks-cluster-module.DefaultCommonComponents"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DefaultCommonComponents } from '@smallcase/cdk-eks-cluster-module'

const defaultCommonComponents: DefaultCommonComponents = { ... }
```

##### `awsEbsCsiDriver`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.property.awsEbsCsiDriver"></a>

```typescript
public readonly awsEbsCsiDriver: DefaultCommonComponentsProps;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps`](#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps)

---

##### `awsEfsCsiDriver`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.property.awsEfsCsiDriver"></a>

```typescript
public readonly awsEfsCsiDriver: DefaultCommonComponentsProps;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps`](#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps)

---

##### `clusterAutoscaler`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.property.clusterAutoscaler"></a>

```typescript
public readonly clusterAutoscaler: DefaultCommonComponentsProps;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps`](#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps)

---

##### `externalDns`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.property.externalDns"></a>

```typescript
public readonly externalDns: DefaultCommonComponentsProps;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps`](#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps)

---

### DefaultCommonComponentsProps <a name="@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { DefaultCommonComponentsProps } from '@smallcase/cdk-eks-cluster-module'

const defaultCommonComponentsProps: DefaultCommonComponentsProps = { ... }
```

##### `namespace`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

---

### EKSClusterProps <a name="@smallcase/cdk-eks-cluster-module.EKSClusterProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { EKSClusterProps } from '@smallcase/cdk-eks-cluster-module'

const eKSClusterProps: EKSClusterProps = { ... }
```

##### `availabilityZones`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* `string`[]

---

##### `clusterConfig`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: ClusterConfig;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.ClusterConfig`](#@smallcase/cdk-eks-cluster-module.ClusterConfig)

---

##### `kmsKey`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* [`aws-cdk-lib.aws_kms.Key`](#aws-cdk-lib.aws_kms.Key)

---

##### `region`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`

---

##### `workerSecurityGroup`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.workerSecurityGroup"></a>

```typescript
public readonly workerSecurityGroup: SecurityGroup;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SecurityGroup`](#aws-cdk-lib.aws_ec2.SecurityGroup)

---

##### `addonProps`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.addonProps"></a>

```typescript
public readonly addonProps: AddonProps;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.AddonProps`](#@smallcase/cdk-eks-cluster-module.AddonProps)

---

##### `clusterVPC`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.clusterVPC"></a>

```typescript
public readonly clusterVPC: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

---

##### `coreDnsAddonProps`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.coreDnsAddonProps"></a>

```typescript
public readonly coreDnsAddonProps: CoreAddonValuesProps;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps`](#@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps)

---

##### `kubeProxyAddonProps`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.kubeProxyAddonProps"></a>

```typescript
public readonly kubeProxyAddonProps: CoreAddonValuesProps;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps`](#@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps)

---

### FargateProfile <a name="@smallcase/cdk-eks-cluster-module.FargateProfile"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { FargateProfile } from '@smallcase/cdk-eks-cluster-module'

const fargateProfile: FargateProfile = { ... }
```

##### `namespaces`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.FargateProfile.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* `string`[]

---

##### `profileName`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.FargateProfile.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* `string`

---

##### `labels`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.FargateProfile.property.labels"></a>

```typescript
public readonly labels: InternalMap;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.InternalMap`](#@smallcase/cdk-eks-cluster-module.InternalMap)

---

##### `podExecutionRole`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.FargateProfile.property.podExecutionRole"></a>

```typescript
public readonly podExecutionRole: Role;
```

- *Type:* [`aws-cdk-lib.aws_iam.Role`](#aws-cdk-lib.aws_iam.Role)

---

##### `subnetSelection`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.FargateProfile.property.subnetSelection"></a>

```typescript
public readonly subnetSelection: SubnetSelection;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SubnetSelection`](#aws-cdk-lib.aws_ec2.SubnetSelection)

---

### InternalMap <a name="@smallcase/cdk-eks-cluster-module.InternalMap"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { InternalMap } from '@smallcase/cdk-eks-cluster-module'

const internalMap: InternalMap = { ... }
```

### NamespaceSpec <a name="@smallcase/cdk-eks-cluster-module.NamespaceSpec"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NamespaceSpec } from '@smallcase/cdk-eks-cluster-module'

const namespaceSpec: NamespaceSpec = { ... }
```

##### `annotations`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.NamespaceSpec.property.annotations"></a>

```typescript
public readonly annotations: InternalMap;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.InternalMap`](#@smallcase/cdk-eks-cluster-module.InternalMap)

---

##### `labels`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.NamespaceSpec.property.labels"></a>

```typescript
public readonly labels: InternalMap;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.InternalMap`](#@smallcase/cdk-eks-cluster-module.InternalMap)

---

### NodeGroupConfig <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { NodeGroupConfig } from '@smallcase/cdk-eks-cluster-module'

const nodeGroupConfig: NodeGroupConfig = { ... }
```

##### `instanceTypes`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: InstanceType[];
```

- *Type:* [`aws-cdk-lib.aws_ec2.InstanceType`](#aws-cdk-lib.aws_ec2.InstanceType)[]

---

##### `labels`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.labels"></a>

```typescript
public readonly labels: InternalMap;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.InternalMap`](#@smallcase/cdk-eks-cluster-module.InternalMap)

---

##### `maxSize`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* `number`

---

##### `minSize`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* `number`

---

##### `name`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `subnetGroupName`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* `string`

---

##### `taints`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.taints"></a>

```typescript
public readonly taints: InternalMap;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.InternalMap`](#@smallcase/cdk-eks-cluster-module.InternalMap)

---

##### `capacityType`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.capacityType"></a>

```typescript
public readonly capacityType: CapacityType;
```

- *Type:* [`aws-cdk-lib.aws_eks.CapacityType`](#aws-cdk-lib.aws_eks.CapacityType)

---

##### `desiredSize`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.desiredSize"></a>

```typescript
public readonly desiredSize: number;
```

- *Type:* `number`

---

##### `diskSize`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* `number`

---

##### `launchTemplateSpec`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.launchTemplateSpec"></a>

```typescript
public readonly launchTemplateSpec: LaunchTemplateSpec;
```

- *Type:* [`aws-cdk-lib.aws_eks.LaunchTemplateSpec`](#aws-cdk-lib.aws_eks.LaunchTemplateSpec)

---

##### `nodeAMIVersion`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.nodeAMIVersion"></a>

```typescript
public readonly nodeAMIVersion: string;
```

- *Type:* `string`

---

##### `sshKeyName`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.sshKeyName"></a>

```typescript
public readonly sshKeyName: string;
```

- *Type:* `string`

---

##### `subnetAz`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.subnetAz"></a>

```typescript
public readonly subnetAz: string[];
```

- *Type:* `string`[]

---

##### `tags`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.tags"></a>

```typescript
public readonly tags: InternalMap;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.InternalMap`](#@smallcase/cdk-eks-cluster-module.InternalMap)

---

### StandardHelmProps <a name="@smallcase/cdk-eks-cluster-module.StandardHelmProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { StandardHelmProps } from '@smallcase/cdk-eks-cluster-module'

const standardHelmProps: StandardHelmProps = { ... }
```

##### `chartName`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.chartName"></a>

```typescript
public readonly chartName: string;
```

- *Type:* `string`

---

##### `chartReleaseName`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.chartReleaseName"></a>

```typescript
public readonly chartReleaseName: string;
```

- *Type:* `string`

---

##### `chartVersion`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.chartVersion"></a>

```typescript
public readonly chartVersion: string;
```

- *Type:* `string`

---

##### `createNamespace`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean;
```

- *Type:* `boolean`

---

##### `helmRepository`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.helmRepository"></a>

```typescript
public readonly helmRepository: string;
```

- *Type:* `string`

---

##### `helmValues`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.helmValues"></a>

```typescript
public readonly helmValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

##### `localHelmChart`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.localHelmChart"></a>

```typescript
public readonly localHelmChart: string;
```

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

---

### VpcCniAddonProps <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { VpcCniAddonProps } from '@smallcase/cdk-eks-cluster-module'

const vpcCniAddonProps: VpcCniAddonProps = { ... }
```

##### `cluster`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* [`aws-cdk-lib.aws_eks.Cluster`](#aws-cdk-lib.aws_eks.Cluster)

---

##### `addonVersion`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.addonVersion"></a>

```typescript
public readonly addonVersion: VpcCniAddonVersion;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

---

##### `configurationValues`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.configurationValues"></a>

```typescript
public readonly configurationValues: string;
```

- *Type:* `string`

---

##### `namespace`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* `string`

---

##### `resolveConflicts`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.resolveConflicts"></a>

```typescript
public readonly resolveConflicts: boolean;
```

- *Type:* `boolean`

---

## Classes <a name="Classes"></a>

### VpcCniAddonVersion <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion"></a>

#### Initializers <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.Initializer"></a>

```typescript
import { VpcCniAddonVersion } from '@smallcase/cdk-eks-cluster-module'

new VpcCniAddonVersion(version: string)
```

##### `version`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.parameter.version"></a>

- *Type:* `string`

---


#### Static Functions <a name="Static Functions"></a>

##### `of` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.of"></a>

```typescript
import { VpcCniAddonVersion } from '@smallcase/cdk-eks-cluster-module'

VpcCniAddonVersion.of(version: string)
```

###### `version`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.parameter.version"></a>

- *Type:* `string`

custom add-on version.

---

#### Properties <a name="Properties"></a>

##### `version`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants"></a>

##### `V1_10_1` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_10_1"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.10.1.

---

##### `V1_10_2` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_10_2"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.10.2.

---

##### `V1_10_3` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_10_3"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.10.3.

---

##### `V1_11_0` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_11_0"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.11.0.

---

##### `V1_11_2` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_11_2"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.11.2.

---

##### `V1_11_3` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_11_3"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.11.3.

---

##### `V1_11_4` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_11_4"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.11.4.

---

##### `V1_12_0` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_0"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.12.0.

---

##### `V1_12_1` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_1"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.12.1.

---

##### `V1_12_2` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_2"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.12.2.

---

##### `V1_12_5` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_5"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.12.5.

---

##### `V1_12_5_2` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_5_2"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.12.5.2.

---

##### `V1_6_3` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_6_3"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.6.3.

---

##### `V1_7_10` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_7_10"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.7.10.

---

##### `V1_7_5` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_7_5"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.7.5.

---

##### `V1_7_6` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_7_6"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.7.6.

---

##### `V1_7_9` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_7_9"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.7.9.

---

##### `V1_8_0` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_8_0"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.8.0.

---

##### `V1_9_0` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_9_0"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.9.0.

---

##### `V1_9_1` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_9_1"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.9.1.

---

##### `V1_9_3` <a name="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_9_3"></a>

- *Type:* [`@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion`](#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion)

vpc-cni version 1.9.3.

---

## Protocols <a name="Protocols"></a>

### ICommonComponentsProps <a name="@smallcase/cdk-eks-cluster-module.ICommonComponentsProps"></a>

- *Implemented By:* [`@smallcase/cdk-eks-cluster-module.ICommonComponentsProps`](#@smallcase/cdk-eks-cluster-module.ICommonComponentsProps)


#### Properties <a name="Properties"></a>

##### `helm`<sup>Required</sup> <a name="@smallcase/cdk-eks-cluster-module.ICommonComponentsProps.property.helm"></a>

```typescript
public readonly helm: StandardHelmProps;
```

- *Type:* [`@smallcase/cdk-eks-cluster-module.StandardHelmProps`](#@smallcase/cdk-eks-cluster-module.StandardHelmProps)

---

##### `iamPolicyPath`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ICommonComponentsProps.property.iamPolicyPath"></a>

```typescript
public readonly iamPolicyPath: string[];
```

- *Type:* `string`[]

---

##### `serviceAccounts`<sup>Optional</sup> <a name="@smallcase/cdk-eks-cluster-module.ICommonComponentsProps.property.serviceAccounts"></a>

```typescript
public readonly serviceAccounts: string[];
```

- *Type:* `string`[]

---

