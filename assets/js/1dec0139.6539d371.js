"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[477],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=r.createContext({}),s=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(g.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,g=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=o,d=p["".concat(g,".").concat(u)]||p[u]||m[u]||a;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var g in n)hasOwnProperty.call(n,g)&&(l[g]=n[g]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9646:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(8168),o=(t(6540),t(5680));const a={sidebar_position:5},i="Klogging internal process",l={unversionedId:"concepts/klogging-process",id:"concepts/klogging-process",title:"Klogging internal process",description:"Overall process",source:"@site/docs/concepts/klogging-process.md",sourceDirName:"concepts",slug:"/concepts/klogging-process",permalink:"/docs/concepts/klogging-process",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Klogging and Ktor",permalink:"/docs/ktor/"},next:{title:"Log Events",permalink:"/docs/concepts/log-events"}},g={},s=[{value:"Overall process",id:"overall-process",level:2},{value:"Log event batching",id:"log-event-batching",level:2},{value:"Log event order",id:"log-event-order",level:2}],c={toc:s},p="wrapper";function m(e){let{components:n,...a}=e;return(0,o.yg)(p,(0,r.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"klogging-internal-process"},"Klogging internal process"),(0,o.yg)("h2",{id:"overall-process"},"Overall process"),(0,o.yg)("p",null,"Klogging processes most log events through Kotlin ",(0,o.yg)("a",{parentName:"p",href:"https://kotlinlang.org/docs/channels.html"},"coroutine channels"),"\nto take logging away from the main threads of program execution as soon as possible."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Klogging process diagram",src:t(7500).A})),(0,o.yg)("p",null,"Notes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Filter"),": only construct and emit a log event if ",(0,o.yg)("a",{parentName:"p",href:"../internals/level-checking"},"specified by Klogger configuration"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Emit"),": send a log event into the events channel (or direct).")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Dispatch"),": determine which sinks are to receive a log event and send them into the\ncorresponding sink channels (or direct).")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Render"),": convert a log event into a representation suitable for a sink.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Send"),": deliver a rendered log event to a destination.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Log events are constructed as close as possible to the code they describe.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"../loggers/defining-loggers"},"Klogger")," instances have ",(0,o.yg)("inlineCode",{parentName:"p"},"suspend")," functions for emitting log events.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"../loggers/defining-loggers"},"NoCoLogger")," instances do not have ",(0,o.yg)("inlineCode",{parentName:"p"},"suspend")," functions, and launch coroutines\nto emit events into the events channel.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Each sink has its own channel and processes log events in the order it receives them.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Direct"),": dashed lines show how Klogging can ",(0,o.yg)("a",{parentName:"p",href:"../concepts/direct-logging"},"send log events directly to sinks"),"\ninstead of asynchronously via coroutine channels."))),(0,o.yg)("h2",{id:"log-event-batching"},"Log event batching"),(0,o.yg)("p",null,"Log events are ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/sending/Batching.kt"},"received from sink channels in batches"),"\nbefore being sent to sink destinations. Events are batched:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"at least every 10 milliseconds; or"),(0,o.yg)("li",{parentName:"ul"},"at most 100 events.")),(0,o.yg)("p",null,"These values are defaults and can be changed by setting ",(0,o.yg)("a",{parentName:"p",href:"../internals/environment-variables"},"environment variables"),"."),(0,o.yg)("h2",{id:"log-event-order"},"Log event order"),(0,o.yg)("p",null,"When coroutines are launched, the order in which suspend functions complete is unpredictable.\nKlogging attempts to preserve order as much as it can without sacrificing performance by not launching\nnew coroutines unless necessary."),(0,o.yg)("p",null,"New coroutines are launched in these places:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Creating the loop in ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/internal/Emitter.kt#L41"},"Emitter.kt")," that reads from the events channel and calls ",(0,o.yg)("inlineCode",{parentName:"p"},"dispatchEvent"),".")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Emitting log events into the events channel from\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/impl/NoCoLoggerImpl.kt#L43"},"NoCoLoggerImpl.kt"),".\nA new coroutine is launched for every log event.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Creating the loop in ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/internal/Sink.kt#L41"},"Sink.kt"),"\nthat reads from the channel for each sink."))),(0,o.yg)("p",null,"Sinks may launch coroutines in order to send log events to their destinations."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Sinks that send events to the console or to the filesystem do not launch coroutines because they are expected to\nwork without significant delay. They will preserve the order that log events were emitted.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Sinks that send events to remote destinations will typically launch multiple coroutines to allow for delays\nin delivering events. The order in which those destinations (e.g. log aggregation services) receive log events\nis not guaranteed. Log aggregators are expected to use timestamps to order log events."))))}m.isMDXComponent=!0},7500:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/klogging-process-0192d5e31b1784bd7f750ed46349c9bd.svg"}}]);