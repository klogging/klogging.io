"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[1136],{5470:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>g});var i=o(4848),r=o(8453);const s={sidebar_position:10},l="Defining loggers",t={id:"loggers/defining-loggers",title:"Defining loggers",description:"Klogging provides a number of ways of defining loggers.",source:"@site/docs/loggers/defining-loggers.md",sourceDirName:"loggers",slug:"/loggers/defining-loggers",permalink:"/docs/loggers/defining-loggers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"From other sources",permalink:"/docs/context/other-context"},next:{title:"Sending log events",permalink:"/docs/logging/sending-logs"}},c={},g=[{value:"Implement <code>Klogging</code> interface",id:"implement-klogging-interface",level:2},{value:"Define a logger directly",id:"define-a-logger-directly",level:2},{value:"Static reference",id:"static-reference",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"defining-loggers",children:"Defining loggers"}),"\n",(0,i.jsx)(n.p,{children:"Klogging provides a number of ways of defining loggers."}),"\n",(0,i.jsxs)(n.h2,{id:"implement-klogging-interface",children:["Implement ",(0,i.jsx)(n.code,{children:"Klogging"})," interface"]}),"\n",(0,i.jsxs)(n.p,{children:["The interface ",(0,i.jsx)(n.code,{children:"io.klogging.Klogging"})," includes a ",(0,i.jsx)(n.code,{children:"logger"})," property that returns a\n",(0,i.jsx)(n.code,{children:"Klogger"})," instance with the name of the class. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'package com.example\n\nimport io.klogging.Klogging\n\nclass ImportantService : Klogging {\n\n    suspend fun beImportant() {\n        // This logger has the name "com.example.ImportantService".\n        logger.info("Being important")\n    }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Klogging"})," functions are all ",(0,i.jsx)(n.code,{children:"suspend"})," functions to be called in coroutine contexts."]})}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, for non-coroutine contexts, the ",(0,i.jsx)(n.code,{children:"NoCoLogging"})," interface has a ",(0,i.jsx)(n.code,{children:"logger"})," property that\nreturns a ",(0,i.jsx)(n.code,{children:"NoCoLogger"})," instance. ",(0,i.jsx)(n.code,{children:"NoCoLogger"})," has the same functions as ",(0,i.jsx)(n.code,{children:"Klogger"})," but they are\nnot ",(0,i.jsx)(n.code,{children:"suspend"})," functions."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"logger"})," property is not static and its ",(0,i.jsx)(n.code,{children:"get()"})," function is called every time it is\nreferenced. You can define a logger directly if performance is important."]})}),"\n",(0,i.jsx)(n.h2,{id:"define-a-logger-directly",children:"Define a logger directly"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"logger()"})," function defines a logger directly by name, by class or by reified type.\nThe following calls to ",(0,i.jsx)(n.code,{children:"logger"})," are equivalent:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'package com.example\n\nimport io.klogging.logger\n\nclass BusyService {\n    val loggerByReifiedType = logger<BusyService>()\n    val loggerByClass = logger(BusyService::class)\n    val loggerByName = logger("com.example.BusyService")\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["All three ",(0,i.jsx)(n.code,{children:"loggerByReifiedType"}),", ",(0,i.jsx)(n.code,{children:"loggerByClass"})," and ",(0,i.jsx)(n.code,{children:"loggerByName"})," refer to the same logger\ninstance because they have the same name"]}),"\n",(0,i.jsx)(n.h2,{id:"static-reference",children:"Static reference"}),"\n",(0,i.jsx)(n.p,{children:"For a single reference to a logger that is not looked up every time, define it in the companion\nobject of a class:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"class VeryBusyService {\n    companion object {\n        logger = logger<VeryBusyService>()\n    }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>t});var i=o(6540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);