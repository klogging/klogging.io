---
sidebar_position: 20
---

# Contextual event items

Klogging includes the
[`LogContext`](https://dokka.klogging.io/-klogging/io.klogging.context/-log-context/index.html)
class to hold a map of contextual information in a coroutine context. For example:

```kotlin
suspend fun complexLogic(input: EssentialStuff) {
    withLogContext("runId" to input.runId) {
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
automatically moved into child scopes as required.

This is easier to use and more flexible than Mapped Diagnostic Context (MDC) in Logback
and ThreadContext in Log4J. Those contexts require callers to remove items when
finished and to ensure items are moved between threads.

## Log context functions

Klogging provides functions for creating and managing `LogContext` instances.

### [`logContext()`](https://dokka.klogging.io/-klogging/io.klogging.context/log-context.html)

Create a `LogContext` instance with items to include in log events, for example:

```kotlin
    launch(logContext("runId" to request.runId, "userId" to request.userId)) {
        logger.info("Start processing")
        // etc.
    }
```

`logContext()` returns a new
[`CoroutineContext`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/-coroutine-context/)
instance. It also includes any `LogContext` information in the current coroutine scope:

```kotlin
    withContext(logContext("runId" to request.runId) {
        // Item `runId` is in scope.
        withContext(logContext("mode" to calculateMode()) {
            // Both `runId` and `mode` items are in scope.
        }
        // Only `runId` is in scope.
    }
```

### [`withLogContext()`](https://dokka.klogging.io/-klogging/io.klogging.context/with-log-context.html)

Create a `LogContext` within the current coroutine scope with items to include in log events,
for example:

```kotlin
    withLogContext("runId" to request.runId, "userId" to request.userId) {
        logger.info("Start processing")
        // etc.
    }
```

`withLogContext()` is the same as `withContext(logContext())`.

### [`addToContext()`](https://dokka.klogging.io/-klogging/io.klogging.context/add-to-context.html)

Add items to a `LogContext` in the current coroutine scope, for example:

```kotlin
    // Within a coroutine scope …
    addToContext("mode" to calculateMode())
    // Item `mode` is now in coroutine scope `LogContext`
```

### [`removeFromContext()`](https://dokka.klogging.io/-klogging/io.klogging.context/remove-from-context.html)

Remove items from a `LogContext` in the current coroutine scope, for example:

```kotlin
    // Within a coroutine scope …
    removeFromContext("mode")
    // Item `mode` is no longer in coroutine scope `LogContext`
```
