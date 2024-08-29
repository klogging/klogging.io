---
sidebar_position: 10
---

# Creating a custom renderer

Klogging uses [renderers](../concepts/rendering-and-sending.md#rendering) to render
[log events](../concepts/log-events.md) into strings to be sent to logging sinks.

Renderers implement the `RenderString` functional interface:

```kotlin
public fun interface RenderString {
    operator fun invoke(event: LogEvent): String
}
```

## Create a class

A simple example with only the timestamp and message.

```kotlin
package com.example

import io.klogging.events.LogEvent
import io.klogging.rendering.RenderString

class TimestampAndMessage : RenderString {
    override fun invoke(event: LogEvent): String =
        "${event.timestamp} - ${event.evalTemplate()}"
}
```

The class can be used in [DSL configuration](../configuration/dsl.md):

```kotlin
loggingConfiguration {
    sink("console", TimestampAndMessage(), STDOUT)
    // etc.
}
```

It can also be specified in [JSON configuration](../configuration/json.md):

```json
{
  "sinks": {
    "console": {
      "renderWith": "com.example.TimestampAndMessage",
      "sendTo": "STDOUT"
    }
  }
}
```
