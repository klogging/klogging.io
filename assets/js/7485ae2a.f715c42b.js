"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[9906],{5994:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>g});const i=JSON.parse('{"id":"get-started","title":"Get started","description":"Get started with Klogging quickly here.","source":"@site/docs/get-started.md","sourceDirName":".","slug":"/get-started","permalink":"/docs/get-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","next":{"title":"Introduction","permalink":"/docs/introduction"}}');var s=o(4848),l=o(8453);const r={sidebar_position:10},t="Get started",a={},g=[{value:"Add Klogging to your application",id:"add-klogging-to-your-application",level:2},{value:"Configure Klogging",id:"configure-klogging",level:2},{value:"Create a logger",id:"create-a-logger",level:2},{value:"Emit log events",id:"emit-log-events",level:2},{value:"I didn\u2019t see any logs!",id:"i-didnt-see-any-logs",level:2},{value:"Using snapshot builds",id:"using-snapshot-builds",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"get-started",children:"Get started"})}),"\n",(0,s.jsx)(n.p,{children:"Get started with Klogging quickly here."}),"\n",(0,s.jsx)(n.h2,{id:"add-klogging-to-your-application",children:"Add Klogging to your application"}),"\n",(0,s.jsxs)(n.p,{children:["Gradle: in ",(0,s.jsx)(n.code,{children:"build.gradle.kts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'dependencies {\n    implementation("io.klogging:klogging-jvm:0.8.0")\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Maven: in ",(0,s.jsx)(n.code,{children:"pom.xml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<dependencies>\n  <dependency>\n    <groupId>io.klogging</groupId>\n    <artifactId>klogging-jvm</artifactId>\n    <version>0.8.0</version>\n  </dependency>\n</dependencies>\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"#using-snapshot-builds",children:"Using snapshot builds"})," below for using current, unreleased builds\nof Klogger."]})}),"\n",(0,s.jsx)(n.h2,{id:"configure-klogging",children:"Configure Klogging"}),"\n",(0,s.jsxs)(n.p,{children:["To see logs in your console quickly, using the ",(0,s.jsx)(n.a,{href:"/docs/configuration/dsl",children:"configuration DSL"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"loggingConfiguration { DEFAULT_CONSOLE() }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Or place the file ",(0,s.jsx)(n.code,{children:"klogging.json"})," in a directory on your application\u2019s classpath to use\n",(0,s.jsx)(n.a,{href:"/docs/configuration/json",children:"JSON configuration"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "configName": "DEFAULT_CONSOLE"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"create-a-logger",children:"Create a logger"}),"\n",(0,s.jsxs)(n.p,{children:["To quickly create a ",(0,s.jsx)(n.code,{children:"Klogger"})," instance to log from ",(0,s.jsx)(n.code,{children:"suspend"})," functions, implement the ",(0,s.jsx)(n.code,{children:"Klogging"}),"\ninterface that defines a ",(0,s.jsx)(n.code,{children:"logger"})," property:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"package com.example\n\nclass ThingDoer : Klogging {\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"emit-log-events",children:"Emit log events"}),"\n",(0,s.jsxs)(n.p,{children:["In your class, emit logs using the ",(0,s.jsx)(n.code,{children:"logger"})," property, in a similar way to many logging frameworks:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'    suspend fun doThing() {\n        logger.info("Doing the thing")\n        // Actually do the thing\n    }\n'})}),"\n",(0,s.jsx)(n.p,{children:"You will see a log message on your console like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"2021-08-10 22:29:30.300509 INFO [main] com.example.ThingDoer : Doing the thing\n"})}),"\n",(0,s.jsx)(n.h2,{id:"i-didnt-see-any-logs",children:"I didn\u2019t see any logs!"}),"\n",(0,s.jsx)(n.p,{children:"If you try out Klogging in a simple command-line program you might not see all the log messages you\nexpect to see. This example will not show the log message on the console:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'suspend fun main() = coroutineScope {\n    loggingConfiguration { DEFAULT_CONSOLE() }\n    val logger = logger("main")\n    logger.info("Hello, world!")\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Klogging works asynchronously and the program completes before log events can be\nsent. In this case you can add a coroutine delay or thread sleep before the program completes,\nfor example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'suspend fun main() = coroutineScope {\n    loggingConfiguration { DEFAULT_CONSOLE() }\n    val logger = logger("main")\n    logger.info("Hello, world!")\n    delay(50)\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or you can specify that log events with severity above a certain level are sent directly instead of\nvia coroutine channels:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'suspend fun main() = coroutineScope {\n    loggingConfiguration {\n        DEFAULT_CONSOLE()\n        minDirectLogLevel(Level.INFO)\n    }\n    val logger = logger("main")\n    logger.info("Hello, world!")\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/docs/concepts/direct-logging",children:"Direct logging"})," for more information."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Klogging is designed primarily for long-running services and applications."}),(0,s.jsxs)(n.p,{children:["I don\u2019t know a reliable way to trap application shutdown and ensure all logs are sent before\nshutdown proceeds. ",(0,s.jsx)(n.a,{href:"mailto:info@klogging.io",children:"Let me know if you do"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"using-snapshot-builds",children:"Using snapshot builds"}),"\n",(0,s.jsxs)(n.p,{children:["If you want to use the latest snapshot builds, specify these in your ",(0,s.jsx)(n.code,{children:"build.gradle.kts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'repositories {\n    // ...\n    maven {\n        url = uri("https://s01.oss.sonatype.org/content/repositories/snapshots/")\n    }\n}\n\ndependencies {\n    // ...\n    implementation("io.klogging:klogging-jvm:0.9.0-SNAPSHOT")\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>t});var i=o(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);