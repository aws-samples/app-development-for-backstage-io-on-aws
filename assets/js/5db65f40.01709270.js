"use strict";(self.webpackChunk_aws_harmonix_on_aws_website=self.webpackChunk_aws_harmonix_on_aws_website||[]).push([[8633],{1190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(4848),i=t(8453);const r={sidebar_position:2},a="Entities",o={id:"techdocs/entities",title:"Entities",description:"Harmonix on AWS uses some Backstage out of the box entities but also introduces two new entities in the software catalog.",source:"@site/docs/techdocs/entities.md",sourceDirName:"techdocs",slug:"/techdocs/entities",permalink:"/docs/techdocs/entities",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/techdocs/architecture"},next:{title:"Plugins",permalink:"/docs/techdocs/plugins"}},c={},l=[{value:"AWS Environment &amp; Environment Provider",id:"aws-environment--environment-provider",level:2},{value:"AWS Environment",id:"aws-environment",level:3},{value:"AWS Environment Provider",id:"aws-environment-provider",level:3},{value:"Components",id:"components",level:2},{value:"The structure of application component entity:",id:"the-structure-of-application-component-entity",level:3},{value:"Resource",id:"resource",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"entities",children:"Entities"})}),"\n",(0,s.jsx)(n.p,{children:"Harmonix on AWS uses some Backstage out of the box entities but also introduces two new entities in the software catalog."}),"\n",(0,s.jsx)(n.h2,{id:"aws-environment--environment-provider",children:"AWS Environment & Environment Provider"}),"\n",(0,s.jsx)(n.p,{children:"These custom Backstage entity kinds were created to represent an abstract AWS environment and environment provider."}),"\n",(0,s.jsx)(n.h3,{id:"aws-environment",children:"AWS Environment"}),"\n",(0,s.jsx)(n.p,{children:"An abstracted entity that captures the intent of use of a particular environment instance, including:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Single/multi account."}),"\n",(0,s.jsx)(n.li,{children:"Single/multi region."}),"\n",(0,s.jsx)(n.li,{children:"Category \u2013 dev, test, stage, prod etc."}),"\n",(0,s.jsx)(n.li,{children:"Classification \u2013 private, internal, public."}),"\n",(0,s.jsx)(n.li,{children:"Requires approval - for automated pipeline deployments."}),"\n",(0,s.jsx)(n.li,{children:"System - for participation in higher level systems."}),"\n",(0,s.jsx)(n.li,{children:"Hierarchy \u2013 where does it position in the hierarchy of other environments (low \u2013 dev, high \u2013 prod)."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["AWS Environment Entity Definition: ",(0,s.jsx)(n.a,{href:"https://github.com/awslabs/harmonix/blob/main/backstage-plugins/plugins/aws-apps-backend/src/model/kind/AWSEnvironmentEntityV1.ts",children:"AWSEnvironmentEntityV1.ts"})]})}),"\n",(0,s.jsx)(n.p,{children:"AWS Environment Principles:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Maintain 1",":N"," relationship with AWS environment providers."]}),"\n",(0,s.jsx)(n.li,{children:"Integrated with pipeline definitions for deployments that require approval."}),"\n",(0,s.jsx)(n.li,{children:"Customizable and extendable."}),"\n",(0,s.jsx)(n.li,{children:"Can be used with different types of Environment Providers."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="AWSEnvironmentEntityV1.ts"',children:" export interface AWSEnvironmentEntityV1 extends Entity {\n    apiVersion: 'aws.backstage.io/v1alpha';\n    kind: 'AWSEnvironment';\n    spec: {\n    ...\n    }\n }\n"})}),"\n",(0,s.jsx)(n.p,{children:"AWS Environment enforces the creation of a relationship with environment providers through the entity Processor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="AWSEnvironmentEntitiesProcessor.ts"',children:"  if (targetRef.kind == 'awsenvironmentprovider') {\n              emit(\n                processingResult.relation({\n                  source: selfRef,\n                  type: RELATION_DEPENDS_ON,\n                  target: {\n                    kind: targetRef.kind,\n                    namespace: targetRef.namespace,\n                    name: targetRef.name,\n                  },\n                }),\n              );\n              emit(\n                processingResult.relation({\n                  source: {\n                    kind: targetRef.kind,\n                    namespace: targetRef.namespace,\n                    name: targetRef.name,\n                  },\n                  type: RELATION_DEPENDENCY_OF,\n                  target: selfRef,\n                }),\n              );\n            }\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["AWS Environment Processor code: ",(0,s.jsx)(n.a,{href:"https://github.com/awslabs/harmonix/blob/main/backstage-plugins/plugins/aws-apps-backend/src/model/processor/AWSEnvironmentEntitiesProcessor.ts",children:"AWSEnvironmentEntitiesProcessor.ts"})]})}),"\n",(0,s.jsx)(n.h3,{id:"aws-environment-provider",children:"AWS Environment Provider"}),"\n",(0,s.jsx)(n.p,{children:"A custom kind entity that captures a place in the cloud that can be used to provision and run applications.\nAn Environment provider can be defined by:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"A particular AWS Account"}),"\n",(0,s.jsx)(n.li,{children:"A particular AWS Region"}),"\n",(0,s.jsxs)(n.li,{children:["A name and prefix composition for organization segmentation (payments",":development",", hr",":production"," etc.)"]}),"\n",(0,s.jsx)(n.li,{children:"Mutually exclusive \u2013 multiple distinct providers can be created within a single AWS account and region"}),"\n",(0,s.jsx)(n.li,{children:"Isolated from other providers / accounts"}),"\n",(0,s.jsx)(n.li,{children:"Provisioning role - a role that has sufficient permissions to provision the resources for the designated types of applications."}),"\n",(0,s.jsx)(n.li,{children:"Operations role - a role that has sufficient permissions to operate the designated types of applications."}),"\n",(0,s.jsx)(n.li,{children:"Audit table - a dedicated table to capture the actions performed on the applications running in the current environment."}),"\n",(0,s.jsx)(n.li,{children:"Optional: The underlying networking (VPC), runtime environment (ECS/EKS/Serverless), and required applications infrastructure"}),"\n"]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"aws-environment-provider.png",src:t(4561).A+"",width:"1068",height:"494"})})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["AWS Environment Provider Entity Definition: ",(0,s.jsx)(n.a,{href:"https://github.com/awslabs/harmonix/blob/main/backstage-plugins/plugins/aws-apps-backend/src/model/kind/AWSEnvironmentProviderEntityV1.ts",children:"AWSEnvironmentProviderEntityV1.ts"})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="AWSEnvironmentEntityV1.ts"',children:" export interface AWSEnvironmentProviderEntityV1 extends Entity {\n    apiVersion: 'aws.backstage.io/v1alpha';\n    kind: 'AWSEnvironmentProvider';\n    spec: {\n    ...\n    }\n }\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["AWS Environment Provider Processor code: ",(0,s.jsx)(n.a,{href:"https://github.com/awslabs/harmonix/blob/main/backstage-plugins/plugins/aws-apps-backend/src/model/processor/AWSEnvironmentProviderEntitiesProcessor.ts",children:"AWSEnvironmentProviderEntitiesProcessor.ts"})]})}),"\n",(0,s.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,s.jsxs)(n.p,{children:["We map applications to the existing Backstage entity component. While the concept of an application can be interpreted in different ways, we found the ",(0,s.jsx)(n.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format/#kind-component",children:"kind component"})," to be very close to it."]}),"\n",(0,s.jsx)(n.h3,{id:"the-structure-of-application-component-entity",children:"The structure of application component entity:"}),"\n",(0,s.jsx)(n.p,{children:"When provisioning an application, the template creates a Backstage catalog info yaml file with the below properties:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: "Your App name"\n  description: "Description"\n  tags:\n    - aws\n    - nodejs\n  iacType: cdk\n  componentState: cloudformation\n  gitProvider: gitlab\n  repoSecretArn: "arn:aws:secretsmanager:us-east-1:**********.:secret:***"\n  spec:\n    type: aws-app\n    owner: "group:default/developers"\n    lifecycle: experimental\n    dependsOn: [FirstDeployedEnvironment]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We introduce a new component ",(0,s.jsx)(n.strong,{children:"spec type"})," - ",(0,s.jsx)(n.em,{children:"aws-app"})," which will be used to mark applications that run on AWS. This is used to provide a specific UI experience that allows users to operate the application in the AWS cloud."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"iacType"})," property indicates the type of the infrastructure as code this app was provisioned with - this impacts both the pipeline as well as the UI experience that are based on Terraform or CDK (state management)."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"You may notice that repoSecretArn is created regardless of the environment where the application is deployed - that is because the access to the repository is part of the platform / solution account regardless of where is it being deployed."})}),"\n",(0,s.jsxs)(n.p,{children:["After the application provisioning pipeline completes, the pipeline will update the entity with the environment deployed resources under the ",(0,s.jsx)(n.em,{children:"appData"})," tag:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: "AML-Detection-EMEA"\n  description: "AML Detection App for EMEA"\n  tags:\n    - aws\n    - nodejs\n  annotations:\n    aws.amazon.com/opa-repoSecretArn: "arn:aws:secretsmanager:us-east-1:**********.:secret:aws-apps-aml-detection-emea-access-token-V9w8Ea"\n  iacType: cdk\n  componentState: cloudformation\n  gitProvider: gitlab\n  repoSecretArn: "arn:aws:secretsmanager:us-east-1:**********.:secret:aws-apps-aml-detection-emea-access-token-V9w8Ea"\n  appData:\n    EMEA-AML-dev:\n      emea-aml-dev:\n        EcrRepositoryUri: **********.dkr.ecr.eu-west-1.amazonaws.com/aml-detection-emea-emea-aml-dev\n        EcrRepositoryArn: arn:aws:ecr:eu-west-1:**********.:repository/aml-detection-emea-emea-aml-dev\n        EcsServiceArn: arn:aws:ecs:eu-west-1:**********.:service/aml-emea-aml-dev-cluster/AML-Detection-EMEA-emea-aml-dev\n        EcsTaskDefinitionArn: arn:aws:ecs:eu-west-1:**********.:task-definition/******:1\n        AlbEndpoint: http://AML-D-AMLDe-11C7BFBPF0RHP-**********..eu-west-1.elb.amazonaws.com\n        TaskLogGroup: /aws/apps/EMEA-AML-dev/emea-aml-dev/AML-Detection-EMEA\n        TaskExecutionRoleArn: AML-Detection-EMEA-ecs-resources-emea-aml-dev/AML-Detection-EMEA-taskDef/ExecutionRole\n        AppResourceGroup: arn:aws:resource-groups:eu-west-1:**********.:group/AML-Detection-EMEA-emea-aml-dev-rg\n        StackName: AML-Detection-EMEA-ecs-resources-emea-aml-dev\n    EMEA-AML-test:\n      emea-aml-test:\n        EcrRepositoryUri: **********..dkr.ecr.eu-west-1.amazonaws.com/aml-detection-emea-emea-aml-test\n        EcrRepositoryArn: arn:aws:ecr:eu-west-1:**********.:repository/aml-detection-emea-emea-aml-test\n        EcsServiceArn: arn:aws:ecs:eu-west-1:**********.:service/aml-emea-aml-test-cluster/AML-Detection-EMEA-emea-aml-test\n        EcsTaskDefinitionArn: arn:aws:ecs:eu-west-1:**********.:task-definition/*****:1\n        AlbEndpoint: http://AML-D-AMLDe-HNBIDJ2F0QER-**********.eu-west-1.elb.amazonaws.com\n        TaskLogGroup: /aws/apps/EMEA-AML-test/emea-aml-test/AML-Detection-EMEA\n        TaskExecutionRoleArn: AML-Detection-EMEA-ecs-resources-emea-aml-test/AML-Detection-EMEA-taskDef/ExecutionRole\n        AppResourceGroup: arn:aws:resource-groups:eu-west-1:**********.:group/AML-Detection-EMEA-emea-aml-test-rg\n        StackName: AML-Detection-EMEA-ecs-resources-emea-aml-test\nspec:\n  type: aws-app\n  owner: "group:default/developers"\n  lifecycle: experimental\n  dependsOn: [\'awsenvironment:default/EMEA-AML-dev\', \'awsenvironment:default/EMEA-AML-test\']\n\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You may notice that the example above describes an entity of an application that is deployed in two environments: ",(0,s.jsx)(n.em,{children:"EMEA-AML-dev"})," and ",(0,s.jsx)(n.em,{children:"EMEA-AML-test"})]})}),"\n",(0,s.jsx)(n.p,{children:"Similiarly a serverless application entity will look like :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: backstage.io/v1alpha1\nkind: Component\nmetadata:\n  name: "snacks"\n  kebabName: "snacks"\n  description: "get a list of yummy snack foods"\n  tags:\n    - aws\n    - rest\n    - swagger\n    - openapi\n    - apigateway\n    - serverless\n  iacType: cdk\n  repoSecretArn: "arn:aws:secretsmanager:us-east-1:**********:secret:aws-apps-snacks-access-token-0IMiXR"\n  appData:\n    api-team-dev:\n      api-team-dev:\n        AppResourceGroup: arn:aws:resource-groups:us-east-1:**********::group/snacks-api-team-dev-rg\n        StackName: snacks-serverless-api-resources-api-team-dev\n        AppStackName: snacks-api-team-dev\n        BuildBucketName: snacks-serverless-api-re-snacksapiteamdevbuildbuc-**********\n    api-team-qa:\n      api-team-qa:\n        AppResourceGroup: arn:aws:resource-groups:us-east-1:**********:group/snacks-api-team-qa-rg\n        StackName: snacks-serverless-api-resources-api-team-qa\n        AppStackName: snacks-api-team-qa\n        BuildBucketName: snacks-serverless-api-re-snacksapiteamqabuildbuck-**********\nspec:\n  type: aws-app\n  owner: "group:default/developers"\n  lifecycle: experimental\n  dependsOn: [\'awsenvironment:default/api-team-dev\', \'awsenvironment:default/api-team-qa\']\n'})}),"\n",(0,s.jsx)(n.h2,{id:"resource",children:"Resource"}),"\n",(0,s.jsxs)(n.p,{children:["Backstage resource entities are used to illustrate AWS resources. However, we extended the model so that we can articulate specific UI and processes that won't conflict with Backstage built-in capabilities of ",(0,s.jsx)(n.em,{children:"Resource"})," entities."]}),"\n",(0,s.jsx)(n.p,{children:"Resource entity catalog:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: backstage.io/v1alpha1\nkind: Resource\nmetadata:\n  name: "Commercial-Pymt-db-us"\n  description: "Payment DB for commercial apps in US"\n  tags:\n    - aws\n    - rds\n    - aws-resource\n    - database\n  annotations: null\n  iacType: cdk\n  resourceType: "aws-rds"\n  dbName: "pymtdb"\n  dbObjectName: "user"\n  appData:\n    US-Commercial:\n      us-commercial-dev:\n        Arn: arn:aws:rds:us-east-1:**********:db:commercial-pymt-db-us-rds-reso-rdsinstance05f4b4b0-**********\n        DbAdminSecretArn: arn:aws:secretsmanager:us-east-1:**********:secret:rdsInstanceSecretB79B16A5-**********-Y8ykm1\n        DbEndpoint: commercial-pymt-db-us-rds-reso-rdsinstance05f4b4b0-xwcil8gg8rvp.**********.us-east-1.rds.amazonaws.com\n        DbPort: \'5432\'\n        ResourceGroup: arn:aws:resource-groups:us-east-1:**********:group/Commercial-Pymt-db-us-us-commercial-dev-rg\n        StackName: Commercial-Pymt-db-us-rds-resource\nspec:\n  type: aws-resource\n  owner: "group:default/dev-ops"\n  lifecycle: experimental\n  dependsOn: [\'awsenvironment:default/US-Commercial\']\n'})}),"\n",(0,s.jsx)(n.p,{children:"Core resource entity properties:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"spec/type"})," -> ",(0,s.jsx)(n.em,{children:"aws-resource"})," . while we use the same kind of ",(0,s.jsx)(n.em,{children:"Resource"})," the spec type refers to aws-resource which can be easily used to filter our AWS related resources."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"resourceType"})," this is used to capture the different types of AWS resources including: aws-rds, s3, sns, sqs etc."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Extended resource entity properties:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"dbName"})," - in this aws-rds resource the property captures the database name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"dbObjectName"})," in this aws-rds resource the property captures the schema/user name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"appData"})," - under this property, all deployed resource artifacts are preserved - you can customize what properties you would like to bring back to the entity from the provisioning pipeline."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"AWS Resources are provisioned against a single environment. The process of deploying a resource to an additional environment is not supported to avoid managing different configurations or changes of the resource that are not identical across multiple environments."})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},4561:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/aws-environment-provider-a1b42733cd0842a8d6dcc8ec730d1fbc.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);