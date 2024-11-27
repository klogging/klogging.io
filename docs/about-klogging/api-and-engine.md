---
sidebar_position: 10
---

# Logging API and engine

Klogging provides both a logging API to call from your code and a back-end to process log events and
send them to one or more destinations. In that way it is like
[Log4j](https://logging.apache.org/log4j/2.x/) in Java.

## Using other logging frameworks

Klogging can cooperate with other logging frameworks, as the logging engine for:

- [Simple Logging Facade for Java (SLF4J)](https://slf4j.org). See [Using Klogging with SLF4J](../java/slf4j.md) for how
  to do that.
- [Java Platform Logging API](https://openjdk.org/jeps/264). See
  [JDK Platform Logging](../java/jdk-platform-logging.md) for how to do that.
