"use strict";(self.webpackChunk_aws_opa_on_aws_website=self.webpackChunk_aws_opa_on_aws_website||[]).push([[5778],{3811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(4848),o=t(8453);const r={sidebar_position:2},a="Deploying Your Application",s={id:"techdocs/runtimes/generative-ai/deployingYourApp",title:"Deploying Your Application",description:"Before you can deploy your Gen AI Chatbot, you'll need to create the environment for it to run in. OPA encapsulates environment runtime infrastructure, in a concept called an Environment Provider. Environment Providers are reusable templates that create infrastructure resources on a specific AWS account and region in order to support a specific workload type.",source:"@site/docs/techdocs/runtimes/generative-ai/deployingYourApp.md",sourceDirName:"techdocs/runtimes/generative-ai",slug:"/techdocs/runtimes/generative-ai/deployingYourApp",permalink:"/docs/techdocs/runtimes/generative-ai/deployingYourApp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Solution Overview",permalink:"/docs/techdocs/runtimes/generative-ai/overview"},next:{title:"Interacting With Your Application",permalink:"/docs/techdocs/runtimes/generative-ai/interactingWithApp"}},c={},l=[{value:"Creating a Gen AI Environment Runtime",id:"creating-a-gen-ai-environment-runtime",level:2},{value:"Deploying the Gen AI Application",id:"deploying-the-gen-ai-application",level:2}];function p(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"deploying-your-application",children:"Deploying Your Application"}),"\n",(0,i.jsxs)(n.p,{children:["Before you can deploy your Gen AI Chatbot, you'll need to create the environment for it to run in. OPA encapsulates environment runtime infrastructure, in a concept called an ",(0,i.jsx)(n.a,{href:"/docs/techdocs/entities#aws-environment-provider",children:"Environment Provider"}),". Environment Providers are reusable templates that create infrastructure resources on a specific AWS account and region in order to support a specific workload type."]}),"\n",(0,i.jsx)(n.p,{children:"Environment Providers are implemented using Infrastructure as Code (IaC) scripts that provision the needed resources. OPA comes out of the box with the Gen AI Environment Provider that will support the Gen AI Chatbot App. The template will create the underlying resources that enable your app creation. This includes resources such as a KMS key, audit table, and the IAM roles used by OPA. The Environment Provider templates provided by OPA can be customized to meet your needs, or you can simply use them as a reference and create your own template(s) from scratch."}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-gen-ai-environment-runtime",children:"Creating a Gen AI Environment Runtime"}),"\n",(0,i.jsx)(n.p,{children:"Before you can deploy an application to one of your clusters via OPA, you'll need to perform these steps in the OPA/Backstage UI, which are typically performed by someone in the Platform Engineering role:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a new Gen AI ",(0,i.jsx)(n.a,{href:"/docs/techdocs/entities#aws-environment-provider",children:"Environment Provider"})," by selecting the Generative AI provider template. Fill in the required information and wait for your resources to deploy. This may take several minutes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a new ",(0,i.jsx)(n.a,{href:"/docs/techdocs/entities#aws-environment",children:"Environment"})," and select the provider that you just created. This establishes an association between an Environment and a Provider."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Optionally, you can view the Environment and the Environment Provider from the OPA/Backstage UI."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Doing so will show you valuable information about the entity, such as metadata and relationshipts with other entities. The UI will also provide you with a link to the Git repository that contains the configurations and code (if there is any) for the entity you are viewing."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Environment Providers come with their own CICD pipelines that execute their IaC scripts. These pipelines will run automatically to deploy changes if the IaC scripts change."})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"deploying-the-gen-ai-application",children:"Deploying the Gen AI Application"}),"\n",(0,i.jsx)(n.p,{children:"Once the Gen AI runtime environment is configured, you are ready to deploy your Gen AI Chatbot App."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Select the Generative AI Chatbot Application software template and enter the information as prompted. Be sure to select the environment that you just created as the target environment for your application."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Wait for the pipeline to finish. Progress of the pipeline can be found in GitLab CI/CD."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once the pipeline is completed, navigate to the application's component page on the OPA on AWS UI. This is where you will find all of the important information about your application."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Find the entity card that says ",(0,i.jsx)(n.em,{children:"Application State"})," and select ",(0,i.jsx)(n.strong,{children:"Deploy App"}),". This will trigger the final IaC deployment of your application's resources in AWS CloudFormation. Once the Stack is successfully deployed, you are ready to begin interacting with your application."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);