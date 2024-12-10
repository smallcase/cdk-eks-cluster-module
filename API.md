# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CommonHelmCharts <a name="CommonHelmCharts" id="@smallcase/cdk-eks-cluster-module.CommonHelmCharts"></a>

#### Initializers <a name="Initializers" id="@smallcase/cdk-eks-cluster-module.CommonHelmCharts.Initializer"></a>

```typescript
import { CommonHelmCharts } from '@smallcase/cdk-eks-cluster-module'

new CommonHelmCharts(scope: Construct, id: string, props: CommonHelmChartsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmCharts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmCharts.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmCharts.Initializer.parameter.props">props</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps">CommonHelmChartsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@smallcase/cdk-eks-cluster-module.CommonHelmCharts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@smallcase/cdk-eks-cluster-module.CommonHelmCharts.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@smallcase/cdk-eks-cluster-module.CommonHelmCharts.Initializer.parameter.props"></a>

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps">CommonHelmChartsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmCharts.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@smallcase/cdk-eks-cluster-module.CommonHelmCharts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmCharts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@smallcase/cdk-eks-cluster-module.CommonHelmCharts.isConstruct"></a>

```typescript
import { CommonHelmCharts } from '@smallcase/cdk-eks-cluster-module'

CommonHelmCharts.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/cdk-eks-cluster-module.CommonHelmCharts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmCharts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@smallcase/cdk-eks-cluster-module.CommonHelmCharts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CoreDnsAddon <a name="CoreDnsAddon" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon"></a>

#### Initializers <a name="Initializers" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.Initializer"></a>

```typescript
import { CoreDnsAddon } from '@smallcase/cdk-eks-cluster-module'

new CoreDnsAddon(scope: Construct, id: string, props: CoreAddonProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.Initializer.parameter.props">props</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.CoreAddonProps">CoreAddonProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.Initializer.parameter.props"></a>

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.CoreAddonProps">CoreAddonProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.inspect">inspect</a></code> | Examines the CloudFormation resource and discloses attributes. |

---

##### `toString` <a name="toString" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
  "GlobalSecondaryIndexes": [
    {
      "Projection": {
        "NonKeyAttributes": [ "myattribute" ]
        ...
      }
      ...
    },
    {
      "ProjectionType": "INCLUDE"
      ...
    },
  ]
  ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.obtainDependencies"></a>

```typescript
public obtainDependencies(): Stack | CfnResource[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

##### `inspect` <a name="inspect" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines the CloudFormation resource and discloses attributes.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

tree inspector to collect and process attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.isCfnResource">isCfnResource</a></code> | Check whether the given object is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.isConstruct"></a>

```typescript
import { CoreDnsAddon } from '@smallcase/cdk-eks-cluster-module'

CoreDnsAddon.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.isCfnElement"></a>

```typescript
import { CoreDnsAddon } from '@smallcase/cdk-eks-cluster-module'

CoreDnsAddon.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.isCfnResource"></a>

```typescript
import { CoreDnsAddon } from '@smallcase/cdk-eks-cluster-module'

CoreDnsAddon.isCfnResource(x: any)
```

Check whether the given object is a CfnResource.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.isCfnResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.attrArn">attrArn</a></code> | <code>string</code> | The ARN of the add-on, such as `arn:aws:eks:us-west-2:111122223333:addon/1-19/vpc-cni/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` . |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tag Manager which manages the tags for this resource. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.addonName">addonName</a></code> | <code>string</code> | The name of the add-on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.clusterName">clusterName</a></code> | <code>string</code> | The name of your cluster. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.addonVersion">addonVersion</a></code> | <code>string</code> | The version of the add-on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.configurationValues">configurationValues</a></code> | <code>string</code> | The configuration values that you provided. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.podIdentityAssociations">podIdentityAssociations</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_eks.CfnAddon.PodIdentityAssociationProperty[]</code> | An array of Pod Identity Assocations owned by the Addon. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.preserveOnDelete">preserveOnDelete</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.resolveConflicts">resolveConflicts</a></code> | <code>string</code> | How to resolve field value conflicts for an Amazon EKS add-on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.serviceAccountRoleArn">serviceAccountRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.tagsRaw">tagsRaw</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | The metadata that you apply to the add-on to assist with categorization and organization. |

---

##### `node`<sup>Required</sup> <a name="node" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrArn`<sup>Required</sup> <a name="attrArn" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.attrArn"></a>

```typescript
public readonly attrArn: string;
```

- *Type:* string

The ARN of the add-on, such as `arn:aws:eks:us-west-2:111122223333:addon/1-19/vpc-cni/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` .

---

##### `tags`<sup>Required</sup> <a name="tags" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tag Manager which manages the tags for this resource.

---

##### `addonName`<sup>Required</sup> <a name="addonName" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.addonName"></a>

```typescript
public readonly addonName: string;
```

- *Type:* string

The name of the add-on.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of your cluster.

---

##### `addonVersion`<sup>Optional</sup> <a name="addonVersion" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.addonVersion"></a>

```typescript
public readonly addonVersion: string;
```

- *Type:* string

The version of the add-on.

---

##### `configurationValues`<sup>Optional</sup> <a name="configurationValues" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.configurationValues"></a>

```typescript
public readonly configurationValues: string;
```

- *Type:* string

The configuration values that you provided.

---

##### `podIdentityAssociations`<sup>Optional</sup> <a name="podIdentityAssociations" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.podIdentityAssociations"></a>

```typescript
public readonly podIdentityAssociations: IResolvable | IResolvable | PodIdentityAssociationProperty[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.IResolvable | aws-cdk-lib.aws_eks.CfnAddon.PodIdentityAssociationProperty[]

An array of Pod Identity Assocations owned by the Addon.

---

##### `preserveOnDelete`<sup>Optional</sup> <a name="preserveOnDelete" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.preserveOnDelete"></a>

```typescript
public readonly preserveOnDelete: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on.

---

##### `resolveConflicts`<sup>Optional</sup> <a name="resolveConflicts" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.resolveConflicts"></a>

```typescript
public readonly resolveConflicts: string;
```

- *Type:* string

How to resolve field value conflicts for an Amazon EKS add-on.

---

##### `serviceAccountRoleArn`<sup>Optional</sup> <a name="serviceAccountRoleArn" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.serviceAccountRoleArn"></a>

```typescript
public readonly serviceAccountRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account.

---

##### `tagsRaw`<sup>Optional</sup> <a name="tagsRaw" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.tagsRaw"></a>

```typescript
public readonly tagsRaw: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

The metadata that you apply to the add-on to assist with categorization and organization.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="@smallcase/cdk-eks-cluster-module.CoreDnsAddon.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### EKSCluster <a name="EKSCluster" id="@smallcase/cdk-eks-cluster-module.EKSCluster"></a>

#### Initializers <a name="Initializers" id="@smallcase/cdk-eks-cluster-module.EKSCluster.Initializer"></a>

```typescript
import { EKSCluster } from '@smallcase/cdk-eks-cluster-module'

new EKSCluster(scope: Construct, id: string, props: EKSClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSCluster.Initializer.parameter.props">props</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.EKSClusterProps">EKSClusterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@smallcase/cdk-eks-cluster-module.EKSCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@smallcase/cdk-eks-cluster-module.EKSCluster.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@smallcase/cdk-eks-cluster-module.EKSCluster.Initializer.parameter.props"></a>

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.EKSClusterProps">EKSClusterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSCluster.addServiceAccountWithIamRole">addServiceAccountWithIamRole</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@smallcase/cdk-eks-cluster-module.EKSCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addServiceAccountWithIamRole` <a name="addServiceAccountWithIamRole" id="@smallcase/cdk-eks-cluster-module.EKSCluster.addServiceAccountWithIamRole"></a>

```typescript
public addServiceAccountWithIamRole(serviceAccountName: string, serviceAccountNamespace: string, policy: any): void
```

###### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@smallcase/cdk-eks-cluster-module.EKSCluster.addServiceAccountWithIamRole.parameter.serviceAccountName"></a>

- *Type:* string

---

###### `serviceAccountNamespace`<sup>Required</sup> <a name="serviceAccountNamespace" id="@smallcase/cdk-eks-cluster-module.EKSCluster.addServiceAccountWithIamRole.parameter.serviceAccountNamespace"></a>

- *Type:* string

---

###### `policy`<sup>Required</sup> <a name="policy" id="@smallcase/cdk-eks-cluster-module.EKSCluster.addServiceAccountWithIamRole.parameter.policy"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@smallcase/cdk-eks-cluster-module.EKSCluster.isConstruct"></a>

```typescript
import { EKSCluster } from '@smallcase/cdk-eks-cluster-module'

EKSCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/cdk-eks-cluster-module.EKSCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSCluster.property.additionalFargateProfile">additionalFargateProfile</a></code> | <code>aws-cdk-lib.aws_eks.FargateProfile[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSCluster.property.additionalNodegroups">additionalNodegroups</a></code> | <code>aws-cdk-lib.aws_eks.Nodegroup[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSCluster.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.Cluster</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSCluster.property.fargateProfiles">fargateProfiles</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.FargateProfile">FargateProfile</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@smallcase/cdk-eks-cluster-module.EKSCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `additionalFargateProfile`<sup>Required</sup> <a name="additionalFargateProfile" id="@smallcase/cdk-eks-cluster-module.EKSCluster.property.additionalFargateProfile"></a>

```typescript
public readonly additionalFargateProfile: FargateProfile[];
```

- *Type:* aws-cdk-lib.aws_eks.FargateProfile[]

---

##### `additionalNodegroups`<sup>Required</sup> <a name="additionalNodegroups" id="@smallcase/cdk-eks-cluster-module.EKSCluster.property.additionalNodegroups"></a>

```typescript
public readonly additionalNodegroups: Nodegroup[];
```

- *Type:* aws-cdk-lib.aws_eks.Nodegroup[]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@smallcase/cdk-eks-cluster-module.EKSCluster.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_eks.Cluster

---

##### `fargateProfiles`<sup>Required</sup> <a name="fargateProfiles" id="@smallcase/cdk-eks-cluster-module.EKSCluster.property.fargateProfiles"></a>

```typescript
public readonly fargateProfiles: FargateProfile[];
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.FargateProfile">FargateProfile</a>[]

---


### KubeProxyAddon <a name="KubeProxyAddon" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon"></a>

#### Initializers <a name="Initializers" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.Initializer"></a>

```typescript
import { KubeProxyAddon } from '@smallcase/cdk-eks-cluster-module'

new KubeProxyAddon(scope: Construct, id: string, props: CoreAddonProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.Initializer.parameter.props">props</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.CoreAddonProps">CoreAddonProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.Initializer.parameter.props"></a>

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.CoreAddonProps">CoreAddonProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.inspect">inspect</a></code> | Examines the CloudFormation resource and discloses attributes. |

---

##### `toString` <a name="toString" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
  "GlobalSecondaryIndexes": [
    {
      "Projection": {
        "NonKeyAttributes": [ "myattribute" ]
        ...
      }
      ...
    },
    {
      "ProjectionType": "INCLUDE"
      ...
    },
  ]
  ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.obtainDependencies"></a>

```typescript
public obtainDependencies(): Stack | CfnResource[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

##### `inspect` <a name="inspect" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines the CloudFormation resource and discloses attributes.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

tree inspector to collect and process attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.isCfnResource">isCfnResource</a></code> | Check whether the given object is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.isConstruct"></a>

```typescript
import { KubeProxyAddon } from '@smallcase/cdk-eks-cluster-module'

KubeProxyAddon.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.isCfnElement"></a>

```typescript
import { KubeProxyAddon } from '@smallcase/cdk-eks-cluster-module'

KubeProxyAddon.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.isCfnResource"></a>

```typescript
import { KubeProxyAddon } from '@smallcase/cdk-eks-cluster-module'

KubeProxyAddon.isCfnResource(x: any)
```

Check whether the given object is a CfnResource.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.isCfnResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.attrArn">attrArn</a></code> | <code>string</code> | The ARN of the add-on, such as `arn:aws:eks:us-west-2:111122223333:addon/1-19/vpc-cni/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` . |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tag Manager which manages the tags for this resource. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.addonName">addonName</a></code> | <code>string</code> | The name of the add-on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.clusterName">clusterName</a></code> | <code>string</code> | The name of your cluster. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.addonVersion">addonVersion</a></code> | <code>string</code> | The version of the add-on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.configurationValues">configurationValues</a></code> | <code>string</code> | The configuration values that you provided. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.podIdentityAssociations">podIdentityAssociations</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_eks.CfnAddon.PodIdentityAssociationProperty[]</code> | An array of Pod Identity Assocations owned by the Addon. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.preserveOnDelete">preserveOnDelete</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.resolveConflicts">resolveConflicts</a></code> | <code>string</code> | How to resolve field value conflicts for an Amazon EKS add-on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.serviceAccountRoleArn">serviceAccountRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.tagsRaw">tagsRaw</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | The metadata that you apply to the add-on to assist with categorization and organization. |

---

##### `node`<sup>Required</sup> <a name="node" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrArn`<sup>Required</sup> <a name="attrArn" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.attrArn"></a>

```typescript
public readonly attrArn: string;
```

- *Type:* string

The ARN of the add-on, such as `arn:aws:eks:us-west-2:111122223333:addon/1-19/vpc-cni/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` .

---

##### `tags`<sup>Required</sup> <a name="tags" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tag Manager which manages the tags for this resource.

---

##### `addonName`<sup>Required</sup> <a name="addonName" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.addonName"></a>

```typescript
public readonly addonName: string;
```

- *Type:* string

The name of the add-on.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of your cluster.

---

##### `addonVersion`<sup>Optional</sup> <a name="addonVersion" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.addonVersion"></a>

```typescript
public readonly addonVersion: string;
```

- *Type:* string

The version of the add-on.

---

##### `configurationValues`<sup>Optional</sup> <a name="configurationValues" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.configurationValues"></a>

```typescript
public readonly configurationValues: string;
```

- *Type:* string

The configuration values that you provided.

---

##### `podIdentityAssociations`<sup>Optional</sup> <a name="podIdentityAssociations" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.podIdentityAssociations"></a>

```typescript
public readonly podIdentityAssociations: IResolvable | IResolvable | PodIdentityAssociationProperty[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.IResolvable | aws-cdk-lib.aws_eks.CfnAddon.PodIdentityAssociationProperty[]

An array of Pod Identity Assocations owned by the Addon.

---

##### `preserveOnDelete`<sup>Optional</sup> <a name="preserveOnDelete" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.preserveOnDelete"></a>

```typescript
public readonly preserveOnDelete: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on.

---

##### `resolveConflicts`<sup>Optional</sup> <a name="resolveConflicts" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.resolveConflicts"></a>

```typescript
public readonly resolveConflicts: string;
```

- *Type:* string

How to resolve field value conflicts for an Amazon EKS add-on.

---

##### `serviceAccountRoleArn`<sup>Optional</sup> <a name="serviceAccountRoleArn" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.serviceAccountRoleArn"></a>

```typescript
public readonly serviceAccountRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account.

---

##### `tagsRaw`<sup>Optional</sup> <a name="tagsRaw" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.tagsRaw"></a>

```typescript
public readonly tagsRaw: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

The metadata that you apply to the add-on to assist with categorization and organization.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="@smallcase/cdk-eks-cluster-module.KubeProxyAddon.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### VpcEniAddon <a name="VpcEniAddon" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon"></a>

#### Initializers <a name="Initializers" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.Initializer"></a>

```typescript
import { VpcEniAddon } from '@smallcase/cdk-eks-cluster-module'

new VpcEniAddon(scope: Construct, id: string, props: VpcCniAddonProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.Initializer.parameter.props">props</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonProps">VpcCniAddonProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.Initializer.parameter.props"></a>

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonProps">VpcCniAddonProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.inspect">inspect</a></code> | Examines the CloudFormation resource and discloses attributes. |

---

##### `toString` <a name="toString" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
  "GlobalSecondaryIndexes": [
    {
      "Projection": {
        "NonKeyAttributes": [ "myattribute" ]
        ...
      }
      ...
    },
    {
      "ProjectionType": "INCLUDE"
      ...
    },
  ]
  ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.obtainDependencies"></a>

```typescript
public obtainDependencies(): Stack | CfnResource[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

##### `inspect` <a name="inspect" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines the CloudFormation resource and discloses attributes.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

tree inspector to collect and process attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.isCfnResource">isCfnResource</a></code> | Check whether the given object is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.isConstruct"></a>

```typescript
import { VpcEniAddon } from '@smallcase/cdk-eks-cluster-module'

VpcEniAddon.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.isCfnElement"></a>

```typescript
import { VpcEniAddon } from '@smallcase/cdk-eks-cluster-module'

VpcEniAddon.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.isCfnResource"></a>

```typescript
import { VpcEniAddon } from '@smallcase/cdk-eks-cluster-module'

VpcEniAddon.isCfnResource(x: any)
```

Check whether the given object is a CfnResource.

###### `x`<sup>Required</sup> <a name="x" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.isCfnResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.attrArn">attrArn</a></code> | <code>string</code> | The ARN of the add-on, such as `arn:aws:eks:us-west-2:111122223333:addon/1-19/vpc-cni/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` . |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tag Manager which manages the tags for this resource. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.addonName">addonName</a></code> | <code>string</code> | The name of the add-on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.clusterName">clusterName</a></code> | <code>string</code> | The name of your cluster. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.addonVersion">addonVersion</a></code> | <code>string</code> | The version of the add-on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.configurationValues">configurationValues</a></code> | <code>string</code> | The configuration values that you provided. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.podIdentityAssociations">podIdentityAssociations</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_eks.CfnAddon.PodIdentityAssociationProperty[]</code> | An array of Pod Identity Assocations owned by the Addon. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.preserveOnDelete">preserveOnDelete</a></code> | <code>boolean \| aws-cdk-lib.IResolvable</code> | Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.resolveConflicts">resolveConflicts</a></code> | <code>string</code> | How to resolve field value conflicts for an Amazon EKS add-on. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.serviceAccountRoleArn">serviceAccountRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.tagsRaw">tagsRaw</a></code> | <code>aws-cdk-lib.CfnTag[]</code> | The metadata that you apply to the add-on to assist with categorization and organization. |

---

##### `node`<sup>Required</sup> <a name="node" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrArn`<sup>Required</sup> <a name="attrArn" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.attrArn"></a>

```typescript
public readonly attrArn: string;
```

- *Type:* string

The ARN of the add-on, such as `arn:aws:eks:us-west-2:111122223333:addon/1-19/vpc-cni/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` .

---

##### `tags`<sup>Required</sup> <a name="tags" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tag Manager which manages the tags for this resource.

---

##### `addonName`<sup>Required</sup> <a name="addonName" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.addonName"></a>

```typescript
public readonly addonName: string;
```

- *Type:* string

The name of the add-on.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of your cluster.

---

##### `addonVersion`<sup>Optional</sup> <a name="addonVersion" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.addonVersion"></a>

```typescript
public readonly addonVersion: string;
```

- *Type:* string

The version of the add-on.

---

##### `configurationValues`<sup>Optional</sup> <a name="configurationValues" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.configurationValues"></a>

```typescript
public readonly configurationValues: string;
```

- *Type:* string

The configuration values that you provided.

---

##### `podIdentityAssociations`<sup>Optional</sup> <a name="podIdentityAssociations" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.podIdentityAssociations"></a>

```typescript
public readonly podIdentityAssociations: IResolvable | IResolvable | PodIdentityAssociationProperty[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.IResolvable | aws-cdk-lib.aws_eks.CfnAddon.PodIdentityAssociationProperty[]

An array of Pod Identity Assocations owned by the Addon.

---

##### `preserveOnDelete`<sup>Optional</sup> <a name="preserveOnDelete" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.preserveOnDelete"></a>

```typescript
public readonly preserveOnDelete: boolean | IResolvable;
```

- *Type:* boolean | aws-cdk-lib.IResolvable

Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on.

---

##### `resolveConflicts`<sup>Optional</sup> <a name="resolveConflicts" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.resolveConflicts"></a>

```typescript
public readonly resolveConflicts: string;
```

- *Type:* string

How to resolve field value conflicts for an Amazon EKS add-on.

---

##### `serviceAccountRoleArn`<sup>Optional</sup> <a name="serviceAccountRoleArn" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.serviceAccountRoleArn"></a>

```typescript
public readonly serviceAccountRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account.

---

##### `tagsRaw`<sup>Optional</sup> <a name="tagsRaw" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.tagsRaw"></a>

```typescript
public readonly tagsRaw: CfnTag[];
```

- *Type:* aws-cdk-lib.CfnTag[]

The metadata that you apply to the add-on to assist with categorization and organization.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="@smallcase/cdk-eks-cluster-module.VpcEniAddon.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

## Structs <a name="Structs" id="Structs"></a>

### AddonProps <a name="AddonProps" id="@smallcase/cdk-eks-cluster-module.AddonProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.AddonProps.Initializer"></a>

```typescript
import { AddonProps } from '@smallcase/cdk-eks-cluster-module'

const addonProps: AddonProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.AddonProps.property.configurationValues">configurationValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.AddonProps.property.vpnCniAddonVersion">vpnCniAddonVersion</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | *No description.* |

---

##### `configurationValues`<sup>Optional</sup> <a name="configurationValues" id="@smallcase/cdk-eks-cluster-module.AddonProps.property.configurationValues"></a>

```typescript
public readonly configurationValues: string;
```

- *Type:* string

---

##### `vpnCniAddonVersion`<sup>Optional</sup> <a name="vpnCniAddonVersion" id="@smallcase/cdk-eks-cluster-module.AddonProps.property.vpnCniAddonVersion"></a>

```typescript
public readonly vpnCniAddonVersion: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

---

### ArgoCD <a name="ArgoCD" id="@smallcase/cdk-eks-cluster-module.ArgoCD"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.ArgoCD.Initializer"></a>

```typescript
import { ArgoCD } from '@smallcase/cdk-eks-cluster-module'

const argoCD: ArgoCD = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ArgoCD.property.assumeRoleArn">assumeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ArgoCD.property.clusterRoleName">clusterRoleName</a></code> | <code>string</code> | *No description.* |

---

##### `assumeRoleArn`<sup>Required</sup> <a name="assumeRoleArn" id="@smallcase/cdk-eks-cluster-module.ArgoCD.property.assumeRoleArn"></a>

```typescript
public readonly assumeRoleArn: string;
```

- *Type:* string

---

##### `clusterRoleName`<sup>Required</sup> <a name="clusterRoleName" id="@smallcase/cdk-eks-cluster-module.ArgoCD.property.clusterRoleName"></a>

```typescript
public readonly clusterRoleName: string;
```

- *Type:* string

---

### ClusterConfig <a name="ClusterConfig" id="@smallcase/cdk-eks-cluster-module.ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.Initializer"></a>

```typescript
import { ClusterConfig } from '@smallcase/cdk-eks-cluster-module'

const clusterConfig: ClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.clusterVersion">clusterVersion</a></code> | <code>aws-cdk-lib.aws_eks.KubernetesVersion</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.defaultCapacity">defaultCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.nodeGroups">nodeGroups</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig">NodeGroupConfig</a>[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.subnets">subnets</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.tags">tags</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.teamMembers">teamMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.addAutoscalerIam">addAutoscalerIam</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.albControllerVersion">albControllerVersion</a></code> | <code>aws-cdk-lib.aws_eks.AlbControllerVersion</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.argoCD">argoCD</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.ArgoCD">ArgoCD</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.commonComponents">commonComponents</a></code> | <code>{[ key: string ]: <a href="#@smallcase/cdk-eks-cluster-module.ICommonComponentsProps">ICommonComponentsProps</a>}</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.debugLogs">debugLogs</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.defaultCommonComponents">defaultCommonComponents</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponents">DefaultCommonComponents</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.deprecateClusterAutoScaler">deprecateClusterAutoScaler</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.fargateProfiles">fargateProfiles</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.FargateProfile">FargateProfile</a>[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.kubectlLayer">kubectlLayer</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.namespaces">namespaces</a></code> | <code>{[ key: string ]: <a href="#@smallcase/cdk-eks-cluster-module.NamespaceSpec">NamespaceSpec</a>}</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.publicAllowAccess">publicAllowAccess</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.skipExternalDNS">skipExternalDNS</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig.property.teamExistingRolePermission">teamExistingRolePermission</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: KubernetesVersion;
```

- *Type:* aws-cdk-lib.aws_eks.KubernetesVersion

---

##### `defaultCapacity`<sup>Required</sup> <a name="defaultCapacity" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.defaultCapacity"></a>

```typescript
public readonly defaultCapacity: number;
```

- *Type:* number

---

##### `nodeGroups`<sup>Required</sup> <a name="nodeGroups" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.nodeGroups"></a>

```typescript
public readonly nodeGroups: NodeGroupConfig[];
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig">NodeGroupConfig</a>[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.subnets"></a>

```typescript
public readonly subnets: InternalMap;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.tags"></a>

```typescript
public readonly tags: InternalMap;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a>

---

##### `teamMembers`<sup>Required</sup> <a name="teamMembers" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.teamMembers"></a>

```typescript
public readonly teamMembers: string[];
```

- *Type:* string[]

---

##### `addAutoscalerIam`<sup>Optional</sup> <a name="addAutoscalerIam" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.addAutoscalerIam"></a>

```typescript
public readonly addAutoscalerIam: boolean;
```

- *Type:* boolean

---

##### `albControllerVersion`<sup>Optional</sup> <a name="albControllerVersion" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.albControllerVersion"></a>

```typescript
public readonly albControllerVersion: AlbControllerVersion;
```

- *Type:* aws-cdk-lib.aws_eks.AlbControllerVersion

---

##### `argoCD`<sup>Optional</sup> <a name="argoCD" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.argoCD"></a>

```typescript
public readonly argoCD: ArgoCD;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.ArgoCD">ArgoCD</a>

---

##### `commonComponents`<sup>Optional</sup> <a name="commonComponents" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.commonComponents"></a>

```typescript
public readonly commonComponents: {[ key: string ]: ICommonComponentsProps};
```

- *Type:* {[ key: string ]: <a href="#@smallcase/cdk-eks-cluster-module.ICommonComponentsProps">ICommonComponentsProps</a>}

---

##### `debugLogs`<sup>Optional</sup> <a name="debugLogs" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.debugLogs"></a>

```typescript
public readonly debugLogs: boolean;
```

- *Type:* boolean

---

##### `defaultCommonComponents`<sup>Optional</sup> <a name="defaultCommonComponents" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.defaultCommonComponents"></a>

```typescript
public readonly defaultCommonComponents: DefaultCommonComponents;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponents">DefaultCommonComponents</a>

---

##### `deprecateClusterAutoScaler`<sup>Optional</sup> <a name="deprecateClusterAutoScaler" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.deprecateClusterAutoScaler"></a>

```typescript
public readonly deprecateClusterAutoScaler: boolean;
```

- *Type:* boolean

---

##### `fargateProfiles`<sup>Optional</sup> <a name="fargateProfiles" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.fargateProfiles"></a>

```typescript
public readonly fargateProfiles: FargateProfile[];
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.FargateProfile">FargateProfile</a>[]

---

##### `kubectlLayer`<sup>Optional</sup> <a name="kubectlLayer" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.kubectlLayer"></a>

```typescript
public readonly kubectlLayer: ILayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.namespaces"></a>

```typescript
public readonly namespaces: {[ key: string ]: NamespaceSpec};
```

- *Type:* {[ key: string ]: <a href="#@smallcase/cdk-eks-cluster-module.NamespaceSpec">NamespaceSpec</a>}

---

##### `publicAllowAccess`<sup>Optional</sup> <a name="publicAllowAccess" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.publicAllowAccess"></a>

```typescript
public readonly publicAllowAccess: string[];
```

- *Type:* string[]

---

##### `skipExternalDNS`<sup>Optional</sup> <a name="skipExternalDNS" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.skipExternalDNS"></a>

```typescript
public readonly skipExternalDNS: boolean;
```

- *Type:* boolean

---

##### `teamExistingRolePermission`<sup>Optional</sup> <a name="teamExistingRolePermission" id="@smallcase/cdk-eks-cluster-module.ClusterConfig.property.teamExistingRolePermission"></a>

```typescript
public readonly teamExistingRolePermission: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### CommonHelmChartsProps <a name="CommonHelmChartsProps" id="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.Initializer"></a>

```typescript
import { CommonHelmChartsProps } from '@smallcase/cdk-eks-cluster-module'

const commonHelmChartsProps: CommonHelmChartsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.ICluster</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.helmProps">helmProps</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.StandardHelmProps">StandardHelmProps</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.dependentNamespaces">dependentNamespaces</a></code> | <code>aws-cdk-lib.aws_eks.KubernetesManifest[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.iamPolicyPath">iamPolicyPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.logCharts">logCharts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.serviceAccounts">serviceAccounts</a></code> | <code>string[]</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.cluster"></a>

```typescript
public readonly cluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_eks.ICluster

---

##### `helmProps`<sup>Required</sup> <a name="helmProps" id="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.helmProps"></a>

```typescript
public readonly helmProps: StandardHelmProps;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.StandardHelmProps">StandardHelmProps</a>

---

##### `dependentNamespaces`<sup>Optional</sup> <a name="dependentNamespaces" id="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.dependentNamespaces"></a>

```typescript
public readonly dependentNamespaces: KubernetesManifest[];
```

- *Type:* aws-cdk-lib.aws_eks.KubernetesManifest[]

---

##### `iamPolicyPath`<sup>Optional</sup> <a name="iamPolicyPath" id="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.iamPolicyPath"></a>

```typescript
public readonly iamPolicyPath: string[];
```

- *Type:* string[]

---

##### `logCharts`<sup>Optional</sup> <a name="logCharts" id="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.logCharts"></a>

```typescript
public readonly logCharts: boolean;
```

- *Type:* boolean

---

##### `serviceAccounts`<sup>Optional</sup> <a name="serviceAccounts" id="@smallcase/cdk-eks-cluster-module.CommonHelmChartsProps.property.serviceAccounts"></a>

```typescript
public readonly serviceAccounts: string[];
```

- *Type:* string[]

---

### CoreAddonProps <a name="CoreAddonProps" id="@smallcase/cdk-eks-cluster-module.CoreAddonProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.CoreAddonProps.Initializer"></a>

```typescript
import { CoreAddonProps } from '@smallcase/cdk-eks-cluster-module'

const coreAddonProps: CoreAddonProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.Cluster</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.addonVersion">addonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.configurationValues">configurationValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.resolveConflicts">resolveConflicts</a></code> | <code>boolean</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_eks.Cluster

---

##### `addonVersion`<sup>Optional</sup> <a name="addonVersion" id="@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.addonVersion"></a>

```typescript
public readonly addonVersion: string;
```

- *Type:* string

---

##### `configurationValues`<sup>Optional</sup> <a name="configurationValues" id="@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.configurationValues"></a>

```typescript
public readonly configurationValues: string;
```

- *Type:* string

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resolveConflicts`<sup>Optional</sup> <a name="resolveConflicts" id="@smallcase/cdk-eks-cluster-module.CoreAddonProps.property.resolveConflicts"></a>

```typescript
public readonly resolveConflicts: boolean;
```

- *Type:* boolean

---

### CoreAddonValuesProps <a name="CoreAddonValuesProps" id="@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps.Initializer"></a>

```typescript
import { CoreAddonValuesProps } from '@smallcase/cdk-eks-cluster-module'

const coreAddonValuesProps: CoreAddonValuesProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps.property.addonVersion">addonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps.property.configurationValues">configurationValues</a></code> | <code>string</code> | *No description.* |

---

##### `addonVersion`<sup>Optional</sup> <a name="addonVersion" id="@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps.property.addonVersion"></a>

```typescript
public readonly addonVersion: string;
```

- *Type:* string

---

##### `configurationValues`<sup>Optional</sup> <a name="configurationValues" id="@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps.property.configurationValues"></a>

```typescript
public readonly configurationValues: string;
```

- *Type:* string

---

### DefaultCommonComponents <a name="DefaultCommonComponents" id="@smallcase/cdk-eks-cluster-module.DefaultCommonComponents"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.Initializer"></a>

```typescript
import { DefaultCommonComponents } from '@smallcase/cdk-eks-cluster-module'

const defaultCommonComponents: DefaultCommonComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.property.awsEbsCsiDriver">awsEbsCsiDriver</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps">DefaultCommonComponentsProps</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.property.awsEfsCsiDriver">awsEfsCsiDriver</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps">DefaultCommonComponentsProps</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.property.clusterAutoscaler">clusterAutoscaler</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps">DefaultCommonComponentsProps</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.property.externalDns">externalDns</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps">DefaultCommonComponentsProps</a></code> | *No description.* |

---

##### `awsEbsCsiDriver`<sup>Optional</sup> <a name="awsEbsCsiDriver" id="@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.property.awsEbsCsiDriver"></a>

```typescript
public readonly awsEbsCsiDriver: DefaultCommonComponentsProps;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps">DefaultCommonComponentsProps</a>

---

##### `awsEfsCsiDriver`<sup>Optional</sup> <a name="awsEfsCsiDriver" id="@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.property.awsEfsCsiDriver"></a>

```typescript
public readonly awsEfsCsiDriver: DefaultCommonComponentsProps;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps">DefaultCommonComponentsProps</a>

---

##### `clusterAutoscaler`<sup>Optional</sup> <a name="clusterAutoscaler" id="@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.property.clusterAutoscaler"></a>

```typescript
public readonly clusterAutoscaler: DefaultCommonComponentsProps;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps">DefaultCommonComponentsProps</a>

---

##### `externalDns`<sup>Optional</sup> <a name="externalDns" id="@smallcase/cdk-eks-cluster-module.DefaultCommonComponents.property.externalDns"></a>

```typescript
public readonly externalDns: DefaultCommonComponentsProps;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps">DefaultCommonComponentsProps</a>

---

### DefaultCommonComponentsProps <a name="DefaultCommonComponentsProps" id="@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps.Initializer"></a>

```typescript
import { DefaultCommonComponentsProps } from '@smallcase/cdk-eks-cluster-module'

const defaultCommonComponentsProps: DefaultCommonComponentsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@smallcase/cdk-eks-cluster-module.DefaultCommonComponentsProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

### EKSClusterProps <a name="EKSClusterProps" id="@smallcase/cdk-eks-cluster-module.EKSClusterProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.EKSClusterProps.Initializer"></a>

```typescript
import { EKSClusterProps } from '@smallcase/cdk-eks-cluster-module'

const eKSClusterProps: EKSClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig">ClusterConfig</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.workerSecurityGroup">workerSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.addonProps">addonProps</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.AddonProps">AddonProps</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.clusterVPC">clusterVPC</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.coreDnsAddonProps">coreDnsAddonProps</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps">CoreAddonValuesProps</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.kubeProxyAddonProps">kubeProxyAddonProps</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps">CoreAddonValuesProps</a></code> | *No description.* |

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: ClusterConfig;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.ClusterConfig">ClusterConfig</a>

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

---

##### `region`<sup>Required</sup> <a name="region" id="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `workerSecurityGroup`<sup>Required</sup> <a name="workerSecurityGroup" id="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.workerSecurityGroup"></a>

```typescript
public readonly workerSecurityGroup: SecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup

---

##### `addonProps`<sup>Optional</sup> <a name="addonProps" id="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.addonProps"></a>

```typescript
public readonly addonProps: AddonProps;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.AddonProps">AddonProps</a>

---

##### `clusterVPC`<sup>Optional</sup> <a name="clusterVPC" id="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.clusterVPC"></a>

```typescript
public readonly clusterVPC: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

##### `coreDnsAddonProps`<sup>Optional</sup> <a name="coreDnsAddonProps" id="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.coreDnsAddonProps"></a>

```typescript
public readonly coreDnsAddonProps: CoreAddonValuesProps;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps">CoreAddonValuesProps</a>

---

##### `kubeProxyAddonProps`<sup>Optional</sup> <a name="kubeProxyAddonProps" id="@smallcase/cdk-eks-cluster-module.EKSClusterProps.property.kubeProxyAddonProps"></a>

```typescript
public readonly kubeProxyAddonProps: CoreAddonValuesProps;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.CoreAddonValuesProps">CoreAddonValuesProps</a>

---

### FargateProfile <a name="FargateProfile" id="@smallcase/cdk-eks-cluster-module.FargateProfile"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.FargateProfile.Initializer"></a>

```typescript
import { FargateProfile } from '@smallcase/cdk-eks-cluster-module'

const fargateProfile: FargateProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.FargateProfile.property.namespaces">namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.FargateProfile.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.FargateProfile.property.labels">labels</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.FargateProfile.property.podExecutionRole">podExecutionRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.FargateProfile.property.subnetSelection">subnetSelection</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | *No description.* |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@smallcase/cdk-eks-cluster-module.FargateProfile.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@smallcase/cdk-eks-cluster-module.FargateProfile.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@smallcase/cdk-eks-cluster-module.FargateProfile.property.labels"></a>

```typescript
public readonly labels: InternalMap;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a>

---

##### `podExecutionRole`<sup>Optional</sup> <a name="podExecutionRole" id="@smallcase/cdk-eks-cluster-module.FargateProfile.property.podExecutionRole"></a>

```typescript
public readonly podExecutionRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

##### `subnetSelection`<sup>Optional</sup> <a name="subnetSelection" id="@smallcase/cdk-eks-cluster-module.FargateProfile.property.subnetSelection"></a>

```typescript
public readonly subnetSelection: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

---

### InternalMap <a name="InternalMap" id="@smallcase/cdk-eks-cluster-module.InternalMap"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.InternalMap.Initializer"></a>

```typescript
import { InternalMap } from '@smallcase/cdk-eks-cluster-module'

const internalMap: InternalMap = { ... }
```


### NamespaceSpec <a name="NamespaceSpec" id="@smallcase/cdk-eks-cluster-module.NamespaceSpec"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.NamespaceSpec.Initializer"></a>

```typescript
import { NamespaceSpec } from '@smallcase/cdk-eks-cluster-module'

const namespaceSpec: NamespaceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NamespaceSpec.property.annotations">annotations</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NamespaceSpec.property.labels">labels</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a></code> | *No description.* |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@smallcase/cdk-eks-cluster-module.NamespaceSpec.property.annotations"></a>

```typescript
public readonly annotations: InternalMap;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a>

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@smallcase/cdk-eks-cluster-module.NamespaceSpec.property.labels"></a>

```typescript
public readonly labels: InternalMap;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a>

---

### NodeGroupConfig <a name="NodeGroupConfig" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.Initializer"></a>

```typescript
import { NodeGroupConfig } from '@smallcase/cdk-eks-cluster-module'

const nodeGroupConfig: NodeGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.instanceTypes">instanceTypes</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.labels">labels</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.subnetGroupName">subnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.taints">taints</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.capacityType">capacityType</a></code> | <code>aws-cdk-lib.aws_eks.CapacityType</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.desiredSize">desiredSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.diskSize">diskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.launchTemplateSpec">launchTemplateSpec</a></code> | <code>aws-cdk-lib.aws_eks.LaunchTemplateSpec</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.nodeAMIVersion">nodeAMIVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.sshKeyName">sshKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.subnetAz">subnetAz</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.tags">tags</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a></code> | *No description.* |

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: InstanceType[];
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.labels"></a>

```typescript
public readonly labels: InternalMap;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a>

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.subnetGroupName"></a>

```typescript
public readonly subnetGroupName: string;
```

- *Type:* string

---

##### `taints`<sup>Required</sup> <a name="taints" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.taints"></a>

```typescript
public readonly taints: InternalMap;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a>

---

##### `capacityType`<sup>Optional</sup> <a name="capacityType" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.capacityType"></a>

```typescript
public readonly capacityType: CapacityType;
```

- *Type:* aws-cdk-lib.aws_eks.CapacityType

---

##### `desiredSize`<sup>Optional</sup> <a name="desiredSize" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.desiredSize"></a>

```typescript
public readonly desiredSize: number;
```

- *Type:* number

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

---

##### `launchTemplateSpec`<sup>Optional</sup> <a name="launchTemplateSpec" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.launchTemplateSpec"></a>

```typescript
public readonly launchTemplateSpec: LaunchTemplateSpec;
```

- *Type:* aws-cdk-lib.aws_eks.LaunchTemplateSpec

---

##### `nodeAMIVersion`<sup>Optional</sup> <a name="nodeAMIVersion" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.nodeAMIVersion"></a>

```typescript
public readonly nodeAMIVersion: string;
```

- *Type:* string

---

##### `sshKeyName`<sup>Optional</sup> <a name="sshKeyName" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.sshKeyName"></a>

```typescript
public readonly sshKeyName: string;
```

- *Type:* string

---

##### `subnetAz`<sup>Optional</sup> <a name="subnetAz" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.subnetAz"></a>

```typescript
public readonly subnetAz: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@smallcase/cdk-eks-cluster-module.NodeGroupConfig.property.tags"></a>

```typescript
public readonly tags: InternalMap;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.InternalMap">InternalMap</a>

---

### StandardHelmProps <a name="StandardHelmProps" id="@smallcase/cdk-eks-cluster-module.StandardHelmProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.StandardHelmProps.Initializer"></a>

```typescript
import { StandardHelmProps } from '@smallcase/cdk-eks-cluster-module'

const standardHelmProps: StandardHelmProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.chartName">chartName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.chartReleaseName">chartReleaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.chartVersion">chartVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.createNamespace">createNamespace</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.helmRepository">helmRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.helmValues">helmValues</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.localHelmChart">localHelmChart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `chartName`<sup>Required</sup> <a name="chartName" id="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.chartName"></a>

```typescript
public readonly chartName: string;
```

- *Type:* string

---

##### `chartReleaseName`<sup>Optional</sup> <a name="chartReleaseName" id="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.chartReleaseName"></a>

```typescript
public readonly chartReleaseName: string;
```

- *Type:* string

---

##### `chartVersion`<sup>Optional</sup> <a name="chartVersion" id="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.chartVersion"></a>

```typescript
public readonly chartVersion: string;
```

- *Type:* string

---

##### `createNamespace`<sup>Optional</sup> <a name="createNamespace" id="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean;
```

- *Type:* boolean

---

##### `helmRepository`<sup>Optional</sup> <a name="helmRepository" id="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.helmRepository"></a>

```typescript
public readonly helmRepository: string;
```

- *Type:* string

---

##### `helmValues`<sup>Optional</sup> <a name="helmValues" id="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.helmValues"></a>

```typescript
public readonly helmValues: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `localHelmChart`<sup>Optional</sup> <a name="localHelmChart" id="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.localHelmChart"></a>

```typescript
public readonly localHelmChart: string;
```

- *Type:* string

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@smallcase/cdk-eks-cluster-module.StandardHelmProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

### VpcCniAddonProps <a name="VpcCniAddonProps" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps"></a>

#### Initializer <a name="Initializer" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.Initializer"></a>

```typescript
import { VpcCniAddonProps } from '@smallcase/cdk-eks-cluster-module'

const vpcCniAddonProps: VpcCniAddonProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_eks.Cluster</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.addonVersion">addonVersion</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.configurationValues">configurationValues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.resolveConflicts">resolveConflicts</a></code> | <code>boolean</code> | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.cluster"></a>

```typescript
public readonly cluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_eks.Cluster

---

##### `addonVersion`<sup>Optional</sup> <a name="addonVersion" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.addonVersion"></a>

```typescript
public readonly addonVersion: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

---

##### `configurationValues`<sup>Optional</sup> <a name="configurationValues" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.configurationValues"></a>

```typescript
public readonly configurationValues: string;
```

- *Type:* string

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resolveConflicts`<sup>Optional</sup> <a name="resolveConflicts" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonProps.property.resolveConflicts"></a>

```typescript
public readonly resolveConflicts: boolean;
```

- *Type:* boolean

---

## Classes <a name="Classes" id="Classes"></a>

### VpcCniAddonVersion <a name="VpcCniAddonVersion" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion"></a>

#### Initializers <a name="Initializers" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.Initializer"></a>

```typescript
import { VpcCniAddonVersion } from '@smallcase/cdk-eks-cluster-module'

new VpcCniAddonVersion(version: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.Initializer.parameter.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `version`<sup>Required</sup> <a name="version" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.Initializer.parameter.version"></a>

- *Type:* string

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.of">of</a></code> | Custom add-on version. |

---

##### `of` <a name="of" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.of"></a>

```typescript
import { VpcCniAddonVersion } from '@smallcase/cdk-eks-cluster-module'

VpcCniAddonVersion.of(version: string)
```

Custom add-on version.

###### `version`<sup>Required</sup> <a name="version" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.of.parameter.version"></a>

- *Type:* string

custom add-on version.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `version`<sup>Required</sup> <a name="version" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_10_1">V1_10_1</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.10.1. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_10_2">V1_10_2</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.10.2. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_10_3">V1_10_3</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.10.3. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_11_0">V1_11_0</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.11.0. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_11_2">V1_11_2</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.11.2. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_11_3">V1_11_3</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.11.3. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_11_4">V1_11_4</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.11.4. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_0">V1_12_0</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.12.0. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_1">V1_12_1</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.12.1. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_2">V1_12_2</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.12.2. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_5">V1_12_5</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.12.5. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_5_2">V1_12_5_2</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.12.5.2. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_17_1_1">V1_17_1_1</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.17.1.1. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_6_3">V1_6_3</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.6.3. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_7_10">V1_7_10</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.7.10. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_7_5">V1_7_5</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.7.5. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_7_6">V1_7_6</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.7.6. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_7_9">V1_7_9</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.7.9. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_8_0">V1_8_0</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.8.0. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_9_0">V1_9_0</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.9.0. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_9_1">V1_9_1</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.9.1. |
| <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_9_3">V1_9_3</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a></code> | vpc-cni version 1.9.3. |

---

##### `V1_10_1`<sup>Required</sup> <a name="V1_10_1" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_10_1"></a>

```typescript
public readonly V1_10_1: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.10.1.

---

##### `V1_10_2`<sup>Required</sup> <a name="V1_10_2" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_10_2"></a>

```typescript
public readonly V1_10_2: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.10.2.

---

##### `V1_10_3`<sup>Required</sup> <a name="V1_10_3" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_10_3"></a>

```typescript
public readonly V1_10_3: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.10.3.

---

##### `V1_11_0`<sup>Required</sup> <a name="V1_11_0" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_11_0"></a>

```typescript
public readonly V1_11_0: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.11.0.

---

##### `V1_11_2`<sup>Required</sup> <a name="V1_11_2" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_11_2"></a>

```typescript
public readonly V1_11_2: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.11.2.

---

##### `V1_11_3`<sup>Required</sup> <a name="V1_11_3" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_11_3"></a>

```typescript
public readonly V1_11_3: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.11.3.

---

##### `V1_11_4`<sup>Required</sup> <a name="V1_11_4" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_11_4"></a>

```typescript
public readonly V1_11_4: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.11.4.

---

##### `V1_12_0`<sup>Required</sup> <a name="V1_12_0" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_0"></a>

```typescript
public readonly V1_12_0: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.12.0.

---

##### `V1_12_1`<sup>Required</sup> <a name="V1_12_1" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_1"></a>

```typescript
public readonly V1_12_1: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.12.1.

---

##### `V1_12_2`<sup>Required</sup> <a name="V1_12_2" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_2"></a>

```typescript
public readonly V1_12_2: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.12.2.

---

##### `V1_12_5`<sup>Required</sup> <a name="V1_12_5" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_5"></a>

```typescript
public readonly V1_12_5: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.12.5.

---

##### `V1_12_5_2`<sup>Required</sup> <a name="V1_12_5_2" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_12_5_2"></a>

```typescript
public readonly V1_12_5_2: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.12.5.2.

---

##### `V1_17_1_1`<sup>Required</sup> <a name="V1_17_1_1" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_17_1_1"></a>

```typescript
public readonly V1_17_1_1: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.17.1.1.

---

##### `V1_6_3`<sup>Required</sup> <a name="V1_6_3" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_6_3"></a>

```typescript
public readonly V1_6_3: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.6.3.

---

##### `V1_7_10`<sup>Required</sup> <a name="V1_7_10" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_7_10"></a>

```typescript
public readonly V1_7_10: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.7.10.

---

##### `V1_7_5`<sup>Required</sup> <a name="V1_7_5" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_7_5"></a>

```typescript
public readonly V1_7_5: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.7.5.

---

##### `V1_7_6`<sup>Required</sup> <a name="V1_7_6" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_7_6"></a>

```typescript
public readonly V1_7_6: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.7.6.

---

##### `V1_7_9`<sup>Required</sup> <a name="V1_7_9" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_7_9"></a>

```typescript
public readonly V1_7_9: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.7.9.

---

##### `V1_8_0`<sup>Required</sup> <a name="V1_8_0" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_8_0"></a>

```typescript
public readonly V1_8_0: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.8.0.

---

##### `V1_9_0`<sup>Required</sup> <a name="V1_9_0" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_9_0"></a>

```typescript
public readonly V1_9_0: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.9.0.

---

##### `V1_9_1`<sup>Required</sup> <a name="V1_9_1" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_9_1"></a>

```typescript
public readonly V1_9_1: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.9.1.

---

##### `V1_9_3`<sup>Required</sup> <a name="V1_9_3" id="@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion.property.V1_9_3"></a>

```typescript
public readonly V1_9_3: VpcCniAddonVersion;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.VpcCniAddonVersion">VpcCniAddonVersion</a>

vpc-cni version 1.9.3.

---

## Protocols <a name="Protocols" id="Protocols"></a>

### ICommonComponentsProps <a name="ICommonComponentsProps" id="@smallcase/cdk-eks-cluster-module.ICommonComponentsProps"></a>

- *Implemented By:* <a href="#@smallcase/cdk-eks-cluster-module.ICommonComponentsProps">ICommonComponentsProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ICommonComponentsProps.property.helm">helm</a></code> | <code><a href="#@smallcase/cdk-eks-cluster-module.StandardHelmProps">StandardHelmProps</a></code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ICommonComponentsProps.property.iamPolicyPath">iamPolicyPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@smallcase/cdk-eks-cluster-module.ICommonComponentsProps.property.serviceAccounts">serviceAccounts</a></code> | <code>string[]</code> | *No description.* |

---

##### `helm`<sup>Required</sup> <a name="helm" id="@smallcase/cdk-eks-cluster-module.ICommonComponentsProps.property.helm"></a>

```typescript
public readonly helm: StandardHelmProps;
```

- *Type:* <a href="#@smallcase/cdk-eks-cluster-module.StandardHelmProps">StandardHelmProps</a>

---

##### `iamPolicyPath`<sup>Optional</sup> <a name="iamPolicyPath" id="@smallcase/cdk-eks-cluster-module.ICommonComponentsProps.property.iamPolicyPath"></a>

```typescript
public readonly iamPolicyPath: string[];
```

- *Type:* string[]

---

##### `serviceAccounts`<sup>Optional</sup> <a name="serviceAccounts" id="@smallcase/cdk-eks-cluster-module.ICommonComponentsProps.property.serviceAccounts"></a>

```typescript
public readonly serviceAccounts: string[];
```

- *Type:* string[]

---

