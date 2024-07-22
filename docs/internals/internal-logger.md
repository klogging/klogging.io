---
sidebar_position: 30
---

# Internal logger

Klogging has an internal logger that emits string messages to the console. Its purpose is for
diagnostics on Klogging itself.

## Usage

Klogging uses its internal logger in these ways:

| Level | Typical use                                        |
|-------|----------------------------------------------------|
| TRACE | Detailed tracing of log events through Klogging    |
| DEBUG | Lifecycle events of Klogging components            |
| INFO  | Klogging has read configuration from DSL or file   |
| WARN  | There was an error interpreting some configuration |

## Minimum logging level

The internal logger has a minimum level from which it will emit log messages, set by
the ‘global’ variable `kloggingMinLogLevel`.

- The level is `INFO` by default.

- It can be changed by the [environment variable](../internals/environment-variables.md)
  `KLOGGING_MIN_LOG_LEVEL`

## Logging output

[The code](https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/internal/InternalLogging.kt)
constructs log events, renders them as string messages using a specific renderer and sends
them to the console.

- If the logging level is `INFO` or lower, they are sent to the standard output stream.
- If the logging level is `WARN` or higher, they are sent to the standard error stream.
  Some shells will show these messages in a different colour (e.g. red).
