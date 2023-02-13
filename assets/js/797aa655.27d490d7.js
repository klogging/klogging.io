"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[364],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),g=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=g(e.components);return l.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=g(t),m=a,d=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?l.createElement(d,o(o({ref:n},p),{},{components:t})):l.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[u]="string"==typeof e?e:a,o[1]=r;for(var g=2;g<i;g++)o[g]=t[g];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9196:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return r},metadata:function(){return g},toc:function(){return u}});var l=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],r={sidebar_position:10},s="Sending log events",g={unversionedId:"logging/sending-logs",id:"logging/sending-logs",title:"Sending log events",description:"Once you have a logger, you can call functions on it to send log events. The base function is log():",source:"@site/docs/logging/sending-logs.md",sourceDirName:"logging",slug:"/logging/sending-logs",permalink:"/docs/logging/sending-logs",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Defining loggers",permalink:"/docs/loggers/defining-loggers"},next:{title:"Coroutines",permalink:"/docs/coroutines/"}},p={},u=[{value:"Utility functions",id:"utility-functions",level:2},{value:"Logging patterns",id:"logging-patterns",level:2},{value:"String message",id:"string-message",level:3},{value:"Message template",id:"message-template",level:3},{value:"Exception",id:"exception",level:3},{value:"Minimum level check",id:"minimum-level-check",level:3},{value:"Kotlin lambda",id:"kotlin-lambda",level:3},{value:"Lambda and exception",id:"lambda-and-exception",level:3}],c={toc:u},m="wrapper";function d(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(m,(0,l.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sending-log-events"},"Sending log events"),(0,i.kt)("p",null,"Once you have a logger, you can call functions on it to send log events. The base function is ",(0,i.kt)("inlineCode",{parentName:"p"},"log()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'    logger.log(Level.INFO, "Application started")\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"All the information here applies to both the coroutine logger ",(0,i.kt)("inlineCode",{parentName:"p"},"Klogger")," and the non-coroutine\nlogger ",(0,i.kt)("inlineCode",{parentName:"p"},"NoCoLogger"),".")),(0,i.kt)("h2",{id:"utility-functions"},"Utility functions"),(0,i.kt)("p",null,"These utility functions are a convenient way to send logs. They call ",(0,i.kt)("inlineCode",{parentName:"p"},"log()")," with the\nappropriate level:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trace()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"debug()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"info()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"warn()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fatal()"))),(0,i.kt)("h2",{id:"logging-patterns"},"Logging patterns"),(0,i.kt)("p",null,"Klogging offers a range of patterns for different logging scenarios. The patterns shown here apply\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"log()")," and all utility functions."),(0,i.kt)("h3",{id:"string-message"},"String message"),(0,i.kt)("p",null,"The simplest pattern is to send a string, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'    logger.info("Processing started")\n    // meaningful code\n    val response = callOtherService()\n    logger.info("User response was ${response.text}")\n')),(0,i.kt)("h3",{id:"message-template"},"Message template"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../concepts/message-templates"},"Message templates")," provide a convenient way to both create meaningful\nmessages and to create structured log events:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'    logger.info("User {userId} signed in", userId)\n')),(0,i.kt)("p",null,"The resulting log event contains both:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the message populated with the value of ",(0,i.kt)("inlineCode",{parentName:"li"},"userId"),"; and"),(0,i.kt)("li",{parentName:"ul"},"an item called ",(0,i.kt)("inlineCode",{parentName:"li"},"userId")," with the same value.")),(0,i.kt)("p",null,"For example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," has the value ",(0,i.kt)("inlineCode",{parentName:"p"},"wonti321")," then:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the message becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"User wonti321 signed in"),"; and"),(0,i.kt)("li",{parentName:"ul"},"the log event contains ",(0,i.kt)("inlineCode",{parentName:"li"},'"userId": "wonti321"'),".")),(0,i.kt)("p",null,"The log event displayed in Splunk may look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example of structured event message in Splunk",src:t(5007).Z,width:"672",height:"290"})),(0,i.kt)("h3",{id:"exception"},"Exception"),(0,i.kt)("p",null,"To log exception information, include the exception object as the first argument in the function call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'    try {\n        // This might throw an exception\n        snurgle(id, agger)\n    } catch (ex: SnurgleException) {\n        logger.warn(ex, "Exception calling snurgle with id={id} and agger={agger}", id, agger)\n    }\n')),(0,i.kt)("p",null,"The resulting log event will include any stack trace included in the exception."),(0,i.kt)("h3",{id:"minimum-level-check"},"Minimum level check"),(0,i.kt)("p",null,"Every logger has a minimum level set by configuration, below which log events are not sent.\nSee ",(0,i.kt)("a",{parentName:"p",href:"../internals/level-checking"},"Log levels and checking")," for more details."),(0,i.kt)("p",null,"Klogging provides functions to check minimum levels to call before calling a logging function\nif the values to be logged are expensive to obtain."),(0,i.kt)("p",null,"Here is one example, where ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG")," logging might not be enabled for this logger in all environments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'    if (logger.isDebugEnabled()) {\n        val complex = calculateSpecialValueForDebugging()\n        val other = extractOtherValueFromSomewhereElse()\n        logger.debug("Calculated {complex} and {other}", complex, other)\n    }\n')),(0,i.kt)("p",null,"Likewise, there are functions ",(0,i.kt)("inlineCode",{parentName:"p"},"isTraceEnabled()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isInfoEnabled()")," etc."),(0,i.kt)("h3",{id:"kotlin-lambda"},"Kotlin lambda"),(0,i.kt)("p",null,"The idiomatic Kotlin way to send a log event that might be expensive is to use a lambda.\nThe lambda is only called if the minimum level check evaluates ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"It is simple when logging a string message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'    logger.trace { "Starting run with ID=$runId" }\n')),(0,i.kt)("p",null,"Here, a log event is only sent if ",(0,i.kt)("inlineCode",{parentName:"p"},"logger.isTraceEnabled()")," evaluates ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("p",null,"The lambda can only return a single value, so if you want to use a message template, you\ncan call the ",(0,i.kt)("inlineCode",{parentName:"p"},"e()")," function as the return value of the lambda:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'    logger.debug {\n        val complex = calculateSpecialValueForDebugging()\n        val other = extractOtherValueFromSomewhereElse()\n        e("Calculated {complex} and {other}", complex, other)\n    }\n')),(0,i.kt)("h3",{id:"lambda-and-exception"},"Lambda and exception"),(0,i.kt)("p",null,"Combine a lambda and an exception like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'    logger.warn(ex) { "Exception processing payment" }\n')))}d.isMDXComponent=!0},5007:function(e,n,t){n.Z=t.p+"assets/images/log-info-userId-splunk-7572d963c8f7ea7f0c9a9a037e3ce089.png"}}]);