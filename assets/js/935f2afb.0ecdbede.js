"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Get started","href":"/docs/get-started","docId":"get-started"},{"type":"link","label":"Introduction","href":"/docs/introduction","docId":"introduction"},{"type":"link","label":"Structured log events","href":"/docs/structured-log-events","docId":"structured-log-events"},{"type":"category","label":"Configuration","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Configuration DSL","href":"/docs/configuration/dsl","docId":"configuration/dsl"},{"type":"link","label":"Configuration with JSON","href":"/docs/configuration/json","docId":"configuration/json"},{"type":"link","label":"Configuration with HOCON","href":"/docs/configuration/hocon","docId":"configuration/hocon"},{"type":"link","label":"Built-in configurations","href":"/docs/configuration/built-ins","docId":"configuration/built-ins"}],"href":"/docs/configuration/"},{"type":"category","label":"Context","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Base Context","href":"/docs/context/base-context","docId":"context/base-context"},{"type":"link","label":"Message templates","href":"/docs/context/message-templates","docId":"context/message-templates"},{"type":"link","label":"Immediate context items","href":"/docs/context/immediate-context-items","docId":"context/immediate-context-items"},{"type":"link","label":"From other coroutine contexts","href":"/docs/context/other-coroutine-context","docId":"context/other-coroutine-context"},{"type":"link","label":"From other sources","href":"/docs/context/other-context","docId":"context/other-context"}],"href":"/docs/context/"},{"type":"category","label":"Loggers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Defining loggers","href":"/docs/loggers/defining-loggers","docId":"loggers/defining-loggers"}]},{"type":"category","label":"Logging","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Sending log events","href":"/docs/logging/sending-logs","docId":"logging/sending-logs"}]},{"type":"category","label":"Coroutines","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Contextual event items","href":"/docs/coroutines/context","docId":"coroutines/context"},{"type":"link","label":"Asynchronous handling of log events","href":"/docs/coroutines/async","docId":"coroutines/async"}],"href":"/docs/coroutines/"},{"type":"category","label":"Java, Spring etc.","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Using Klogging directly from Java","href":"/docs/java/klogging-from-java","docId":"java/klogging-from-java"},{"type":"link","label":"Using SLF4J","href":"/docs/java/slf4j","docId":"java/slf4j"},{"type":"link","label":"Klogging with Spring Boot","href":"/docs/java/spring-boot","docId":"java/spring-boot"},{"type":"link","label":"Hexagon microservices toolkit","href":"/docs/java/hexagon","docId":"java/hexagon"}],"href":"/docs/java/"},{"type":"link","label":"Ktor","href":"/docs/ktor/","docId":"ktor/ktor"},{"type":"category","label":"Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Klogging internal process","href":"/docs/concepts/klogging-process","docId":"concepts/klogging-process"},{"type":"link","label":"Log Events","href":"/docs/concepts/log-events","docId":"concepts/log-events"},{"type":"link","label":"Logging severity levels","href":"/docs/concepts/levels","docId":"concepts/levels"},{"type":"link","label":"Sinks","href":"/docs/concepts/sinks","docId":"concepts/sinks"},{"type":"link","label":"Rendering and sending","href":"/docs/concepts/rendering-and-sending","docId":"concepts/rendering-and-sending"},{"type":"link","label":"Direct logging","href":"/docs/concepts/direct-logging","docId":"concepts/direct-logging"}]},{"type":"category","label":"Klogging internals","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Environment variables","href":"/docs/internals/environment-variables","docId":"internals/environment-variables"},{"type":"link","label":"Log levels and checking","href":"/docs/internals/level-checking","docId":"internals/level-checking"},{"type":"link","label":"Internal logger","href":"/docs/internals/internal-logger","docId":"internals/internal-logger"}]}]},"docs":{"concepts/direct-logging":{"id":"concepts/direct-logging","title":"Direct logging","description":"Klogging handles most log events asynchronously by using Kotlin coroutines. This design takes","sidebar":"tutorialSidebar"},"concepts/klogging-process":{"id":"concepts/klogging-process","title":"Klogging internal process","description":"Overall process","sidebar":"tutorialSidebar"},"concepts/levels":{"id":"concepts/levels","title":"Logging severity levels","description":"Klogging levels","sidebar":"tutorialSidebar"},"concepts/log-events":{"id":"concepts/log-events","title":"Log Events","description":"A log event (modelled by","sidebar":"tutorialSidebar"},"concepts/rendering-and-sending":{"id":"concepts/rendering-and-sending","title":"Rendering and sending","description":"Log events are rendered before being sent to sinks.","sidebar":"tutorialSidebar"},"concepts/sinks":{"id":"concepts/sinks","title":"Sinks","description":"Sinks are destinations for log events. Klogging configuration names sinks","sidebar":"tutorialSidebar"},"configuration/built-ins":{"id":"configuration/built-ins","title":"Built-in configurations","description":"Klogging provides a number of built-in configurations.","sidebar":"tutorialSidebar"},"configuration/configuration":{"id":"configuration/configuration","title":"Configuration","description":"Klogging starts with no configuration and will not send any log events. You configure Klogging using","sidebar":"tutorialSidebar"},"configuration/dsl":{"id":"configuration/dsl","title":"Configuration DSL","description":"Klogging has a configuration DSL that makes it easy to get started. Put the configuration","sidebar":"tutorialSidebar"},"configuration/hocon":{"id":"configuration/hocon","title":"Configuration with HOCON","description":"Klogging can be configured from HOCON","sidebar":"tutorialSidebar"},"configuration/json":{"id":"configuration/json","title":"Configuration with JSON","description":"Klogging can be configured from JSON files. This example is exactly equivalent to","sidebar":"tutorialSidebar"},"context/base-context":{"id":"context/base-context","title":"Base Context","description":"You can specify items to add to every Klogging log event in your application.","sidebar":"tutorialSidebar"},"context/context":{"id":"context/context","title":"Context","description":"Much of the power of Klogging is in the way you can include context information in log events.","sidebar":"tutorialSidebar"},"context/immediate-context-items":{"id":"context/immediate-context-items","title":"Immediate context items","description":"You can add explicit context items when logging as part of the calls to loggers.","sidebar":"tutorialSidebar"},"context/message-templates":{"id":"context/message-templates","title":"Message templates","description":"Klogging has a partial implementation of message templates to make it easy","sidebar":"tutorialSidebar"},"context/other-context":{"id":"context/other-context","title":"From other sources","description":"Klogging can include context items from other sources without coroutine context information.","sidebar":"tutorialSidebar"},"context/other-coroutine-context":{"id":"context/other-coroutine-context","title":"From other coroutine contexts","description":"Klogging can include information from other coroutine context elements.","sidebar":"tutorialSidebar"},"coroutines/async":{"id":"coroutines/async","title":"Asynchronous handling of log events","description":"Coroutines provide a simple way to asynchronously handle log events, including dispatching them to different","sidebar":"tutorialSidebar"},"coroutines/context":{"id":"coroutines/context","title":"Contextual event items","description":"Klogging includes the","sidebar":"tutorialSidebar"},"coroutines/coroutines":{"id":"coroutines/coroutines","title":"Coroutines","description":"Kotlin coroutines provide two blessings to","sidebar":"tutorialSidebar"},"get-started":{"id":"get-started","title":"Get started","description":"Get started with Klogging quickly here.","sidebar":"tutorialSidebar"},"internals/environment-variables":{"id":"internals/environment-variables","title":"Environment variables","description":"Klogging\u2019s behaviour can be modified by setting certain environment variables","sidebar":"tutorialSidebar"},"internals/internal-logger":{"id":"internals/internal-logger","title":"Internal logger","description":"Klogging has an internal logger that emits string messages to the console. Its purpose is for","sidebar":"tutorialSidebar"},"internals/level-checking":{"id":"internals/level-checking","title":"Log levels and checking","description":"Each logger has a minimum logging level per sink, set by configuration. The minimum value of the","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"Klogging is a pure-Kotlin logging library that aims to be flexible and easy to use. It uses Kotlin","sidebar":"tutorialSidebar"},"java/hexagon":{"id":"java/hexagon","title":"Hexagon microservices toolkit","description":"Klogging has a logging adapter for the Hexagon microservices toolkit.","sidebar":"tutorialSidebar"},"java/java":{"id":"java/java","title":"Java, Spring, SLF4J and Hexagon","description":"Klogging can be configured as the logging library for the JVM, supporting:","sidebar":"tutorialSidebar"},"java/klogging-from-java":{"id":"java/klogging-from-java","title":"Using Klogging directly from Java","description":"Klogging can be used directly by Java programs, using a LoggerFactory:","sidebar":"tutorialSidebar"},"java/slf4j":{"id":"java/slf4j","title":"Using SLF4J","description":"The Simple Logging Fa\xe7ade for Java (SLF4J) library is a widely-used","sidebar":"tutorialSidebar"},"java/spring-boot":{"id":"java/spring-boot","title":"Klogging with Spring Boot","description":"Klogging works really well with Spring Boot, especially in Kotlin code.","sidebar":"tutorialSidebar"},"ktor/ktor":{"id":"ktor/ktor","title":"Klogging and Ktor","description":"Klogging can be used in Ktor applications easily.","sidebar":"tutorialSidebar"},"loggers/defining-loggers":{"id":"loggers/defining-loggers","title":"Defining loggers","description":"Klogging provides a number of ways of defining loggers.","sidebar":"tutorialSidebar"},"logging/sending-logs":{"id":"logging/sending-logs","title":"Sending log events","description":"Once you have a logger, you can call functions on it to send log events. The base function is log():","sidebar":"tutorialSidebar"},"structured-log-events":{"id":"structured-log-events","title":"Structured log events","description":"Klogging uses log events that can contain much richer information than a simple message. Log events","sidebar":"tutorialSidebar"}}}')}}]);