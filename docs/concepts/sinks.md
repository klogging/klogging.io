---
sidebar_position: 30
---

# Sinks

Sinks are destinations for log events. Klogging configuration names sinks
as having a [renderer](rendering-and-sending.md#rendering) to `String` and
[sender](rendering-and-sending.md#sending) those strings to a destination.

Example destinations are:

- Standard output stream
- Standard error stream
- [Seq log aggregator](https://datalust.co/seq)
- [Graylog log aggregator](https://www.graylog.org/)
- [Logstash](https://www.elastic.co/logstash/) as part of the [ELK stack](https://www.elastic.co/what-is/elk-stack)
- [Splunk](https://www.splunk.com)
