---
sidebar_position: 30
---

# Configuration with HOCON

Klogging can be configured from [HOCON](https://github.com/lightbend/config/blob/main/HOCON.md)
files. This example is exactly equivalent to the [first DSL example](dsl.md#a-simple-example):

```hocon
{
  sinks = {
    stdout = {
      renderWith = RENDER_SIMPLE
      sendTo = STDOUT
    },
    seq = {
      seqServer = "http://localhost:5341"
    }
  },
  logging = [
    {
      fromLoggerBase = com.example
      levelRanges = [
        {
          fromMinLevel = INFO
          toSinks = [stdout]
        }
      ]
    }
  ]
}
```

:::caution
Klogging uses the KotlinX serialization library for HOCON, which has limited capability.
In future it will support more HOCON features.
:::

## Configuration object names

Names are [exactly the same as for JSON](json.md#configuration-object-names).
