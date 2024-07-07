---
sidebar_position: 30
---

# From other coroutine contexts

Klogging can include information from other coroutine context elements.

As an example, if your application is using [Project Reactor](https://projectreactor.io/), you can
store information in a Reactor context and wrap that in a coroutine `ReactorContext`. This example
Spring configuration copies selected items from `ReactorContext` into the Klogging context,
so they are included in log events:

```kotlin
package com.example.config

import io.klogging.context.Context
import io.klogging.events.EventItems
import kotlinx.coroutines.reactor.ReactorContext
import org.springframework.context.annotation.Configuration

const val correlationKey = "correlationId"
const val tracingKey = "tracingId"
const val spanKey = "spanId"

@Configuration
class CopyReactorToKloggingContext {
    init {
        val copyContextItems: (ReactorContext) -> EventItems = { reactorContext ->
            buildMap {
                listOf(correlationKey, tracingKey, spanKey).forEach { key ->
                    if (reactorContext.context.hasKey(key))
                        put(key, reactorContext.context[key])
                }
            }
        }
        Context.addContextItemExtractor(ReactorContext, copyContextItems)
    }
}
```
