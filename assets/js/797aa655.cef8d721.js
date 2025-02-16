"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[4716],{3376:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"logging/sending-logs","title":"Sending log events","description":"Once you have a logger, you can call functions on it to send log events. The base function is","source":"@site/docs/logging/sending-logs.md","sourceDirName":"logging","slug":"/logging/sending-logs","permalink":"/docs/logging/sending-logs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Defining loggers","permalink":"/docs/loggers/defining-loggers"},"next":{"title":"Coroutines","permalink":"/docs/coroutines/"}}');var s=i(4848),t=i(8453);const o={sidebar_position:10},r="Sending log events",a={},c=[{value:"Utility functions",id:"utility-functions",level:2},{value:"Logging patterns",id:"logging-patterns",level:2},{value:"String message",id:"string-message",level:3},{value:"Message template",id:"message-template",level:3},{value:"Immediate context items",id:"immediate-context-items",level:3},{value:"Exception",id:"exception",level:3},{value:"Minimum level check",id:"minimum-level-check",level:3},{value:"Kotlin lambda",id:"kotlin-lambda",level:3},{value:"Lambda and exception",id:"lambda-and-exception",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sending-log-events",children:"Sending log events"})}),"\n",(0,s.jsxs)(n.p,{children:["Once you have a logger, you can call functions on it to send log events. The base function is\n",(0,s.jsx)(n.code,{children:"log()"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'    logger.log(Level.INFO, "Application started")\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["All the information here applies to both the coroutine logger ",(0,s.jsx)(n.code,{children:"Klogger"})," and the non-coroutine\nlogger ",(0,s.jsx)(n.code,{children:"NoCoLogger"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"utility-functions",children:"Utility functions"}),"\n",(0,s.jsxs)(n.p,{children:["These utility functions are a convenient way to send logs. They call ",(0,s.jsx)(n.code,{children:"log()"})," with the\nappropriate level:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"trace()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"debug()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"info()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"warn()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"error()"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"fatal()"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"logging-patterns",children:"Logging patterns"}),"\n",(0,s.jsxs)(n.p,{children:["Klogging offers a range of patterns for different logging scenarios. The patterns shown here apply\nto ",(0,s.jsx)(n.code,{children:"log()"})," and all utility functions."]}),"\n",(0,s.jsx)(n.h3,{id:"string-message",children:"String message"}),"\n",(0,s.jsx)(n.p,{children:"The simplest pattern is to send a string, for example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'    logger.info("Processing started")\n    // meaningful code\n    val response = callOtherService()\n    logger.info("User response was ${response.text}")\n'})}),"\n",(0,s.jsx)(n.h3,{id:"message-template",children:"Message template"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/context/message-templates",children:"Message templates"})," provide a convenient way to both create\nmeaningful messages and to create structured log events:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'    logger.info("User {userId} signed in", userId)\n'})}),"\n",(0,s.jsx)(n.p,{children:"The resulting log event contains both:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the message populated with the value of ",(0,s.jsx)(n.code,{children:"userId"}),"; and"]}),"\n",(0,s.jsxs)(n.li,{children:["an item called ",(0,s.jsx)(n.code,{children:"userId"})," with the same value."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if ",(0,s.jsx)(n.code,{children:"userId"})," has the value ",(0,s.jsx)(n.code,{children:"wonti321"})," then:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the message becomes ",(0,s.jsx)(n.code,{children:"User wonti321 signed in"}),"; and"]}),"\n",(0,s.jsxs)(n.li,{children:["the log event contains ",(0,s.jsx)(n.code,{children:'"userId": "wonti321"'}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The log event displayed in Splunk may look like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Example of structured event message in Splunk",src:i(7547).A+"",width:"672",height:"290"})}),"\n",(0,s.jsxs)(n.p,{children:["[JVM] Klogging supports the ",(0,s.jsx)(n.code,{children:"@"})," destructuring operator that destructures objects into their\ncomponents when sent to ",(0,s.jsx)(n.a,{href:"https://datalust.co/seq",children:"Seq"}),". A simple example is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'data class User(val id: Long, val name: String)\n\n// Other code\n\nval user = User(61733972217, "Neville")\nlogger.info("User {@user} signed in", user)\n'})}),"\n",(0,s.jsx)(n.p,{children:"The event in Seq may look like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Example of destructured object message in Seq",src:i(9979).A+"",width:"410",height:"175"})}),"\n",(0,s.jsx)(n.p,{children:"The exported JSON from Seq may look like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "@t": "2025-02-16T11:23:34.6534440Z",\n  "@mt": "User {@user} signed in",\n  "@m": "User {\\"id\\":61733972217,\\"name\\":\\"Neville\\",\\"$type\\":\\"User\\"} signed in",\n  "@i": "bef02ae7",\n  "context": "main",\n  "host": "MikeBook.local",\n  "logger": "Destructuring",\n  "user": {\n    "$type": "User",\n    "id": 61733972217,\n    "name": "Neville"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Nested objects are destructured as deep as they nest."}),"\n",(0,s.jsx)(n.h3,{id:"immediate-context-items",children:"Immediate context items"}),"\n",(0,s.jsx)(n.p,{children:"You can specify a map of items to add to the context of a single log event."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Immediate context items are useful with ",(0,s.jsx)(n.code,{children:"NoCoLogger"})," instances, where there is no coroutine\ncontext available."]})}),"\n",(0,s.jsx)(n.p,{children:"A simple example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'logger.info("Retrieved values from services", mapOf(\n    "serviceOneCount" to serviceOneResult.count,\n    "serviceTwoCount" to serviceTwoResult.count,\n))\n'})}),"\n",(0,s.jsx)(n.p,{children:"The resulting log event may look like something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "@t": "2024-02-05T07:45:47.837117Z",\n  "@l": "INFO",\n  "@m": "Retrieved values from services",\n  "host": "589ef8fa",\n  "logger": "com.example.ServiceCombiner",\n  "context": "main",\n  "serviceOneCount": 9,\n  "serviceTwoCount": 17\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"exception",children:"Exception"}),"\n",(0,s.jsx)(n.p,{children:"To log exception information, include the exception object as the first argument in the function\ncall:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'    try {\n        // This might throw an exception\n        snurgle(id, agger)\n    } catch (ex: SnurgleException) {\n        logger.warn(ex, "Exception calling snurgle with id={id} and agger={agger}", id, agger)\n    }\n'})}),"\n",(0,s.jsx)(n.p,{children:"The resulting log event will include any stack trace included in the exception."}),"\n",(0,s.jsx)(n.h3,{id:"minimum-level-check",children:"Minimum level check"}),"\n",(0,s.jsxs)(n.p,{children:["Every logger has a minimum level set by configuration, below which log events are not sent.\nSee ",(0,s.jsx)(n.a,{href:"/docs/internals/level-checking",children:"Log levels and checking"})," for more details."]}),"\n",(0,s.jsx)(n.p,{children:"Klogging provides functions to check minimum levels to call before calling a logging function\nif the values to be logged are expensive to obtain."}),"\n",(0,s.jsxs)(n.p,{children:["Here is one example, where ",(0,s.jsx)(n.code,{children:"DEBUG"})," logging might not be enabled for this logger in all environments:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'    if (logger.isDebugEnabled()) {\n        val complex = calculateSpecialValueForDebugging()\n        val other = extractOtherValueFromSomewhereElse()\n        logger.debug("Calculated {complex} and {other}", complex, other)\n    }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Likewise, there are functions ",(0,s.jsx)(n.code,{children:"isTraceEnabled()"}),", ",(0,s.jsx)(n.code,{children:"isInfoEnabled()"})," etc."]}),"\n",(0,s.jsx)(n.h3,{id:"kotlin-lambda",children:"Kotlin lambda"}),"\n",(0,s.jsxs)(n.p,{children:["The idiomatic Kotlin way to send a log event that might be expensive is to use a lambda.\nThe lambda is only called if the minimum level check evaluates ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"It is simple when logging a string message:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'    logger.trace { "Starting run with ID=$runId" }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here, a log event is only sent if ",(0,s.jsx)(n.code,{children:"logger.isTraceEnabled()"})," evaluates ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The lambda can only return a single value, so if you want to use a message template, you\ncan call the ",(0,s.jsx)(n.code,{children:"e()"})," function as the return value of the lambda:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'    logger.debug {\n        val complex = calculateSpecialValueForDebugging()\n        val other = extractOtherValueFromSomewhereElse()\n        e("Calculated {complex} and {other}", complex, other)\n    }\n'})}),"\n",(0,s.jsx)(n.h3,{id:"lambda-and-exception",children:"Lambda and exception"}),"\n",(0,s.jsx)(n.p,{children:"Combine a lambda and an exception like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'    logger.warn(ex) { "Exception processing payment" }\n'})})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7547:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/log-info-userId-splunk-7572d963c8f7ea7f0c9a9a037e3ce089.png"},9979:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/seq-destructuring-example-e048b03e38e396e62b400061211ff3dd.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var l=i(6540);const s={},t=l.createContext(s);function o(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);