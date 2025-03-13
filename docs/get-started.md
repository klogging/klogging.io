---
sidebar_position: 10
---

# Get started

Get started with Klogging quickly here.

## Add Klogging to your application

Gradle: in `build.gradle.kts`:

```kotlin
dependencies {
    implementation("io.klogging:klogging-jvm:0.9.4")
}
```

Maven: in `pom.xml`:

```xml
<dependencies>
  <dependency>
    <groupId>io.klogging</groupId>
    <artifactId>klogging-jvm</artifactId>
    <version>0.9.4</version>
  </dependency>
</dependencies>
```

:::info
See [Using snapshot builds](#using-snapshot-builds) below for using current, unreleased builds
of Klogger.
:::

## Configure Klogging

To see logs in your console quickly, using the [configuration DSL](configuration/dsl.md):

```kotlin
loggingConfiguration { DEFAULT_CONSOLE() }
```

Or place the file `klogging.json` in a directory on your application’s classpath to use
[JSON configuration](configuration/json.md):

```json
{
  "configName": "DEFAULT_CONSOLE"
}
```

## Create a logger

To quickly create a `Klogger` instance to log from `suspend` functions, implement the `Klogging`
interface that defines a `logger` property:

```kotlin
package com.example

class ThingDoer : Klogging {
}
```

## Emit log events

In your class, emit logs using the `logger` property, in a similar way to many logging frameworks:

```kotlin
    suspend fun doThing() {
        logger.info("Doing the thing")
        // Actually do the thing
    }
```

You will see a log message on your console like this:

```
2021-08-10 22:29:30.300509 INFO [main] com.example.ThingDoer : Doing the thing
```

## I didn’t see any logs!

If you try out Klogging in a simple command-line program you might not see all the log messages you
expect to see. This example will not show the log message on the console:

```kotlin
suspend fun main() = coroutineScope {
    loggingConfiguration { DEFAULT_CONSOLE() }
    val logger = logger("main")
    logger.info("Hello, world!")
}
```

Klogging works asynchronously and the program completes before log events can be
sent. In this case you can add a coroutine delay or thread sleep before the program completes,
for example:

```kotlin
suspend fun main() = coroutineScope {
    loggingConfiguration { DEFAULT_CONSOLE() }
    val logger = logger("main")
    logger.info("Hello, world!")
    delay(50)
}
```

Or you can specify that log events with severity above a certain level are sent directly instead of
via coroutine channels:

```kotlin
suspend fun main() = coroutineScope {
    loggingConfiguration {
        DEFAULT_CONSOLE()
        minDirectLogLevel(Level.INFO)
    }
    val logger = logger("main")
    logger.info("Hello, world!")
}
```

See [Direct logging](concepts/direct-logging.md) for more information.

:::info
Klogging is designed primarily for long-running services and applications.

I don’t know a reliable way to trap application shutdown and ensure all logs are sent before
shutdown proceeds. [Let me know if you do](mailto:info@klogging.io).
:::

## Using snapshot builds

If you want to use the latest snapshot builds, specify these in your `build.gradle.kts`:

```kotlin
repositories {
    // ...
    maven {
        url = uri("https://s01.oss.sonatype.org/content/repositories/snapshots/")
    }
}

dependencies {
    // ...
    implementation("io.klogging:klogging-jvm:0.9.4-SNAPSHOT")
}
```
