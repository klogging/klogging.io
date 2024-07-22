# Configuration

Klogging starts with no configuration and will not send any log events. You configure Klogging using
either:

- in code using the [Configuration domain-specific language](dsl.md)
- using from a [JSON](json.md) or [HOCON](hocon.md) configuration file.

You can also override some configuration by setting [Environment
variables](../internals/environment-variables.md).

## How Klogging loads configuration

Klogging first searches for file-based configuration, when it is first needed. The patterns are:

| Source       | Configuration                                                                                                                                                      |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| File only    | Read from file when the first logger is declared.                                                                                                                  |
| DSL only     | Set when the DSL code is executed.                                                                                                                                 |
| File and DSL | Read from file immediately before the DSL code is read. DSL configuration replaces file configuration unless it begins with `loggingConfiguration(append = true)`. |

## How Klogging finds configuration files

Klogging follows these steps for finding configuration files:

1. If the [environment variable](../internals/environment-variables.md) `KLOGGING_CONFIG_PATH` is
   set, look for a file at that absolute path. Load the contents if found.
2. If the environment variable is not set or the specified file is not found, search the classpath:
   for `klogging.json` and load the contents if found; otherwise for `klogging.conf` and load the
   contents if found.

Once a JSON or HOCON file has been found, it is read.
