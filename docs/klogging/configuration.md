---
sidebar_position: 1
---

# Configuration

## Quick start with DSL

Klogging has a configuration DSL that makes it easy to get started. Put your configuration
to run as early as possible in your program. 

### A simple example

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

* First declares a [sink](sinks.md) called `stdout` that [renders](rendering.md) each
  [log event](log-events.md) into a [simple string format](simple-string-format.md) and
  [dispatches](dispatching.md) it to the standard output stream. Sinks should be
  configured before they are used.

* Next declares a logging configuration that applies to loggers with names starting
  with `com.example`. In this configuration, all log events at [severity level](levels.md)
  or greater are [dispatched](dispatching.md) to the `stdout` sink.

### A more complex example

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

## Configuration with files

### YAML

*Watch this space…*
