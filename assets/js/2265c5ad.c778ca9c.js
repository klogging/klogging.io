"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[906],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},751:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:10},s="Base Context",l={unversionedId:"context/base-context",id:"context/base-context",title:"Base Context",description:"You can specify items to add to every Klogging log event in your application.",source:"@site/docs/context/base-context.md",sourceDirName:"context",slug:"/context/base-context",permalink:"/docs/context/base-context",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Context",permalink:"/docs/context/"},next:{title:"Message templates",permalink:"/docs/context/message-templates"}},u={},p=[{value:"Using the <code>Context</code> object",id:"using-the-context-object",level:2},{value:"From file-based configuration",id:"from-file-based-configuration",level:2}],f={toc:p},m="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"base-context"},"Base Context"),(0,a.kt)("p",null,"You can specify items to add to every Klogging log event in your application.\nExamples might be application name or a build identifier."),(0,a.kt)("h2",{id:"using-the-context-object"},"Using the ",(0,a.kt)("inlineCode",{parentName:"h2"},"Context")," object"),(0,a.kt)("p",null,"You can specify base context items using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," object, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'const val APP_NAME_KEY = "appName"\nconst val APP_NAME = "analysis-service"\nconst val BUILD_NUMBER_KEY = "buildNumber"\nconst val BUILD_NUMBER_ENV = "BUILD_NUMBER"\n\nContext.addBaseContext(\n    APP_NAME_KEY to APP_NAME,\n    BUILD_NUMBER_KEY to System.getenv(BUILD_NUMBER_ENV),\n)\n')),(0,a.kt)("p",null,"Log events include those values, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@t": "2022-06-16T08:52:12.064882Z",\n  "@l": "INFO",\n  "@mt": "Execution time {elapsedMs} ms",\n  "host": "09b4396db8ae",\n  "appName": "analysis-service",\n  "buildNumber": "2.4.0-d22d0dd",\n  "logger": "com.wodgeworks.analysis.RunTimer",\n  "elapsedMs": 73,\n  "run": "a6f72c37-7e2f-4d69-a73f-7f493cb04d1d",\n  "context": "DefaultDispatcher-worker-3"\n}\n')),(0,a.kt)("h2",{id:"from-file-based-configuration"},"From file-based configuration"),(0,a.kt)("p",null,"You can specify base context items in ",(0,a.kt)("a",{parentName:"p",href:"../configuration/json"},"JSON"),"\nor ",(0,a.kt)("a",{parentName:"p",href:"../configuration/hocon"},"HOCON")," configuration files, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "baseContext": {\n    "appName": "analysis-service",\n    "buildNumber": "${BUILD_NUMBER}"\n  }\n}\n')),(0,a.kt)("p",null,"that reads the value of BUILD_NUMBER from the runtime environment."))}d.isMDXComponent=!0}}]);