"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[4093],{9143:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"ktor/ktor","title":"Klogging and Ktor","description":"Klogging can be used in Ktor applications easily.","source":"@site/docs/ktor/ktor.md","sourceDirName":"ktor","slug":"/ktor/","permalink":"/docs/ktor/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Hexagon microservices toolkit","permalink":"/docs/java/hexagon"},"next":{"title":"Klogging internal process","permalink":"/docs/concepts/klogging-process"}}');var t=o(4848),r=o(8453);const s={sidebar_position:10},a="Klogging and Ktor",c={},l=[{value:"Configuration",id:"configuration",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"klogging-and-ktor",children:"Klogging and Ktor"})}),"\n",(0,t.jsx)(e.p,{children:"Klogging can be used in Ktor applications easily."}),"\n",(0,t.jsxs)(e.p,{children:["Many Ktor JVM modules specify SLF4J as a dependency.\nThe ",(0,t.jsx)(e.a,{href:"https://start.ktor.io/",children:"Ktor Project Generator"})," specifies Logback as a dependency and\ngenerates a ",(0,t.jsx)(e.code,{children:"src/main/resources/logback.xml"})," configuration file."]}),"\n",(0,t.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(e.p,{children:"The simplest way to configure Klogging is to replace the Logback dependency with that for Klogging:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-kotlin",children:'dependencies {\n    // Ktor engine and plugin dependencies\n    // implementation("ch.qos.logback:logback-classic:$logback_version")\n    implementation("io.klogging:slf4j-klogging:0.8.0")\n\n    // Other dependencies\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Add ",(0,t.jsx)(e.code,{children:"src/main/resources/klogging.json"})," configured as described\nin ",(0,t.jsx)(e.a,{href:"/docs/configuration/json",children:"Configuration with JSON"}),", for example:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "sinks": {\n    "stdout": {\n      "renderWith": "RENDER_ANSI",\n      "sendTo": "STDOUT"\n    }\n  },\n  "logging": [\n    {\n      "levelRanges": [\n        {\n          "fromMinLevel": "INFO",\n          "stopOnMatch": true,\n          "toSinks": [\n            "stdout"\n          ]\n        }\n      ]\n    }\n  ]\n}\n'})})]})}function g(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>s,x:()=>a});var i=o(6540);const t={},r=i.createContext(t);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);