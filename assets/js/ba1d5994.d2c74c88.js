"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[179],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var g=t.createContext({}),l=function(e){var n=t.useContext(g),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(g.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,g=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,m=s["".concat(g,".").concat(f)]||s[f]||p[f]||a;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var g in n)hasOwnProperty.call(n,g)&&(c[g]=n[g]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3854:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return g},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:10},g="Using Klogging directly",l={unversionedId:"java/klogging-from-java",id:"java/klogging-from-java",isDocsHomePage:!1,title:"Using Klogging directly",description:"Klogging can be used directly by Java programs, using a LoggerFactory:",source:"@site/docs/java/klogging-from-java.md",sourceDirName:"java",slug:"/java/klogging-from-java",permalink:"/docs/java/klogging-from-java",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Coroutines",permalink:"/docs/coroutines/coroutines"},next:{title:"Using SLF4J",permalink:"/docs/java/slf4j"}},u=[],p={toc:u};function s(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-klogging-directly"},"Using Klogging directly"),(0,a.kt)("p",null,"Klogging can be used directly by Java programs, using a ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggerFactory"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package com.example;\n\nimport io.klogging.java.LoggerFactory;\n\nclass Thing {\n\n    private static final NoCoLogger logger = LoggerFactory.getLogger(Thing.class);\n\n    public void doThing(Arg arg) {\n        logger.info("Doing thing with {arg}", arg);\n    }\n}\n')))}s.isMDXComponent=!0}}]);