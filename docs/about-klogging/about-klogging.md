# About Klogging

Klogging is a pure-Kotlin logging library that aims to be flexible and easy to use. It uses Kotlin
idioms for creating loggers and sending log events. It takes advantage
of [coroutines](https://kotlinlang.org/docs/coroutines-guide.html) in
environments that use them, for example the [Ktor asynchronous service framework](https://ktor.io/).

:::info
Klogging currently only supports Kotlin on the JVM. In future it will support other Kotlin
Multiplatform targets.
:::

## Goals

The goals of Klogging are to:

- Provide a familiar logging experience for Java and C# developers.
- Create structured log events by default.
- Use [message templates](../context/message-templates.md) for simple logging of both text and data.
- Use Kotlin coroutines for carrying [scope context information](../coroutines/context.md) to include
  in log events and for [asynchronous dispatching](../coroutines/async.md) of events.
- Finest possible resolution of timestamps, down to nanosecond if available.
