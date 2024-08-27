"use strict";(self.webpackChunk_aws_harmonix_on_aws_website=self.webpackChunk_aws_harmonix_on_aws_website||[]).push([[7287],{7319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>x});var i=n(4848),s=n(8453);const r=n.p+"assets/images/choose-app-8b3fdf9764843ed87fd6e9578b598b2e.png",l=n.p+"assets/images/app-component-info-869756d5c5de8a84be7cd9e75d1b7fa1.png",o=n.p+"assets/images/app-repo-info-54061d0f891738e51b3d9eca3d8fa93d.png",a=n.p+"assets/images/create-app-c05cfea8a56d7c8435d91e622a67b3a9.png",d={sidebar_position:2},c="Create Apps",h={id:"tutorials/create-app",title:"Create Apps",description:"In this tutorial, you will build out a new AWS microservice application and deploy it as a into an Environment. By deploying into an Environment designed to run containerized applications in AWS Elastic Container Service (ECS), the application will be automatically packaged and deployed for you as an ECS task in an ECS cluster.",source:"@site/docs/tutorials/create-app.md",sourceDirName:"tutorials",slug:"/tutorials/create-app",permalink:"/docs/tutorials/create-app",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create an Environment",permalink:"/docs/tutorials/create-environments"},next:{title:"Create Resources",permalink:"/docs/tutorials/create-resources"}},p={},x=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"create-apps",children:"Create Apps"})}),"\n",(0,i.jsx)(t.p,{children:"In this tutorial, you will build out a new AWS microservice application and deploy it as a into an Environment. By deploying into an Environment designed to run containerized applications in AWS Elastic Container Service (ECS), the application will be automatically packaged and deployed for you as an ECS task in an ECS cluster."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["This tutorial assumes that you have run the ",(0,i.jsx)(t.a,{href:"/docs/tutorials/create-environments",children:"Create an Environment"})," tutorial and expects input values from that setup.  If you have created different Environment entities, then substitute the appropriate values."]})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"1."})," In the Harmonix on AWS site, navigate to the ",(0,i.jsx)(t.strong,{children:"Create..."})," menu. Search for and select ",(0,i.jsx)(t.strong,{children:"Node.js Express Web App"}),"."]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:r,width:"50%",height:"auto"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"2."})," Provide application input parameters and select ",(0,i.jsx)(t.strong,{children:"Next Step"})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Name"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"demo-app"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A unique identifier for the application"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Description"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"Node.js demo application running on ECS"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Descriptive information about the application"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Owner"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.em,{children:"Select a group from the drop-down list to own the application"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The group or user that will be responsible for the entity"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"AWS Environment"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsxs)(t.em,{children:["the ",(0,i.jsx)(t.strong,{children:"ecs-dev"})," environment will be pre-selected since it is the only environment available"]})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The AWS Environment in which you want to deploy your application to. The environment that we created in the previous step will already be selected for you"})]})]})]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:l,width:"40%",height:"auto"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"3."})," Provide Repository information and select ",(0,i.jsx)(t.strong,{children:"Next Step"})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Host"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.em,{children:"default value"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The GitLab host name"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Owner Available"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.em,{children:"default value"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The GitLab namespace where this repository will belong to. It can be the name of organization, group, subgroup, user, or the project"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Repository"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"demo-app"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The name for the git repository"})]})]})]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:o,width:"70%",height:"auto"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"4."})," Review your inputs and select ",(0,i.jsx)(t.strong,{children:"Create"})]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:a,width:"70%",height:"auto"})}),"\n",(0,i.jsx)(t.p,{children:"Your application will begin to deploy."}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.strong,{children:"Task Activity"})," view will show you the progress of all of the actions executed to build out your application.  This includes gathering environment information, creating secrets, scaffolding a new repository, creating an access token for the repo, and registering the entity with backstage."]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);