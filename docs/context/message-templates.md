---
sidebar_position: 20
---

# Message templates

Klogging has a partial implementation of [message templates](https://messagetemplates.org/) to make it easy
to create structured log events.

:::note
Message templates are partially implemented so far. Not implemented are:

- double braces (`{{`) to escape them
- numeric property names (e.g. `{0}`)
- `@` structure capturing or `$` stringification operators

It is planned to implement more of the standard in the future.
:::
