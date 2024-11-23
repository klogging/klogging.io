"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[1594],{6997:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"coroutines/context","title":"Contextual event items","description":"Klogging includes the","source":"@site/docs/coroutines/context.md","sourceDirName":"coroutines","slug":"/coroutines/context","permalink":"/docs/coroutines/context","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20},"sidebar":"tutorialSidebar","previous":{"title":"Coroutines","permalink":"/docs/coroutines/"},"next":{"title":"Asynchronous handling of log events","permalink":"/docs/coroutines/async"}}');var i=o(4848),s=o(8453);const c={sidebar_position:20},r="Contextual event items",l={},d=[{value:"Log context functions",id:"log-context-functions",level:2},{value:"<code>logContext()</code>",id:"logcontext",level:3},{value:"<code>withLogContext()</code>",id:"withlogcontext",level:3},{value:"<code>addToContext()</code>",id:"addtocontext",level:3},{value:"<code>removeFromContext()</code>",id:"removefromcontext",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"contextual-event-items",children:"Contextual event items"})}),"\n",(0,i.jsxs)(n.p,{children:["Klogging includes the\n",(0,i.jsx)(n.a,{href:"https://dokka.klogging.io/-klogging/io.klogging.context/-log-context/index.html",children:(0,i.jsx)(n.code,{children:"LogContext"})}),"\nclass to hold a map of contextual information in a coroutine context. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'suspend fun complexLogic(input: EssentialStuff) {\n    withLogContext("runId" to input.runId) {\n        logger.info { "Starting logic" }\n\n        // Do stuff: log events, call functions, etc.\n\n        logger.info { "Finished logic" }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The log events sent by any ",(0,i.jsx)(n.code,{children:"suspend"})," functions within the scope of the launched coroutine will\ncontain a field called ",(0,i.jsx)(n.code,{children:"runId"})," with the value of ",(0,i.jsx)(n.code,{children:"input.runId"})," for that particular run."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example of two log events with the same value of runId in Seq",src:o(3551).A+"",width:"1276",height:"548"})}),"\n",(0,i.jsx)(n.p,{children:"Coroutine context information is kept for the duration of the current coroutine scope\nand is automatically removed at the end of that scope. Context information is also\nautomatically copied into child scopes as required."}),"\n",(0,i.jsx)(n.p,{children:"This is easier to use and more flexible than Mapped Diagnostic Context (MDC) in Logback\nand ThreadContext in Log4J. Those contexts require callers to remove items when\nfinished and to ensure items are moved between threads."}),"\n",(0,i.jsx)(n.h2,{id:"log-context-functions",children:"Log context functions"}),"\n",(0,i.jsxs)(n.p,{children:["Klogging provides functions for creating and managing ",(0,i.jsx)(n.code,{children:"LogContext"})," instances."]}),"\n",(0,i.jsx)(n.h3,{id:"logcontext",children:(0,i.jsx)(n.a,{href:"https://dokka.klogging.io/-klogging/io.klogging.context/log-context.html",children:(0,i.jsx)(n.code,{children:"logContext()"})})}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"LogContext"})," instance with items to include in log events, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'    launch(logContext("runId" to request.runId, "userId" to request.userId)) {\n        logger.info("Start processing")\n        // etc.\n    }\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"logContext()"})," returns a new\n",(0,i.jsx)(n.a,{href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/",children:(0,i.jsx)(n.code,{children:"CoroutineContext"})}),"\ninstance. It also includes any ",(0,i.jsx)(n.code,{children:"LogContext"})," information in the current coroutine scope:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'    withContext(logContext("runId" to request.runId) {\n        // Item `runId` is in scope.\n        withContext(logContext("mode" to calculateMode()) {\n            // Both `runId` and `mode` items are in scope.\n        }\n        // Only `runId` is in scope.\n    }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"withlogcontext",children:(0,i.jsx)(n.a,{href:"https://dokka.klogging.io/-klogging/io.klogging.context/with-log-context.html",children:(0,i.jsx)(n.code,{children:"withLogContext()"})})}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"LogContext"})," within the current coroutine scope with items to include in log events,\nfor example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'    withLogContext("runId" to request.runId, "userId" to request.userId) {\n        logger.info("Start processing")\n        // etc.\n    }\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"withLogContext()"})," is the same as ",(0,i.jsx)(n.code,{children:"withContext(logContext())"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"addtocontext",children:(0,i.jsx)(n.a,{href:"https://dokka.klogging.io/-klogging/io.klogging.context/add-to-context.html",children:(0,i.jsx)(n.code,{children:"addToContext()"})})}),"\n",(0,i.jsxs)(n.p,{children:["Add items to a ",(0,i.jsx)(n.code,{children:"LogContext"})," in the current coroutine scope, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'    // Within a coroutine scope \u2026\n    addToContext("mode" to calculateMode())\n    // Item `mode` is now in coroutine scope `LogContext`\n'})}),"\n",(0,i.jsx)(n.h3,{id:"removefromcontext",children:(0,i.jsx)(n.a,{href:"https://dokka.klogging.io/-klogging/io.klogging.context/remove-from-context.html",children:(0,i.jsx)(n.code,{children:"removeFromContext()"})})}),"\n",(0,i.jsxs)(n.p,{children:["Remove items from a ",(0,i.jsx)(n.code,{children:"LogContext"})," in the current coroutine scope, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'    // Within a coroutine scope \u2026\n    removeFromContext("mode")\n    // Item `mode` is no longer in coroutine scope `LogContext`\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3551:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/seq-log-events-same-runId-83956a942f032b94febf2057ee7a686a.png"},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>r});var t=o(6540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);