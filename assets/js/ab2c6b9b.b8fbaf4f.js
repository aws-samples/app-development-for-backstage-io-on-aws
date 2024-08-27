"use strict";(self.webpackChunk_aws_harmonix_on_aws_website=self.webpackChunk_aws_harmonix_on_aws_website||[]).push([[6278],{245:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var o=t(4848),r=t(8453);const a={sidebar_position:2},s="Harmonix EKS Architecture",i={id:"techdocs/runtimes/kubernetes/architecture",title:"Harmonix EKS Architecture",description:"To understand how Harmonix Environments and Environment Providers relate to applications and clusters, take a look at the below diagram.",source:"@site/docs/techdocs/runtimes/kubernetes/architecture.md",sourceDirName:"techdocs/runtimes/kubernetes",slug:"/techdocs/runtimes/kubernetes/architecture",permalink:"/docs/techdocs/runtimes/kubernetes/architecture",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/techdocs/runtimes/kubernetes/gettingStarted"},next:{title:"EKS Provider Templates",permalink:"/docs/category/eks-provider-templates"}},c={},h=[];function u(e){const n={a:"a",h1:"h1",header:"header",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"harmonix-eks-architecture",children:"Harmonix EKS Architecture"})}),"\n",(0,o.jsxs)(n.p,{children:["To understand how Harmonix ",(0,o.jsx)(n.a,{href:"/docs/techdocs/entities#aws-environment",children:"Environments"})," and ",(0,o.jsx)(n.a,{href:"/docs/techdocs/entities#aws-environment-provider",children:"Environment Providers"})," relate to applications and clusters, take a look at the below diagram."]}),"\n",(0,o.jsx)("p",{align:"center",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"opa_eks_architecture.png",src:t(535).A+"",width:"831",height:"711"})})}),"\n",(0,o.jsxs)(n.p,{children:["This example diagram is meant to show that Harmonix can work across AWS accounts and regions. Harmonix allows you to create as many clusters as you want, but also to share the clusters between applications and application environments. The above configuration is just one way that you could set up your apps and clusters. Harmonix gives you full flexibility on how many accounts, regions, clusters, and environments you want to use as well as which ones are used by which applications. The choice is yours on how many environments you create as well as their scope of use. For example, you can choose to create an Environment for each application or each team, or even for groups of applications. For a more in-depth explanation of Harmonix environments, see our ",(0,o.jsx)(n.a,{href:"https://www.youtube.com/watch?v=EgfIAPzIAHk&list=PLhr1KZpdzukcf5e7vYOVkpw4h-rzy7Pn3&index=4",children:"Harmonix environments video on YouTube "}),"."]}),"\n",(0,o.jsx)(n.p,{children:'In the example above, we see an application, "App 1", that is deployed to 4 distinct Environments. The DEV and TEST Environments are for "non-production" use, and run in a non-prod AWS account. The STAGE and PROD Enviroments run on a production AWS account.'}),"\n",(0,o.jsxs)(n.p,{children:["The non-prod Environments point to the same Environment Provider, which means that both of these Environments share the same cluster. Developers can make use of kubernetes ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",children:"namespaces"})," to separate application resources (within the same cluster) as they see fit. For example, they could choose to create a namespace per application, a namespace per application environment, or even a namespace per team or department."]}),"\n",(0,o.jsx)(n.p,{children:"The STAGE and PROD environments above each use their own separate cluster, which can be on the same AWS account or a different account."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},535:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/opa_eks_architecture-1c2f04f529f51a48bafbf3223730f1a4.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(6540);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);