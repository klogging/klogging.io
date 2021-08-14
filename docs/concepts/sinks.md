---
sidebar_position: 7
---

# Sinks

Sinks are destinations for log events. Klogging configuration names sinks
as having a [renderer](rendering) to `String` and [dispatching](dispatching)
those strings to a destination.

Example destinations are:

* Standard output stream
* Standard error stream
* [Seq log aggregator](https://datalust.co/seq)
* [Graylog log aggregator](https://www.graylog.org/)
* [Logstash](https://www.elastic.co/logstash/) as part of the [ELK stack](https://www.elastic.co/what-is/elk-stack)
* [Splunk](https://splunk.com)
* [Syslog](https://en.wikipedia.org/wiki/Syslog)
