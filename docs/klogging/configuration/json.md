---
sidebar_position: 2
---

# Configuration with JSON

Klogging can be configured from JSON files. This example is exactly equivalent to the [first
DSL example](dsl#a-simple-example):

```json
{
  "sinks": {
    "stdout": {
      "renderWith": "RENDER_SIMPLE",
      "dispatchTo": "STDOUT"
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
