---
sidebar_position: 10
---

# Environment variables

Klogging’s behaviour can be modified by setting certain environment variables
in the runtime.

| Variable                               | Purpose                                                                                                                                                                                                    | Default
|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| :---:
| `KLOGGING_MIN_LOG_LEVEL`               | Minimum level at which Klogging’s [internal logger](internal-logger) emits log messages. Acceptable values are `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR` and `FATAL`.                                      | `INFO`
| `KLOGGING_MIN_DIRECT_LOG_LEVEL`        | Minimum level at which log events are [sent directly to sinks](../concepts/direct-logging) instead of via coroutine channels. Acceptable values are `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR` and `FATAL`. | `WARN`
| `KLOGGING_CONFIG_JSON_PATH`            | Absolute path to a [JSON configuration file](../configuration/json).                                                                                                                                       | (none)
| `ENV_KLOGGING_EVENT_CHANNEL_CAPACITY`  | Buffer capacity of the coroutine channel used for events.                                                                                                                                                  | 100
| `ENV_KLOGGING_SINK_CHANNEL_CAPACITY`   | Buffer capacity of the coroutine channel used for each sink.                                                                                                                                               | 100
| `ENV_KLOGGING_BATCH_MAX_TIME_MS`       | Maximum time in milliseconds between sending batches of events to sinks.                                                                                                                                   | 10
| `ENV_KLOGGING_BATCH_MAX_SIZE`          | Maximum batch size of events that are sent to sinks.                                                                                                                                                       | 100
| `ENV_KLOGGING_FF_EXECUTOR_THREAD_POOL` | (JVM) Feature flag: if present and `true` then Klogging uses a coroutine dispatcher with a separate, fixed-size thread pool. **This is an experimental feature.**                                          | 10
| `ENV_KLOGGING_COROUTINE_THREADS`       | (JVM) Number of threads to use in the pool for Klogging coroutines if `ENV_KLOGGING_FF_EXECUTOR_THREAD_POOL` evaluates `true`.                                                                             | (none)
