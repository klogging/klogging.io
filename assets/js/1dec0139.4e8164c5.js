"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[9477],{9183:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"concepts/klogging-process","title":"Klogging internal process","description":"Overall process","source":"@site/docs/concepts/klogging-process.md","sourceDirName":"concepts","slug":"/concepts/klogging-process","permalink":"/docs/concepts/klogging-process","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Ktor","permalink":"/docs/ktor/"},"next":{"title":"Log Events","permalink":"/docs/concepts/log-events"}}');var o=s(4848),t=s(8453);const r={sidebar_position:5},l="Klogging internal process",c={},a=[{value:"Overall process",id:"overall-process",level:2},{value:"Log event batching",id:"log-event-batching",level:2},{value:"Log event order",id:"log-event-order",level:2}];function g(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"klogging-internal-process",children:"Klogging internal process"})}),"\n",(0,o.jsx)(n.h2,{id:"overall-process",children:"Overall process"}),"\n",(0,o.jsxs)(n.p,{children:["Klogging processes most log events through Kotlin ",(0,o.jsx)(n.a,{href:"https://kotlinlang.org/docs/channels.html",children:"coroutine channels"}),"\nto take logging away from the main threads of program execution as soon as possible."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Klogging process diagram",src:s(7500).A+""})}),"\n",(0,o.jsx)(n.p,{children:"Notes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Filter"}),": only construct and emit a log event if ",(0,o.jsx)(n.a,{href:"/docs/internals/level-checking",children:"specified by Klogger configuration"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Emit"}),": send a log event into the events channel (or direct)."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Dispatch"}),": determine which sinks are to receive a log event and send them into the\ncorresponding sink channels (or direct)."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Render"}),": convert a log event into a representation suitable for a sink."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Send"}),": deliver a rendered log event to a destination."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Log events are constructed as close as possible to the code they describe."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/loggers/defining-loggers",children:"Klogger"})," instances have ",(0,o.jsx)(n.code,{children:"suspend"})," functions for emitting log events."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/loggers/defining-loggers",children:"NoCoLogger"})," instances do not have ",(0,o.jsx)(n.code,{children:"suspend"})," functions, and launch coroutines\nto emit events into the events channel."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Each sink has its own channel and processes log events in the order it receives them."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Direct"}),": dashed lines show how Klogging can ",(0,o.jsx)(n.a,{href:"/docs/concepts/direct-logging",children:"send log events directly to sinks"}),"\ninstead of asynchronously via coroutine channels."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"log-event-batching",children:"Log event batching"}),"\n",(0,o.jsxs)(n.p,{children:["Log events are ",(0,o.jsx)(n.a,{href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/sending/Batching.kt",children:"received from sink channels in batches"}),"\nbefore being sent to sink destinations. Events are batched:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"at least every 10 milliseconds; or"}),"\n",(0,o.jsx)(n.li,{children:"at most 100 events."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["These values are defaults and can be changed by setting ",(0,o.jsx)(n.a,{href:"/docs/internals/environment-variables",children:"environment variables"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"log-event-order",children:"Log event order"}),"\n",(0,o.jsx)(n.p,{children:"When coroutines are launched, the order in which suspend functions complete is unpredictable.\nKlogging attempts to preserve order as much as it can without sacrificing performance by not launching\nnew coroutines unless necessary."}),"\n",(0,o.jsx)(n.p,{children:"New coroutines are launched in these places:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Creating the loop in ",(0,o.jsx)(n.a,{href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/internal/Emitter.kt#L41",children:"Emitter.kt"})," that reads from the events channel and calls ",(0,o.jsx)(n.code,{children:"dispatchEvent"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Emitting log events into the events channel from\n",(0,o.jsx)(n.a,{href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/impl/NoCoLoggerImpl.kt#L43",children:"NoCoLoggerImpl.kt"}),".\nA new coroutine is launched for every log event."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Creating the loop in ",(0,o.jsx)(n.a,{href:"https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/internal/Sink.kt#L41",children:"Sink.kt"}),"\nthat reads from the channel for each sink."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Sinks may launch coroutines in order to send log events to their destinations."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Sinks that send events to the console or to the filesystem do not launch coroutines because they are expected to\nwork without significant delay. They will preserve the order that log events were emitted."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Sinks that send events to remote destinations will typically launch multiple coroutines to allow for delays\nin delivering events. The order in which those destinations (e.g. log aggregation services) receive log events\nis not guaranteed. Log aggregators are expected to use timestamps to order log events."}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},7500:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/klogging-process-0192d5e31b1784bd7f750ed46349c9bd.svg"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(6540);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);