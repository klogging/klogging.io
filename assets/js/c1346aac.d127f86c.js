"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[5125],{8293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var o=n(4848),r=n(5680);const c={sidebar_position:40},i="From other coroutine contexts",a={id:"context/other-coroutine-context",title:"From other coroutine contexts",description:"Klogging can include information from other coroutine context elements.",source:"@site/docs/context/other-coroutine-context.md",sourceDirName:"context",slug:"/context/other-coroutine-context",permalink:"/docs/context/other-coroutine-context",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Immediate context items",permalink:"/docs/context/immediate-context-items"},next:{title:"From other sources",permalink:"/docs/context/other-context"}},s={},l=[];function u(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.RP)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"from-other-coroutine-contexts",children:"From other coroutine contexts"}),"\n",(0,o.jsx)(t.p,{children:"Klogging can include information from other coroutine context elements."}),"\n",(0,o.jsxs)(t.p,{children:["As an example, if your application is using ",(0,o.jsx)(t.a,{href:"https://projectreactor.io/",children:"Project Reactor"}),", you can\nstore information in a Reactor ",(0,o.jsx)(t.code,{children:"Context"})," and wrap that in a coroutine ",(0,o.jsx)(t.code,{children:"ReactorContext"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Configure Klogging to use all the values from the Reactor context in log events (",(0,o.jsx)(t.code,{children:"EventItems"})," is a\nconvenient type alias for ",(0,o.jsx)(t.code,{children:"Map<String, Any?>"}),"):"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:"import io.klogging.config.Context\nimport io.klogging.events.EventItems\nimport kotlinx.coroutines.reactor.ReactorContext\n\nval reactorExtractor: (ReactorContext) -> EventItems = { ctx ->\n    // TBC\n}\n\nContext.addContextItemExtractor(ReactorContext, reactorExtractor)\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Any log events emitted within the scope of the Reactor context will include items returned by the\n",(0,o.jsx)(t.code,{children:"reactorExtractor()"})," function from that context."]})]})}function p(e={}){const{wrapper:t}={...(0,r.RP)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},5680:(e,t,n)=>{n.d(t,{RP:()=>l});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),x=r,m=d["".concat(s,".").concat(x)]||d[x]||u[x]||c;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));p.displayName="MDXCreateElement"}}]);