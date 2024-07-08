---
sidebar_position: 20
---

# Items put into coroutine context

You can put items into a coroutine context to be included in all log events within the scope of that
context. Those items are automatically copied into any child coroutine scopes.

Klogging includes the
[`LogContext`](https://dokka.klogging.io/-klogging/io.klogging.context/-log-context/index.html)
class to hold a map of contextual information in a coroutine context.

[Contextual event items](../coroutines/context) describes the functions used to manage items in the
current coroutine context.
