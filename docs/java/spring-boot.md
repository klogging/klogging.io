---
sidebar_position: 30
---

# Klogging with Spring Boot

You can use Klogging as the logging framework of a Spring Boot application.

## Gradle setup

Use a Gradle configuration like this:

```kotlin
dependencies {
    implementation("org.springframework.boot:spring-boot-starter-webflux") {
        exclude(group = "ch.qos.logback")
    }
    implementation("io.klogging:klogging-jvm:0.3.0")
    implementation("io.klogging:slf4j-klogging:0.1.0")
    // Other runtime dependencies.

    testImplementation("org.springframework.boot:spring-boot-starter-test") {
        exclude(group = "ch.qos.logback")
    }
    // Other test dependencies.
}
```

Spring uses [SLF4J](https://www.slf4j.org/) for sending logs and bundles [Logback](http://logback.qos.ch/)
as the default binding. The `exclude` functions shown here are needed to exclude Logback
from Spring.

## Maven setup

Something like this (untested):

```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
    <exclusions>
      <exclusion>
        <groupId>ch.qos.logback</groupId>
      </exclusion>
    </exclusions>
  </dependency>
  <dependency>
    <groupId>io.klogging</groupId>
    <artifactId>klogging-jvm</artifactId>
    <version>0.3.0</version>
  </dependency>
  <dependency>
    <groupId>io.klogging</groupId>
    <artifactId>slf4j-klogging</artifactId>
    <version>0.1.0</version>
  </dependency>
  <!-- Other runtime dependencies -->

  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <exclusions>
      <exclusion>
        <groupId>ch.qos.logback</groupId>
      </exclusion>
    </exclusions>
  </dependency>
  <!-- Other test dependencies -->
</dependencies>
```

## Configure Klogging

Put a `logging.json` file in the `src/main/resources` directory of the project.

Here is a simple one for logging to the console.

```json
{
  "sinks": {
    "stdout": {
      "renderWith": "RENDER_SIMPLE",
      "dispatchTo": "STDOUT"
    }
  },
  "logging": [
    {
      "levelRanges": [
        {
          "fromMinLevel": "INFO",
          "toSinks": [
            "stdout"
          ]
        }
      ]
    }
  ]
}
```

