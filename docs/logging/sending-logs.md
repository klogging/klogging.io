---
sidebar_position: 10
---

# Sending log events

Once you have a logger, you can call functions on it to send log events. The base function is `log()`:

```kotlin
    logger.log(Level.INFO, "Application started")
```

:::info
All the information here applies to both the coroutine logger `Klogger` and the non-coroutine
logger `NoCoLogger`.
:::

## Utility functions

These utility functions are a convenient way to send logs. They call `log()` with the
appropriate level:

- `trace()`
- `debug()`
- `info()`
- `warn()`
- `error()`
- `fatal()`

## Logging patterns

Klogging offers a range of patterns for different logging scenarios. The patterns shown here apply
to `log()` and all utility functions.

### String message

The simplest pattern is to send a string, for example:

```kotlin
    logger.info("Processing started")
    // meaningful code
    val response = callOtherService()
    logger.info("User response was ${response.text}")
```

### Message template

[Message templates](../context/message-templates) provide a convenient way to both create meaningful
messages and to create structured log events:

```kotlin
    logger.info("User {userId} signed in", userId)
```

The resulting log event contains both:

- the message populated with the value of `userId`; and
- an item called `userId` with the same value.

For example, if `userId` has the value `wonti321` then:

- the message becomes `User wonti321 signed in`; and
- the log event contains `"userId": "wonti321"`.

The log event displayed in Splunk may look like this:

![Example of structured event message in Splunk](/img/log-info-userId-splunk.png)

### Immediate context items

You can specify a map of items to add to the context of a single log event.

:::info
Immediate context items are useful with `NoCoLogger` instances, where there is no coroutine
context available.
:::

A simple example:

```kotlin
logger.info("Retrieved values from services", mapOf(
    "serviceOneCount" to serviceOneResult.count,
    "serviceTwoCount" to serviceTwoResult.count,
))
```

The resulting log event may look like something like this:

```json
{
  "@t": "2024-02-05T07:45:47.837117Z",
  "@l": "INFO",
  "@m": "Retrieved values from services",
  "host": "589ef8fa",
  "logger": "com.example.ServiceCombiner",
  "context": "main",
  "serviceOneCount": 9,
  "serviceTwoCount": 17
}
```

### Exception

To log exception information, include the exception object as the first argument in the function call:

```kotlin
    try {
        // This might throw an exception
        snurgle(id, agger)
    } catch (ex: SnurgleException) {
        logger.warn(ex, "Exception calling snurgle with id={id} and agger={agger}", id, agger)
    }
```

The resulting log event will include any stack trace included in the exception.

### Minimum level check

Every logger has a minimum level set by configuration, below which log events are not sent.
See [Log levels and checking](../internals/level-checking) for more details.

Klogging provides functions to check minimum levels to call before calling a logging function
if the values to be logged are expensive to obtain.

Here is one example, where `DEBUG` logging might not be enabled for this logger in all environments:

```kotlin
    if (logger.isDebugEnabled()) {
        val complex = calculateSpecialValueForDebugging()
        val other = extractOtherValueFromSomewhereElse()
        logger.debug("Calculated {complex} and {other}", complex, other)
    }
```

Likewise, there are functions `isTraceEnabled()`, `isInfoEnabled()` etc.

### Kotlin lambda

The idiomatic Kotlin way to send a log event that might be expensive is to use a lambda.
The lambda is only called if the minimum level check evaluates `true`.

It is simple when logging a string message:

```kotlin
    logger.trace { "Starting run with ID=$runId" }
```

Here, a log event is only sent if `logger.isTraceEnabled()` evaluates `true`.

The lambda can only return a single value, so if you want to use a message template, you
can call the `e()` function as the return value of the lambda:

```kotlin
    logger.debug {
        val complex = calculateSpecialValueForDebugging()
        val other = extractOtherValueFromSomewhereElse()
        e("Calculated {complex} and {other}", complex, other)
    }
```

### Lambda and exception

Combine a lambda and an exception like this:

```kotlin
    logger.warn(ex) { "Exception processing payment" }
```
