---
sidebar_position: 1
---

# Get started

Get started with Klogging quickly here.

## Add Klogging to your application

Gradle: in `build.gradle.kts`:

```kotlin
dependencies {
    implementation("io.klogging:klogging-jvm:0.3.0")
}
```

Maven: in `pom.xml`:

```xml
<dependencies>
    <dependency>
        <groupId>io.klogging</groupId>
        <artifactId>klogging-jvm</artifactId>
        <version>0.3.0</version>
    </dependency>
</dependencies>
```

## Configure Klogging

To see logs in your console quickly, using the [configuration DSL](configuration/dsl):

```kotlin
loggingConfiguration { DEFAULT_CONSOLE() }
```

Or place the file `klogging.json` in a directory on your application’s classpath:

```json
{
  "configName": "DEFAULT_CONSOLE"
}
```

## Create a logger

To quickly create a `klogger` to log from `suspend` functions, implement the `Klogging` interface
that defines a `logger` property:

```kotlin
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

