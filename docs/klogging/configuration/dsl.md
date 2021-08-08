---
sidebar_position: 1
---

# Configuration DSL

Klogging has a configuration DSL that makes it easy to get started. Put your configuration
to run as early as possible in your program. 

## A simple example

Here is a simple example:

```kotlin
loggingConfiguration {
    sink("stdout", RENDER_SIMPLE, STDOUT)
    logging {
        fromLoggerBase("com.example")
        fromMinLevel(Level.INFO) {
            toSink("stdout")
        }
    }
}
```

This configuration:

* First declares a [sink](../sinks.md) called `stdout` that [renders](../rendering.md) each
  [log event](../log-events.md) into a [simple string format](../simple-string-format.md) and
  [dispatches](../dispatching.md) it to the standard output stream. Sinks should be
  configured before they are used.

* Next declares a logging configuration that applies to loggers with names starting
  with `com.example`. In this configuration, all log events at [severity level](../levels.md)
  or greater are [dispatched](../dispatching.md) to the `stdout` sink.

## A more complex example

```kotlin
loggingConfiguration {
    sink("stdout", RENDER_SIMPLE, STDOUT)
    sink("stderr", RENDER_SIMPLE, STDERR)
    sink("seq", seq(server = "http://localhost:5341"))
    sink("auditing") {
        syslog(config = "syslogConfig") { render(renderAudit) }
    }
    logging {
        fromLoggerBase("com.example")
        atLevel(Level.INFO) {
            toSink("stdout")
            toSink("seq")
        }
        fromMinLevel(Level.WARN) {
            toSink("stderr")
            toSink("seq")
        }
    }
    logging {
        exactLogger("com.example.service.FancyService")
        fromMinLevel(Level.DEBUG) { to Sink("seq") }
    }
    logging {
        fromLoggerBase("audit")
        toSink("auditing")
    }
}
```

This example has four sinks:

* `stdout` to the standard output stream;
* `stderr` to the standard error stream;
* `seq` to a local [Seq log aggregator](https://datalust.co/seq) server; and
* `auditing` to a Syslog server.

Three logging configurations, which together mean:

* Loggers with names starting with `com.example` dispatch their log events:
  * at level `INFO` or greater to sink `seq`;
  * at level `INFO` to sink `stdout`; and
  * at level `WARN` or greater to sink `stderr`.


* Logger `com.example.service.FancyService` dispatches log events with level `DEBUG` to
  sink `seq`.

* Loggers with names starting with `audit` dispatch all log events to sink `auditing`.


## DSL reference

### `loggingConfiguration`

This function creates a configuration for the running program. It makes sense to call this as early as
possible in program startup. It configures using specifications in the supplied lambda.

By default, the configuration replaces any existing one:

```kotlin
loggingConfiguration {
    // ...
}
```

To append a new configuration to an existing one:

```kotlin
loggingConfiguration(append = true) {
    // ...
}
```

### `kloggingMinLogLevel`

This function sets the minimum level used by the [internal logger](../internals/logger)
to decide whether to emit log messages.

### `sink`

This function configures a named sink with a renderer and a dispatcher.

- A renderer _renders_ a [LogEvent](../src/commonMain/kotlin/io/klogging/events/LogEvent.kt)
  into a string.

- A dispatcher _dispatches_ a string somewhere.

This example configures two sinks:

```kotlin
    sink("stdout", RENDER_SIMPLE, STDOUT)
    sink("seq", seq("http://localhost:5341"))
```

- The `stdout` sink renders events with the built-in renderer `RENDER_SIMPLE` and dispatches them
  to the standard output using the built-in `STDOUT` dispatcher.
- The `seq` sink uses the built-in `seq` function for rendering events in
  [CLEF](https://docs.datalust.co/docs/posting-raw-events#compact-json-format) compact JSON format and
  dispatching them to a [Seq](https://datalust.co/seq) server running locally.

Sinks must be declared before they are referenced in `toSink` functions.

### `logging`

This function configures logging from specified loggers at specified levels to specified
sinks. The following sections explain details.

### `fromLoggerBase` and `exactLogger`

These functions specify how to match logger names. For example:

- `fromLoggerBase("com.example")` matches all loggers with names that start with `com.example`, such
  as `com.example.config.ConfigApp`, `com.example.services.BlodgeService` etc.
- `exactLogger("com.example.services.GlubService")` matches only the logger called
  `com.example.services.GlubService`. No other logger with match.

Using these functions enables the configuration of logger hierarchies, like in Log4J and Logback.

> **Note:** These functions are optional: if logger names are not specified, all loggers will match.
> This defines the equivalent of a root logger in Log4J or Logback.

### `fromMinlevel` and `atLevel`

These functions specify the levels at which to dispatch log events. For example:

- `fromMinLevel(Level.INFO)` will enable all events at `INFO` level and above (i.e. more severe:
  `WARN`, `ERROR` and `FATAL`) to be dispatched.
- `atLevel(Level.WARN)` enables only events at `WARN` level to be dispatched by matching loggers.

The functions accept a lambda to specify which sinks to dispatch to.

### `toSink`

This function specifies the name of a sink to dispatch logs to. It can be called mulitple times for
a level specification. The sink must have been defined previously by name, otherwise a short warning
is written to the console and the configuration is ignored.

An example:

```kotlin
    fromMinLevel(Level.INFO) {
        toSink("console")
        toSink("seq")
    }
```

During dispatching, an event is never dispatched to a sink more than once. Given this configuration:

```kotlin
    logging {
        fromLoggerBase("com.example")
        fromMinLevel(Level.INFO) {
            toSink("stdout")
            toSink("seq")
        }
        fromMinLevel(Level.WARN) {
            toSink("stderr")
            toSink("seq")
        }
    }
```

An event from logger `com.example.nurdling.NurdleController` at level `WARN` is dispatched to `seq` only once.
There is no need to disable additivity as in Log4J and Logback.
