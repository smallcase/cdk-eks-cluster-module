import * as fs from 'fs';
import * as path from 'path';
import { aws_eks as eks, aws_iam as iam } from 'aws-cdk-lib';
import { HelmChart } from 'aws-cdk-lib/aws-eks';
import { Asset } from 'aws-cdk-lib/aws-s3-assets';
import { Construct } from 'constructs';

export interface CommonHelmChartsProps {
  readonly cluster: eks.ICluster;
  readonly iamPolicyPath?: string[];
  readonly serviceAccounts?: string[];
  readonly helmProps: StandardHelmProps;
  readonly logCharts?: boolean;
  readonly dependentNamespaces?: eks.KubernetesManifest[];
}


export interface StandardHelmProps {
  readonly chartVersion?: string;
  readonly chartName: string;
  readonly chartReleaseName?: string;
  readonly helmRepository?: string;
  readonly localHelmChart?: string;
  readonly namespace?: string;
  readonly createNamespace?: boolean;
  // readonly imageRepository?: string;
  // readonly imageTag?: string;
  // readonly tolerations?: eks.TaintSpec[];
  // readonly nodeSelector?: {
  //   [key: string]: string;
  // };
  readonly helmValues?: {
    [key: string]: any;
  };
}

export class CommonHelmCharts extends Construct {
  constructor(scope: Construct, id: string, props: CommonHelmChartsProps) {
    super(scope, id);
    const namespace = props.helmProps.namespace || 'kube-system';
    let serviceAccounts: eks.ServiceAccount[] | undefined;


    if (props.serviceAccounts != undefined) {
      props.serviceAccounts.forEach((sa, index)=> {
        let serviceAccount = new eks.ServiceAccount(this, sa, {
          namespace: namespace,
          name: sa,
          cluster: props.cluster,
        });
        if (props.iamPolicyPath != undefined && props.iamPolicyPath?.length > 1 && props.serviceAccounts?.length == props.iamPolicyPath.length ) {
          console.log(`inside greater than 1 ${props.iamPolicyPath[index]}`);
          let policy = JSON.parse(fs.readFileSync(path.join(props.iamPolicyPath[index]), 'utf8'));
          for (const statement of policy.Statement) {
            serviceAccount.addToPrincipalPolicy(iam.PolicyStatement.fromJson(statement));
          }
        } else if (props.iamPolicyPath != undefined && props.iamPolicyPath?.length == 1 ) {
          let policy = JSON.parse(fs.readFileSync(path.join(props.iamPolicyPath[props.iamPolicyPath?.length-1]), 'utf8'));
          for (const statement of policy.Statement) {
            serviceAccount.addToPrincipalPolicy(iam.PolicyStatement.fromJson(statement));
          }
        }
        serviceAccounts?.push(serviceAccount);
      });
    }

    if (props.helmProps.helmRepository == undefined && props.helmProps.localHelmChart == undefined ) {
      throw new Error(
        'You cannot reference this property',
      );
    }
    const chartReleaseName = props.helmProps.chartReleaseName ?? props.helmProps.chartName;
    const chart = props.helmProps.localHelmChart ? new HelmChart(this, `${props.helmProps.chartName}-helmchart`, {
      cluster: props.cluster,
      namespace: namespace,
      chartAsset: new Asset(this, `${chartReleaseName}-assets`, {
        path: path.join(props.helmProps.localHelmChart),
      }),
      release: props.helmProps.chartReleaseName ?? props.helmProps.chartName,
      values: props.helmProps.helmValues,
    }) : new HelmChart(this, `${chartReleaseName}-helmchart`, {
      cluster: props.cluster,
      namespace: namespace,
      repository: props.helmProps.helmRepository,
      chart: props.helmProps.chartName,
      release: props.helmProps.chartReleaseName ?? props.helmProps.chartName,
      version: props.helmProps.chartVersion,
      values: props.helmProps.helmValues,
      createNamespace: props.helmProps.createNamespace,
    });


    props.dependentNamespaces?.forEach(ns => {
      chart.node.addDependency(ns);
    });

    if (props.logCharts) {
      console.log(`print props ${props.iamPolicyPath}`);
      console.log(chart);
    }

    if (serviceAccounts) {
      chart.node.addDependency(serviceAccounts);
    }
    chart.node.addDependency(props.cluster.openIdConnectProvider);
  }
}
