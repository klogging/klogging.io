---
sidebar_position: 1
---

# Configuration DSL

Klogging has a configuration DSL that makes it easy to get started. Put the configuration
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

* First declares a [sink](../concepts/sinks) called `stdout` that [renders](../concepts/rendering) each
  [log event](../concepts/log-events) into a [simple string format](../concepts/simple-string-format) and
  [dispatches](../concepts/dispatching) it to the standard output stream. Sinks should be
  configured first, before they are used.

* Next declares a logging configuration that applies to loggers with names starting
  with `com.example`. In this configuration, all log events at [severity level](../concepts/levels)
  `INFO` or greater are [dispatched](../concepts/dispatching) to the `stdout` sink.

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
  * all at level `INFO` or greater to sink `seq`;
  * at level `INFO` also to sink `stdout`; and
  * any at level `WARN` or greater to sink `stderr`.


* Logger `com.example.service.FancyService` also dispatches log events with level `DEBUG` to
  sink `seq`.

* Loggers with names starting with `audit` dispatch all log events to sink `auditing`.

:::info
Configuration for **syslog** sinks is not yet available.
:::

## DSL reference

### `loggingConfiguration`

This function creates a configuration for the running program. It makes sense to call this as early as
possible in program startup. It uses specifications in the supplied lambda.

By default, the configuration replaces any existing one:

```kotlin
loggingConfiguration {
    // ...
}
```

To append a new configuration to any existing one:

```kotlin
loggingConfiguration(append = true) {
    // ...
}
```

The new configuration can be a partial one.

### `kloggingMinLogLevel`

This function sets the minimum level used by the [internal logger](../internals/logger)
to decide whether to emit log messages.

If not specified, the level is that set by the value of [environment variable](../internals/environment-variables)
`KLOGGING_MIN_LOG_LEVEL`, which can override the built-in default value `INFO`.

### `sink`

This function configures a named sink with a [renderer](../concepts/rendering) and a
[dispatcher](../concepts/dispatching).

This example configures two sinks:

```kotlin
    sink("stdout", RENDER_SIMPLE, STDOUT)
    sink("seq", seq("http://localhost:5341"))
```

- The `stdout` sink renders events with the built-in renderer `RENDER_SIMPLE` and dispatches them
  to the standard output using the built-in `STDOUT` dispatcher.
- The `seq` sink uses the built-in `seq` function for rendering events in
  [CLEF](https://docs.datalust.co/docs/posting-raw-events#compact-json-format) compact JSON format and
  dispatching them to a [Seq server](https://datalust.co/seq) running locally.

Sinks must be declared before they are referenced in [`toSink`](#tosink) functions.

:::info
The `sink` function is not complete and will be enhanced in the future.
:::

### `logging`

This function configures logging from specified loggers at specified levels to specified
sinks. Your configuration must include at least one `logging` function for Klogging to
emit any logs.

The following sections explain details.

### `fromLoggerBase` and `exactLogger`

These functions specify how to match logger names. For example:

* `fromLoggerBase("com.example")` matches all loggers with names that start with `com.example`, such
  as `com.example.config.ConfigApp`, `com.example.services.BlodgeService` etc.

* `exactLogger("com.example.services.GlubService")` matches only the logger called
  `com.example.services.GlubService`. No other logger with match.

:::caution
`exactLogger` takes precedence if both  are specified in a `logging` section.
:::

:::info
These functions are optional: if logger names are not specified, all loggers will match.
This configuration is the equivalent of the root logger in Log4j or Logback.
:::

### `fromMinlevel` and `atLevel`

These functions specify the levels at which to dispatch log events. For example:

* `fromMinLevel(Level.INFO)` will enable all events at `INFO` level and above (i.e. more severe:
  `WARN`, `ERROR` and `FATAL`) to be dispatched.

* `atLevel(Level.WARN)` enables only events at `WARN` level to be dispatched by matching loggers.

The functions accept a lambda to specify which sinks to dispatch to.

:::caution
At least one of these functions must be specified or else Klogging will not emit any
events for the specified loggers.
:::

### `toSink`

This function specifies the name of a sink to dispatch events to. It can be called mulitple times for
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
