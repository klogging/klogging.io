---
sidebar_position: 30
---

# From other sources

Klogging can include context items from other sources without coroutine context information.

Klogging has a functional type alias `ItemExtractor`:

```kotlin
public typealias ItemExtractor = () -> EventItems
```

You can register an `ItemExtractor` to be called as each log event is assembled before it is
emitted using `Context.addItemExtractor` function.

Klogging’s [SLF4J provider](../java/slf4j) uses an `ItemExtractor` to include any MDC entries into
log event context items:

```kotlin
    Context.addItemExtractor {
        MDC.getCopyOfContextMap() ?: mapOf()
    }
```

Current MDC entries are included in all log events, whether sent from SLF4J loggers or direct from
Klogger or NoCoLogger instances.
