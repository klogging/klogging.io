"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[306],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=r.createContext({}),s=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(g.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=l,m=p["".concat(g,".").concat(d)]||p[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return g},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={sidebar_position:20},g="Logging severity levels",s={unversionedId:"concepts/levels",id:"concepts/levels",title:"Logging severity levels",description:"Klogging levels",source:"@site/docs/concepts/levels.md",sourceDirName:"concepts",slug:"/concepts/levels",permalink:"/docs/concepts/levels",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Log Events",permalink:"/docs/concepts/log-events"},next:{title:"Rendering",permalink:"/docs/concepts/rendering"}},u={},p=[{value:"Klogging levels",id:"klogging-levels",level:2},{value:"Logger functions and levels",id:"logger-functions-and-levels",level:2}],c={toc:p},d="wrapper";function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logging-severity-levels"},"Logging severity levels"),(0,a.kt)("h2",{id:"klogging-levels"},"Klogging levels"),(0,a.kt)("p",null,"Klogging has 6 levels of logging severity with these names and general meanings:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TRACE"),(0,a.kt)("td",{parentName:"tr",align:null},"Fine detailed information about what is happening.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DEBUG"),(0,a.kt)("td",{parentName:"tr",align:null},"Detailed information about what is happening.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"INFO"),(0,a.kt)("td",{parentName:"tr",align:null},"General information about what is happening.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WARN"),(0,a.kt)("td",{parentName:"tr",align:null},"A warning that something unexpected or undesirable has happened.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ERROR"),(0,a.kt)("td",{parentName:"tr",align:null},"An error condition has occurred that requires attention.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FATAL"),(0,a.kt)("td",{parentName:"tr",align:null},"A serious error condition has occurred that has caused the program to stop.")))),(0,a.kt)("p",null,"These levels are specified by the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/Level.kt"},(0,a.kt)("inlineCode",{parentName:"a"},"Level")),"\nenum."),(0,a.kt)("h2",{id:"logger-functions-and-levels"},"Logger functions and levels"),(0,a.kt)("p",null,"Levels are specified when logging, either in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Klogger#log")," function, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'    logger.log(Level.INFO, "User {user} logged in", user)\n')),(0,a.kt)("p",null,"or using convenience functions, like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'logger.trace("User {user} logged in", user)')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'logger.debug("User {user} logged in", user)')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'logger.info("User {user} logged in", user)')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'logger.warn("User {user} logged in", user)')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'logger.error("User {user} logged in", user)')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'logger.fatal("User {user} logged in", user)'))))}m.isMDXComponent=!0}}]);