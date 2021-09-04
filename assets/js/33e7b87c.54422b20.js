"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[617],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,g=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3711:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:70},l="Sinks",c={unversionedId:"concepts/sinks",id:"concepts/sinks",isDocsHomePage:!1,title:"Sinks",description:"Sinks are destinations for log events. Klogging configuration names sinks",source:"@site/docs/concepts/sinks.md",sourceDirName:"concepts",slug:"/concepts/sinks",permalink:"/docs/concepts/sinks",version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Sending",permalink:"/docs/concepts/sending"},next:{title:"Environment variables",permalink:"/docs/internals/environment-variables"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sinks"},"Sinks"),(0,o.kt)("p",null,"Sinks are destinations for log events. Klogging configuration names sinks\nas having a ",(0,o.kt)("a",{parentName:"p",href:"rendering"},"renderer")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,o.kt)("a",{parentName:"p",href:"sending"},"sender"),"\nthose strings to a destination."),(0,o.kt)("p",null,"Example destinations are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Standard output stream"),(0,o.kt)("li",{parentName:"ul"},"Standard error stream"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://datalust.co/seq"},"Seq log aggregator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.graylog.org/"},"Graylog log aggregator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.elastic.co/logstash/"},"Logstash")," as part of the ",(0,o.kt)("a",{parentName:"li",href:"https://www.elastic.co/what-is/elk-stack"},"ELK stack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.splunk.com"},"Splunk")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Syslog"},"Syslog"))))}f.isMDXComponent=!0}}]);