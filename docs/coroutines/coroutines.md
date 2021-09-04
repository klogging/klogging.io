---
sidebar_position: 10
---

# Coroutines

Kotlin coroutines provide two advantages to Klogging.

## Contextual information management

The [`LogContext`](https://github.com/klogging/klogging/src/commonMain/kotlin/io/klogging/context/LogContext.kt)
class is designed to hold a map of contextual information in a
coroutine context. For example:

```kotlin
suspend fun complexLogic(input: EssentialStuff) = coroutineScope {
    launch(logContext("runId" to input.runId)) {
        logger.info { "Starting logic" }

        // Do stuff, potentially logging events

        logger.info { "Finished logic" }
    }
}
```

The log events sent by any code within the scope of the launched
coroutine will contain a field called `runId` with the value of
`input.runId` for that particular run.

![](/img/seq-log-events-same-runId.png)

Coroutine context information is kept for the duration of the current coroutine scope
and is automatically removed at the end of that scope. Context information is also
automatically moved between scopes as required.

This is easier to use and more flexible than Mapped Diagnostic Context (MDC) in Logback
and ThreadContext in Log4J. Those contexts require callers to put remove items when
finished and to ensure items are moved between threads.

## Asynchronous dispatching of log events

Coroutines provide a simple way to asynchronously dispatch log events to different
sinks. Klogging [uses channels](../concepts/klogging-process) to process events.

**TBC**
