---
  sidebar_position: 20
---

# Configuration with JSON

Klogging can be configured from JSON files. This example is exactly equivalent to
the [first DSL example](dsl.md#a-simple-example):

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
          "toSinks": [
            "stdout"
          ]
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

:::caution
JSON file names must end with `.json` and HOCON files must end with `.conf`.
:::

## Configuration object names

### `sinks`

Equivalent to the [sinks](dsl.md#sink) DSL function. Object keyed by sink name with keys:

- `renderWith`: name of a [built-in renderer](built-ins.md#rendering). Current values
  are `RENDER_SIMPLE`, `RENDER_ISO8601`, `RENDER_ANSI`, `RENDER_CLEF` and `RENDER_GELF`.

- `sendTo`: name of a [built-in sender](built-ins.md#sending). Current values are `STDOUT` and
  `STDERR`.

- `seqServer`: URL of a [Seq server](https://datalust.co) where events are to be dispatched. By
  default, the RENDER_CLEF renderer is used.

- `apiKey`: a Seq API key. It is a secret that should be passed in via an environment variable, for
  example: `"apiKey": "${SEQ_API_KEY}"`

- `checkCertificate`: a boolean value (default `true`) that specifies if the TLS certificate used by
  a secure `seqServer` URL should be checked.

- `splunkServer`: connection details for a [Splunk HEC endpoint](https://www.splunk.com):
  - `hecUrl` specifies the URL of the Splunk server’s HEC endpoint. It uses HTTPS by default.
  - `hecToken` is the HEC token used by Splunk for these logging events. It is a secret
    that should be passed in via the execution environment.
  - `index` is the Splunk index for the events (optional). If set, it must be a value configured
    in Splunk. If not set, Splunk will use the default index configured for the HEC token.
  - `sourceType` is the Splunk `sourcetype` value (optional). If not set, Splunk will use
    `httpevent` or a value configured for the HEC token.
  - `source` is the Splunk `source` value, typically the name of an application (optional).
    If not set, Splunk will use a name configured with the HEC token.
  - `checkCertificate` indicates whether Klogging should check the TLS certificate used by the
    Splunk server (string: default `"true"`).

An example of a Splunk sink called `splunk` is:

```json
{
  "splunk": {
    "splunkServer": {
      "hecUrl": "https://localhost:8088",
      "hecToken": "${SPLUNK_HEC_TOKEN}",
      "source": "MyApplication",
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

You can create a
[custom renderer or sender](../concepts/rendering-and-sending.md#custom-rendering-and-sending)
and include its fully-qualified class name in a sink definition.

### `logging`

Equivalent to the [logging](dsl.md#logging) DSL function. Array of objects, each with optional keys:

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
If you specify no key, all loggers will match. This configuration is the equivalent of the root
logger in Log4j or Logback.
:::

### `levelRanges`

Array of objects, each with keys:

- `fromMinLevel`: Name of the minimum level for log events to be emitted. For example, if the value
  is `INFO` then events at severity `INFO`, `ERROR` and `FATAL` will be emitted. Equivalent to
  the [fromMinLevel](dsl.md#fromminlevel-tomaxlevel-atlevel-and-inlevelrange) DSL function.

- `toMaxLevel`: Name of the maximum level for log events to be emitted. For example, if the value
  is `INFO` then events at severity `TRACE`, `DEBUG` and `INFO` will be emitted. Equivalent to
  the [toMaxLevel](dsl.md#fromminlevel-tomaxlevel-atlevel-and-inlevelrange) DSL function.

- You can combine `fromMinLevel` and `toMaxLevel` values to set an inclusive range of levels.
  Equivalent to the [inLevelRange](dsl.md#fromminlevel-tomaxlevel-atlevel-and-inlevelrange) DSL function.

- `atLevel`: Name of the exact level at which log events will be emitted. Equivalent to
  the [atLevel](dsl.md#fromminlevel-tomaxlevel-atlevel-and-inlevelrange) DSL function.

- `toSinks`: Array of sink names where events will be sent. If it does not match a key of
  the `sinks` object, a  warning is written to the console and the configuration is ignored.

:::caution
You must specify at least one `levelRange` object with at least one matching sink name or no logs
will be emitted.
:::

### Other options

```json
{
  "kloggingMinLogLevel": "DEBUG",
  "minDirectLogLevel": "INFO",
  "baseContext": {
    "appName": "analysis-service",
    "buildNumber": "${BUILD_NUMBER}"
  }
}
```

#### `kloggingMinLogLevel`

Set the minimum level of the [Klogging internal logger](../internals/internal-logger.md).

#### `minDirectLogLevel`

Set the minimum level for [sending log events directly to sinks](../concepts/direct-logging.md).

#### `baseContext`

Specify [context items to add to every log event](../context/base-context.md).
