---
sidebar_position: 3
---

# Logging severity levels

## Klogging levels

Klogging has 6 levels of logging severity with these names and general meanings:

| Name  | Meaning                                                                     |
| ----- | --------------------------------------------------------------------------- |
| TRACE | Fine detailed information about what is happening.                          |
| DEBUG | Detailed information about what is happening.                               |
| INFO  | General information about what is happening.                                |
| WARN  | A warning that something unexpected or undesirable has happened.            |
| ERROR | An error condition has occurred that requires attention.                    |
| FATAL | A serious error condition has occurred that has caused the program to stop. |

These levels are specified by the
[`Level`](https://github.com/klogging/klogging/blob/main/src/commonMain/kotlin/io/klogging/Level.kt)
enum.

## Logger functions and levels

Levels are specified when logging, either in the `Klogger#log` function, for example:

```kotlin
    logger.log(Level.INFO, "User {user} logged in", user)
```

or using convenience functions, like this:

- `logger.trace("User {user} logged in", user)`
- `logger.debug("User {user} logged in", user)`
- `logger.info("User {user} logged in", user)`
- `logger.warn("User {user} logged in", user)`
- `logger.error("User {user} logged in", user)`
- `logger.fatal("User {user} logged in", user)`
