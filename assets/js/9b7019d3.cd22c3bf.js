"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[5882],{9135:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>g});var s=i(4848),l=i(8453);const t={sidebar_position:20},a="Using SLF4J",o={id:"java/slf4j",title:"Using SLF4J",description:"The Simple Logging Fa\xe7ade for Java (SLF4J) library is a widely-used",source:"@site/docs/java/slf4j.md",sourceDirName:"java",slug:"/java/slf4j",permalink:"/docs/java/slf4j",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Using Klogging directly from Java",permalink:"/docs/java/klogging-from-java"},next:{title:"Klogging with Spring Boot",permalink:"/docs/java/spring-boot"}},r={},g=[{value:"Setting up",id:"setting-up",level:2},{value:"Including values in messages",id:"including-values-in-messages",level:2},{value:"SLF4J formatting with placeholders",id:"slf4j-formatting-with-placeholders",level:3},{value:"Message templates",id:"message-templates",level:3},{value:"MDC",id:"mdc",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"using-slf4j",children:"Using SLF4J"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"http://www.slf4j.org/",children:"Simple Logging Fa\xe7ade for Java (SLF4J)"})," library is a widely-used\nlibrary for Java logging. It has two parts: a standard API that Java programs call; and a provider\nthat maps API calls to a logging framework (e.g. Logback, Log4j)."]}),"\n",(0,s.jsxs)(n.p,{children:["Many Java programs and frameworks, including ",(0,s.jsx)(n.a,{href:"https://spring.io/",children:"Spring"}),", log using the\nSLF4J API."]}),"\n",(0,s.jsxs)(n.p,{children:["Klogging has an ",(0,s.jsx)(n.a,{href:"https://github.com/klogging/klogging/slf4j-klogging",children:"SLF4J provider"}),"\nthat allows existing programs using SLF4J to switch the framework to Klogging."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://search.maven.org/search?q=g:%22io.klogging%22%20AND%20a:%22slf4j-klogging%22",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/maven-central/v/io.klogging/slf4j-klogging.svg?label=maven%20central",alt:"Maven Central"})})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Klogging supports SLF4J versions 2.x as used by Spring Boot 3 and later."})}),"\n",(0,s.jsx)(n.h2,{id:"setting-up",children:"Setting up"}),"\n",(0,s.jsx)(n.p,{children:"Include this dependency in your Gradle build file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'    implementation("io.klogging:slf4j-klogging:0.6.1")\n'})}),"\n",(0,s.jsx)(n.p,{children:"In Maven:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<dependencies>\n  <dependency>\n    <groupId>io.klogging</groupId>\n    <artifactId>slf4j-klogging</artifactId>\n    <version>0.6.1</version>\n  </dependency>\n</dependencies>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"including-values-in-messages",children:"Including values in messages"}),"\n",(0,s.jsx)(n.p,{children:"There are two options for including values in messages: SLF4J formatting with placeholders or\nKlogging message templates."}),"\n",(0,s.jsx)(n.h3,{id:"slf4j-formatting-with-placeholders",children:"SLF4J formatting with placeholders"}),"\n",(0,s.jsx)(n.p,{children:"All existing logging statements with SLF4J formatting will continue to work with Klogging,\nfor example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'    logger.info("Captured value {}", captured);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the log event contains the message with ",(0,s.jsx)(n.code,{children:"{}"})," replaced by the value of\n",(0,s.jsx)(n.code,{children:"captured"})," and contains no items."]}),"\n",(0,s.jsx)(n.h3,{id:"message-templates",children:"Message templates"}),"\n",(0,s.jsxs)(n.p,{children:["With the Klogging provider, you can use ",(0,s.jsx)(n.a,{href:"/docs/context/message-templates",children:"message templates"}),"\nin SLF4J logging method calls and Klogging will emit structured log events. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'    logger.info("User {userId} logged in", userId);\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["IntelliJ IDEA will highlight message templates in SLF4J logging method calls because\nthey are not the positional ",(0,s.jsx)(n.code,{children:"{}"})," placeholders used by SLF4J."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"IntelliJ highlight message for message template",src:i(9638).A+"",width:"1114",height:"164"})})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Klogging does not currently support messages containing both SLF4J placeholders and message\ntemplate holes."})}),"\n",(0,s.jsx)(n.h3,{id:"mdc",children:"MDC"}),"\n",(0,s.jsx)(n.p,{children:"Klogging will include any information from the Mapped Diagnostic Context (MDC)\nin its log events. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'    try (MDC.MDCCloseable closeable = MDC.putCloseable("runId", UUID.randomUUID().toString())) {\n        logger.info("Started processing");\n        processStuff();\n        logger.info("Finished processing");\n    }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["All structured log events emitted in that block include the key ",(0,s.jsx)(n.code,{children:"runId"}),"\nwith the value for that run."]})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9638:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/slf4j-intellij-message-4ba1a7835e30770a8b08dd1e22d2b754.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(6540);const l={},t=s.createContext(l);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);