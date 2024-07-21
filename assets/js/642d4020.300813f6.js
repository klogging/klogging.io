"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[173],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>d});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},g=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return t?r.createElement(d,a(a({ref:n},g),{},{components:t})):r.createElement(d,a({ref:n},g))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(8168),i=(t(6540),t(5680));const l={sidebar_position:20},a="Log levels and checking",o={unversionedId:"internals/level-checking",id:"internals/level-checking",title:"Log levels and checking",description:"Each logger has a minimum logging level per sink, set by configuration. The minimum value of the",source:"@site/docs/internals/level-checking.md",sourceDirName:"internals",slug:"/internals/level-checking",permalink:"/docs/internals/level-checking",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Environment variables",permalink:"/docs/internals/environment-variables"},next:{title:"Internal logger",permalink:"/docs/internals/internal-logger"}},c={},s=[{value:"Rules",id:"rules",level:2},{value:"Code",id:"code",level:2}],g={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"log-levels-and-checking"},"Log levels and checking"),(0,i.yg)("p",null,"Each logger has a minimum logging level per sink, set by configuration. The minimum value of the\nper-sink levels is the minimum level for the logger, which can be checked at any time."),(0,i.yg)("h2",{id:"rules"},"Rules"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If a log request\u2019s level is less than the minimum for the logger that created it, no log event\nis created and emitted."),(0,i.yg)("li",{parentName:"ul"},"When a log event is emitted, it is dispatched to at least one sink.")),(0,i.yg)("h2",{id:"code"},"Code"),(0,i.yg)("p",null,"Applicable to both ",(0,i.yg)("inlineCode",{parentName:"p"},"Klogger")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"NoCoLogger"),"."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"trace()"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"debug()")," etc. functions are shims for ",(0,i.yg)("inlineCode",{parentName:"li"},"log()")," with a specified value of ",(0,i.yg)("inlineCode",{parentName:"li"},"Level"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"isTraceEnabled()"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"isDebugEnabled()")," etc. functions are shims for ",(0,i.yg)("inlineCode",{parentName:"li"},"isLevelEnabled()")," with a\nspecified value of ",(0,i.yg)("inlineCode",{parentName:"li"},"Level"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"log()")," function with value arguments: only emits an event if ",(0,i.yg)("inlineCode",{parentName:"li"},"isLevelEnabled()")," for the requested\nlevel is ",(0,i.yg)("inlineCode",{parentName:"li"},"true"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"log()")," function with lambda argument: only calls the lambda and emits an event\nif ",(0,i.yg)("inlineCode",{parentName:"li"},"isLevelEnabled()")," for the requested level is ",(0,i.yg)("inlineCode",{parentName:"li"},"true"),".")))}p.isMDXComponent=!0}}]);