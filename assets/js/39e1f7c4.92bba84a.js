"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[1105],{8480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(4848),i=n(8453);const s={sidebar_position:30},c="Immediate context items",r={id:"context/immediate-context-items",title:"Immediate context items",description:"You can add explicit context items when logging as part of the calls to loggers.",source:"@site/docs/context/immediate-context-items.md",sourceDirName:"context",slug:"/context/immediate-context-items",permalink:"/docs/context/immediate-context-items",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Message templates",permalink:"/docs/context/message-templates"},next:{title:"From other coroutine contexts",permalink:"/docs/context/other-coroutine-context"}},a={},l=[];function m(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"immediate-context-items",children:"Immediate context items"}),"\n",(0,o.jsx)(t.p,{children:"You can add explicit context items when logging as part of the calls to loggers."}),"\n",(0,o.jsx)(t.p,{children:"For example, given this call with context items immediately:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:'logger.info("Retrieved values from services", mapOf(\n    "serviceOneCount" to serviceOneResult.count,\n    "serviceTwoCount" to serviceTwoResult.count,\n))\n'})}),"\n",(0,o.jsx)(t.p,{children:"The resulting event may look like something like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "@t": "2024-02-05T07:45:47.837117Z",\n  "@l": "INFO",\n  "@m": "Retrieved values from services",\n  "host": "589ef8fa",\n  "logger": "com.example.ServiceCombiner",\n  "context": "main",\n  "serviceOneCount": 9,\n  "serviceTwoCount": 17\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var o=n(6540);const i={},s=o.createContext(i);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);