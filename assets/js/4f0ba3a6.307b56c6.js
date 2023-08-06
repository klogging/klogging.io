"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[875],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9042:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:30},l="From other sources",u={unversionedId:"context/other-context",id:"context/other-context",title:"From other sources",description:"Klogging can include context items from other sources without coroutine context information.",source:"@site/docs/context/other-context.md",sourceDirName:"context",slug:"/context/other-context",permalink:"/docs/context/other-context",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"From other coroutine contexts",permalink:"/docs/context/other-coroutine-context"},next:{title:"Defining loggers",permalink:"/docs/loggers/defining-loggers"}},s={},p=[],f={toc:p},m="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"from-other-sources"},"From other sources"),(0,i.kt)("p",null,"Klogging can include context items from other sources without coroutine context information."),(0,i.kt)("p",null,"Klogging has a functional type alias ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemExtractor"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"public typealias ItemExtractor = () -> EventItems\n")),(0,i.kt)("p",null,"You can register an ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemExtractor")," to be called as each log event is assembled before it is\nemitted using ",(0,i.kt)("inlineCode",{parentName:"p"},"Context.addItemExtractor")," function."),(0,i.kt)("p",null,"Klogging\u2019s ",(0,i.kt)("a",{parentName:"p",href:"../java/slf4j"},"SLF4J provider")," uses an ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemExtractor")," to include any MDC entries into\nlog event context items:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"    Context.addItemExtractor {\n      MDC.getCopyOfContextMap() ?: mapOf()\n    }\n")),(0,i.kt)("p",null,"Current MDC entries are included in all log events, whether sent from SLF4J loggers or direct from\nKlogger or NoCoLogger instances."))}g.isMDXComponent=!0}}]);