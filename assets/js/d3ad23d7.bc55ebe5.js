"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[93],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>f});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},g=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return t?r.createElement(f,a(a({ref:n},g),{},{components:t})):r.createElement(f,a({ref:n},g))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7683:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(8168),o=(t(6540),t(5680));const i={sidebar_position:10},a="Klogging and Ktor",l={unversionedId:"ktor/ktor",id:"ktor/ktor",title:"Klogging and Ktor",description:"Klogging can be used in Ktor applications easily.",source:"@site/docs/ktor/ktor.md",sourceDirName:"ktor",slug:"/ktor/",permalink:"/docs/ktor/",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Hexagon microservices toolkit",permalink:"/docs/java/hexagon"},next:{title:"Klogging internal process",permalink:"/docs/concepts/klogging-process"}},c={},s=[{value:"Configuration",id:"configuration",level:2}],g={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"klogging-and-ktor"},"Klogging and Ktor"),(0,o.yg)("p",null,"Klogging can be used in Ktor applications easily."),(0,o.yg)("p",null,"Many Ktor JVM modules specify SLF4J as a dependency.\nThe ",(0,o.yg)("a",{parentName:"p",href:"https://start.ktor.io/"},"Ktor Project Generator")," specifies Logback as a dependency and\ngenerates a ",(0,o.yg)("inlineCode",{parentName:"p"},"src/main/resources/logback.xml")," configuration file."),(0,o.yg)("h2",{id:"configuration"},"Configuration"),(0,o.yg)("p",null,"The simplest way to configure Klogging is to replace the Logback dependency with that for Klogging:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    // Ktor engine and plugin dependencies\n    // implementation("ch.qos.logback:logback-classic:$logback_version")\n    implementation("io.klogging:slf4j-klogging:0.5.13")\n\n    // Other dependencies\n}\n')),(0,o.yg)("p",null,"Add ",(0,o.yg)("inlineCode",{parentName:"p"},"src/main/resources/klogging.json")," configured as described\nin ",(0,o.yg)("a",{parentName:"p",href:"/docs/configuration/json"},"Configuration with JSON"),", for example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "sinks": {\n    "stdout": {\n      "renderWith": "RENDER_ANSI",\n      "sendTo": "STDOUT"\n    }\n  },\n  "logging": [\n    {\n      "levelRanges": [\n        {\n          "fromMinLevel": "INFO",\n          "stopOnMatch": true,\n          "toSinks": [\n            "stdout"\n          ]\n        }\n      ]\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);