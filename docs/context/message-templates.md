---
sidebar_position: 50
---

# Message templates

Klogging has a partial implementation of [message templates](https://messagetemplates.org/) to make it easy
to create structured log events.

:::note
Message templates are partially implemented so far. Not implemented are:

- double braces (`{{`) to escape them
- numeric property names (e.g. `{0}`)

It is planned to implement more of the standard in the future.
:::

Example usages are shown in [Sending log events](../logging/sending-logs.md#message-template).
