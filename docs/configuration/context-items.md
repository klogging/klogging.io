---
sidebar_position: 50
---

# Context Items

Much of the power of Klogging is in the way you can include context information in log events.

## Base Context

You can specify items to add to every Klogging log event in your application.
Examples might be application name or a build identifier.

Specify them using the `Context` object, for example:

```kotlin
const val APP_NAME_KEY = "appName"
const val APP_NAME = "analysis-service"
const val BUILD_NUMBER_KEY = "buildNumber"
const val BUILD_NUMBER_ENV = "BUILD_NUMBER"

Context.addBaseContext(
    APP_NAME_KEY to APP_NAME,
    BUILD_NUMBER_KEY to System.getenv(BUILD_NUMBER_ENV),
)
```

Log events include those values, for example:

```json
{
  "@t": "2022-06-16T08:52:12.064882Z",
  "@l": "INFO",
  "@mt": "Execution time {elapsedMs} ms",
  "host": "09b4396db8ae",
  "appName": "analysis-service",
  "buildNumber": "2.4.0-d22d0dd",
  "logger": "com.wodgeworks.analysis.RunTimer",
  "elapsedMs": "73",
  "run": "a6f72c37-7e2f-4d69-a73f-7f493cb04d1d",
  "context": "DefaultDispatcher-worker-3"
}
```

## From other coroutine context elements

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
