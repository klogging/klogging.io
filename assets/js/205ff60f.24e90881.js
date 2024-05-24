"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[5690],{1646:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=t(4848),i=t(5680);const s={sidebar_position:10},c="Environment variables",l={id:"internals/environment-variables",title:"Environment variables",description:"Klogging\u2019s behaviour can be modified by setting certain environment variables",source:"@site/docs/internals/environment-variables.md",sourceDirName:"internals",slug:"/internals/environment-variables",permalink:"/docs/internals/environment-variables",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Direct logging",permalink:"/docs/concepts/direct-logging"},next:{title:"Log levels and checking",permalink:"/docs/internals/level-checking"}},d={},o=[];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"environment-variables",children:"Environment variables"}),"\n",(0,r.jsx)(n.p,{children:"Klogging\u2019s behaviour can be modified by setting certain environment variables\nin the runtime."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"KLOGGING_MIN_LOG_LEVEL"})}),(0,r.jsxs)(n.td,{children:["Minimum level at which Klogging\u2019s ",(0,r.jsx)(n.a,{href:"internal-logger",children:"internal logger"})," emits log messages. Acceptable values are ",(0,r.jsx)(n.code,{children:"TRACE"}),", ",(0,r.jsx)(n.code,{children:"DEBUG"}),", ",(0,r.jsx)(n.code,{children:"INFO"}),", ",(0,r.jsx)(n.code,{children:"WARN"}),", ",(0,r.jsx)(n.code,{children:"ERROR"})," and ",(0,r.jsx)(n.code,{children:"FATAL"}),"."]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"INFO"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"KLOGGING_MIN_DIRECT_LOG_LEVEL"})}),(0,r.jsxs)(n.td,{children:["Minimum level at which log events are ",(0,r.jsx)(n.a,{href:"../concepts/direct-logging",children:"sent directly to sinks"})," instead of via coroutine channels. Acceptable values are ",(0,r.jsx)(n.code,{children:"TRACE"}),", ",(0,r.jsx)(n.code,{children:"DEBUG"}),", ",(0,r.jsx)(n.code,{children:"INFO"}),", ",(0,r.jsx)(n.code,{children:"WARN"}),", ",(0,r.jsx)(n.code,{children:"ERROR"})," and ",(0,r.jsx)(n.code,{children:"FATAL"}),"."]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"WARN"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"KLOGGING_CONFIG_PATH"})}),(0,r.jsxs)(n.td,{children:["Absolute path to a ",(0,r.jsx)(n.a,{href:"../configuration/json",children:"JSON"})," or ",(0,r.jsx)(n.a,{href:"../configuration/hocon",children:"HOCON"})," configuration file."]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"(none)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"KLOGGING_CONFIG_JSON_PATH"})," \u26a0\ufe0f"]}),(0,r.jsxs)(n.td,{children:["Absolute path to a ",(0,r.jsx)(n.a,{href:"../configuration/json",children:"JSON configuration file"}),"."]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"(none)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"KLOGGING_OUTPUT_FORMAT_"}),(0,r.jsx)(n.em,{children:"sink-name"})," \ufe0f"]}),(0,r.jsxs)(n.td,{children:["Override the output format for a sink. For example, setting ",(0,r.jsx)(n.code,{children:"KLOGGING_OUTPUT_FORMAT_STDOUT=CLEF"})," will change the output format for the ",(0,r.jsx)(n.code,{children:"stdout"})," sink to ",(0,r.jsx)(n.code,{children:"CLEF"}),"."]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"(none)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ENV_KLOGGING_EVENT_CHANNEL_CAPACITY"})}),(0,r.jsx)(n.td,{children:"Buffer capacity of the coroutine channel used for events."}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"100"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ENV_KLOGGING_SINK_CHANNEL_CAPACITY"})}),(0,r.jsx)(n.td,{children:"Buffer capacity of the coroutine channel used for each sink."}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"100"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ENV_KLOGGING_BATCH_MAX_TIME_MS"})}),(0,r.jsx)(n.td,{children:"Maximum time in milliseconds between sending batches of events to sinks."}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ENV_KLOGGING_BATCH_MAX_SIZE"})}),(0,r.jsx)(n.td,{children:"Maximum batch size of events that are sent to sinks."}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"100"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ENV_KLOGGING_FF_EXECUTOR_THREAD_POOL"})}),(0,r.jsxs)(n.td,{children:["(JVM) Feature flag: if present and ",(0,r.jsx)(n.code,{children:"true"})," then Klogging uses a coroutine dispatcher with a separate, fixed-size thread pool. ",(0,r.jsx)(n.strong,{children:"This is an experimental feature."})]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ENV_KLOGGING_COROUTINE_THREADS"})}),(0,r.jsxs)(n.td,{children:["(JVM) Number of threads to use in the pool for Klogging coroutines if ",(0,r.jsx)(n.code,{children:"ENV_KLOGGING_FF_EXECUTOR_THREAD_POOL"})," evaluates ",(0,r.jsx)(n.code,{children:"true"}),"."]}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"(none)"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"KLOGGING_CONFIG_JSON_PATH"})," is deprecated and will be replaced by ",(0,r.jsx)(n.code,{children:"KLOGGING_CONFIG_PATH"})," for both\nJSON and HOCON configuration files."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.RP)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},5680:(e,n,t)=>{t.d(n,{RP:()=>o});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),o=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},a={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),x=o(t),j=i,u=x["".concat(d,".").concat(j)]||x[j]||a[j]||s;return t?r.createElement(u,c(c({ref:n},h),{},{components:t})):r.createElement(u,c({ref:n},h))}));h.displayName="MDXCreateElement"}}]);