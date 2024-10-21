---
sidebar_position: 10
---

# Logging to Seq

[Seq](https://datalust.co/seq) is a self-hosted server for collecting and analysing logs and traces.
Klogging has built-in features to enable sending log events directly to Seq.

## Setup

This recipe assumes the following setup:

- A running seq server at `https://seq.example.com` that uses an internal or self-signed TLS
  certificate.
- A [Seq API key](https://docs.datalust.co/docs/api-keys) configured for your application’s log
  events.
- A runtime environment variable `SEQ_API_KEY` containing the API key. (These are secrets
  that must never be checked into source control.)

## DSL Configuration

Configuration using [Klogging DSL](../configuration/dsl.md) is simple. Here is a simple annotated
example:

```kotlin
loggingConfiguration {
    sink("seq",                                     // 1
        seq(                                        // 2
            url = "https://seq.example.com",
            apiKey = getenv("SEQ_API_KEY"),
            checkCertificate = false,               // 3
        )
    )
    logging {                                       // 4
        fromLoggerBase("com.example")
        fromMinLevel(Level.INFO) {
            toSink("seq")
        }
    }
}
```

Notes:

1. The sink name used later in the configuration.
2. `seq()` function returns a `SinkConfiguration` object that uses the specified Seq server and
   renders log events in [Compact Log Event Format](https://clef-json.org/), the most effective
   format for Seq.
3. `checkCertificate = false` prevents connection to HTTPS servers failing with internal or
   self-signed TLS certificates.
4. Specify which log events to send to which sinks.
   See [DSL logging function](../configuration/dsl.md#logging) for more information.

## JSON configuration

This JSON configuration is the equivalent of the DSL configuration shown above:

```json
{
  "sinks": {
    "seq": {
      "seqServer": "https://seq.example.com",
      "apiKey": "${SEQ_API_KEY}",
      "checkCertificate": "false"
    }
  },
  "logging": [
    {
      "fromLoggerBase": "com.example",
      "levelRanges": [
        {
          "fromMinLevel": "INFO",
          "toSinks": [
            "seq"
          ]
        }
      ]
    }
  ]
}
```

The JSON file must be on the runtime classpath or an absolute file location specified in the
built-in environment variable `KLOGGING_CONFIG_PATH` and use the file extension `.json`.

## HOCON configuration

This HOCON configuration is the equivalent of the above configurations:

```
{
  sinks = {
    seq = {
      seqServer = "https://seq.example.com",
      apiKey = "${SEQ_API_KEY}",
      checkCertificate = false
    }
  },
  logging = [
    {
      fromLoggerBase = "com.example",
      levelRanges = [
        {
          fromMinLevel = INFO,
          toSinks = [
            "seq"
          ]
        }
      ]
    }
  ]
}
```
