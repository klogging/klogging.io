---
sidebar_position: 10
---

# Klogging and Ktor

Klogging can be used in Ktor applications easily.

Many Ktor JVM modules specify SLF4J as a dependency.
The [Ktor Project Generator](https://start.ktor.io/) specifies Logback as a dependency and
generates a `src/main/resources/logback.xml` configuration file.

## Configuration

The simplest way to configure Klogging is to replace the Logback dependency with that for Klogging:

```kotlin
dependencies {
    // Ktor engine and plugin dependencies
    // implementation("ch.qos.logback:logback-classic:$logback_version")
    implementation("io.klogging:slf4j-klogging:0.7.3")

    // Other dependencies
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
