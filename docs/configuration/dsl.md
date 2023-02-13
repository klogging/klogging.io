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
    sink("seq", seq("http://localhost:5341"))
    logging {
        fromLoggerBase("com.example")
        fromMinLevel(Level.INFO) {
            toSink("stdout")
        }
    }
}
```

This configuration:

- First declares a [sink](../concepts/sinks) called `stdout` that [renders](../concepts/rendering) each
  [log event](../concepts/log-events) into a [simple string format](built-ins) and
  [sends](../concepts/sending) it to the standard output stream. Sinks need to be
  configured first, before they can be used.

- Next declares a logging configuration that applies to loggers with names starting
  with `com.example`. In this configuration, all log events at [severity level](../concepts/levels)
  `INFO` or greater are [sent](../concepts/sending) to the `stdout` sink.

:::note
The `logging` section must follow the `sink` declarations.
:::

## A more complex example

```kotlin
loggingConfiguration {
    sink("stdout", RENDER_SIMPLE, STDOUT)
    sink("stderr", RENDER_SIMPLE, STDERR)
    sink("seq", seq(server = "http://localhost:5341"))
    sink("auditing", splunkHec(
        SplunkEndpoint(
            hecUrl = "https://splunk:8088",
            hecToken = System.env("AUDIT_HEC_TOKEN"),
            index = "auditing",
            sourceType = "service_audit",
        )
    ))
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
        fromMinLevel(Level.DEBUG) { toSink("seq") }
    }
    logging {
        fromLoggerBase("audit")
        toSink("auditing")
    }
    kloggingMinLevel(DEBUG)
    minDirectLogLevel(INFO)
}
```

This example has four sinks:

- `stdout` to the standard output stream;
- `stderr` to the standard error stream;
- `seq` to a local [Seq log aggregator](https://datalust.co/seq) server; and
- `auditing` to a [Splunk](https://www.splunk.com) server.

Three logging configurations, which together mean:

- Loggers with names starting with `com.example` dispatch their log events:

  - all at level `INFO` or greater to sink `seq`;
  - at level `INFO` also to sink `stdout`; and
  - any at level `WARN` or greater to sink `stderr`.

- Logger `com.example.service.FancyService` also dispatches log events with level `DEBUG` to
  sink `seq`.

- Loggers with names starting with `audit` dispatch all log events to sink `auditing`.

This configuration also sets minimum logging levels [for Klogging’s internal
logger](#kloggingminlevel) and [for sending log events directly](#mindirectloglevel).

## Short-circuit matching with `stopOnMatch`

You can reduce log volumes and create detailed logging configurations with short-circuit matching of
loggers. The logger-matching functions take an optional `stopOnMatch` parameter that specifies
whether to continue matching or to stop.

For example:

```kotlin
loggingConfiguration {
    sink("stdout", RENDER_ANSI, STDOUT)
    logging {
        fromLoggerBase("com.example.rest", stopOnMatch = true)
        fromMinLevel(Level.ERROR) {
            toSink("stdout")
        }
    }
    logging {
        fromLoggerBase("com.example")
        fromMinLevel(Level.DEBUG) {
            toSink("stdout")
        }
    }
}
```

This configuration specifies:

- Loggers with names starting with `com.example.rest` log from level `ERROR`.
- All other loggers with names starting with `com.example` log from level `DEBUG`.

So logging is as follows:

Logger | TRACE | DEBUG | INFO | WARN | ERROR | FATAL
-------|:-----:|:-----:|:----:|:----:|:-----:|:-----:
`com.example.rest.RestClient` | | | | | ✅ | ✅
`com.example.ExampleClass` | | ✅ | ✅ | ✅ | ✅ | ✅
`com.example.service.HealthService` | | ✅ | ✅ | ✅ | ✅ | ✅

:::info
The order of `logging` functions determines when matching stops.
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

One scenario for appending a configuration is where the code defines a custom [renderer](../concepts/rendering)
or [sender](../concepts/sending).

```kotlin
import com.example.customRenderer

loggingConfiguration(append = true) {
    sink("custom", customRenderer, STDOUT)
}
```

### `sink`

This function configures a named sink with a [renderer](../concepts/rendering) and a
[sender](../concepts/sending).

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

Klogging also supports logging directly to a Splunk [HTTP Event Collector
(HEC)](https://docs.splunk.com/Documentation/Splunk/8.2.2/Data/HECExamples), specified using the
`splunkHec` function:

```kotlin
    splunkHec(
        SplunkEndpoint(
            hecUrl = "https://splunk:8088",
            hecToken = System.env("SPLUNK_HEC_TOKEN"),
            index = "main",
            sourceType = "klogging",
            checkCertificate = "true",
        )
    )
```

- `hecUrl` specifies the URL of the Splunk server’s HEC endpoint. It uses HTTPS by default.
- `hecToken` is the HEC token used by Splunk for these logging events. It is a secret
   that should be passed in via the execution environment.
- `index` is the Splunk index for the events (default `main`).
- `sourceType` is the Splunk `sourcetype` value (default `klogging`).
- `checkCertificate` indicates whether Klogging should check the TLS certificate used by the
   Splunk server (string: default `"true"`).

:::info
The `sink` function is not complete and will be enhanced in the future.
:::

### `logging`

This function configures logging from specified loggers at specified levels to specified
sinks. Your configuration must include at least one `logging` function for Klogging to
emit any logs.

The following sections explain details.

### `fromLoggerBase`, `exactLogger` and `matchLogger`

These functions specify how to match logger names. For example:

- `fromLoggerBase("com.example")` matches all loggers with names that start with `com.example`, such
  as `com.example.config.ConfigApp`, `com.example.services.BlodgeService` etc.

- `exactLogger("com.example.services.GlubService")` matches only the logger called
  `com.example.services.GlubService`. No other logger with match.

- `matchLogger("Stage-[0-2]")` uses a [Kotlin regular expression](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/)
  pattern that matches loggers `Stage-0`, `Stage-1` and `Stage-2` but not
  `Stage-3`.

All three functions accept a boolean `stopOnMatch` argument with default value `false`.

:::info
These functions are optional: if logger names are not specified, all loggers will match.
This configuration is the equivalent of the root logger in Log4j or Logback.
:::

:::note
In the DSL, the last-used function replaces earlier ones.
:::

### `fromMinlevel` and `atLevel`

These functions specify the levels at which to dispatch log events. For example:

- `fromMinLevel(Level.INFO)` will enable all events at `INFO` level and above (i.e. more severe:
  `WARN`, `ERROR` and `FATAL`) to be dispatched.

- `atLevel(Level.WARN)` enables only events at `WARN` level to be dispatched by matching loggers.

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
            toSink("splunk")
        }
        fromMinLevel(Level.WARN) {
            toSink("stderr")
            toSink("splunk")
        }
    }
```

An event from logger `com.example.nurdling.NurdleController` at level `WARN` is dispatched to `splunk` only once.
There is no need to disable additivity as in Log4J and Logback.

### `minDirectLogLevel()`

This function specifies the minimum level at which log events are sent direct to sinks
instead of being sent asynchronously via coroutine channels.

If not specified, the level is that set by the value of [environment
variable](../internals/environment-variables) `KLOGGING_MIN_DIRECT_LOG_LEVEL`, which will override
the default value `WARN`.

See [direct logging](../concepts/direct-logging) for details.

### `kloggingMinLogLevel()`

This function sets the minimum level used by the [internal logger](../internals/internal-logger)
to decide whether to emit log messages.

If not specified, the level is that set by the value of [environment
variable](../internals/environment-variables) `KLOGGING_MIN_LOG_LEVEL`, which will override the
default value `INFO`.
