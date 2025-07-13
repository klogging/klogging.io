---
sidebar_position: 10
---

# Klogging and Ktor

Klogging can be used in Ktor applications easily.

Many Ktor JVM modules specify SLF4J as a dependency.
The [Ktor Project Generator](https://start.ktor.io/) specifies Logback as a dependency and
generates a `src/main/resources/logback.xml` configuration file.

## Configuration

The simplest way to configure Klogging is to replace the SLF4J Logback dependency with that for
Klogging:

```kotlin
dependencies {
    // Ktor engine and plugin dependencies
    // implementation("ch.qos.logback:logback-classic:$logback_version")
    implementation("io.klogging:slf4j-klogging:0.11.2")

    // Other dependencies
}
```

Some Ktor modules include Logback transitively, so if you see warnings like this:

```text
SLF4J(W): Class path contains multiple SLF4J providers.
SLF4J(W): Found provider [io.klogging.slf4j.KloggingServiceProvider@4d50efb8]
SLF4J(W): Found provider [ch.qos.logback.classic.spi.LogbackServiceProvider@7e2d773b]
SLF4J(W): See https://www.slf4j.org/codes.html#multiple_bindings for an explanation.
SLF4J(I): Actual provider is of type [io.klogging.slf4j.KloggingServiceProvider@4d50efb8]
```

Add this to your `build.gradle.kts` to actively exclude all Logback dependencies:

```kotlin
configurations.all {
    exclude("ch.qos.logback")
}
```

Add `src/main/resources/klogging.json` configured as described
in [Configuration with JSON](../configuration/json.md), for example:

```json
{
  "sinks": {
    "stdout": {
      "renderWith": "RENDER_ANSI",
      "sendTo": "STDOUT"
    }
  },
  "logging": [
    {
      "levelRanges": [
        {
          "fromMinLevel": "INFO",
          "stopOnMatch": true,
          "toSinks": [
            "stdout"
          ]
        }
      ]
    }
  ]
}
```
