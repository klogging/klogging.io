---
sidebar_position: 3
---

# Built-in configurations

Klogging provides a number of built-in configurations.

## RENDER_SIMPLE

A `RenderString` instance that renders log events as string messages suitable for a
console. Examples are:

```
2021-08-14 20:54:54.214085 INFO [DefaultDispatcher-worker-2] Playpen : >> 2 : {Counter=2, run=59faf624-b43b-4bc2-9af0-108bdd1bbf86}
2021-08-14 20:54:54.228763 INFO [DefaultDispatcher-worker-1] Playpen : << 2 : {Counter=2, run=59faf624-b43b-4bc2-9af0-108bdd1bbf86}
2021-08-14 20:54:54.228971 INFO [DefaultDispatcher-worker-2] Playpen : Event 1 at 2021-08-14T20:54:54.228927 : {Iteration=1, RightNow=2021-08-14T20:54:54.228927, run=59faf624-b43b-4bc2-9af0-108bdd1bbf86, Counter=2}
```

- The timestamp is in the server’s local time zone.
- If there are `items` as part of the [log event](../concepts/log-events), the keys and values are printed at the end of
  the line in curly braces.
- If there is a stack trace as part of the log event, it is printed starting on the next line.

## STDOUT

A `DispatchString` instance that prints strings to the standard output stream.

## STDERR

A `DispatchString` instance that prints strings to the standard error stream.

## DEFAULT_CONSOLE

A sink configuration that renders using `RENDER_SIMPLE` and dispatches using `STDOUT` to a sink called `console`.

## RENDER_CLEF

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

## RENDER_GELF

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
