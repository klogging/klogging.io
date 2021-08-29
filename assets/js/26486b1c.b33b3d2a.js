"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[380],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=r.createContext({}),p=function(e){var n=r.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(g.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,g=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(g,".").concat(d)]||u[d]||c[d]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var g in n)hasOwnProperty.call(n,g)&&(s[g]=n[g]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4196:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return g},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:30},g="Klogging with Spring Boot",p={unversionedId:"java/spring-boot",id:"java/spring-boot",isDocsHomePage:!1,title:"Klogging with Spring Boot",description:"You can use Klogging as the logging framework of a Spring Boot application.",source:"@site/docs/java/spring-boot.md",sourceDirName:"java",slug:"/java/spring-boot",permalink:"/docs/java/spring-boot",version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Using SLF4J",permalink:"/docs/java/slf4j"},next:{title:"Log Events",permalink:"/docs/concepts/log-events"}},l=[{value:"Gradle setup",id:"gradle-setup",children:[]},{value:"Maven setup",id:"maven-setup",children:[]},{value:"Configure Klogging",id:"configure-klogging",children:[]}],c={toc:l};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"klogging-with-spring-boot"},"Klogging with Spring Boot"),(0,i.kt)("p",null,"You can use Klogging as the logging framework of a Spring Boot application.\nThe ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/klogging/klogging-spring-boot-starter"},"Klogging spring boot starter"),"\nmakes it simple."),(0,i.kt)("h2",{id:"gradle-setup"},"Gradle setup"),(0,i.kt)("p",null,"Use a Gradle configuration like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("org.springframework.boot:spring-boot-starter-webflux") {\n        exclude(group = "ch.qos.logback")\n    }\n    implementation("io.klogging:klogging-spring-boot-starter:0.1.3")\n    // Other runtime dependencies.\n\n    testImplementation("org.springframework.boot:spring-boot-starter-test") {\n        exclude(group = "ch.qos.logback")\n    }\n    // Other test dependencies.\n}\n')),(0,i.kt)("p",null,"Spring uses ",(0,i.kt)("a",{parentName:"p",href:"https://www.slf4j.org/"},"SLF4J")," for sending logs and bundles ",(0,i.kt)("a",{parentName:"p",href:"http://logback.qos.ch/"},"Logback"),"\nas the default binding. The ",(0,i.kt)("inlineCode",{parentName:"p"},"exclude")," functions shown here are needed to exclude Logback\nfrom Spring."),(0,i.kt)("h2",{id:"maven-setup"},"Maven setup"),(0,i.kt)("p",null,"Something like this (untested):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter</artifactId>\n    <exclusions>\n      <exclusion>\n        <groupId>ch.qos.logback</groupId>\n      </exclusion>\n    </exclusions>\n  </dependency>\n  <dependency>\n    <groupId>io.klogging</groupId>\n    <artifactId>klogging-spring-boot-starter</artifactId>\n    <version>0.1.3</version>\n  </dependency>\n  \x3c!-- Other runtime dependencies --\x3e\n\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-test</artifactId>\n    <exclusions>\n      <exclusion>\n        <groupId>ch.qos.logback</groupId>\n      </exclusion>\n    </exclusions>\n  </dependency>\n  \x3c!-- Other test dependencies --\x3e\n</dependencies>\n")),(0,i.kt)("h2",{id:"configure-klogging"},"Configure Klogging"),(0,i.kt)("p",null,"Put a ",(0,i.kt)("inlineCode",{parentName:"p"},"logging.json")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directory of the project."),(0,i.kt)("p",null,"Here is a simple one for logging to the console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sinks": {\n    "stdout": {\n      "renderWith": "RENDER_SIMPLE",\n      "dispatchTo": "STDOUT"\n    }\n  },\n  "logging": [\n    {\n      "levelRanges": [\n        {\n          "fromMinLevel": "INFO",\n          "toSinks": [\n            "stdout"\n          ]\n        }\n      ]\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);