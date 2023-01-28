const { AwsCdkConstructLibrary, ProjectType } = require('projen/lib/awscdk');
const { NpmAccess } = require('projen/lib/javascript');

const CDK_VERSION = '2.34.0';
const project = new AwsCdkConstructLibrary({
  author: '@InfraTeam',
  authorAddress: 'bharat.parmar@smallcase.com',
  cdkVersion: `${CDK_VERSION}`,
  cdkVersionPinning: true,
  constructsVersion: '10.0.5',
  constructsVersionPinning: true,
  releaseWorkflow: true,
  defaultReleaseBranch: 'main',
  release: true,
  name: '@smallcase/cdk-eks-cluster-module',
  packageName: '@smallcase/cdk-eks-cluster-module',
  repositoryUrl: 'https://github.com/smallcase/cdk-eks-cluster-module.git',
  // cdkDependencies: [
  // ],
  devDeps: [
    `aws-cdk-lib@${CDK_VERSION}`,
    'cdk8s@2.1.23',
  ],
  tsconfig: {
    compilerOptions: {
      strictPropertyInitialization: false,
      esModuleInterop: true,
    },
  },
  context: {
    '@aws-cdk/core:newStyleStackSynthesis': true,
  },
  peerDeps: [
    `aws-cdk-lib@${CDK_VERSION}`,
    'cdk8s@2.2.74',
  ],
  python: {
    distName: 'cdk-eks-cluster-module',
    module: 'cdk_eks_cluster_module',
  },
  publishToGo: {
    gitUserName: 'sc-infra-bot',
    gitUserEmail: 'infra@smallcase.com',
    moduleName: 'github.com/smallcase/cdk-eks-cluster-module-go',
  },
  npmAccess: NpmAccess.PUBLIC,
  releaseToNpm: true,
  releaseEveryCommit: true,
  depsUpgrade: false,
  licensed: true, /* Indicates if a license should be added. */
  dependabot: false, /* Include dependabot configuration. */
  mergify: false, /* Adds mergify configuration. */
  pullRequestTemplate: true, /* Include a GitHub pull request template. */
  // cdkDependencies: undefined,        /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
});
const common_exclude = ['cdk.out', 'src/onboard.json', 'cdk.context.json', 'image', 'yarn-error.log', 'coverage', '.vscode'];
project.gitignore.exclude(...common_exclude);
project.npmignore.exclude(...common_exclude);
project.synth();
