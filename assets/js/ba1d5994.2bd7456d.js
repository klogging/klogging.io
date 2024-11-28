"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[8062],{8931:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>g,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"java/klogging-from-java","title":"Using Klogging directly from Java","description":"Klogging can be used directly by Java programs, using a LoggerFactory:","source":"@site/docs/java/klogging-from-java.md","sourceDirName":"java","slug":"/java/klogging-from-java","permalink":"/docs/java/klogging-from-java","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"JDK Platform Logging","permalink":"/docs/java/jdk-platform-logging"},"next":{"title":"Using Klogging with SLF4J","permalink":"/docs/java/slf4j"}}');var r=o(4848),i=o(8453);const t={sidebar_position:10},g="Using Klogging directly from Java",s={},c=[];function l(n){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"using-klogging-directly-from-java",children:"Using Klogging directly from Java"})}),"\n",(0,r.jsxs)(e.p,{children:["Klogging can be used directly by Java programs, using a ",(0,r.jsx)(e.code,{children:"LoggerFactory"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'package com.example;\n\nimport io.klogging.java.LoggerFactory;\n\nclass Thing {\n\n    private static final NoCoLogger logger = LoggerFactory.getLogger(Thing.class);\n\n    public void doThing(Arg arg) {\n        logger.info("Doing thing with {arg}", arg);\n    }\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>t,x:()=>g});var a=o(6540);const r={},i=a.createContext(r);function t(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function g(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);