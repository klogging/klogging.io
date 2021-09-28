---
sidebar_position: 10
---

# Defining loggers

Klogging provides a number of ways of defining loggers.

## Implement `Klogging` interface

The interface `io.klogging.Klogging` includes a `logger` property that returns a
`Klogger` instance with the name of the class. For example:

```kotlin
package com.example

import io.klogging.Klogging

class ImportantService : Klogging {

    suspend fun beImportant() {
        // This logger has the name "com.example.ImportantService".
        logger.info("Being important")
    }
}
```

:::note
The `Klogging` functions are all `suspend` functions to be called in coroutine contexts.
:::

Similarly, for non-coroutine contexts, the `NoCoLogging` interface has a `logger` property
that returns a `NoCoLogger` instance. `NoCoLogger` has the same functions as `Klogger` but
they are not `suspend` functions.

:::note
The `logger` property is not static and its `get()` function is called every time it is
referenced. You can define a logger directly if performance is important.
:::

## Define a logger directly

The `logger()` function defines a logger directly by name or by owning class. The following
two calls to `logger` are equivalent:

```kotlin
package com.example

import io.klogging.logger

class BusyService {
    val loggerByClass = logger(BusyService::class)
    val loggerByName = logger("com.example.BusyService")
}
```

In fact, both `loggerByClass` and `loggerByName` refer to the same logger instance.

## Static reference

For a single reference to a logger that is not looked up every time, define it in the
companion object of a class:

```kotlin
class VeryBusyService {
    companion object {
        logger = logger(VeryBusyService::class)
    }
}
```
