"use strict";(self.webpackChunkklogging_io=self.webpackChunkklogging_io||[]).push([[931],{7536:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"configuration/built-ins","title":"Built-in configurations","description":"Klogging provides a number of built-in configurations.","source":"@site/docs/configuration/built-ins.md","sourceDirName":"configuration","slug":"/configuration/built-ins","permalink":"/docs/configuration/built-ins","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"sidebar_position":40},"sidebar":"tutorialSidebar","previous":{"title":"Configuration with HOCON","permalink":"/docs/configuration/hocon"},"next":{"title":"Context","permalink":"/docs/context/"}}');var s=i(4848),t=i(8453);const a={sidebar_position:40},l="Built-in configurations",o={},d=[{value:"Rendering",id:"rendering",level:2},{value:"RENDER_SIMPLE",id:"render_simple",level:3},{value:"RENDER_ISO8601",id:"render_iso8601",level:3},{value:"RENDER_ANSI",id:"render_ansi",level:3},{value:"RENDER_CLEF",id:"render_clef",level:3},{value:"RENDER_GELF",id:"render_gelf",level:3},{value:"RENDER_STANDARD",id:"render_standard",level:3},{value:"Sending",id:"sending",level:2},{value:"STDOUT",id:"stdout",level:3},{value:"STDERR",id:"stderr",level:3},{value:"Rendering and sending",id:"rendering-and-sending",level:2},{value:"DEFAULT_CONSOLE",id:"default_console",level:3},{value:"ANSI_CONSOLE",id:"ansi_console",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"built-in-configurations",children:"Built-in configurations"})}),"\n",(0,s.jsx)(n.p,{children:"Klogging provides a number of built-in configurations."}),"\n",(0,s.jsx)(n.h2,{id:"rendering",children:"Rendering"}),"\n",(0,s.jsx)(n.h3,{id:"render_simple",children:"RENDER_SIMPLE"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"RenderString"})," instance that renders log events as string messages suitable for a\nconsole. Examples are:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"2021-09-04 17:10:08.118921 INFO [DefaultDispatcher-worker-6] io.klogging.example.KloggerPlaypen : >> 1 : {run=4f1f9871-bbe9-4dcd-a778-c770d117010c, Counter=1}\n2021-09-04 17:10:08.162969 INFO [DefaultDispatcher-worker-2] io.klogging.example.KloggerPlaypen : << 1 : {run=4f1f9871-bbe9-4dcd-a778-c770d117010c, Counter=1}\n2021-09-04 17:10:08.163054 INFO [DefaultDispatcher-worker-5] io.klogging.example.KloggerPlaypen : Event 1 at 2021-09-04T17:10:08.162985 : {run=4f1f9871-bbe9-4dcd-a778-c770d117010c, Counter=1, Iteration=1, RightNow=2021-09-04T17:10:08.162985}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The timestamp is in the server\u2019s local time zone."}),"\n",(0,s.jsxs)(n.li,{children:["If there are ",(0,s.jsx)(n.code,{children:"items"})," as part of the ",(0,s.jsx)(n.a,{href:"/docs/concepts/log-events",children:"log event"}),", the keys and values are printed at the end of\nthe line in curly braces."]}),"\n",(0,s.jsx)(n.li,{children:"If there is a stack trace as part of the log event, it is printed starting on the next line."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"render_iso8601",children:"RENDER_ISO8601"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"RenderString"})," instance that renders log events as string messages like ",(0,s.jsx)(n.code,{children:"RENDER_SIMPLE"})," but with\ntimestamps in ISO8601 format. Examples are:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"2023-07-27T22:46:58.363519Z INFO [DefaultDispatcher-worker-4+Playpen] io.klogging.example.KloggerPlaypen : << 1 : {app=Playpen, run=2235f5a2-7920-4446-9fa3-bd127493772e, Counter=1}\n2023-07-27T22:46:58.365417Z INFO [DefaultDispatcher-worker-4+Playpen] io.klogging.example.KloggerPlaypen : >> 2 : {app=Playpen, run=2235f5a2-7920-4446-9fa3-bd127493772e, Counter=2}\n2023-07-27T22:46:58.365559Z INFO [DefaultDispatcher-worker-4+Playpen] io.klogging.example.KloggerPlaypen : Event 1 at 2023-07-28T08:46:58.365536 : {app=Playpen, run=2235f5a2-7920-4446-9fa3-bd127493772e, Counter=2, Iteration=1, RightNow=2023-07-28T08:46:58.365536}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The timestamp is an ISO8601 timestamp in UTC."}),"\n",(0,s.jsxs)(n.li,{children:["If there are ",(0,s.jsx)(n.code,{children:"items"})," as part of the ",(0,s.jsx)(n.a,{href:"/docs/concepts/log-events",children:"log event"}),", the keys and values are printed at the end of\nthe line in curly braces."]}),"\n",(0,s.jsx)(n.li,{children:"If there is a stack trace as part of the log event, it is printed starting on the next line."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"render_ansi",children:"RENDER_ANSI"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"RenderString"})," instance that renders log events as string messages for a console like ",(0,s.jsx)(n.code,{children:"RENDER_SIMPLE"})," but with\nlogging levels with colour highlights, for example:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Example of RENDER_ANSI output",src:i(9865).A+"",width:"2072",height:"364"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Only the time portion of the timestamp is shown."}),"\n",(0,s.jsx)(n.li,{children:"Logging levels are colour-coded and right-aligned in a 5-character column."}),"\n",(0,s.jsx)(n.li,{children:"Context information is right-aligned in a 20-character column in square brackets."}),"\n",(0,s.jsx)(n.li,{children:"Logger names are right-aligned in a 20-character column. Package names are abbreviated if they do not fit in the space."}),"\n",(0,s.jsxs)(n.li,{children:["Log event ",(0,s.jsx)(n.code,{children:"items"})," are included in curly braces, if present."]}),"\n",(0,s.jsx)(n.li,{children:"Stack traces, if present, start on the next line."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"render_clef",children:"RENDER_CLEF"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"RenderString"})," instance that converts log events into JSON using\n",(0,s.jsx)(n.a,{href:"https://clef-json.org/",children:"Compact Log Event Format"})," for dispatching to a\n",(0,s.jsx)(n.a,{href:"https://datalust.co/seq",children:"Seq server"}),". An example is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "@t": "2021-08-14T11:13:53.068816Z",\n  "@l": "INFO",\n  "@mt": ">> {Counter}",\n  "host": "MikeBook",\n  "logger": "Playpen",\n  "Counter": "1",\n  "run": "a6f72c37-7e2f-4d69-a73f-7f493cb04d1d",\n  "context": "DefaultDispatcher-worker-3"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"In Seq it is shown like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(5358).A+"",width:"1402",height:"316"})}),"\n",(0,s.jsx)(n.h3,{id:"render_gelf",children:"RENDER_GELF"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"RenderString"})," instance that converts log events into JSON using\n",(0,s.jsx)(n.a,{href:"https://docs.graylog.org/en/latest/pages/gelf.html#gelf-payload-specification",children:"Graylog Extended Log Format"}),"\nfor dispatching to a ",(0,s.jsx)(n.a,{href:"https://www.graylog.org",children:"Graylog server"}),".\nAn example is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "version": "1.1",\n  "host": "MikeBook",\n  "short_message": ">> 1",\n  "timestamp": 1628939552.786044,\n  "level": 6,\n  "_Counter": "1",\n  "_run": "f02ec82a-616c-4d2f-8ccb-c14c0a771f67",\n  "_logger": "Playpen"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"render_standard",children:"RENDER_STANDARD"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"RenderString"})," instance that converts log events into a standard JSON format. An example is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "timestamp": "2024-07-27T11:18:58.810039Z",\n  "level": "INFO",\n  "host": "uKW4KVMT",\n  "logger": "com.splodge.mucker.service",\n  "id": "13e837ba-b962-44ca-8dc3-675b64dcef6a",\n  "context": "DefaultDispatcher-worker-17",\n  "message": "Authenticated ID: 13e837ba-b962-44ca-8dc3-675b64dcef6a"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"sending",children:"Sending"}),"\n",(0,s.jsx)(n.h3,{id:"stdout",children:"STDOUT"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"SendString"})," instance that prints strings to the standard output stream."]}),"\n",(0,s.jsx)(n.h3,{id:"stderr",children:"STDERR"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"SendString"})," instance that prints strings to the standard error stream."]}),"\n",(0,s.jsx)(n.h2,{id:"rendering-and-sending",children:"Rendering and sending"}),"\n",(0,s.jsx)(n.h3,{id:"default_console",children:"DEFAULT_CONSOLE"}),"\n",(0,s.jsxs)(n.p,{children:["A sink configuration that renders using ",(0,s.jsx)(n.code,{children:"RENDER_SIMPLE"})," and sends using ",(0,s.jsx)(n.code,{children:"STDOUT"})," to a sink\ncalled ",(0,s.jsx)(n.code,{children:"console"}),". It emits log events with severity ",(0,s.jsx)(n.code,{children:"INFO"})," and greater."]}),"\n",(0,s.jsx)(n.h3,{id:"ansi_console",children:"ANSI_CONSOLE"}),"\n",(0,s.jsxs)(n.p,{children:["A sink configuration that renders using ",(0,s.jsx)(n.code,{children:"RENDER_ANSI"})," and sends using ",(0,s.jsx)(n.code,{children:"STDOUT"})," to a sink\ncalled ",(0,s.jsx)(n.code,{children:"console"}),". It emits log events with severity ",(0,s.jsx)(n.code,{children:"INFO"})," and greater."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},5358:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/clef-json-in-seq-dbed21386597c05df849dc32c9f92811.png"},9865:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/render-ansi-d1e9e42822b93c9130ac1ccbab62a2ef.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var r=i(6540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);