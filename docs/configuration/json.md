---
sidebar_position: 2
---

# Configuration with JSON

Klogging can be configured from JSON files. This example is exactly equivalent to
the [first DSL example](dsl#a-simple-example):

```json
{
  "sinks": {
    "stdout": {
      "renderWith": "RENDER_SIMPLE",
      "dispatchTo": "STDOUT"
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

## Configuration object names

### `sinks`

Equivalent to the [sinks](dsl#sink) DSL function. Object keyed by sink name with keys:

* `renderWith`: name of a built-in [renderer](../concepts/rendering). Current values are `RENDER_SIMPLE`,
  `RENDER_CLEF` and `RENDER_GELF`.

* `dispatchTo`: name of a built-in [dispatcher](../concepts/dispatching). Current values are `STDOUT` and
  `STDERR`.

* `seqServer`: URL of a [Seq server](https://datalust.co) where events are to be dispatched. By default,
  the RENDER_CLEF renderer is used.

:::caution
`seqServer` takes precedence over `dispatchTo` if both are present.
:::

:::info
The `sinks` object is evolving and there will be more options in the future.
:::

### `logging`

Equivalent to the [logging](dsl#logging) DSL function. Array of objects, each with keys:

* `fromLoggerBase` (optional): base name to match logger names.

* `exactLogger` (optional): exact name of logger to match.

:::caution
`exactLogger` takes precedence if both are specified in a `logging` object.
:::

:::info
If you specify neither key, all loggers will match. This configuration is the equivalent of the root logger in
Log4j or Logback.
:::

### `levelRanges`

Array of objects, each with keys:

* `fromMinLevel`: Name of the minimum level for log events to be emitted. For example, if the value is `INFO` then
  events at severity `INFO`, `ERROR` and
  `FATAL` will be emitted. Equivalent to the [fromMinLevel](dsl#fromminlevel-and-atlevel) DSL function.

* `atLevel`: Name of the exact level at which log events will be emitted. Equivalent to
  the [atLevel](dsl#fromminlevel-and-atlevel) DSL function.

* `toSinks`: Array of sink names where events will be dispatched. If it does not match a key of the `sinks` object, a
  warning is written to the console and the configuration is ignored.

:::caution 
You must specify at least one `levelRange` object with at least one matching sink name or no logs will be
emitted.
:::
