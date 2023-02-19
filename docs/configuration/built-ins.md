---
sidebar_position: 40
---

# Built-in configurations

Klogging provides a number of built-in configurations.

## Rendering

### RENDER_SIMPLE

A `RenderString` instance that renders log events as string messages suitable for a
console. Examples are:

```
2021-09-04 17:10:08.118921 INFO [DefaultDispatcher-worker-6] io.klogging.example.KloggerPlaypen : >> 1 : {run=4f1f9871-bbe9-4dcd-a778-c770d117010c, Counter=1}
2021-09-04 17:10:08.162969 INFO [DefaultDispatcher-worker-2] io.klogging.example.KloggerPlaypen : << 1 : {run=4f1f9871-bbe9-4dcd-a778-c770d117010c, Counter=1}
2021-09-04 17:10:08.163054 INFO [DefaultDispatcher-worker-5] io.klogging.example.KloggerPlaypen : Event 1 at 2021-09-04T17:10:08.162985 : {run=4f1f9871-bbe9-4dcd-a778-c770d117010c, Counter=1, Iteration=1, RightNow=2021-09-04T17:10:08.162985}
```

- The timestamp is in the server’s local time zone.
- If there are `items` as part of the [log event](../concepts/log-events), the keys and values are printed at the end of
  the line in curly braces.
- If there is a stack trace as part of the log event, it is printed starting on the next line.

### RENDER_ANSI

A `RenderString` instance that renders log events as string messages for a console like `RENDER_SIMPLE` but with
logging levels with colour highlights, for example:

![Example of RENDER_ANSI output](/img/render-ansi.png)

- Only the time portion of the timestamp is shown.
- Logging levels are colour-coded and right-aligned in a 5-character column.
- Context information is right-aligned in a 20-character column in square brackets.
- Logger names are right-aligned in a 20-character column. Package names are abbreviated if they do not fit in the space.
- Log event `items` are included in curly braces, if present.
- Stack traces, if present, start on the next line.

### RENDER_CLEF

A `RenderString` instance that converts log events into JSON using
[Compact Log Event Format](https://docs.datalust.co/docs/posting-raw-events#compact-json-format) for
dispatching to a [Seq server](https://datalust.co/seq).
An example is:

```json
{
  "@t": "2021-08-14T11:13:53.068816Z",
  "@l": "INFO",
  "@mt": ">> {Counter}",
  "host": "MikeBook",
  "logger": "Playpen",
  "Counter": "1",
  "run": "a6f72c37-7e2f-4d69-a73f-7f493cb04d1d",
  "context": "DefaultDispatcher-worker-3"
}
```

In Seq it is shown like this:

![](../../static/img/clef-json-in-seq.png)

### RENDER_GELF

A `RenderString` instance that converts log events into JSON using
[Graylog Extended Log Format](https://docs.graylog.org/en/latest/pages/gelf.html#gelf-payload-specification)
for dispatching to a [Graylog server](https://www.graylog.org).
An example is:

```json
{
  "version": "1.1",
  "host": "MikeBook",
  "short_message": ">> 1",
  "timestamp": 1628939552.786044,
  "level": 6,
  "_Counter": "1",
  "_run": "f02ec82a-616c-4d2f-8ccb-c14c0a771f67",
  "_logger": "Playpen"
}
```

## Sending

### STDOUT

A `SendString` instance that prints strings to the standard output stream.

### STDERR

A `SendString` instance that prints strings to the standard error stream.

## Rendering and sending

### DEFAULT_CONSOLE

A sink configuration that renders using `RENDER_SIMPLE` and sends using `STDOUT` to a sink
called `console`.

### ANSI_CONSOLE

A sink configuration that renders using `RENDER_ANSI` and sends using `STDOUT` to a sink
called `console`.
