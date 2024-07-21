"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[8004],{8556:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=s(4848),r=s(8453);const l={sidebar_position:20},t="Logging severity levels",o={id:"concepts/levels",title:"Logging severity levels",description:"Klogging levels",source:"@site/docs/concepts/levels.md",sourceDirName:"concepts",slug:"/concepts/levels",permalink:"/docs/concepts/levels",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Log Events",permalink:"/docs/concepts/log-events"},next:{title:"Sinks",permalink:"/docs/concepts/sinks"}},d={},c=[{value:"Klogging levels",id:"klogging-levels",level:2},{value:"Logger functions and levels",id:"logger-functions-and-levels",level:2}];function g(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"logging-severity-levels",children:"Logging severity levels"}),"\n",(0,i.jsx)(n.h2,{id:"klogging-levels",children:"Klogging levels"}),"\n",(0,i.jsx)(n.p,{children:"Klogging has 6 levels of logging severity with these names and general meanings:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Meaning"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TRACE"}),(0,i.jsx)(n.td,{children:"Fine detailed information about what is happening."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DEBUG"}),(0,i.jsx)(n.td,{children:"Detailed information about what is happening."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"INFO"}),(0,i.jsx)(n.td,{children:"General information about what is happening."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"WARN"}),(0,i.jsx)(n.td,{children:"A warning that something unexpected or undesirable has happened."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ERROR"}),(0,i.jsx)(n.td,{children:"An error condition has occurred that requires attention."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"FATAL"}),(0,i.jsx)(n.td,{children:"A serious error condition has occurred that has caused the program to stop."})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["These levels are specified by the\n",(0,i.jsx)(n.a,{href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/Level.kt",children:(0,i.jsx)(n.code,{children:"Level"})}),"\nenum."]}),"\n",(0,i.jsx)(n.h2,{id:"logger-functions-and-levels",children:"Logger functions and levels"}),"\n",(0,i.jsxs)(n.p,{children:["Levels are specified when logging, either in the ",(0,i.jsx)(n.code,{children:"Klogger#log"})," function, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'    logger.log(Level.INFO, "User {user} logged in", user)\n'})}),"\n",(0,i.jsx)(n.p,{children:"or using convenience functions, like this:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'logger.trace("User {user} logged in", user)'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'logger.debug("User {user} logged in", user)'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'logger.info("User {user} logged in", user)'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'logger.warn("User {user} logged in", user)'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'logger.error("User {user} logged in", user)'})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:'logger.fatal("User {user} logged in", user)'})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(6540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);