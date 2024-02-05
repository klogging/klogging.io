# Context

Much of the power of Klogging is in the way you can include context information in log events.

## Context items

Context information is included as a map of **context items** with string keys.

Sources of context items are:

- [Base context items included in all log events](context/base-context)
- [Fields in log message templates](logging/sending-logs#message-template)
- [Immediate context items sent with log events](context/immediate-context-items)
- [Items set into Klogging coroutine contexts](coroutines/context)
- [Context items extracted from other coroutine contexts](context/other-coroutine-context)
- [Context items extracted from non-coroutine contexts](context/other-context)
