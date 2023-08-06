---
sidebar_position: 5
---

# Klogging internal process

## Overall process

Klogging processes most log events through Kotlin [coroutine channels](https://kotlinlang.org/docs/channels.html)
to take logging away from the main threads of program execution as soon as possible.

![Klogging process diagram](/img/klogging-process.svg)

Notes:

- **Filter**: only construct and emit a log event if [specified by Klogger configuration](../internals/level-checking).

- **Emit**: send a log event into the events channel (or direct).

- **Dispatch**: determine which sinks are to receive a log event and send them into the
  corresponding sink channels (or direct).

- **Render**: convert a log event into a representation suitable for a sink.

- **Send**: deliver a rendered log event to a destination.

- Log events are constructed as close as possible to the code they describe.

- [Klogger](../loggers/defining-loggers) instances have `suspend` functions for emitting log events.

- [NoCoLogger](../loggers/defining-loggers) instances do not have `suspend` functions, and launch coroutines
  to emit events into the events channel.

- Each sink has its own channel and processes log events in the order it receives them.

- **Direct**: dashed lines show how Klogging can [send log events directly to sinks](../concepts/direct-logging)
  instead of asynchronously via coroutine channels.

## Log event batching

Log events are [received from sink channels in batches](https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/sending/Batching.kt)
before being sent to sink destinations. Events are batched:

- at least every 10 milliseconds; or
- at most 100 events.

These values are defaults and can be changed by setting [environment variables](../internals/environment-variables).

## Log event order

When coroutines are launched, the order in which suspend functions complete is unpredictable.
Klogging attempts to preserve order as much as it can without sacrificing performance by not launching
new coroutines unless necessary.

New coroutines are launched in these places:

- Creating the loop in [Emitter.kt](https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/internal/Emitter.kt#L41) that reads from the events channel and calls `dispatchEvent`.

- Emitting log events into the events channel from
  [NoCoLoggerImpl.kt](https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/impl/NoCoLoggerImpl.kt#L43).
  A new coroutine is launched for every log event.

- Creating the loop in [Sink.kt](https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/internal/Sink.kt#L41)
  that reads from the channel for each sink.

Sinks may launch coroutines in order to send log events to their destinations.

- Sinks that send events to the console or to the filesystem do not launch coroutines because they are expected to
  work without significant delay. They will preserve the order that log events were emitted.

- Sinks that send events to remote destinations will typically launch multiple coroutines to allow for delays
  in delivering events. The order in which those destinations (e.g. log aggregation services) receive log events
  is not guaranteed. Log aggregators are expected to use timestamps to order log events.
