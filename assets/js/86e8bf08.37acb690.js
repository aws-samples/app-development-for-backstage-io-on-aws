"use strict";(self.webpackChunk_aws_harmonix_on_aws_website=self.webpackChunk_aws_harmonix_on_aws_website||[]).push([[8442],{1111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(4848),r=n(8453);const o={sidebar_position:1},a="Getting Started",s={id:"techdocs/runtimes/kubernetes/gettingStarted",title:"Getting Started",description:"Before you can deploy a kubernetes application, you'll need to create a cluster to run it on. AWS provides the Elastic Kubernetes Service (EKS) for customers who want to run kubernetes clusters in the AWS cloud.",source:"@site/docs/techdocs/runtimes/kubernetes/gettingStarted.md",sourceDirName:"techdocs/runtimes/kubernetes",slug:"/techdocs/runtimes/kubernetes/gettingStarted",permalink:"/docs/techdocs/runtimes/kubernetes/gettingStarted",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kubernetes & EKS",permalink:"/docs/category/kubernetes--eks"},next:{title:"Harmonix EKS Architecture",permalink:"/docs/techdocs/runtimes/kubernetes/architecture"}},c={},l=[{value:"Creating an EKS Environment Runtime",id:"creating-an-eks-environment-runtime",level:2},{value:"Creating a Kubernetes Application",id:"creating-a-kubernetes-application",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,i.jsxs)(t.p,{children:["Before you can deploy a kubernetes application, you'll need to create a cluster to run it on. AWS provides the ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/eks/",children:"Elastic Kubernetes Service (EKS)"})," for customers who want to run kubernetes clusters in the AWS cloud."]}),"\n",(0,i.jsxs)(t.p,{children:["Harmonix encapsulates environment runtime infrastructure, including EKS clusters, in a concept called an ",(0,i.jsx)(t.a,{href:"/docs/techdocs/entities#aws-environment-provider",children:"Environment Provider"}),". Environment Providers are reusable templates that create infrastructure resources on a specific AWS account and region in order to support a specific workload type (e.g. ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/eks/",children:"EKS"}),", ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/ecs/",children:"ECS"}),", ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/serverless/",children:"Serverless"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["Environment Providers are implemented using Infrastructure as Code (IaC) scripts that provision the needed resources. Harmonix comes out of the box with 2 ",(0,i.jsx)(t.a,{href:"/docs/category/eks-provider-templates",children:"templates to create EKS Environment Providers"}),". The first template will create a new EKS cluster as well as supporting infrastructure components. The second template allows you to use/import an existing EKS cluster and creates only the supporting infrastructure components. The Environment Provider templates provided by Harmonix can be customized to meet your needs, or you can simply use them as a reference and create your own template(s) from scratch."]}),"\n",(0,i.jsx)(t.h2,{id:"creating-an-eks-environment-runtime",children:"Creating an EKS Environment Runtime"}),"\n",(0,i.jsx)(t.p,{children:"Before you can deploy an application to one of your clusters via Harmonix, you'll need to perform these steps in the Harmonix/Backstage UI, which are typically performed by someone in the Platform Engineering role:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a new EKS ",(0,i.jsx)(t.a,{href:"/docs/techdocs/entities#aws-environment-provider",children:"Environment Provider"})," by selecting the provider template you want to use and fill out the form to create it. Note that if your template creates a new cluster, it may take 30-60 minutes before the IaC finishes running."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a new ",(0,i.jsx)(t.a,{href:"/docs/techdocs/entities#aws-environment",children:"Environment"})," and select the provider that you just created. This establishes an association between an Environment and a Provider."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Optionally, you can view the Environment and the Environment Provider from the Harmonix/Backstage UI."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Doing so will show you valuable information about the entity, such as metadata and relationshipts with other entities. The UI will also provide you with a link to the Git repository that contains the configurations and code (if there is any) for the entity you are viewing."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Environment Providers come with their own CICD pipelines that execute their IaC scripts. These pipelines will run automatically to deploy changes if the IaC scripts change."})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"creating-a-kubernetes-application",children:"Creating a Kubernetes Application"}),"\n",(0,i.jsx)(t.p,{children:"Once you have set up an EKS environment via Harmonix, you or your development team can use the Harmonix/Backstage UI to choose from one of the EKS application templates. Several template examples are provided out of the box, which you can customize or use as a reference when creating your own application templates. Harmonix provides example applications written in Java/SpringBoot, NodeJs, and Python. After choosing a template to base your new application on, complete the UI wizard and select to deploy the application to the Environment that was created in the previous steps."}),"\n",(0,i.jsxs)(t.p,{children:["Clicking the button to create an application will trigger a new Git repository to be created, which contains your application code as well as kubernetes manifest files written using either ",(0,i.jsx)(t.a,{href:"https://kustomize.io/",children:"Kustomize"})," or ",(0,i.jsx)(t.a,{href:"https://helm.sh/",children:"Helm"})," (depending on the application template you selected). The repository will have a CICD pipeline that builds a container image and deploys the application to the selected Environment. After an application has been created, it can be configured to be deployed to additional Environments via the Management tab."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"As of Harmonix version 0.3.4, all application template examples utilize a traditional CICD pipeline approach and do not follow a GitOps process. This is not due to an Harmonix limitation, but rather due to the Harmonix team wanting to release support for kubernetes more quickly. This documentation will be updated if/when a GitOps example becomes available. As always, since Harmonix is open source, users are free to modify the deployment process to suit their needs."})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(6540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);