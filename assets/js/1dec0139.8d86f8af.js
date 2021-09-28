"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[318],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},364:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:5},s="Klogging internal process",c={unversionedId:"concepts/klogging-process",id:"concepts/klogging-process",isDocsHomePage:!1,title:"Klogging internal process",description:"Overall process",source:"@site/docs/concepts/klogging-process.md",sourceDirName:"concepts",slug:"/concepts/klogging-process",permalink:"/docs/concepts/klogging-process",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Klogging with Spring Boot",permalink:"/docs/java/spring-boot"},next:{title:"Log Events",permalink:"/docs/concepts/log-events"}},p=[{value:"Overall process",id:"overall-process",children:[]},{value:"Log event batching",id:"log-event-batching",children:[]},{value:"Log event order",id:"log-event-order",children:[]}],g={toc:p};function u(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"klogging-internal-process"},"Klogging internal process"),(0,i.kt)("h2",{id:"overall-process"},"Overall process"),(0,i.kt)("p",null,"Klogging processes log events through Kotlin ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/channels.html"},"coroutine channels"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Klogging process diagram",src:n(6615).Z})),(0,i.kt)("p",null,"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Filter"),": only construct and emit a log event if ",(0,i.kt)("a",{parentName:"p",href:"../internals/level-checking"},"specified by Klogger configuration"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Emit"),": send a log event into the events channel.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dispatch"),": determine which sinks are to receive a log event and send them into those sink channels.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Render"),": convert a log event into a representation suitable for a sink.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Send"),": deliver a rendered log event to a destination.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Log events are constructed as close as possible to the code they describe.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"../loggers/defining-loggers"},"Klogger")," instances have ",(0,i.kt)("inlineCode",{parentName:"p"},"suspend")," functions for emitting log events.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"../loggers/defining-loggers"},"NoCoLogger")," instances do not have ",(0,i.kt)("inlineCode",{parentName:"p"},"suspend")," functions, and launch coroutines\nto emit events into the events channel.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Each sink has its own channel and processes log events in the order it receives them."))),(0,i.kt)("h2",{id:"log-event-batching"},"Log event batching"),(0,i.kt)("p",null,"Log events are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/klogging/klogging/blob/main/src/commonMain/kotlin/io/klogging/sending/Batching.kt"},"received from sink channels in batches"),"\nbefore being sent to sink destinations. Events are batched:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"at least every 10 milliseconds; or"),(0,i.kt)("li",{parentName:"ul"},"at most 100 events.")),(0,i.kt)("p",null,"These values are defaults and can be changed by setting ",(0,i.kt)("a",{parentName:"p",href:"../internals/environment-variables"},"environment variables"),"."),(0,i.kt)("h2",{id:"log-event-order"},"Log event order"),(0,i.kt)("p",null,"When coroutines are launched, the order in which suspend functions complete is unpredictable.\nKlogging attempts to preserve order as much as it can without sacrificing performance by not launching\nnew coroutines unless necessary."),(0,i.kt)("p",null,"New coroutines are launched in these places:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating the loop in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/klogging/klogging/blob/main/src/commonMain/kotlin/io/klogging/internal/Emitter.kt#L41"},"Emitter.kt")," that reads from the events channel and calls ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatchEvent"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Emitting log events into the events channel from\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/klogging/klogging/blob/main/src/commonMain/kotlin/io/klogging/impl/NoCoLoggerImpl.kt#L43"},"NoCoLoggerImpl.kt"),".\nA new coroutine is launched for every log event.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating the loop in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/klogging/klogging/blob/main/src/commonMain/kotlin/io/klogging/internal/Sink.kt#L41"},"Sink.kt"),"\nthat reads from the channel for each sink."))),(0,i.kt)("p",null,"Sinks may launch coroutines in order to send log events to their destinations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sinks that send events to the console or to the filesystem do not launch coroutines because they are expected to\nwork without significant delay. They will preserve the order that log events were emitted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sinks that send events to remote destinations will typically launch multiple coroutines to allow for delays\nin delivering events. The order in which those destinations (e.g. log aggregation services) receive log events\nis not guaranteed. Log aggregators are expected to use timestamps to order log events."))))}u.isMDXComponent=!0},6615:function(e,t,n){t.Z=n.p+"assets/images/klogging-process-03a26314c831a421268e1ca4e4b73cf9.svg"}}]);