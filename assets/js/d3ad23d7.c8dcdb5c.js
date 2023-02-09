"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[160],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,d=u["".concat(l,".").concat(f)]||u[f]||g[f]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6958:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:10},l="Klogging and Ktor",s={unversionedId:"ktor/ktor",id:"ktor/ktor",title:"Klogging and Ktor",description:"Klogging can be used in Ktor applications easily.",source:"@site/docs/ktor/ktor.md",sourceDirName:"ktor",slug:"/ktor/",permalink:"/docs/ktor/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Klogging with Spring Boot",permalink:"/docs/java/spring-boot"},next:{title:"Klogging internal process",permalink:"/docs/concepts/klogging-process"}},p={},u=[{value:"Configuration",id:"configuration",level:2}],g={toc:u},f="wrapper";function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(f,(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"klogging-and-ktor"},"Klogging and Ktor"),(0,i.kt)("p",null,"Klogging can be used in Ktor applications easily."),(0,i.kt)("p",null,"Many Ktor JVM modules specify SLF4J as a dependency.\nThe ",(0,i.kt)("a",{parentName:"p",href:"https://start.ktor.io/"},"Ktor Project Generator")," specifies Logback as a dependency and\ngenerates a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources/logback.xml")," configuration file."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The simplest way to configure Klogging is to replace the Logback dependency with that for Klogging:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    // Ktor engine and plugin dependencies\n    // implementation("ch.qos.logback:logback-classic:$logback_version")\n    implementation("io.klogging:slf4j-klogging:0.2.7")\n\n    // Other dependencies\n}\n')),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources/klogging.json")," configured as described\nin ",(0,i.kt)("a",{parentName:"p",href:"/docs/configuration/json"},"Configuration with JSON"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sinks": {\n    "stdout": {\n      "renderWith": "RENDER_ANSI",\n      "sendTo": "STDOUT"\n    }\n  },\n  "logging": [\n    {\n      "levelRanges": [\n        {\n          "fromMinLevel": "INFO",\n          "stopOnMatch": true,\n          "toSinks": [\n            "stdout"\n          ]\n        }\n      ]\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);