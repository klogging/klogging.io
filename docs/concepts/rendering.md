---
sidebar_position: 50
---

# Rendering

Log events are _rendered_ before being [sent](sending) to [sinks](sinks).

The functional type `RenderString` is implemented to render events into string
representations of them:

```kotlin
public typealias RenderString = (LogEvent) -> String
```
