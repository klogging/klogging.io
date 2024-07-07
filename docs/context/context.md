# Context

Much of the power of Klogging is in the way you can include context information in log events.

## Context items

Context information is included as a map of **context items** with string keys.

Sources of context items are:

- [Base context items included in all log events](base-context)
- [Items put into coroutine contexts](coroutine-context-items)
- [Context items extracted from other coroutine contexts](other-coroutine-context)
- [Context items extracted from non-coroutine contexts](other-context)
- [Fields in log message templates](message-templates)
- [Immediate context items sent with log events](immediate-context-items)
