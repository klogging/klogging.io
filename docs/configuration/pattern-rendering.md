---
  sidebar_position: 50
---

# Pattern rendering

You can configure rendering using a pattern, like pattern layouts for
[Log4j](https://logging.apache.org/log4j/2.x/manual/pattern-layout.html) and
[Logback](https://logback.qos.ch/manual/layouts.html#ClassicPatternLayout).
Pattern rendering is best suited to console output.

You can specify a pattern using the [configuration DSL](dsl.md), for example:

```kotlin
  sink(
      "console",
      RenderPattern("%t{LOCAL_TIME} %-5v{COLOUR} [%-10c] - %30l - %m - %i%s"),
      STDOUT
  )
  // etc.
```

Here is a [JSON configuration](json.md) partial example:

```json
{
  "sinks": {
    "console": {
      "renderPattern": "%t{LOCAL_TIME} %-5v{COLOUR} [%-10c] - %30l - %m - %i%s",
      "sendTo": "STDOUT"
    }
  }
  // etc.
}
```

## Pattern language

Patterns contain:

- Fixed text that is included in every output.
- Tokens representing log event fields with optional size specification. Some tokens can be followed by a format
  specifier. Examples are `%t`, `%-10l` and `%-5v{COLOUR}`.

### Tokens

The pattern language includes the following fields, each specified using `%` and a single letter:

| Token | [Field](../concepts/log-events.md) | Notes                                                                                                             |
|:-----:|------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `%t`  | Timestamp                          | Default format is ISO8601, e.g. `2024-11-25T05:52:15.286632Z`.                                                    |
| `%h`  | Host                               |                                                                                                                   |
| `%l`  | Logger name                        |                                                                                                                   |
| `%c`  | Context                            |                                                                                                                   |
| `%v`  | Logging level                      |                                                                                                                   |
| `%m`  | Log message                        | If the message is a [template](../logging/sending-logs.md#message-template), it is evaluated before being output. |
| `%s`  | Stack trace                        | Only output if present, preceded by a newline.                                                                    |
| `%i`  | Items                              |                                                                                                                   |
| `%n`  | Newline                            | Output a single newline character.                                                                                |

### Size specification

A size specification is put between `%` and the token letter. It is used to fit the field value into a fixed width,
either left-or right aligned.

**Zero**

- Show the field value full width, the same as omitting the size specification.

**Positive**

- If the field value is longer than the size, maybe shorten it (see below) and show the left-most characters.
- If the value is shorter, left-align it in the width specified by the size.
- For stack traces, sets the maximum number of lines to show.

**Negative**

- If the field value is longer than the size, maybe shorten it (see below) and show the left-most characters.
- If the value is shorter, right-align it in the width specified by the size.

Notes:

- A size specification for the `%n` newline token is ignored.
- Host, logger name and context values are shortened if they are longer than the specified size.

Some example output from the pattern `"%t{LOCAL_TIME} %-5v [%-20c] - %20l - %m - %i%2s"` is:

```text
16:55:45.014298  INFO [  D-worker-1+Playpen] - i.k.e.KloggerPlaypen - Event 3 at 2024-11-25T16:55:45.014279 - {run=ad085c84-35b2-4700-a57d-14a382d009a9, Counter=3, Iteration=3}
16:55:45.040453 ERROR [  D-worker-3+Playpen] - i.k.e.KloggerPlaypen - Message: Oops! Something went wrong - {run=ad085c84-35b2-4700-a57d-14a382d009a9, Message=Oops! Something went wrong}
java.lang.RuntimeException: Oops! Something went wrong
	at io.klogging.PlaypenKt.functionWithException(Playpen.kt:159)
```

### Format specification

The `%t` and `%v` tokens can take a format specifier.

| Format                          | Effect                                                                                                      |
|---------------------------------|-------------------------------------------------------------------------------------------------------------|
| `%t{LOCAL_TIME}`                | Output only the time component of the event timestamp in the local timezone, instead of ISO8601 timestamp.  |
| `%v{COLOUR}` or<br/>`%v{COLOR}` | Output log levels with a different colour for each level, as for [`RENDER_ANSI`](built-ins.md#render_ansi). |

Level colours are (approximately):

- <span className="render-grey">TRACE</span>
- DEBUG
- <span className="render-green">INFO</span>
- <span className="render-yellow">WARN</span>
- <span className="render-red">ERROR</span>
- <span className="render-bright-red">FATAL</span>

You can combine size and format specifications.
