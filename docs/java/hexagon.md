---
sidebar_position: 40
---

# Hexagon microservices toolkit

Klogging has a logging adapter for the [Hexagon microservices toolkit](https://hexagonkt.com/).

## Specify dependency

Specify the adapter dependency in Gradle, for example:

```kotlin
dependencies {
    implementation("com.hexagonkt:http_server_jetty:3.0.1")
    implementation("io.klogging:hexagonkt-klogging-adapter:0.5.6")

    // etc.
}
```

Or in Maven, for example:

```xml

<dependencies>
  <dependency>
    <groupId>com.hexagonkt</groupId>
    <artifactId>http_server_jetty</artifactId>
    <version>3.0.1</version>
  </dependency>
  <dependency>
    <groupId>io.klogging</groupId>
    <artifactId>hexagonkt-klogging-adapter</artifactId>
    <version>0.5.6</version>
  </dependency>
  <!-- etc. -->
</dependencies>
```

## Install the adapter

At the beginning of the main function, set the adapter to use, for example:

```kotlin
fun main() {
    LoggingManager.adapter = KloggingManager()
    server.start()
}
```

## Configure Klogging

[Configure Klogging](../configuration) either using the configuration DSL or a
configuration file in the application classpath. Here is a simple `klogging.json` example:

```json
{
  "sinks": {
    "console": {
      "renderWith": "RENDER_ANSI",
      "sendTo": "STDOUT"
    }
  },
  "logging": [
    {
      "levelRanges": [
        {
          "fromMinLevel": "INFO",
          "toSinks": [
            "console"
          ]
        }
      ]
    }
  ]
}
```
