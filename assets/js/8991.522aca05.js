"use strict";(self.webpackChunk_aws_harmonix_on_aws_website=self.webpackChunk_aws_harmonix_on_aws_website||[]).push([[8991],{8991:(e,t,s)=>{s.d(t,{diagram:()=>R});var o=s(333),i=s(697),a=s(6312),r=s(4092),n=s(5766);s(4353),s(1162),s(2838),s(1176),s(4075);const d="rect",l="rectWithTitle",c="statediagram",p=`${c}-state`,b="transition",g=`${b} note-edge`,h=`${c}-note`,u=`${c}-cluster`,y=`${c}-cluster-alt`,w="parent",f="note",x="----",m=`${x}${f}`,$=`${x}${w}`,T="fill:none",S="fill: #333",k="text",v="normal";let D={},A=0;function _(e="",t=0,s="",o=x){return`state-${e}${null!==s&&s.length>0?`${o}${s}`:""}-${t}`}const B=(e,t,s,i,a,n)=>{const c=s.id,b=null==(x=i[c])?"":x.classes?x.classes.join(" "):"";var x;if("root"!==c){let t=d;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==o.D&&(t=s.type),D[c]||(D[c]={id:c,shape:t,description:r.e.sanitizeText(c,(0,r.c)()),classes:`${b} ${p}`});const i=D[c];s.description&&(Array.isArray(i.description)?(i.shape=l,i.description.push(s.description)):i.description.length>0?(i.shape=l,i.description===c?i.description=[s.description]:i.description=[i.description,s.description]):(i.shape=d,i.description=s.description),i.description=r.e.sanitizeTextOrArray(i.description,(0,r.c)())),1===i.description.length&&i.shape===l&&(i.shape=d),!i.type&&s.doc&&(r.l.info("Setting cluster for ",c,C(s)),i.type="group",i.dir=C(s),i.shape=s.type===o.a?"divider":"roundedWithTitle",i.classes=i.classes+" "+u+" "+(n?y:""));const a={labelStyle:"",shape:i.shape,labelText:i.description,classes:i.classes,style:"",id:c,dir:i.dir,domId:_(c,A),type:i.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:h,style:"",id:c+m+"-"+A,domId:_(c,A,f),type:i.type,padding:15},o={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:i.classes,style:"",id:c+$,domId:_(c,A,w),type:"group",padding:0};A++;const r=c+$;e.setNode(r,o),e.setNode(t.id,t),e.setNode(c,a),e.setParent(c,r),e.setParent(t.id,r);let n=c,d=t.id;"left of"===s.note.position&&(n=t.id,d=c),e.setEdge(n,d,{arrowhead:"none",arrowType:"",style:T,labelStyle:"",classes:g,arrowheadStyle:S,labelpos:"c",labelType:k,thickness:v})}else e.setNode(c,a)}t&&"root"!==t.id&&(r.l.trace("Setting node ",c," to be child of its parent ",t.id),e.setParent(c,t.id)),s.doc&&(r.l.trace("Adding nodes children "),L(e,s,s.doc,i,a,!n))},L=(e,t,s,i,a,n)=>{r.l.trace("items",s),s.forEach((s=>{switch(s.stmt){case o.b:case o.D:B(e,t,s,i,a,n);break;case o.S:{B(e,t,s.state1,i,a,n),B(e,t,s.state2,i,a,n);const o={id:"edge"+A,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:T,labelStyle:"",label:r.e.sanitizeText(s.description,(0,r.c)()),arrowheadStyle:S,labelpos:"c",labelType:k,thickness:v,classes:b};e.setEdge(s.state1.id,s.state2.id,o,A),A++}}}))},C=(e,t=o.c)=>{let s=t;if(e.doc)for(let o=0;o<e.doc.length;o++){const t=e.doc[o];"dir"===t.stmt&&(s=t.value)}return s},E={setConf:function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses:function(e,t){return t.db.extract(t.db.getRootDocV2()),t.db.getClasses()},draw:async function(e,t,s,o){r.l.info("Drawing state diagram (v2)",t),D={},o.db.getDirection();const{securityLevel:l,state:p}=(0,r.c)(),b=p.nodeSpacing||50,g=p.rankSpacing||50;r.l.info(o.db.getRootDocV2()),o.db.extract(o.db.getRootDocV2()),r.l.info(o.db.getRootDocV2());const h=o.db.getStates(),u=new i.T({multigraph:!0,compound:!0}).setGraph({rankdir:C(o.db.getRootDocV2()),nodesep:b,ranksep:g,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let y;B(u,void 0,o.db.getRootDocV2(),h,o.db,!0),"sandbox"===l&&(y=(0,a.Ltv)("#i"+t));const w="sandbox"===l?(0,a.Ltv)(y.nodes()[0].contentDocument.body):(0,a.Ltv)("body"),f=w.select(`[id="${t}"]`),x=w.select("#"+t+" g");await(0,n.r)(x,u,["barb"],c,t);r.u.insertTitle(f,"statediagramTitleText",p.titleTopMargin,o.db.getDiagramTitle());const m=f.node().getBBox(),$=m.width+16,T=m.height+16;f.attr("class",c);const S=f.node().getBBox();(0,r.i)(f,T,$,p.useMaxWidth);const k=`${S.x-8} ${S.y-8} ${$} ${T}`;r.l.debug(`viewBox ${k}`),f.attr("viewBox",k);const v=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const i of v){const e=i.getBBox(),t=document.createElementNS("http://www.w3.org/2000/svg",d);t.setAttribute("rx",0),t.setAttribute("ry",0),t.setAttribute("width",e.width),t.setAttribute("height",e.height),i.insertBefore(t,i.firstChild)}}},R={parser:o.p,db:o.d,renderer:E,styles:o.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,o.d.clear()}}}}]);