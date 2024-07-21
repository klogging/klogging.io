"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[9173],{5986:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var l=i(4848),s=i(8453);const t={sidebar_position:20},o="Log levels and checking",c={id:"internals/level-checking",title:"Log levels and checking",description:"Each logger has a minimum logging level per sink, set by configuration. The minimum value of the",source:"@site/docs/internals/level-checking.md",sourceDirName:"internals",slug:"/internals/level-checking",permalink:"/docs/internals/level-checking",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Environment variables",permalink:"/docs/internals/environment-variables"},next:{title:"Internal logger",permalink:"/docs/internals/internal-logger"}},r={},d=[{value:"Rules",id:"rules",level:2},{value:"Code",id:"code",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"log-levels-and-checking",children:"Log levels and checking"}),"\n",(0,l.jsx)(n.p,{children:"Each logger has a minimum logging level per sink, set by configuration. The minimum value of the\nper-sink levels is the minimum level for the logger, which can be checked at any time."}),"\n",(0,l.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"If a log request\u2019s level is less than the minimum for the logger that created it, no log event\nis created and emitted."}),"\n",(0,l.jsx)(n.li,{children:"When a log event is emitted, it is dispatched to at least one sink."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,l.jsxs)(n.p,{children:["Applicable to both ",(0,l.jsx)(n.code,{children:"Klogger"})," and ",(0,l.jsx)(n.code,{children:"NoCoLogger"}),"."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"trace()"}),", ",(0,l.jsx)(n.code,{children:"debug()"})," etc. functions are shims for ",(0,l.jsx)(n.code,{children:"log()"})," with a specified value of ",(0,l.jsx)(n.code,{children:"Level"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"isTraceEnabled()"}),", ",(0,l.jsx)(n.code,{children:"isDebugEnabled()"})," etc. functions are shims for ",(0,l.jsx)(n.code,{children:"isLevelEnabled()"})," with a\nspecified value of ",(0,l.jsx)(n.code,{children:"Level"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"log()"})," function with value arguments: only emits an event if ",(0,l.jsx)(n.code,{children:"isLevelEnabled()"})," for the requested\nlevel is ",(0,l.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"log()"})," function with lambda argument: only calls the lambda and emits an event\nif ",(0,l.jsx)(n.code,{children:"isLevelEnabled()"})," for the requested level is ",(0,l.jsx)(n.code,{children:"true"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var l=i(6540);const s={},t=l.createContext(s);function o(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);