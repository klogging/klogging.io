---
sidebar_position: 5
---

# Dispatching

Log events are _dispatched_ by Klogging to one or more [sinks](sinks).

Klogging has the functional type `DispatchString` defined as:

```kotlin
public typealias DispatchString = (String) -> Unit
```
