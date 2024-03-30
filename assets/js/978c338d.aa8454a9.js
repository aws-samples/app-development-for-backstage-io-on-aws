"use strict";(self.webpackChunk_aws_opa_on_aws_website=self.webpackChunk_aws_opa_on_aws_website||[]).push([[3830],{844:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>p,frontMatter:()=>d,metadata:()=>x,toc:()=>j});var n=s(74848),r=s(28453);const i=s.p+"assets/images/create-resources-1-80210167a655c62c54aad3258db0328c.png",l=s.p+"assets/images/create-resources-2-4c973a21f02c3ccbe52a48e068d172a8.png",a=s.p+"assets/images/create-resources-3-4bd7528f37013de0f3920d21f791dbd7.png",c=s.p+"assets/images/create-resources-4-232965886f96ebcb7fea4ee88b4ea7bf.png",o=s.p+"assets/images/create-resources-5-47579d60a8cc1409ceb18e3e25b7f814.png",d={sidebar_position:3},h="Create Resources",x={id:"tutorials/create-resources",title:"Create Resources",description:"In this tutorial, you will create a new AWS resource.  Specifically, you'll build out a shared Amazon RDS database from the OPA on AWS interface which can then be accessed by multiple applications.",source:"@site/docs/tutorials/create-resources.md",sourceDirName:"tutorials",slug:"/tutorials/create-resources",permalink:"/docs/tutorials/create-resources",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create Apps",permalink:"/docs/tutorials/create-app"},next:{title:"Tech Docs",permalink:"/docs/category/tech-docs"}},u={},j=[{value:"Creating an RDS Database resource",id:"creating-an-rds-database-resource",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-resources",children:"Create Resources"}),"\n",(0,n.jsx)(t.p,{children:"In this tutorial, you will create a new AWS resource.  Specifically, you'll build out a shared Amazon RDS database from the OPA on AWS interface which can then be accessed by multiple applications."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["This tutorial assumes that you have run the ",(0,n.jsx)(t.a,{href:"/docs/tutorials/create-environments",children:"Create an Environment"})," tutorial and expects input values from that setup.  If you have created different Environment entities, then substitute the appropriate values."]})}),"\n",(0,n.jsx)(t.h2,{id:"creating-an-rds-database-resource",children:"Creating an RDS Database resource"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"1."}),"  In the OPA on AWS interface, select the ",(0,n.jsx)(t.strong,{children:"Create..."})," menu option in the left navigation. Search for and choose the ",(0,n.jsx)(t.strong,{children:"AWS RDS Database"})," template."]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:i,width:"60%",height:"auto"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"2."}),"  Provide information about the resource and select Next Step"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Name"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"demo-db"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"A unique identifier for the database"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Description"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"A database for demonstration data"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Describes the database's purpose"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Owner"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.em,{children:"Select a group from the drop-down list to own the Resource"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The group or user that will be responsible for the entity"})]})]})]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:l,width:"40%",height:"auto"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"3."})," Next, provide deployment information for the resource and select ",(0,n.jsx)(t.strong,{children:"Next Step"})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"AWS Environment"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsxs)(t.em,{children:["the ",(0,n.jsx)(t.strong,{children:"ecs-dev"})," environment will be pre-selected since it is the only environment available"]})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The AWS Environment in which you want to deploy your application to. The environment that we created in a previous tutorial will already be selected for you"})]})})]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:a,width:"40%",height:"auto"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"4."}),"  Provide database configuration information and select ",(0,n.jsx)(t.strong,{children:"Next Step"})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Database Name"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"demodb"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The name of a default database to create in the RDS instance"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Object Name"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"user"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the object that you will track in the default database."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Database Engine"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Select ",(0,n.jsx)(t.strong,{children:"PostgreSQL"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The engine of the SQL database"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"Database Size"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Select ",(0,n.jsx)(t.strong,{children:"Small (20GB)"})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The size of the database that will be deployed"})]})]})]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:c,width:"55%",height:"auto"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"5."})," Provide Repository information and select ",(0,n.jsx)(t.strong,{children:"Next Step"}),"\nChoose a repository for this database's infrastructure source code and entity information - you can use ",(0,n.jsx)(t.code,{children:"demo-db"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"6."})," Create the database by clicking the ",(0,n.jsx)(t.strong,{children:"Create"})," button"]}),"\n",(0,n.jsx)("center",{children:(0,n.jsx)("img",{src:o,width:"60%",height:"auto"})}),"\n",(0,n.jsxs)(t.p,{children:["The template scaffolding action will fetch a ",(0,n.jsx)(t.code,{children:"catalog-info.yaml"}),' file (used to define entities), replace the placeholders with our input we just provided, push the file to a new repo, and register it to the Backstage catalog.  A CI/CD pipeline in our new repository will begin executing to provision the new database.  You can monitor the progress of the pipeline in the "CI/CD" tab of the new resource entity.']})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);