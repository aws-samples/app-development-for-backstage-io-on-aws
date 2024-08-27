"use strict";(self.webpackChunk_aws_harmonix_on_aws_website=self.webpackChunk_aws_harmonix_on_aws_website||[]).push([[6657],{4471:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=o(4848),a=o(8453);const s={sidebar_position:7,title:"Customizations"},i="Customizing and Extending Harmonix on AWS",l={id:"techdocs/customizations",title:"Customizations",description:"Running locally",source:"@site/docs/techdocs/customizations.md",sourceDirName:"techdocs",slug:"/techdocs/customizations",permalink:"/docs/techdocs/customizations",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Customizations"},sidebar:"tutorialSidebar",previous:{title:"Permissions",permalink:"/docs/techdocs/permission"},next:{title:"DIY",permalink:"/docs/category/diy"}},r={},c=[{value:"Running locally",id:"running-locally",level:2},{value:"How to modify Harmonix plugins",id:"how-to-modify-harmonix-plugins",level:2},{value:"How to add or modify software templates",id:"how-to-add-or-modify-software-templates",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"customizing-and-extending-harmonix-on-aws",children:"Customizing and Extending Harmonix on AWS"})}),"\n",(0,t.jsx)(n.h2,{id:"running-locally",children:"Running locally"}),"\n",(0,t.jsx)(n.p,{children:'It is possible to run the Harmonix UI and Backstage database locally on your workstation via a container runtime such as Docker Desktop. Running locally makes it much faster to customize Harmonix and see your changes running quickly. Other benefits include restarting or "bouncing" Harmonix/Backstage easily and clearing out the Backstage database (running on a local container) and starting fresh, without impacting others.'}),"\n",(0,t.jsx)(n.p,{children:"To run the Harmonix UI and Backstage database locally, use this command:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"make start-local"})}),"\n",(0,t.jsxs)(n.p,{children:["This command will spin up container images for a local PostgreSQL database and let you view the Harmonix UI via localhost (e.g. ",(0,t.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["NOTE: You need to have run ",(0,t.jsx)(n.code,{children:"make install"})," at least once successfully before the ",(0,t.jsx)(n.code,{children:"make start-local"})," command can be run."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-modify-harmonix-plugins",children:"How to modify Harmonix plugins"}),"\n",(0,t.jsx)(n.p,{children:"If you want to modify any Harmonix plugins and see the effects of your changes locally, you'll need to do the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Update the ",(0,t.jsx)(n.code,{children:"build-script/backstage-install.sh"})," file and change the value of the ",(0,t.jsx)(n.code,{children:"installMode"})," variable from ",(0,t.jsx)(n.code,{children:"npm"})," to ",(0,t.jsx)(n.code,{children:"from-source"}),". This will make it so that building Harmonix UI/Backstage will use the plugin code from your local project instead of downloading official Harmonix plugins from the NPM registry."]}),"\n",(0,t.jsxs)(n.li,{children:["After each change to plugins code, you will need rebuild the plugins and restart your locally-running Backstage instance before you can see the changes show up on your locally running Backstage. To rebuild the plugins, execute ",(0,t.jsx)(n.code,{children:"make backstage-install"}),". To start or restart Backstage, execute ",(0,t.jsx)(n.code,{children:"make start-local"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-add-or-modify-software-templates",children:"How to add or modify software templates"}),"\n",(0,t.jsx)(n.p,{children:"If you want to modify existing Harmonix (app/resource/environment) templates and test them locally, do the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Make your template changes"}),"\n",(0,t.jsxs)(n.li,{children:["Run this command to deploy your templates so that Backstage will use your latest version when scaffolding:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"make push-backstage-reference-repo"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can add your own software templates as well. To do this, you need to let Backstage know about your template so that it can show it in its UI."}),"\n",(0,t.jsxs)(n.p,{children:["Out of the box, Harmonix defines what templates to use in a file at ",(0,t.jsx)(n.code,{children:"backstage-reference/templates/all-templates.yaml"}),". You can add a reference to your new template in this file."]}),"\n",(0,t.jsxs)(n.p,{children:["The below code snippet shows where the ",(0,t.jsx)(n.code,{children:"all-templates.yaml"})," file is referred to from Backstage configurations file at ",(0,t.jsx)(n.code,{children:"config/app-config.aws-production.yaml"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"catalog:\n\n  locations:\n    # AWS templates\n    - type: url\n      target: https://${SSM_GITLAB_HOSTNAME}/opa-admin/backstage-reference/-/blob/main/templates/all-templates.yaml\n      rules:\n        - allow: [Location, Template]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var t=o(6540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);