"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[8062],{8723:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>g,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var t=n(4848),o=n(5680);const a={sidebar_position:10},i="Using Klogging directly from Java",c={id:"java/klogging-from-java",title:"Using Klogging directly from Java",description:"Klogging can be used directly by Java programs, using a LoggerFactory:",source:"@site/docs/java/klogging-from-java.md",sourceDirName:"java",slug:"/java/klogging-from-java",permalink:"/docs/java/klogging-from-java",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Java, Spring, SLF4J and Hexagon",permalink:"/docs/java/"},next:{title:"Using SLF4J",permalink:"/docs/java/slf4j"}},g={},s=[];function l(e){const r={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"using-klogging-directly-from-java",children:"Using Klogging directly from Java"}),"\n",(0,t.jsxs)(r.p,{children:["Klogging can be used directly by Java programs, using a ",(0,t.jsx)(r.code,{children:"LoggerFactory"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'package com.example;\n\nimport io.klogging.java.LoggerFactory;\n\nclass Thing {\n\n    private static final NoCoLogger logger = LoggerFactory.getLogger(Thing.class);\n\n    public void doThing(Arg arg) {\n        logger.info("Doing thing with {arg}", arg);\n    }\n}\n'})})]})}function p(e={}){const{wrapper:r}={...(0,o.RP)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},5680:(e,r,n)=>{n.d(r,{RP:()=>s});var t=n(6540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=t.createContext({}),s=function(e){var r=t.useContext(g),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,g=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(g,".").concat(d)]||u[d]||l[d]||a;return n?t.createElement(f,i(i({ref:r},p),{},{components:n})):t.createElement(f,i({ref:r},p))}));p.displayName="MDXCreateElement"}}]);