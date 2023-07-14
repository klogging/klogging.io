# Configuration

Klogging starts with no configuration and will not send any log events. You configure Klogging using
either:

- in code using the [Configuration domain-specific language](dsl.md)
- using from a [JSON](json.md) or [HOCON](hocon.md) configuration file.

## How Klogging finds configuration files

Klogging follows these steps for finding configuration files:

1. If the [environment variable](../internals/environment-variables.md) `KLOGGING_CONFIG_PATH` is
   set, look for a file at that absolute path. Load the contents if found.
2. If the environment variable is not set or the specified file is not found, search the classpath:
   for `klogging.json` and load the contents if found; otherwise for `klogging.conf` and load the
   contents if found.

Once a file has been found, attempt to interpret it as JSON
or [HOCON](https://github.com/lightbend/config/blob/main/HOCON.md).
