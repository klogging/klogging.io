---
sidebar_position: 5
---

# JDK Platform Logging

From Java version 9, built-in logging execution classes are separate from those used to create and
send logs. JDK Platform Logging (JPL) specifies
[`java.lang.System.Logger`](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.Logger.html)
and
[`java.lang.System.LoggerFinder`](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.LoggerFinder.html)
in the
[`java.lang.System`](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html)
class in the `java.base` module.

The default implementations are in
[`java.util.logging`](https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/package-summary.html)
(JUL) package in the `java.logging` module.

## JPL and Klogging

Klogging provides an alternative to JUL for JPL implementation. In your JVM project, include
the `jdk-platform-klogging` package.

Gradle:

```kotlin
dependencies {
    implementation("io.klogging:jdk-platform-klogging:0.11.6")
}
```

Maven:

```xml
<dependencies>
  <dependency>
    <groupId>io.klogging</groupId>
    <artifactId>jdk-platform-klogging</artifactId>
    <version>0.11.6</version>
  </dependency>
</dependencies>
```
