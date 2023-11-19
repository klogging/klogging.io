"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[38],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,c=t.originalType,u=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),s=l(n),m=o,d=s["".concat(u,".").concat(m)]||s[m]||f[m]||c;return n?r.createElement(d,i(i({ref:e},p),{},{components:n})):r.createElement(d,i({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a[s]="string"==typeof t?t:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6163:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],a={sidebar_position:20},u="From other coroutine contexts",l={unversionedId:"context/other-coroutine-context",id:"context/other-coroutine-context",title:"From other coroutine contexts",description:"Klogging can include information from other coroutine context elements.",source:"@site/docs/context/other-coroutine-context.md",sourceDirName:"context",slug:"/context/other-coroutine-context",permalink:"/docs/context/other-coroutine-context",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Base Context",permalink:"/docs/context/base-context"},next:{title:"From other sources",permalink:"/docs/context/other-context"}},p={},s=[],f={toc:s},m="wrapper";function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,c.kt)(m,(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"from-other-coroutine-contexts"},"From other coroutine contexts"),(0,c.kt)("p",null,"Klogging can include information from other coroutine context elements."),(0,c.kt)("p",null,"As an example, if your application is using ",(0,c.kt)("a",{parentName:"p",href:"https://projectreactor.io/"},"Project Reactor"),", you can\nstore information in a Reactor ",(0,c.kt)("inlineCode",{parentName:"p"},"Context")," and wrap that in a coroutine ",(0,c.kt)("inlineCode",{parentName:"p"},"ReactorContext"),"."),(0,c.kt)("p",null,"Configure Klogging to use all the values from the Reactor context in log events (",(0,c.kt)("inlineCode",{parentName:"p"},"EventItems")," is a\nconvenient type alias for ",(0,c.kt)("inlineCode",{parentName:"p"},"Map<String, Any?>"),"):"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-kotlin"},"import io.klogging.config.Context\nimport io.klogging.events.EventItems\nimport kotlinx.coroutines.reactor.ReactorContext\n\nval reactorExtractor: (ReactorContext) -> EventItems = { ctx ->\n    // TBC\n}\n\nContext.addContextItemExtractor(ReactorContext, reactorExtractor)\n")),(0,c.kt)("p",null,"Any log events emitted within the scope of the Reactor context will include items returned by the\n",(0,c.kt)("inlineCode",{parentName:"p"},"reactorExtractor()")," function from that context."))}d.isMDXComponent=!0}}]);