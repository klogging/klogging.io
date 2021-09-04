---
sidebar_position: 60
---

# Sending

Log events are _sent_ by Klogging to one or more [sinks](sinks).

Klogging has the function type `SendString` defined as:

```kotlin
public typealias SendString = (String) -> Unit
```
