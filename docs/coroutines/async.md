---
sidebar_position: 30
---

# Asynchronous handling of log events

Coroutines provide a simple way to asynchronously handle log events, including dispatching them to different
sinks.

Klogging launches new coroutines that are used in a number of places:

- For dispatching log events to sinks.
- For receiving log events from event and sink channels.
- For sending batches of log events to network destinations.

![Klogging process diagram](/img/klogging-process.svg)

In addition, Klogging uses coroutine channels to process events.

- Log events are [sent into the events
  channel](https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/internal/Emitter.kt#L67)
  in a coroutine.

- They are read in a different coroutine and dispatched to each matching sink by [sending it into
  each sink](https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/internal/Sink.kt#L72).

- Events are [read from sink channels in
  batches](https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/sending/Batching.kt#L47)
  in different coroutines.
