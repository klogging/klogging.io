---
sidebar_position: 30
---

# Internal logger

Klogging has an internal logger that emits string messages to the console.

## Usage

The core function `log(String, Level, String, Exception?)` is called by utility functions for five levels:

- `trace("Sink", "Forwarding event ${event.id} to sink $name")`

- `debug("Emitter", "Starting events channel")`

- `info("Configuration", "Setting configuration using the DSL with append=$append")`

- `warn("JsonConfiguration", "Exception parsing JSON", ex)`

- `error("Sink", "A serious error has occurred", ex)`

:::note
[Message templates](../concepts/message-templates) are not currently supported by the internal
logger.
:::

## Minimum logging level

The internal logger has a minimum level from which it will emit log messages, set by
the ‘global’ variable `kloggingMinLogLevel`.

- The level is `INFO` by default.

- It can be changed by the [environment variable](../internals/environment-variables)
  `KLOGGING_MIN_LOG_LEVEL`

## Under the hood

[The code](https://github.com/klogging/klogging/blob/main/klogging/src/commonMain/kotlin/io/klogging/internal/InternalLogging.kt)
constructs log events, renders them as string messages using a specific renderer and sends
them to the console.

- If the logging level is `INFO` or lower, they are sent to the standard output stream.
- If the logging level is `WARN` or higher, they are sent to the standard error stream.
  Some shells will show these messages in a different colour (e.g. red).
