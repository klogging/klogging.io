---
sidebar_position: 30
---

# Klogging with Spring Boot

You can use Klogging as the logging framework of a Spring Boot application.
The [Klogging spring boot starter](https://github.com/klogging/klogging-spring-boot-starter)
makes it simple.

## Gradle setup

Use a Gradle configuration like this:

```kotlin
dependencies {
    // Exclude Logback from any Spring starters that include it.
    implementation("org.springframework.boot:spring-boot-starter-actuator") {
        exclude(group = "ch.qos.logback")
    }
    implementation("org.springframework.boot:spring-boot-starter-webflux") {
        exclude(group = "ch.qos.logback")
    }
    implementation("io.klogging:klogging-spring-boot-starter:0.2.2")
    // Other runtime dependencies.

    testImplementation("org.springframework.boot:spring-boot-starter-test") {
        exclude(group = "ch.qos.logback")
    }
    // Other test dependencies.
}
```

Spring uses [SLF4J](https://www.slf4j.org/) for sending logs and bundles [Logback](http://logback.qos.ch/)
as the default binding. The `exclude` functions shown here are needed to exclude Logback from Spring.

:::note
If your Spring Boot app fails to start with messages like:
```
> Task :bootRun FAILED
SLF4J: Class path contains multiple SLF4J bindings.
```
and
```
Exception in thread "main" java.lang.IllegalArgumentException: LoggerFactory is not a Logback LoggerContext but Logback is on the classpath.
```
you have Spring components that explicitly include Logback, where you need to exclude it, as shown above.
:::

## Maven setup

Something like this (not tested):

```xml

<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
    <exclusions>
      <exclusion>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-logging</artifactId>
      </exclusion>
    </exclusions>
  </dependency>
  <dependency>
    <groupId>io.klogging</groupId>
    <artifactId>klogging-spring-boot-starter</artifactId>
    <version>0.2.2</version>
    <type>pom</type>
  </dependency>
  <!-- Other runtime dependencies -->

  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <exclusions>
      <exclusion>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-logging</artifactId>
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
      "renderWith": "RENDER_ANSI",
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

