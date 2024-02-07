---
sidebar_position: 30
---

# Configuration with HOCON

Klogging can be configured from [HOCON](https://github.com/lightbend/config/blob/main/HOCON.md)
files. This example is exactly equivalent to the [first DSL example](dsl#a-simple-example):

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

## Configuration object names

Names are [exactly the same as for JSON](json#configuration-object-names).
