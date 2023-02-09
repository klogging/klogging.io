"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[78],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return N}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),s=a,N=m["".concat(p,".").concat(s)]||m[s]||u[s]||i;return n?r.createElement(N,o(o({ref:t},c),{},{components:n})):r.createElement(N,o({ref:t},c))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:10},p="Environment variables",d={unversionedId:"internals/environment-variables",id:"internals/environment-variables",title:"Environment variables",description:"Klogging\u2019s behaviour can be modified by setting certain environment variables",source:"@site/docs/internals/environment-variables.md",sourceDirName:"internals",slug:"/internals/environment-variables",permalink:"/docs/internals/environment-variables",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Direct logging",permalink:"/docs/concepts/direct-logging"},next:{title:"Log levels and checking",permalink:"/docs/internals/level-checking"}},c={},m=[],u={toc:m},s="wrapper";function N(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"environment-variables"},"Environment variables"),(0,i.kt)("p",null,"Klogging\u2019s behaviour can be modified by setting certain environment variables\nin the runtime."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"KLOGGING_MIN_LOG_LEVEL")),(0,i.kt)("td",{parentName:"tr",align:null},"Minimum level at which Klogging\u2019s ",(0,i.kt)("a",{parentName:"td",href:"internal-logger"},"internal logger")," emits log messages. Acceptable values are ",(0,i.kt)("inlineCode",{parentName:"td"},"TRACE"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"DEBUG"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"INFO"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"WARN"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"ERROR")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"FATAL"),"."),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"INFO"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"KLOGGING_CONFIG_JSON_PATH")),(0,i.kt)("td",{parentName:"tr",align:null},"Absolute path to a ",(0,i.kt)("a",{parentName:"td",href:"../configuration/json"},"JSON configuration file"),"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"(none)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ENV_KLOGGING_EVENT_CHANNEL_CAPACITY")),(0,i.kt)("td",{parentName:"tr",align:null},"Buffer capacity of the coroutine channel used for events."),(0,i.kt)("td",{parentName:"tr",align:"center"},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ENV_KLOGGING_SINK_CHANNEL_CAPACITY")),(0,i.kt)("td",{parentName:"tr",align:null},"Buffer capacity of the coroutine channel used for each sink."),(0,i.kt)("td",{parentName:"tr",align:"center"},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ENV_KLOGGING_BATCH_MAX_TIME_MS")),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum time in milliseconds between sending batches of events to sinks."),(0,i.kt)("td",{parentName:"tr",align:"center"},"10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ENV_KLOGGING_BATCH_MAX_SIZE")),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum batch size of events that are sent to sinks."),(0,i.kt)("td",{parentName:"tr",align:"center"},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ENV_KLOGGING_FF_EXECUTOR_THREAD_POOL")),(0,i.kt)("td",{parentName:"tr",align:null},"(JVM) Feature flag: if present and ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," then Klogging uses a coroutine dispatcher with a separate, fixed-size thread pool. ",(0,i.kt)("strong",{parentName:"td"},"This is an experimental feature.")),(0,i.kt)("td",{parentName:"tr",align:"center"},"10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ENV_KLOGGING_COROUTINE_THREADS")),(0,i.kt)("td",{parentName:"tr",align:null},"(JVM) Number of threads to use in the pool for Klogging coroutines if ",(0,i.kt)("inlineCode",{parentName:"td"},"ENV_KLOGGING_FF_EXECUTOR_THREAD_POOL")," evaluates ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),"."),(0,i.kt)("td",{parentName:"tr",align:"center"},"(none)")))))}N.isMDXComponent=!0}}]);