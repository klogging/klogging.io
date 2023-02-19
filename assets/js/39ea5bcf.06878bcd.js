"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[353],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(t),d=i,u=c["".concat(p,".").concat(d)]||c[d]||g[d]||l;return t?a.createElement(u,r(r({ref:n},m),{},{components:t})):a.createElement(u,r({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5668:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=t(7462),i=t(3366),l=(t(7294),t(3905)),r=["components"],o={sidebar_position:10},p="Configuration DSL",s={unversionedId:"configuration/dsl",id:"configuration/dsl",title:"Configuration DSL",description:"Klogging has a configuration DSL that makes it easy to get started. Put the configuration",source:"@site/docs/configuration/dsl.md",sourceDirName:"configuration",slug:"/configuration/dsl",permalink:"/docs/configuration/dsl",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Configuration with JSON",permalink:"/docs/configuration/json"}},m={},c=[{value:"A simple example",id:"a-simple-example",level:2},{value:"A more complex example",id:"a-more-complex-example",level:2},{value:"Short-circuit matching with <code>stopOnMatch</code>",id:"short-circuit-matching-with-stoponmatch",level:2},{value:"DSL reference",id:"dsl-reference",level:2},{value:"<code>loggingConfiguration</code>",id:"loggingconfiguration",level:3},{value:"<code>sink</code>",id:"sink",level:3},{value:"<code>logging</code>",id:"logging",level:3},{value:"<code>fromLoggerBase</code>, <code>exactLogger</code> and <code>matchLogger</code>",id:"fromloggerbase-exactlogger-and-matchlogger",level:3},{value:"<code>fromMinlevel</code> and <code>atLevel</code>",id:"fromminlevel-and-atlevel",level:3},{value:"<code>toSink</code>",id:"tosink",level:3},{value:"<code>minDirectLogLevel()</code>",id:"mindirectloglevel",level:3},{value:"<code>kloggingMinLogLevel()</code>",id:"kloggingminloglevel",level:3}],g={toc:c},d="wrapper";function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)(d,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"configuration-dsl"},"Configuration DSL"),(0,l.kt)("p",null,"Klogging has a configuration DSL that makes it easy to get started. Put the configuration\nto run as early as possible in your program."),(0,l.kt)("h2",{id:"a-simple-example"},"A simple example"),(0,l.kt)("p",null,"Here is a simple example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'loggingConfiguration {\n    sink("stdout", RENDER_SIMPLE, STDOUT)\n    sink("seq", seq("http://localhost:5341"))\n    logging {\n        fromLoggerBase("com.example")\n        fromMinLevel(Level.INFO) {\n            toSink("stdout")\n        }\n    }\n}\n')),(0,l.kt)("p",null,"This configuration:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"First declares a ",(0,l.kt)("a",{parentName:"p",href:"../concepts/sinks"},"sink")," called ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," that ",(0,l.kt)("a",{parentName:"p",href:"../concepts/rendering"},"renders")," each\n",(0,l.kt)("a",{parentName:"p",href:"../concepts/log-events"},"log event")," into a ",(0,l.kt)("a",{parentName:"p",href:"built-ins"},"simple string format")," and\n",(0,l.kt)("a",{parentName:"p",href:"../concepts/sending"},"sends")," it to the standard output stream. Sinks need to be\nconfigured first, before they can be used.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Next declares a logging configuration that applies to loggers with names starting\nwith ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example"),". In this configuration, all log events at ",(0,l.kt)("a",{parentName:"p",href:"../concepts/levels"},"severity level"),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"INFO")," or greater are ",(0,l.kt)("a",{parentName:"p",href:"../concepts/sending"},"sent")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," sink."))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"logging")," section must follow the ",(0,l.kt)("inlineCode",{parentName:"p"},"sink")," declarations.")),(0,l.kt)("h2",{id:"a-more-complex-example"},"A more complex example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'loggingConfiguration {\n    sink("stdout", RENDER_SIMPLE, STDOUT)\n    sink("stderr", RENDER_SIMPLE, STDERR)\n    sink("seq", seq(server = "http://localhost:5341"))\n    sink("auditing", splunkHec(\n        SplunkEndpoint(\n            hecUrl = "https://splunk:8088",\n            hecToken = System.env("AUDIT_HEC_TOKEN"),\n            index = "auditing",\n            sourceType = "service_audit",\n        )\n    ))\n    logging {\n        fromLoggerBase("com.example")\n        atLevel(Level.INFO) {\n            toSink("stdout")\n            toSink("seq")\n        }\n        fromMinLevel(Level.WARN) {\n            toSink("stderr")\n            toSink("seq")\n        }\n    }\n    logging {\n        exactLogger("com.example.service.FancyService")\n        fromMinLevel(Level.DEBUG) { toSink("seq") }\n    }\n    logging {\n        fromLoggerBase("audit")\n        toSink("auditing")\n    }\n    kloggingMinLevel(DEBUG)\n    minDirectLogLevel(INFO)\n}\n')),(0,l.kt)("p",null,"This example has four sinks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stdout")," to the standard output stream;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stderr")," to the standard error stream;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"seq")," to a local ",(0,l.kt)("a",{parentName:"li",href:"https://datalust.co/seq"},"Seq log aggregator")," server; and"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"auditing")," to a ",(0,l.kt)("a",{parentName:"li",href:"https://www.splunk.com"},"Splunk")," server.")),(0,l.kt)("p",null,"Three logging configurations, which together mean:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Loggers with names starting with ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example")," dispatch their log events:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"all at level ",(0,l.kt)("inlineCode",{parentName:"li"},"INFO")," or greater to sink ",(0,l.kt)("inlineCode",{parentName:"li"},"seq"),";"),(0,l.kt)("li",{parentName:"ul"},"at level ",(0,l.kt)("inlineCode",{parentName:"li"},"INFO")," also to sink ",(0,l.kt)("inlineCode",{parentName:"li"},"stdout"),"; and"),(0,l.kt)("li",{parentName:"ul"},"any at level ",(0,l.kt)("inlineCode",{parentName:"li"},"WARN")," or greater to sink ",(0,l.kt)("inlineCode",{parentName:"li"},"stderr"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Logger ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.service.FancyService")," also dispatches log events with level ",(0,l.kt)("inlineCode",{parentName:"p"},"DEBUG")," to\nsink ",(0,l.kt)("inlineCode",{parentName:"p"},"seq"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Loggers with names starting with ",(0,l.kt)("inlineCode",{parentName:"p"},"audit")," dispatch all log events to sink ",(0,l.kt)("inlineCode",{parentName:"p"},"auditing"),"."))),(0,l.kt)("p",null,"This configuration also sets minimum logging levels ",(0,l.kt)("a",{parentName:"p",href:"#kloggingminlevel"},"for Klogging\u2019s internal\nlogger")," and ",(0,l.kt)("a",{parentName:"p",href:"#mindirectloglevel"},"for sending log events directly"),"."),(0,l.kt)("h2",{id:"short-circuit-matching-with-stoponmatch"},"Short-circuit matching with ",(0,l.kt)("inlineCode",{parentName:"h2"},"stopOnMatch")),(0,l.kt)("p",null,"You can reduce log volumes and create detailed logging configurations with short-circuit matching of\nloggers. The logger-matching functions take an optional ",(0,l.kt)("inlineCode",{parentName:"p"},"stopOnMatch")," parameter that specifies\nwhether to continue matching or to stop."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'loggingConfiguration {\n    sink("stdout", RENDER_ANSI, STDOUT)\n    logging {\n        fromLoggerBase("com.example.rest", stopOnMatch = true)\n        fromMinLevel(Level.ERROR) {\n            toSink("stdout")\n        }\n    }\n    logging {\n        fromLoggerBase("com.example")\n        fromMinLevel(Level.DEBUG) {\n            toSink("stdout")\n        }\n    }\n}\n')),(0,l.kt)("p",null,"This configuration specifies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Loggers with names starting with ",(0,l.kt)("inlineCode",{parentName:"li"},"com.example.rest")," log from level ",(0,l.kt)("inlineCode",{parentName:"li"},"ERROR"),"."),(0,l.kt)("li",{parentName:"ul"},"All other loggers with names starting with ",(0,l.kt)("inlineCode",{parentName:"li"},"com.example")," log from level ",(0,l.kt)("inlineCode",{parentName:"li"},"DEBUG"),".")),(0,l.kt)("p",null,"So logging is as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Logger"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TRACE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEBUG"),(0,l.kt)("th",{parentName:"tr",align:"center"},"INFO"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WARN"),(0,l.kt)("th",{parentName:"tr",align:"center"},"ERROR"),(0,l.kt)("th",{parentName:"tr",align:"center"},"FATAL"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"com.example.rest.RestClient")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"com.example.ExampleClass")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"com.example.service.HealthService")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The order of ",(0,l.kt)("inlineCode",{parentName:"p"},"logging")," functions determines when matching stops.")),(0,l.kt)("h2",{id:"dsl-reference"},"DSL reference"),(0,l.kt)("h3",{id:"loggingconfiguration"},(0,l.kt)("inlineCode",{parentName:"h3"},"loggingConfiguration")),(0,l.kt)("p",null,"This function creates a configuration for the running program. It makes sense to call this as early as\npossible in program startup. It uses specifications in the supplied lambda."),(0,l.kt)("p",null,"By default, the configuration replaces any existing one:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"loggingConfiguration {\n    // ...\n}\n")),(0,l.kt)("p",null,"One scenario for appending a configuration is where the code defines a custom ",(0,l.kt)("a",{parentName:"p",href:"../concepts/rendering"},"renderer"),"\nor ",(0,l.kt)("a",{parentName:"p",href:"../concepts/sending"},"sender"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.example.customRenderer\n\nloggingConfiguration(append = true) {\n    sink("custom", customRenderer, STDOUT)\n}\n')),(0,l.kt)("h3",{id:"sink"},(0,l.kt)("inlineCode",{parentName:"h3"},"sink")),(0,l.kt)("p",null,"This function configures a named sink with a ",(0,l.kt)("a",{parentName:"p",href:"../concepts/rendering"},"renderer")," and a\n",(0,l.kt)("a",{parentName:"p",href:"../concepts/sending"},"sender"),"."),(0,l.kt)("p",null,"This example configures two sinks:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'    sink("stdout", RENDER_SIMPLE, STDOUT)\n    sink("seq", seq("http://localhost:5341"))\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"stdout")," sink renders events with the built-in renderer ",(0,l.kt)("inlineCode",{parentName:"li"},"RENDER_SIMPLE")," and dispatches them\nto the standard output using the built-in ",(0,l.kt)("inlineCode",{parentName:"li"},"STDOUT")," dispatcher."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"seq")," sink uses the built-in ",(0,l.kt)("inlineCode",{parentName:"li"},"seq")," function for rendering events in\n",(0,l.kt)("a",{parentName:"li",href:"https://docs.datalust.co/docs/posting-raw-events#compact-json-format"},"CLEF")," compact JSON format and\ndispatching them to a ",(0,l.kt)("a",{parentName:"li",href:"https://datalust.co/seq"},"Seq server")," running locally.")),(0,l.kt)("p",null,"Klogging also supports logging directly to a Splunk ",(0,l.kt)("a",{parentName:"p",href:"https://docs.splunk.com/Documentation/Splunk/8.2.2/Data/HECExamples"},"HTTP Event Collector\n(HEC)"),", specified using the\n",(0,l.kt)("inlineCode",{parentName:"p"},"splunkHec")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'    splunkHec(\n        SplunkEndpoint(\n            hecUrl = "https://splunk:8088",\n            hecToken = System.env("SPLUNK_HEC_TOKEN"),\n            index = "main",\n            sourceType = "klogging",\n            checkCertificate = "true",\n        )\n    )\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hecUrl")," specifies the URL of the Splunk server\u2019s HEC endpoint. It uses HTTPS by default."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hecToken")," is the HEC token used by Splunk for these logging events. It is a secret\nthat should be passed in via the execution environment."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"index")," is the Splunk index for the events (default ",(0,l.kt)("inlineCode",{parentName:"li"},"main"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sourceType")," is the Splunk ",(0,l.kt)("inlineCode",{parentName:"li"},"sourcetype")," value (default ",(0,l.kt)("inlineCode",{parentName:"li"},"klogging"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"checkCertificate")," indicates whether Klogging should check the TLS certificate used by the\nSplunk server (string: default ",(0,l.kt)("inlineCode",{parentName:"li"},'"true"'),").")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"sink")," function is not complete and will be enhanced in the future.")),(0,l.kt)("h3",{id:"logging"},(0,l.kt)("inlineCode",{parentName:"h3"},"logging")),(0,l.kt)("p",null,"This function configures logging from specified loggers at specified levels to specified\nsinks. Your configuration must include at least one ",(0,l.kt)("inlineCode",{parentName:"p"},"logging")," function for Klogging to\nemit any logs."),(0,l.kt)("p",null,"The following sections explain details."),(0,l.kt)("h3",{id:"fromloggerbase-exactlogger-and-matchlogger"},(0,l.kt)("inlineCode",{parentName:"h3"},"fromLoggerBase"),", ",(0,l.kt)("inlineCode",{parentName:"h3"},"exactLogger")," and ",(0,l.kt)("inlineCode",{parentName:"h3"},"matchLogger")),(0,l.kt)("p",null,"These functions specify how to match logger names. For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},'fromLoggerBase("com.example")')," matches all loggers with names that start with ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example"),", such\nas ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.config.ConfigApp"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.services.BlodgeService")," etc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},'exactLogger("com.example.services.GlubService")')," matches only the logger called\n",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.services.GlubService"),". No other logger with match.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},'matchLogger("Stage-[0-2]")')," uses a ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/"},"Kotlin regular expression"),"\npattern that matches loggers ",(0,l.kt)("inlineCode",{parentName:"p"},"Stage-0"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Stage-1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Stage-2")," but not\n",(0,l.kt)("inlineCode",{parentName:"p"},"Stage-3"),"."))),(0,l.kt)("p",null,"All three functions accept a boolean ",(0,l.kt)("inlineCode",{parentName:"p"},"stopOnMatch")," argument with default value ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"These functions are optional: if logger names are not specified, all loggers will match.\nThis configuration is the equivalent of the root logger in Log4j or Logback.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"In the DSL, the last-used function replaces earlier ones.")),(0,l.kt)("h3",{id:"fromminlevel-and-atlevel"},(0,l.kt)("inlineCode",{parentName:"h3"},"fromMinlevel")," and ",(0,l.kt)("inlineCode",{parentName:"h3"},"atLevel")),(0,l.kt)("p",null,"These functions specify the levels at which to dispatch log events. For example:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"fromMinLevel(Level.INFO)")," will enable all events at ",(0,l.kt)("inlineCode",{parentName:"p"},"INFO")," level and above (i.e. more severe:\n",(0,l.kt)("inlineCode",{parentName:"p"},"WARN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ERROR")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"FATAL"),") to be dispatched.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"atLevel(Level.WARN)")," enables only events at ",(0,l.kt)("inlineCode",{parentName:"p"},"WARN")," level to be dispatched by matching loggers."))),(0,l.kt)("p",null,"The functions accept a lambda to specify which sinks to dispatch to."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"At least one of these functions must be specified or else Klogging will not emit any\nevents for the specified loggers.")),(0,l.kt)("h3",{id:"tosink"},(0,l.kt)("inlineCode",{parentName:"h3"},"toSink")),(0,l.kt)("p",null,"This function specifies the name of a sink to dispatch events to. It can be called mulitple times for\na level specification. The sink must have been defined previously by name, otherwise a short warning\nis written to the console and the configuration is ignored."),(0,l.kt)("p",null,"An example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'    fromMinLevel(Level.INFO) {\n        toSink("console")\n        toSink("seq")\n    }\n')),(0,l.kt)("p",null,"During dispatching, an event is never dispatched to a sink more than once. Given this configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'    logging {\n        fromLoggerBase("com.example")\n        fromMinLevel(Level.INFO) {\n            toSink("stdout")\n            toSink("splunk")\n        }\n        fromMinLevel(Level.WARN) {\n            toSink("stderr")\n            toSink("splunk")\n        }\n    }\n')),(0,l.kt)("p",null,"An event from logger ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.nurdling.NurdleController")," at level ",(0,l.kt)("inlineCode",{parentName:"p"},"WARN")," is dispatched to ",(0,l.kt)("inlineCode",{parentName:"p"},"splunk")," only once.\nThere is no need to disable additivity as in Log4J and Logback."),(0,l.kt)("h3",{id:"mindirectloglevel"},(0,l.kt)("inlineCode",{parentName:"h3"},"minDirectLogLevel()")),(0,l.kt)("p",null,"This function specifies the minimum level at which log events are sent direct to sinks\ninstead of being sent asynchronously via coroutine channels."),(0,l.kt)("p",null,"If not specified, the level is that set by the value of ",(0,l.kt)("a",{parentName:"p",href:"../internals/environment-variables"},"environment\nvariable")," ",(0,l.kt)("inlineCode",{parentName:"p"},"KLOGGING_MIN_DIRECT_LOG_LEVEL"),", which will override\nthe default value ",(0,l.kt)("inlineCode",{parentName:"p"},"WARN"),"."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"../concepts/direct-logging"},"direct logging")," for details."),(0,l.kt)("h3",{id:"kloggingminloglevel"},(0,l.kt)("inlineCode",{parentName:"h3"},"kloggingMinLogLevel()")),(0,l.kt)("p",null,"This function sets the minimum level used by the ",(0,l.kt)("a",{parentName:"p",href:"../internals/internal-logger"},"internal logger"),"\nto decide whether to emit log messages."),(0,l.kt)("p",null,"If not specified, the level is that set by the value of ",(0,l.kt)("a",{parentName:"p",href:"../internals/environment-variables"},"environment\nvariable")," ",(0,l.kt)("inlineCode",{parentName:"p"},"KLOGGING_MIN_LOG_LEVEL"),", which will override the\ndefault value ",(0,l.kt)("inlineCode",{parentName:"p"},"INFO"),"."))}u.isMDXComponent=!0}}]);