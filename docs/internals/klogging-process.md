---
sidebar_position: 5
---

# Klogging internal process (new)

:::note
This is work in progress: I am re-writing the internals of Klogging to make the best use of Coroutines
and to provide some predictable ordering of log events.
:::

Klogging processes log events through Kotlin [coroutine channels](https://kotlinlang.org/docs/channels.html).

![Klogging process diagram](/img/klogging-process.svg)

Notes:

- [LogEvent](../concepts/log-events)s are constructed as close as possible to the code they describe.

- [Klogger](../loggers/defining-loggers) instances have `suspend` functions for emitting log events.

- [NoCoLogger](../loggers/defining-loggers) instances do not have `suspend` functions. They need to launch coroutines to emit events into the events channel.

- Each sink has its own channel and processes log events in the order it receives them.

## Log event order

When coroutines are launched, the order in which suspend functions complete is unpredictable.
Klogging attempts to preserve order as much as it can without sacrificing performance by not launching
new coroutines unless necessary.

New coroutines are launched in these places:

- Creating the loop in [Logging.kt](https://github.com/klogging/klogging/blob/main/src/commonMain/kotlin/io/klogging/impl/Logging.kt#L42)
  (location may change) that reads from the events channel and calls `dispatchEvent`.

- Emitting log events into the events channel from
  [NoCoLoggerImpl.kt](https://github.com/klogging/klogging/blob/main/src/commonMain/kotlin/io/klogging/impl/NoCoLoggerImpl.kt#L41).
  A new coroutine is launched for every log event.

- Creating the loop in [Sink.kt](https://github.com/klogging/klogging/blob/main/src/commonMain/kotlin/io/klogging/internal/Sink.kt#41)
  that reads from the channel for each sink.
