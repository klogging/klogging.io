"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[899],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||g[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(8168),o=(n(6540),n(5680));const i={sidebar_position:15},a="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Klogging is a pure-Kotlin logging library that aims to be flexible and easy to use. It uses Kotlin",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/docs/get-started"},next:{title:"Structured log events",permalink:"/docs/structured-log-events"}},s={},c=[{value:"Goals",id:"goals",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"Klogging is a pure-Kotlin logging library that aims to be flexible and easy to use. It uses Kotlin\nidioms for creating loggers and sending log events. It takes advantage\nof ",(0,o.yg)("a",{parentName:"p",href:"https://kotlinlang.org/docs/coroutines-guide.html"},"coroutines")," in\nenvironments that use them, for example the ",(0,o.yg)("a",{parentName:"p",href:"https://ktor.io/"},"Ktor asynchronous service framework"),"."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Klogging currently only supports Kotlin on the JVM. In future it will support other Kotlin\nMultiplatform targets.")),(0,o.yg)("h2",{id:"goals"},"Goals"),(0,o.yg)("p",null,"The goals of Klogging are to:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Provide a familiar logging experience for Java and C# developers."),(0,o.yg)("li",{parentName:"ul"},"Create structured log events by default."),(0,o.yg)("li",{parentName:"ul"},"Use ",(0,o.yg)("a",{parentName:"li",href:"/docs/context/message-templates"},"message templates")," for simple logging of both text and data."),(0,o.yg)("li",{parentName:"ul"},"Use Kotlin coroutines for carrying ",(0,o.yg)("a",{parentName:"li",href:"/docs/coroutines/context"},"scope context information")," to include\nin log events and for ",(0,o.yg)("a",{parentName:"li",href:"/docs/coroutines/async"},"asynchronous dispatching")," of events."),(0,o.yg)("li",{parentName:"ul"},"Finest possible resolution of timestamps, down to nanosecond if available.")))}g.isMDXComponent=!0}}]);