"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[7481],{2315:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=e(4848),t=e(8453);const r={sidebar_position:30},s="Configuration with HOCON",a={id:"configuration/hocon",title:"Configuration with HOCON",description:"Klogging can be configured from HOCON",source:"@site/docs/configuration/hocon.md",sourceDirName:"configuration",slug:"/configuration/hocon",permalink:"/docs/configuration/hocon",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Configuration with JSON",permalink:"/docs/configuration/json"},next:{title:"Built-in configurations",permalink:"/docs/configuration/built-ins"}},c={},l=[{value:"Configuration object names",id:"configuration-object-names",level:2}];function u(n){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"configuration-with-hocon",children:"Configuration with HOCON"}),"\n",(0,i.jsxs)(o.p,{children:["Klogging can be configured from ",(0,i.jsx)(o.a,{href:"https://github.com/lightbend/config/blob/main/HOCON.md",children:"HOCON"}),"\nfiles. This example is exactly equivalent to the ",(0,i.jsx)(o.a,{href:"/docs/configuration/dsl#a-simple-example",children:"first DSL example"}),":"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-hocon",children:'{\n  sinks = {\n    stdout = {\n      renderWith = RENDER_SIMPLE\n      sendTo = STDOUT\n    },\n    seq = {\n      seqServer = "http://localhost:5341"\n    }\n  },\n  logging = [\n    {\n      fromLoggerBase = com.example\n      levelRanges = [\n        {\n          fromMinLevel = INFO\n          toSinks = [stdout]\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(o.admonition,{type:"caution",children:(0,i.jsx)(o.p,{children:"Klogging uses the KotlinX serialization library for HOCON, which has limited capability.\nIn future it will support more HOCON features."})}),"\n",(0,i.jsx)(o.h2,{id:"configuration-object-names",children:"Configuration object names"}),"\n",(0,i.jsxs)(o.p,{children:["Names are ",(0,i.jsx)(o.a,{href:"/docs/configuration/json#configuration-object-names",children:"exactly the same as for JSON"}),"."]})]})}function d(n={}){const{wrapper:o}={...(0,t.R)(),...n.components};return o?(0,i.jsx)(o,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},8453:(n,o,e)=>{e.d(o,{R:()=>s,x:()=>a});var i=e(6540);const t={},r=i.createContext(t);function s(n){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function a(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(r.Provider,{value:o},n.children)}}}]);