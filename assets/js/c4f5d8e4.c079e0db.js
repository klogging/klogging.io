"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[2634],{8655:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(6540);function o(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}const s=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(s&&(s+=" "),s+=t);return s};var i=n(9201),r=n(8774),l=n(4586);const a={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"},c={features:"features_xdhU",featureSvg:"featureSvg__8YW"};var g=n(4848);const d=[{title:"Easily create structured logs",description:(0,g.jsx)(g.Fragment,{children:"Send log events as structured parcels of data, not simply message strings."}),details:(0,g.jsxs)("p",{children:["When you use a message template in logging code:",(0,g.jsx)("img",{src:"/img/log-info-user-logged-in.png",alt:"Logging for user logged in"}),"Klogging creates a structured log event:",(0,g.jsx)("img",{src:"/img/clef-json-user-logged-in.png",alt:"JSON log event for user logged in"})]})},{title:"Log information about execution scope",description:(0,g.jsx)(g.Fragment,{children:"You can store information in Kotlin coroutine scopes and Klogging includes it in log events. There is no need to manage removal of information from scopes because Kotlin coroutines take care of that."}),details:(0,g.jsxs)("p",{children:["Put some information into coroutine scope:",(0,g.jsx)("img",{src:"/img/log-info-coroutine-log-context.png",alt:"Logging with coroutine context"}),"Klogging includes the information in the log event:",(0,g.jsx)("img",{src:"/img/clef-json-coroutine-log-context.png",alt:"JSON log event with coroutine context"})]})},{title:"High-resolution timestamps",description:(0,g.jsx)(g.Fragment,{children:"Be confident about the order in which log events from a host were produced. Klogging uses the finest resolution available: at least microsecond, and down to nanosecond if available."}),details:(0,g.jsxs)("p",{children:["Avoid the situation where you need to know the order of log events but can\u2019t tell from the log aggregation:",(0,g.jsx)("img",{src:"/img/log-messages-same-millisecond.png",alt:"Log messages at same millisecond"})]})}];function u(e){let{title:t,description:n,details:o}=e;return(0,g.jsxs)("div",{className:s("col col--4"),children:[(0,g.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,g.jsx)("h3",{children:t}),(0,g.jsx)("p",{children:n})]}),(0,g.jsx)("div",{className:"text--left",children:o})]})}function h(){return(0,g.jsx)("section",{className:c.features,children:(0,g.jsx)("div",{className:"container",children:(0,g.jsx)("div",{className:"row",children:d.map(((e,t)=>(0,g.jsx)(u,{...e},t)))})})})}function m(){const{siteConfig:e}=(0,l.A)();return(0,g.jsx)("header",{className:s("hero hero--dark",a.heroBanner),children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsxs)("h1",{className:"hero__title",children:[(0,g.jsx)("img",{src:"img/klogging.svg",alt:"Klogging logo",height:"40px"}),"\xa0",e.title]}),(0,g.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,g.jsx)("div",{className:a.buttons,children:(0,g.jsx)(r.A,{className:"button button--secondary button--lg",to:"/docs/get-started",children:"Get started"})})]})})}function f(){const{siteConfig:e}=(0,l.A)();return(0,g.jsxs)(i.A,{title:""+e.title,description:"Easy and powerful logging from Kotlin with coroutine support",children:[(0,g.jsx)(m,{}),(0,g.jsx)("main",{children:(0,g.jsx)(h,{})})]})}}}]);