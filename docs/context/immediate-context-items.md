---
sidebar_position: 30
---

# Immediate context items

You can add explicit context items when logging as part of the calls to loggers.

For example, given this call with context items immediately:

```kotlin
logger.info("Retrieved values from services", mapOf(
    "serviceOneCount" to serviceOneResult.count,
    "serviceTwoCount" to serviceTwoResult.count,
)
```

The resulting event may look like something like this:

```json
{
  "@t": "2024-02-05T07:45:47.837117Z",
  "@l": "INFO",
  "@m": "Retrieved values from services",
  "host": "589ef8fa",
  "logger": "com.example.ServiceCombiner",
  "context": "main",
  "serviceOneCount": 9,
  "serviceTwoCount": 17
}
```
