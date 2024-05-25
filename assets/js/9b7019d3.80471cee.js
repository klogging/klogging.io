"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[882],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),s=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(g.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(t),u=r,m=c["".concat(g,".").concat(u)]||c[u]||d[u]||l;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(8168),r=(t(6540),t(5680));const l={sidebar_position:20},i="Using SLF4J",o={unversionedId:"java/slf4j",id:"java/slf4j",title:"Using SLF4J",description:"The Simple Logging Fa\xe7ade for Java (SLF4J) library is a widely-used",source:"@site/docs/java/slf4j.md",sourceDirName:"java",slug:"/java/slf4j",permalink:"/docs/java/slf4j",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Using Klogging directly from Java",permalink:"/docs/java/klogging-from-java"},next:{title:"Klogging with Spring Boot",permalink:"/docs/java/spring-boot"}},g={},s=[{value:"Setting up",id:"setting-up",level:2},{value:"Including values in messages",id:"including-values-in-messages",level:2},{value:"SLF4J formatting with placeholders",id:"slf4j-formatting-with-placeholders",level:3},{value:"Message templates",id:"message-templates",level:3},{value:"MDC",id:"mdc",level:3}],p={toc:s},c="wrapper";function d(e){let{components:n,...l}=e;return(0,r.yg)(c,(0,a.A)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"using-slf4j"},"Using SLF4J"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"http://www.slf4j.org/"},"Simple Logging Fa\xe7ade for Java (SLF4J)")," library is a widely-used\nlibrary for Java logging. It has two parts: a standard API that Java programs call; and a provider\nthat maps API calls to a logging framework (e.g. Logback, Log4j)."),(0,r.yg)("p",null,"Many Java programs and frameworks, including ",(0,r.yg)("a",{parentName:"p",href:"https://spring.io/"},"Spring"),", log using the\nSLF4J API."),(0,r.yg)("p",null,"Klogging has an ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/klogging/slf4j-klogging"},"SLF4J provider"),"\nthat allows existing programs using SLF4J to switch the framework to Klogging."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:%22io.klogging%22%20AND%20a:%22slf4j-klogging%22"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.klogging/slf4j-klogging.svg?label=maven%20central",alt:"Maven Central"}))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Klogging supports SLF4J versions 2.x as used by Spring Boot 3 and later.")),(0,r.yg)("h2",{id:"setting-up"},"Setting up"),(0,r.yg)("p",null,"Include this dependency in your Gradle build file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},'    implementation("io.klogging:slf4j-klogging:0.5.13")\n')),(0,r.yg)("p",null,"In Maven:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n  <dependency>\n    <groupId>io.klogging</groupId>\n    <artifactId>slf4j-klogging</artifactId>\n    <version>0.5.13</version>\n  </dependency>\n</dependencies>\n")),(0,r.yg)("h2",{id:"including-values-in-messages"},"Including values in messages"),(0,r.yg)("p",null,"There are two options for including values in messages: SLF4J formatting with placeholders or\nKlogging message templates."),(0,r.yg)("h3",{id:"slf4j-formatting-with-placeholders"},"SLF4J formatting with placeholders"),(0,r.yg)("p",null,"All existing logging statements with SLF4J formatting will continue to work with Klogging,\nfor example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'    logger.info("Captured value {}", captured);\n')),(0,r.yg)("p",null,"In this example, the log event contains the message with ",(0,r.yg)("inlineCode",{parentName:"p"},"{}")," replaced by the value of\n",(0,r.yg)("inlineCode",{parentName:"p"},"captured")," and contains no items."),(0,r.yg)("h3",{id:"message-templates"},"Message templates"),(0,r.yg)("p",null,"With the Klogging provider, you can use ",(0,r.yg)("a",{parentName:"p",href:"/docs/context/message-templates"},"message templates"),"\nin SLF4J logging method calls and Klogging will emit structured log events. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'    logger.info("User {userId} logged in", userId);\n')),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"IntelliJ IDEA will highlight message templates in SLF4J logging method calls because\nthey are not the positional ",(0,r.yg)("inlineCode",{parentName:"p"},"{}")," placeholders used by SLF4J."),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("img",{alt:"IntelliJ highlight message for message template",src:t(9638).A,width:"1114",height:"164"}))),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Klogging does not currently support messages containing both SLF4J placeholders and message\ntemplate holes.")),(0,r.yg)("h3",{id:"mdc"},"MDC"),(0,r.yg)("p",null,"Klogging will include any information from the Mapped Diagnostic Context (MDC)\nin its log events. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'    try (MDC.MDCCloseable closeable = MDC.putCloseable("runId", UUID.randomUUID().toString())) {\n        logger.info("Started processing");\n        processStuff();\n        logger.info("Finished processing");\n    }\n')),(0,r.yg)("p",null,"All structured log events emitted in that block include the key ",(0,r.yg)("inlineCode",{parentName:"p"},"runId"),"\nwith the value for that run."))}d.isMDXComponent=!0},9638:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/slf4j-intellij-message-4ba1a7835e30770a8b08dd1e22d2b754.png"}}]);