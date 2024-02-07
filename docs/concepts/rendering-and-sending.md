---
sidebar_position: 50
---

# Rendering and sending

Log events are _rendered_ before being _sent_ to [sinks](sinks).

## Rendering

The type `RenderString` is implemented to render events into string
representations of them:

```kotlin
public interface RenderString {
    public operator fun invoke(event: LogEvent): String
}
```

## Sending

The type `SendString` is implemented to send rendered events to a sink somewhere:

```kotlin
public interface SendString {
    public operator fun invoke(eventString: String)
}
```

## Rendering and sending

The type `EventSender` is implemented to render a batch of events and send them to a sink:

```kotlin
public interface EventSender {
    public operator fun invoke(batch: List<LogEvent>)
}
```

An `EventSender` can be created from a `RenderString` and a `SendString`:

```kotlin
public fun senderFrom(renderer: RenderString, sender: SendString): EventSender = object : EventSender {
    override fun invoke(batch: List<LogEvent>) {
        sender(batch.joinToString("\n") { renderer(it) })
    }
}
```
