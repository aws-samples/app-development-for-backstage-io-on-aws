"use strict";(self.webpackChunk_aws_harmonix_on_aws_website=self.webpackChunk_aws_harmonix_on_aws_website||[]).push([[5127],{1110:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=i(4848),a=i(8453);const o={sidebar_position:1},s="Architecture",r={id:"techdocs/architecture",title:"Architecture",description:"Harmonix on AWS Platform",source:"@site/docs/techdocs/architecture.md",sourceDirName:"techdocs",slug:"/techdocs/architecture",permalink:"/docs/techdocs/architecture",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tech Docs",permalink:"/docs/category/tech-docs"},next:{title:"Entities",permalink:"/docs/techdocs/entities"}},c={},p=[{value:"Harmonix on AWS Platform",id:"harmonix-on-aws-platform",level:2},{value:"Application Environments",id:"application-environments",level:2},{value:"AWS Cloud Components of an Environment Provider",id:"aws-cloud-components-of-an-environment-provider",level:2},{value:"How an Application Gets Created",id:"how-an-application-gets-created",level:2},{value:"Application CICD Pipeline",id:"application-cicd-pipeline",level:2}];function l(e){const t={h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"architecture",children:"Architecture"})}),"\n",(0,n.jsx)(t.h2,{id:"harmonix-on-aws-platform",children:"Harmonix on AWS Platform"}),"\n",(0,n.jsx)(t.p,{children:"The below diagram illustrates the major components of the Harmonix platform."}),"\n",(0,n.jsx)(t.p,{children:"The platform creation is automated by way of executing an AWS CDK script that will provision the needed resources in your AWS account. After running the script, you will have the Backstage developer portal running on AWS and it will be set up to persist its configurations to an RDS database. Backstage will be integrated with an identity provider to facilitate user logins. The default identity provider is Okta, but you can customize this to use a different one."}),"\n",(0,n.jsx)(t.p,{children:"Backstage is also integrated with a version control system. It is configured to discover entity definition files in existing Git repositories so that these entities will show up in the portal. Backstage will also be able to create new repositories to hold the source code of applications and other resources that are created by portal users."}),"\n",(0,n.jsx)(t.p,{children:"The default Harmonix version control system is GitLab. The platform creation scripts will set up a Community Edition of GitLab that runs on AWS, so that it can be used for demonstration purposes. It is possible through code modifications to switch to a different version control vendor that can be hosted on or outside of the AWS cloud."}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Website_Architecture_OPA_Platform.jpg",src:i(2822).A+"",width:"4746",height:"3229"})})}),"\n",(0,n.jsx)(t.h2,{id:"application-environments",children:"Application Environments"}),"\n",(0,n.jsx)(t.p,{children:"The below diagram illustrates the relationships between an application and the environments it gets deployed to."}),"\n",(0,n.jsx)(t.p,{children:"An environment is just a Backstage entity that contains metadata and associations with other entities such as applications and providers. Environment providers are more than just Backstage entities. Providers are backed by Git repositories that contain Infrastructure as Code scripts that provision resources to a specific AWS account and region. The provider's resources are created to support running applications of a certain type, such as containerized apps that will be run on a cluster or serverless apps."}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Website_App_Environments.jpg",src:i(908).A+"",width:"341",height:"451"})})}),"\n",(0,n.jsx)(t.h2,{id:"aws-cloud-components-of-an-environment-provider",children:"AWS Cloud Components of an Environment Provider"}),"\n",(0,n.jsx)(t.p,{children:"The below diagram illustrates the AWS cloud components that make up an environment provider that could be used to host a containerized application."}),"\n",(0,n.jsx)(t.p,{children:"Every provider must include a security role for Backstage CICD pipelines to use to provision and update applications in a specific AWS account and region. Providers's must also contain an operations role, which is assumed by the Backstage portal to grant it access to execute the operations that portal users are choosing. The final requirement of a provider is that it must contain an audit table, which Harmonix uses to track user actions made to applications running on the provider's account."}),"\n",(0,n.jsx)(t.p,{children:"Providers can also commonly include networking configurations, encryption keys, and secrets."}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"EnvironmentProviderComponents.png",src:i(1570).A+"",width:"2364",height:"1138"})})}),"\n",(0,n.jsx)(t.h2,{id:"how-an-application-gets-created",children:"How an Application Gets Created"}),"\n",(0,n.jsx)(t.p,{children:"Applications are created when developers log into Backstage and select an existing application template that meets their needs. They are then asked to fill in a form with vital information, such as the application's name and the environment it will run on."}),"\n",(0,n.jsx)(t.p,{children:"Backstage will create a new Git repository to hold the application's code, its CICD pipeline definition, and its Backstage entity definition. Backstage reads the entity definition so that the new application will show up on the portal."}),"\n",(0,n.jsx)(t.p,{children:"When the Git repository is created, its CICD pipeline will execute, resulting in resources being provisioned on AWS. Once the pipeline has finished, Backstage users will be able to see many attributes of the application, such as its running state and logs. They will also be able to perform operations on the application, such as changing environment variables or pushing a new release."}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Website_How_An_Opa_App_Gets_Created.jpg",src:i(9284).A+"",width:"753",height:"378"})})}),"\n",(0,n.jsx)(t.h2,{id:"application-cicd-pipeline",children:"Application CICD Pipeline"}),"\n",(0,n.jsx)(t.p,{children:"The below diagram illustrates an application's CICD pipeline. The application is associated with 3 environments (DEV, QA, PROD)."}),"\n",(0,n.jsx)(t.p,{children:"Harmonix is able to create pipelines like this for you when it creates a new application. These pipelines are capable of deploying to as many AWS accounts as you need."}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"CICD_With_AWS.jpg",src:i(4316).A+"",width:"711",height:"250"})})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4316:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/CICD_With_AWS-c7e81d9e6bdeb48060baad0772ea042b.jpg"},1570:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/EnvironmentProviderComponents-bdd325eae96497a1049f33f064c7893b.png"},908:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/Website_App_Environments-5e25ac50231acfd9ef48139b1888221e.jpg"},9284:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/Website_How_An_Opa_App_Gets_Created-802136d56a3379055287f7d9c5a305f2.jpg"},2822:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/opa-architecture-80768ea13d7ace3c19281aff320912b7.png"},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var n=i(6540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);