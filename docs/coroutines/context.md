---
sidebar_position: 20
---

# Contextual event items

The [`LogContext`](https://github.com/klogging/klogging/blob/main/src/commonMain/kotlin/io/klogging/context/LogContext.kt)
class holds a map of contextual information in a coroutine context. For example:

```kotlin
suspend fun complexLogic(input: EssentialStuff) = coroutineScope {
    launch(logContext("runId" to input.runId)) {
        logger.info { "Starting logic" }

        // Do stuff: log events, call functions, etc.

        logger.info { "Finished logic" }
    }
}
```

The log events sent by any `suspend` functions within the scope of the launched coroutine will
contain a field called `runId` with the value of `input.runId` for that particular run.

![Example of two log events with the same value of runId in Seq](/img/seq-log-events-same-runId.png)

Coroutine context information is kept for the duration of the current coroutine scope
and is automatically removed at the end of that scope. Context information is also
automatically moved between scopes as required.

This is easier to use and more flexible than Mapped Diagnostic Context (MDC) in Logback
and ThreadContext in Log4J. Those contexts require callers to remove items when
finished and to ensure items are moved between threads.
