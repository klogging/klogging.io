---
sidebar_position: 15
---

# Logger context items

You can add context items to loggers, that will be included in every log event emitted by them.
Context items can be added to both `Klogger` and `NoCoLogger` instances.

This can be useful for passing coroutine context information into non-coroutine code.

## Defining logger context items

When creating a logger, you can pass one or more context items as pairs.

```kotlin
class MainService(processState: String) {
    private val logger = noCoLogger<MainService>("processState" to processState)

    fun process() {
        // Emitted log events include processState
        logger.info("start process()")
        // do stuff
    }
}
```

## Copying context items from other loggers

You can copy context items from one logger to another.

```kotlin
class MainService(processState: String) {
    private val logger = logger<MainService>("processState" to processState)

    suspend fun process() {
        // Emitted log events include processState
        logger.info("start process()")
        val subprocessState = doStuff()
        val subService = SubService(subprocessState, logger)
        subService.process()
    }
}

class SubService(subprocessState: String, parentLogger: BaseLogger) {
    private val logger = noCoLogger<SubService>(parentLogger, "subprocessState" to subprocessState)

    fun process() {
        // Emitted log events include processState and subprocessStatue
        logger.info("start process()")
        // do stuff
    }
}
```


