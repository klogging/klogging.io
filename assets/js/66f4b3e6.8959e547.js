"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[5749],{4736:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var o=i(4848),s=i(8453);const t={sidebar_position:30},r="Asynchronous handling of log events",c={id:"coroutines/async",title:"Asynchronous handling of log events",description:"Coroutines provide a simple way to asynchronously handle log events, including dispatching them to different",source:"@site/docs/coroutines/async.md",sourceDirName:"coroutines",slug:"/coroutines/async",permalink:"/docs/coroutines/async",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Contextual event items",permalink:"/docs/coroutines/context"},next:{title:"Java, Spring, SLF4J and Hexagon",permalink:"/docs/java/"}},l={},a=[];function g(n){const e={a:"a",h1:"h1",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"asynchronous-handling-of-log-events",children:"Asynchronous handling of log events"}),"\n",(0,o.jsx)(e.p,{children:"Coroutines provide a simple way to asynchronously handle log events, including dispatching them to different\nsinks."}),"\n",(0,o.jsx)(e.p,{children:"Klogging launches new coroutines that are used in a number of places:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"For dispatching log events to sinks."}),"\n",(0,o.jsx)(e.li,{children:"For receiving log events from event and sink channels."}),"\n",(0,o.jsx)(e.li,{children:"For sending batches of log events to network destinations."}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Klogging process diagram",src:i(7500).A+""})}),"\n",(0,o.jsx)(e.p,{children:"In addition, Klogging uses coroutine channels to process events."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Log events are ",(0,o.jsx)(e.a,{href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/internal/Emitter.kt#L67",children:"sent into the events\nchannel"}),"\nin a coroutine."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["They are read in a different coroutine and dispatched to each matching sink by ",(0,o.jsx)(e.a,{href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/internal/Sink.kt#L72",children:"sending it into\neach sink"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Events are ",(0,o.jsx)(e.a,{href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/sending/Batching.kt#L47",children:"read from sink channels in\nbatches"}),"\nin different coroutines."]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(g,{...n})}):g(n)}},7500:(n,e,i)=>{i.d(e,{A:()=>o});const o=i.p+"assets/images/klogging-process-0192d5e31b1784bd7f750ed46349c9bd.svg"},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var o=i(6540);const s={},t=o.createContext(s);function r(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);