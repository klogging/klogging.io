---
sidebar_position: 10
---

# Log Events

A **log event** (modelled by
[`LogEvent`](https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/events/LogEvent.kt))
contains information at a point in time and the state of a running system.

Important properties of an event are:

| Property    | Description                                                                            |
|-------------|----------------------------------------------------------------------------------------|
| Timestamp   | The point in time when the event occurred, with microsecond or finer resolution.       |
| Logger      | Name of the logger that sent the event (e.g. a fully-qualified class name).            |
| Level       | An indication of the severity of the event.                                            |
| Host        | Name of the host where the event originated: important in distributed systems.         |
| Context     | Context where the event occurred, typically thread / coroutine name.                   |
| Message     | A string message summarising what happened, that might be constructed from a template. |
| Stack trace | Details about an exception or error, if one is associated with the event.              |
| Items       | A map of useful information current at the time of the event.                          |

Each event also has a unique ID that is printed by
the [internal logger](../internals/internal-logger.md)
for diagnostic purposes.
