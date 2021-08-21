---
sidebar_position: 20
---

# Using SLF4J

The [Simple Logging Façade for Java (SLF4J)](http://www.slf4j.org/) library is a widely-used
library for Java logging. It has two parts: a standard API that Java programs call; and a binding
that maps API calls to a logging framework (e.g. Logback, Log4j).

Many Java programs and frameworks, including [Spring](https://spring.io/), log using the
SLF4J API.

Klogging has an [SLF4J binding](https://github.com/klogging/slf4j-klogging)
that allows existing programs using SLF4J to switch the framework to Klogging.

## Setting up

Include these dependencies in your Gradle build file:

```kotlin
    implementation("io.klogging:klogging-jvm:0.3.0")
    implementation("io.klogging:slf4j-klogging:0.1.0")
    implementation("org.slf4j:slf4j-api:1.7.32")
```

In Maven:

```xml
<dependencies>
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
  <dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.32</version>
  </dependency>
</dependencies>
```

## Including values in messages

There are two options for including values in messages: SLF4J formatting with placeholders or
Klogging message templates.

:::caution
Klogging does not currently support messages containing both SLF4J placeholders and message
template holes.
:::

### SLF4J formatting with placeholders

All existing logging statements with SLF4J formatting will continue to work with Klogging,
for example:

```java
    logger.info("Captured value {}", captured);
```

In this example, the log event contains the message with `{}` replaced by the value of
`captured` and contains no items.

### Message templates

With the Klogging binding, you can use [message templates](../concepts/message-templates)
in SLF4J logging method calls and Klogging will emit structured log events. For example:

```java
    logger.info("User {userId} logged in", userId);
```

:::note
IntelliJ IDEA will highlight message templates in SLF4J logging method calls because
they are not the positional `{}` placeholders used by SLF4J.

![IntelliJ highlight message for message template](../../static/img/slf4j-intellij-message.png)
:::

### MDC

Klogging will include any information from the Mapped Diagnostic Context (MDC)
in its log events. For example:

```java
    try (MDC.MDCCloseable closeable = MDC.putCloseable("runId", UUID.randomUUID().toString())) {
        logger.info("Started processing");
        processStuff();
        logger.info("Finished processing");
    }
```

All structured log events emitted in that block include the key `runId`
with the value for that run.
