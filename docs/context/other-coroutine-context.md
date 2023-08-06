---
sidebar_position: 20
---

# From other coroutine contexts

Klogging can include information from other coroutine context elements.

As an example, if your application is using [Project Reactor](https://projectreactor.io/), you can
store information in a Reactor `Context` and wrap that in a coroutine `ReactorContext`.

Configure Klogging to use all the values from the Reactor context in log events (`EventItems` is a
convenient type alias for `Map<String, Any?>`):

```kotlin
import io.klogging.config.Context
import io.klogging.events.EventItems
import kotlinx.coroutines.reactor.ReactorContext

val reactorExtractor: (ReactorContext) -> EventItems = { ctx ->
    // TBC
}

Context.addContextItemExtractor(ReactorContext, reactorExtractor)
```

Any log events emitted within the scope of the Reactor context will include items returned by the
`reactorExtractor()` function from that context.
