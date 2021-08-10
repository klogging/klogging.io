---
sidebar_position: 1
---

# Environment variables

Klogging’s behaviour can be modified by setting certain environment variables
in the runtime.

Variable    | Purpose
------------|---------
`KLOGGING_MIN_LOG_LEVEL` | Minimum level at which Klogging’s [internal logger](logger) emits log messages. Acceptable values are `TRACE`, `DEBUG`, `INFO`, `WARN`, `ERROR` and `FATAL`. 
`KLOGGING_CONFIG_JSON_PATH` | Absolute path to a [JSON configuration file](../configuration/json).
