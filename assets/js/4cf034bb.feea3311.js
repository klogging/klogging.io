"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[6499],{6563:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>g,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=i(4848),t=i(8453);const a={sidebar_position:40},r="Hexagon microservices toolkit",s={id:"java/hexagon",title:"Hexagon microservices toolkit",description:"Klogging has a logging adapter for the Hexagon microservices toolkit.",source:"@site/docs/java/hexagon.md",sourceDirName:"java",slug:"/java/hexagon",permalink:"/docs/java/hexagon",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Klogging with Spring Boot",permalink:"/docs/java/spring-boot"},next:{title:"Ktor",permalink:"/docs/ktor/"}},g={},l=[{value:"Specify dependency",id:"specify-dependency",level:2},{value:"Install the adapter",id:"install-the-adapter",level:2},{value:"Configure Klogging",id:"configure-klogging",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"hexagon-microservices-toolkit",children:"Hexagon microservices toolkit"}),"\n",(0,o.jsxs)(n.p,{children:["Klogging has a logging adapter for the ",(0,o.jsx)(n.a,{href:"https://hexagonkt.com/",children:"Hexagon microservices toolkit"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://search.maven.org/search?q=g:%22io.klogging%22%20AND%20a:%22slf4j-klogging%22",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/maven-central/v/io.klogging/slf4j-klogging.svg?label=maven%20central",alt:"Maven Central"})})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Klogging supports Hexagon toolkit versions 3.4.3 and above, which requires JVM 17."})}),"\n",(0,o.jsx)(n.h2,{id:"specify-dependency",children:"Specify dependency"}),"\n",(0,o.jsx)(n.p,{children:"Specify the adapter dependency in Gradle, for example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'dependencies {\n    implementation("com.hexagonkt:http_server_jetty:3.4.7")\n    implementation("io.klogging:hexagonkt-klogging-adapter:0.5.13")\n\n    // etc.\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Or in Maven, for example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"\n<dependencies>\n  <dependency>\n    <groupId>com.hexagonkt</groupId>\n    <artifactId>http_server_jetty</artifactId>\n    <version>3.4.7</version>\n  </dependency>\n  <dependency>\n    <groupId>io.klogging</groupId>\n    <artifactId>hexagonkt-klogging-adapter</artifactId>\n    <version>0.5.13</version>\n  </dependency>\n  \x3c!-- etc. --\x3e\n</dependencies>\n"})}),"\n",(0,o.jsx)(n.h2,{id:"install-the-adapter",children:"Install the adapter"}),"\n",(0,o.jsx)(n.p,{children:"At the beginning of the main function, set the adapter to use, for example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"fun main() {\n    LoggingManager.adapter = KloggingManager()\n    server.start()\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configure-klogging",children:"Configure Klogging"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"../configuration",children:"Configure Klogging"})," either using the configuration DSL or a\nconfiguration file in the application classpath. Here is a simple ",(0,o.jsx)(n.code,{children:"klogging.json"})," example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "sinks": {\n    "console": {\n      "renderWith": "RENDER_ANSI",\n      "sendTo": "STDOUT"\n    }\n  },\n  "logging": [\n    {\n      "levelRanges": [\n        {\n          "fromMinLevel": "INFO",\n          "toSinks": [\n            "console"\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var o=i(6540);const t={},a=o.createContext(t);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);