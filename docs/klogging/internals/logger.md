---
sidebar_position: 2
---

# Internal logger

Klogging has an internal logger that emits string messages to the console.

## Usage

The core function `log(Level, String, Exception?)` is called by utility functions, for example:

* `info("Setting configuration using the DSL with append=$append")`

* `warn("Exception parsing JSON configuration", ex)`

* `debug("Setting sink '${entry.key}' with ${entry.value}")`

## Minimum logging level

The internal logger has a minimum level from which it will emit log messages, set by
the ‘global’ variable `kloggingMinLogLevel`.

* The level is `INFO` by default.

* It can be changed by the environment variable `KLOGGING_MIN_LOG_LEVEL`

## Under the hood

[The code](https://github.com/klogging/klogging/blob/main/src/commonMain/kotlin/io/klogging/internal/InternalLogging.kt)
constructs log events, renders them as string messages using a specific renderer and sends
them to the console.

* If the logging level is `INFO` or lower, they are sent to the standard output stream.
* If the logging level is `WARN` or higher, they are sent to the standard error stream.
  Some shells will show these messages in a different colour (e.g. red).
