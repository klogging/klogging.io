---
sidebar_position: 5
---

# Klogging internal process (under development)

:::note
This process is not yet implemented: I am re-writing the internals of Klogging to make the best use of coroutines
and to provide predictable ordering of log events to some destinations.
:::

Klogging processes log events through Kotlin [coroutine channels](https://kotlinlang.org/docs/channels.html).

![Klogging process diagram](/img/klogging-process.svg)

Notes:

- **Filter**: only construct and emit a log event if [specified by Klogger configuration](level-checking).

- **Emit**: send a log event into the events channel.

- **Dispatch**: determine which sinks are to receive a log event and send them into those sink channels.

- **Render**: convert a log event into a representation suitable for a sink.

- **Send**: deliver a rendered log event to a destination.

- [LogEvent](../concepts/log-events)s are constructed as close as possible to the code they describe.

- [Klogger](../loggers/defining-loggers) instances have `suspend` functions for emitting log events.

- [NoCoLogger](../loggers/defining-loggers) instances do not have `suspend` functions, and launch coroutines
  to emit events into the events channel.

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

Sinks may launch coroutines in order to send log events to their destinations.

- Sinks that send events to the console or to the filesystem do not launch coroutines because they are expected to
  work without significant delay. They will preserve the order that log events were emitted.

- Sinks that send events to remote destinations will typically launch multiple coroutines to allow for delays
  in delivering events. The order in which those destinations (e.g. log aggregation services) receive log events
  is not guaranteed. Log aggregators are expected to use timestamps to order log events.
