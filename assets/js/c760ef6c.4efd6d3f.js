"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[387],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=i,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9559:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={sidebar_position:3},s="Built-in configurations",c={unversionedId:"configuration/built-ins",id:"configuration/built-ins",isDocsHomePage:!1,title:"Built-in configurations",description:"Klogging provides a number of built-in configurations.",source:"@site/docs/configuration/built-ins.md",sourceDirName:"configuration",slug:"/configuration/built-ins",permalink:"/docs/configuration/built-ins",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration with JSON",permalink:"/docs/configuration/json"},next:{title:"Defining loggers",permalink:"/docs/loggers/defining-loggers"}},u=[{value:"Rendering",id:"rendering",children:[{value:"RENDER_SIMPLE",id:"render_simple",children:[]},{value:"RENDER_ANSI",id:"render_ansi",children:[]},{value:"RENDER_CLEF",id:"render_clef",children:[]},{value:"RENDER_GELF",id:"render_gelf",children:[]}]},{value:"Sending",id:"sending",children:[{value:"STDOUT",id:"stdout",children:[]},{value:"STDERR",id:"stderr",children:[]}]},{value:"Rendering and sending",id:"rendering-and-sending",children:[{value:"DEFAULT_CONSOLE",id:"default_console",children:[]}]}],d={toc:u};function p(e){var n=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"built-in-configurations"},"Built-in configurations"),(0,a.kt)("p",null,"Klogging provides a number of built-in configurations."),(0,a.kt)("h2",{id:"rendering"},"Rendering"),(0,a.kt)("h3",{id:"render_simple"},"RENDER_SIMPLE"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderString")," instance that renders log events as string messages suitable for a\nconsole. Examples are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2021-09-04 17:10:08.118921 INFO [DefaultDispatcher-worker-6] io.klogging.example.KloggerPlaypen : >> 1 : {run=4f1f9871-bbe9-4dcd-a778-c770d117010c, Counter=1}\n2021-09-04 17:10:08.162969 INFO [DefaultDispatcher-worker-2] io.klogging.example.KloggerPlaypen : << 1 : {run=4f1f9871-bbe9-4dcd-a778-c770d117010c, Counter=1}\n2021-09-04 17:10:08.163054 INFO [DefaultDispatcher-worker-5] io.klogging.example.KloggerPlaypen : Event 1 at 2021-09-04T17:10:08.162985 : {run=4f1f9871-bbe9-4dcd-a778-c770d117010c, Counter=1, Iteration=1, RightNow=2021-09-04T17:10:08.162985}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The timestamp is in the server\u2019s local time zone."),(0,a.kt)("li",{parentName:"ul"},"If there are ",(0,a.kt)("inlineCode",{parentName:"li"},"items")," as part of the ",(0,a.kt)("a",{parentName:"li",href:"../concepts/log-events"},"log event"),", the keys and values are printed at the end of\nthe line in curly braces."),(0,a.kt)("li",{parentName:"ul"},"If there is a stack trace as part of the log event, it is printed starting on the next line.")),(0,a.kt)("h3",{id:"render_ansi"},"RENDER_ANSI"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderString")," instance that renders log events as string messages for a console like ",(0,a.kt)("inlineCode",{parentName:"p"},"RENDER_SIMPLE")," but with\nlogging levels with colour highlights, for example:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Example of RENDER_ANSI output",src:t(922).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only the time portion of the timestamp is shown."),(0,a.kt)("li",{parentName:"ul"},"Logging levels are colour-coded and right-aligned in a 5-character column."),(0,a.kt)("li",{parentName:"ul"},"Context information is right-aligned in a 20-character column in square brackets."),(0,a.kt)("li",{parentName:"ul"},"Logger names are right-aligned in a 20-character column. Package names are abbreviated if they do not fit in the space."),(0,a.kt)("li",{parentName:"ul"},"Log event ",(0,a.kt)("inlineCode",{parentName:"li"},"items")," are included in curly braces, if present."),(0,a.kt)("li",{parentName:"ul"},"Stack traces, if present, start on the next line.")),(0,a.kt)("h3",{id:"render_clef"},"RENDER_CLEF"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderString")," instance that converts log events into JSON using\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.datalust.co/docs/posting-raw-events#compact-json-format"},"Compact Log Event Format")," for\ndispatching to a ",(0,a.kt)("a",{parentName:"p",href:"https://datalust.co/seq"},"Seq server"),".\nAn example is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@t": "2021-08-14T11:13:53.068816Z",\n  "@l": "INFO",\n  "@mt": ">> {Counter}",\n  "host": "MikeBook",\n  "logger": "Playpen",\n  "Counter": "1",\n  "run": "a6f72c37-7e2f-4d69-a73f-7f493cb04d1d",\n  "context": "DefaultDispatcher-worker-3"\n}\n')),(0,a.kt)("p",null,"In Seq it is shown like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2030).Z})),(0,a.kt)("h3",{id:"render_gelf"},"RENDER_GELF"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"RenderString")," instance that converts log events into JSON using\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.graylog.org/en/latest/pages/gelf.html#gelf-payload-specification"},"Graylog Extended Log Format"),"\nfor dispatching to a ",(0,a.kt)("a",{parentName:"p",href:"https://www.graylog.org"},"Graylog server"),".\nAn example is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "1.1",\n  "host": "MikeBook",\n  "short_message": ">> 1",\n  "timestamp": 1628939552.786044,\n  "level": 6,\n  "_Counter": "1",\n  "_run": "f02ec82a-616c-4d2f-8ccb-c14c0a771f67",\n  "_logger": "Playpen"\n}\n')),(0,a.kt)("h2",{id:"sending"},"Sending"),(0,a.kt)("h3",{id:"stdout"},"STDOUT"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"SendString")," instance that prints strings to the standard output stream."),(0,a.kt)("h3",{id:"stderr"},"STDERR"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"SendString")," instance that prints strings to the standard error stream."),(0,a.kt)("h2",{id:"rendering-and-sending"},"Rendering and sending"),(0,a.kt)("h3",{id:"default_console"},"DEFAULT_CONSOLE"),(0,a.kt)("p",null,"A sink configuration that renders using ",(0,a.kt)("inlineCode",{parentName:"p"},"RENDER_SIMPLE")," and sends using ",(0,a.kt)("inlineCode",{parentName:"p"},"STDOUT")," to a sink called ",(0,a.kt)("inlineCode",{parentName:"p"},"console"),"."))}p.isMDXComponent=!0},2030:function(e,n,t){n.Z=t.p+"assets/images/clef-json-in-seq-dbed21386597c05df849dc32c9f92811.png"},922:function(e,n,t){n.Z=t.p+"assets/images/render-ansi-d1e9e42822b93c9130ac1ccbab62a2ef.png"}}]);