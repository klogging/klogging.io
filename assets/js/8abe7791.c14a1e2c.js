"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[525],{3905:function(n,e,t){t.d(e,{Zo:function(){return f},kt:function(){return d}});var o=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=o.createContext({}),c=function(n){var e=o.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},f=function(n){var e=c(n.components);return o.createElement(u.Provider,{value:e},n.children)},g="mdxType",s={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,u=n.parentName,f=l(n,["components","mdxType","originalType","parentName"]),g=c(t),p=i,d=g["".concat(u,".").concat(p)]||g[p]||s[p]||r;return t?o.createElement(d,a(a({ref:e},f),{},{components:t})):o.createElement(d,a({ref:e},f))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,a=new Array(r);a[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=n,l[g]="string"==typeof n?n:i,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5266:function(n,e,t){t.r(e),t.d(e,{assets:function(){return f},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return g}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),a=["components"],l={},u="Configuration",c={unversionedId:"configuration/configuration",id:"configuration/configuration",title:"Configuration",description:"Klogging starts with no configuration and will not send any log events. You configure Klogging using",source:"@site/docs/configuration/configuration.md",sourceDirName:"configuration",slug:"/configuration/",permalink:"/docs/configuration/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Configuration DSL",permalink:"/docs/configuration/dsl"}},f={},g=[{value:"How Klogging loads configuration",id:"how-klogging-loads-configuration",level:2},{value:"How Klogging finds configuration files",id:"how-klogging-finds-configuration-files",level:2}],s={toc:g},p="wrapper";function d(n){var e=n.components,t=(0,i.Z)(n,a);return(0,r.kt)(p,(0,o.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Klogging starts with no configuration and will not send any log events. You configure Klogging using\neither:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in code using the ",(0,r.kt)("a",{parentName:"li",href:"/docs/configuration/dsl"},"Configuration domain-specific language")),(0,r.kt)("li",{parentName:"ul"},"using from a ",(0,r.kt)("a",{parentName:"li",href:"/docs/configuration/json"},"JSON")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/configuration/hocon"},"HOCON")," configuration file.")),(0,r.kt)("p",null,"You can also override some configuration by setting ",(0,r.kt)("a",{parentName:"p",href:"/docs/internals/environment-variables"},"Environment\nvariables"),"."),(0,r.kt)("h2",{id:"how-klogging-loads-configuration"},"How Klogging loads configuration"),(0,r.kt)("p",null,"Klogging does not load the initial configuration until it is needed, when a logger is first\ndeclared."),(0,r.kt)("h2",{id:"how-klogging-finds-configuration-files"},"How Klogging finds configuration files"),(0,r.kt)("p",null,"Klogging follows these steps for finding configuration files:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the ",(0,r.kt)("a",{parentName:"li",href:"/docs/internals/environment-variables"},"environment variable")," ",(0,r.kt)("inlineCode",{parentName:"li"},"KLOGGING_CONFIG_PATH")," is\nset, look for a file at that absolute path. Load the contents if found."),(0,r.kt)("li",{parentName:"ol"},"If the environment variable is not set or the specified file is not found, search the classpath:\nfor ",(0,r.kt)("inlineCode",{parentName:"li"},"klogging.json")," and load the contents if found; otherwise for ",(0,r.kt)("inlineCode",{parentName:"li"},"klogging.conf")," and load the\ncontents if found.")),(0,r.kt)("p",null,"Once a file has been found, attempt to interpret it as JSON\nor ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON"),"."))}d.isMDXComponent=!0}}]);