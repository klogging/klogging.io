---
  sidebar_position: 20
---

# Configuration with JSON

Klogging can be configured from JSON files. This example is exactly equivalent to
the [first DSL example](dsl#a-simple-example):

```json
{
  "sinks": {
    "stdout": {
      "renderWith": "RENDER_SIMPLE",
      "sendTo": "STDOUT"
    },
    "seq": {
      "seqServer": "http://localhost:5341"
    }
  },
  "logging": [
    {
      "fromLoggerBase": "com.example",
      "levelRanges": [
        {
          "fromMinLevel": "INFO",
          "toSinks": ["stdout"]
        }
      ]
    }
  ]
}
```

## Locating configuration files

Klogging looks for configuration files as follows:

1. If the environment variable `KLOGGING_CONFIG_PATH` exists, load the file at that absolute path if
   it exists.
2. Search the classpath for the file `klogging.json` first, and `klogging.conf`.

If a configuration file is found it is read as JSON or HOCON.

## Configuration object names

### `sinks`

Equivalent to the [sinks](dsl#sink) DSL function. Object keyed by sink name with keys:

- `renderWith`: name of a [built-in renderer](built-ins#rendering). Current values are `RENDER_SIMPLE`,
  `RENDER_ISO8601`, `RENDER_ANSI`, `RENDER_CLEF` and `RENDER_GELF`.

- `sendTo`: name of a [built-in sender](built-ins#sending). Current values are `STDOUT` and
  `STDERR`.

- `seqServer`: URL of a [Seq server](https://datalust.co) where events are to be dispatched. By default,
  the RENDER_CLEF renderer is used.

- `splunkServer`: connection details for a [Splunk server](https://www.splunk.com):
  - `hecUrl`: URL of the Splunk server’s HEC endpoint (HTTPS by default).
  - `hecToken`: the HEC token used by Splunk for these logging events. It is a secret
    that should be passed in via an environment variable.
  - `index` is the Splunk index for the events set up by a Splunk administrator (default `main`).
  - `sourceType` is the Splunk `sourcetype` value (default `klogging`).
  - `checkCertificate` indicates whether Klogging should check the TLS certificate used by the
    Splunk server (string: default `true`).

An example of a Splunk sink called `splunk` is:

```json
{
  "splunk": {
    "splunkServer": {
      "hecUrl": "https://localhost:8088",
      "hecToken": "${SPLUNK_HEC_TOKEN}",
      "index": "main",
      "sourceType": "klogging",
      "checkCertificate": "false"
    }
  }
}
```

:::caution
You should have only one of `splunkServer`, `seqServer` or `sendTo` in a sink. If
you have more than one, `splunkServer` takes precedence over `seqServer`, which takes
precedence over `sendTo`.
:::

:::info
The `sinks` object is evolving and there will be more options in the future.
:::

### `logging`

Equivalent to the [logging](dsl#logging) DSL function. Array of objects, each with optional keys:

- `fromLoggerBase`: base name to match logger names.

- `exactLogger`: exact name of logger to match.

- `matchLogger`: a [Kotlin regular expression](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-regex/)
  pattern used to match logger names.

:::caution
You should specify only one of these in a `logging` object. If more are specified,
`matchLogger` takes precedence over `exactLogger`, which takes precedence over
`fromLoggerBase`.
:::

:::info
If you specify no key, all loggers will match. This configuration is the equivalent of the root logger in
Log4j or Logback.
:::

### `levelRanges`

Array of objects, each with keys:

- `fromMinLevel`: Name of the minimum level for log events to be emitted. For example, if the value is `INFO` then
  events at severity `INFO`, `ERROR` and `FATAL` will be emitted. Equivalent to the
  [fromMinLevel](dsl#fromminlevel-tomaxlevel-atlevel-and-inlevelrange) DSL function.

- `atLevel`: Name of the exact level at which log events will be emitted. Equivalent to
  the [atLevel](dsl#fromminlevel-and-atlevel) DSL function.

- `toSinks`: Array of sink names where events will be sent. If it does not match a key of the `sinks` object, a
  warning is written to the console and the configuration is ignored.

:::caution
You must specify at least one `levelRange` object with at least one matching sink name or no logs will be
emitted.
:::
