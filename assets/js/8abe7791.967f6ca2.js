"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[2901],{2941:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=i(4848),o=i(8453);const s={},r="Configuration",l={id:"configuration/configuration",title:"Configuration",description:"Klogging starts with no configuration and will not send any log events. You configure Klogging using",source:"@site/docs/configuration/configuration.md",sourceDirName:"configuration",slug:"/configuration/",permalink:"/docs/configuration/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Structured log events",permalink:"/docs/structured-log-events"},next:{title:"Configuration DSL",permalink:"/docs/configuration/dsl"}},c={},a=[{value:"How Klogging loads configuration",id:"how-klogging-loads-configuration",level:2},{value:"How Klogging finds configuration files",id:"how-klogging-finds-configuration-files",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(e.p,{children:"Klogging starts with no configuration and will not send any log events. You configure Klogging using\neither:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["in code using the ",(0,t.jsx)(e.a,{href:"/docs/configuration/dsl",children:"Configuration domain-specific language"})]}),"\n",(0,t.jsxs)(e.li,{children:["using from a ",(0,t.jsx)(e.a,{href:"/docs/configuration/json",children:"JSON"})," or ",(0,t.jsx)(e.a,{href:"/docs/configuration/hocon",children:"HOCON"})," configuration file."]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["You can also override some configuration by setting ",(0,t.jsx)(e.a,{href:"../internals/environment-variables",children:"Environment\nvariables"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"how-klogging-loads-configuration",children:"How Klogging loads configuration"}),"\n",(0,t.jsx)(e.p,{children:"Klogging first searches for file-based configuration, when it is first needed. The patterns are:"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"Source"}),(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"Configuration"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"File only"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"Read from file when the first logger is declared."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"DSL only"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"Set when the DSL code is executed."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"File and DSL"}),(0,t.jsxs)(e.td,{style:{textAlign:"left"},children:["Read from file immediately before the DSL code is read. DSL configuration replaces file configuration unless it begins with ",(0,t.jsx)(e.code,{children:"loggingConfiguration(append = true)"}),"."]})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"how-klogging-finds-configuration-files",children:"How Klogging finds configuration files"}),"\n",(0,t.jsx)(e.p,{children:"Klogging follows these steps for finding configuration files:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["If the ",(0,t.jsx)(e.a,{href:"/docs/internals/environment-variables",children:"environment variable"})," ",(0,t.jsx)(e.code,{children:"KLOGGING_CONFIG_PATH"})," is\nset, look for a file at that absolute path. Load the contents if found."]}),"\n",(0,t.jsxs)(e.li,{children:["If the environment variable is not set or the specified file is not found, search the classpath:\nfor ",(0,t.jsx)(e.code,{children:"klogging.json"})," and load the contents if found; otherwise for ",(0,t.jsx)(e.code,{children:"klogging.conf"})," and load the\ncontents if found."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Once a JSON or HOCON file has been found, it is read."})]})}function g(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var t=i(6540);const o={},s=t.createContext(o);function r(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);