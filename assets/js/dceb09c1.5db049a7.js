"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[4244],{9786:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>g});var o=a(4848),i=a(8453);const t={sidebar_position:5},s="JDK Platform Logging",r={id:"java/jdk-platform-logging",title:"JDK Platform Logging",description:"From Java version 9, built-in logging execution classes are separate from classes used to create and",source:"@site/docs/java/jdk-platform-logging.md",sourceDirName:"java",slug:"/java/jdk-platform-logging",permalink:"/docs/java/jdk-platform-logging",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Java, Spring, SLF4J and Hexagon",permalink:"/docs/java/"},next:{title:"Using Klogging directly from Java",permalink:"/docs/java/klogging-from-java"}},l={},g=[{value:"JPL and Klogging",id:"jpl-and-klogging",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"jdk-platform-logging",children:"JDK Platform Logging"}),"\n",(0,o.jsxs)(n.p,{children:["From Java version 9, built-in logging execution classes are separate from classes used to create and\nsend logs. JDK Platform Logging (JPL) specifies\n",(0,o.jsx)(n.a,{href:"https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.Logger.html",children:(0,o.jsx)(n.code,{children:"java.lang.System.Logger"})}),"\nand\n",(0,o.jsx)(n.a,{href:"https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.LoggerFinder.html",children:(0,o.jsx)(n.code,{children:"java.lang.System.LoggerFinder"})}),"\nin the\n",(0,o.jsx)(n.a,{href:"https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html",children:(0,o.jsx)(n.code,{children:"java.lang.System"})}),"\nclass in the ",(0,o.jsx)(n.code,{children:"java.base"})," module. The default implementations are in\n",(0,o.jsx)(n.a,{href:"https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/package-summary.html",children:(0,o.jsx)(n.code,{children:"java.util.logging"})}),"\n(JUL) package in the ",(0,o.jsx)(n.code,{children:"java.logging"})," module."]}),"\n",(0,o.jsx)(n.h2,{id:"jpl-and-klogging",children:"JPL and Klogging"}),"\n",(0,o.jsxs)(n.p,{children:["Klogging provides an alternative to JUL for JPL implementation. In your JVM project, include\nthe ",(0,o.jsx)(n.code,{children:"jdk-platform-klogging"})," package."]}),"\n",(0,o.jsx)(n.p,{children:"Gradle:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'dependencies {\n    implementation("io.klogging:jdk-platform-klogging:0.5.13")\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Maven:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependencies>\n  <dependency>\n    <groupId>io.klogging</groupId>\n    <artifactId>jdk-platform-klogging</artifactId>\n    <version>0.5.13</version>\n  </dependency>\n</dependencies>\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var o=a(6540);const i={},t=o.createContext(i);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);