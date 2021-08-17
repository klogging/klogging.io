---
sidebar_position: 20
---

# Log levels and checking

## Background

- Each logger has a minimum logging level per sink, set by configuration.
- The minimum value of the per-sink levels is the minimum level for the logger, which can be checked at any time.

## Rules

- If a log request’s level is less than the minimum for the logger that created it, no log event should be created and
  emitted.
- When a log event is emitted, it will be dispatched to at least one sink.

## Code

Applicable to both `Klogger` and `NoCoLogger`.

- `trace()`, `debug()` etc. functions are shims for `log()` with a specified value of `Level`.
- `isTraceEnabled()`, `isDebugEnabled()` etc. functions are shims for `isLevelEnabled()` with a specified value
  of `Level`.
- `log()` function with value arguments: only emits an event if `isLevelEnabled()` for the requested level is `true`.
- `log()` function with lambda argument: only calls the lambda and emits an event if `isLevelEnabled()` for the
  requested level is `true`.