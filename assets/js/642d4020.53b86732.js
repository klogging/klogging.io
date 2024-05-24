"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[9173],{5986:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var t=r(4848),i=r(5680);const l={sidebar_position:20},c="Log levels and checking",o={id:"internals/level-checking",title:"Log levels and checking",description:"Each logger has a minimum logging level per sink, set by configuration. The minimum value of the",source:"@site/docs/internals/level-checking.md",sourceDirName:"internals",slug:"/internals/level-checking",permalink:"/docs/internals/level-checking",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Environment variables",permalink:"/docs/internals/environment-variables"},next:{title:"Internal logger",permalink:"/docs/internals/internal-logger"}},s={},a=[{value:"Rules",id:"rules",level:2},{value:"Code",id:"code",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"log-levels-and-checking",children:"Log levels and checking"}),"\n",(0,t.jsx)(n.p,{children:"Each logger has a minimum logging level per sink, set by configuration. The minimum value of the\nper-sink levels is the minimum level for the logger, which can be checked at any time."}),"\n",(0,t.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If a log request\u2019s level is less than the minimum for the logger that created it, no log event\nis created and emitted."}),"\n",(0,t.jsx)(n.li,{children:"When a log event is emitted, it is dispatched to at least one sink."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,t.jsxs)(n.p,{children:["Applicable to both ",(0,t.jsx)(n.code,{children:"Klogger"})," and ",(0,t.jsx)(n.code,{children:"NoCoLogger"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"trace()"}),", ",(0,t.jsx)(n.code,{children:"debug()"})," etc. functions are shims for ",(0,t.jsx)(n.code,{children:"log()"})," with a specified value of ",(0,t.jsx)(n.code,{children:"Level"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"isTraceEnabled()"}),", ",(0,t.jsx)(n.code,{children:"isDebugEnabled()"})," etc. functions are shims for ",(0,t.jsx)(n.code,{children:"isLevelEnabled()"})," with a\nspecified value of ",(0,t.jsx)(n.code,{children:"Level"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"log()"})," function with value arguments: only emits an event if ",(0,t.jsx)(n.code,{children:"isLevelEnabled()"})," for the requested\nlevel is ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"log()"})," function with lambda argument: only calls the lambda and emits an event\nif ",(0,t.jsx)(n.code,{children:"isLevelEnabled()"})," for the requested level is ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.RP)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5680:(e,n,r)=>{r.d(n,{RP:()=>a});var t=r(6540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),a=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=a(r),g=i,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||l;return r?t.createElement(f,c(c({ref:n},h),{},{components:r})):t.createElement(f,c({ref:n},h))}));h.displayName="MDXCreateElement"}}]);