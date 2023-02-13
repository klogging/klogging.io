---
sidebar_position: 80
---

# Direct logging

Klogging handles most log events asynchronously by using Kotlin coroutines. This design takes
logging away from the main threads of program execution as soon as possible.

But asynchronous processing delays the sending of log events to sinks, so they may be lost when the
program finishes. This can be a problem if the log events occur immediately before a program
crashes. Those events may contain valuable information about why the crash happened.

By default, Klogging sends all events with level `WARN` and above (`ERROR` and `FATAL`) directly to
sinks. The minimum level can be configured using the [configuration DSL](../configuration/dsl) or
in [JSON files](../configuration/json).

In the DSL:

```kotlin
loggingConfiguration {
    minDirectLogLevel(INFO)
    // Other configuration
}
```

In JSON:

```json
{
  "minDirectLogLevel": "INFO"
}
```

The level can also be set using the [environment
variable](../internals/environment-variables) `KLOGGING_MIN_DIRECT_LOG_LEVEL`.
