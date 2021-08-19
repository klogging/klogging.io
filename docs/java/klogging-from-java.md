---
sidebar_position: 10
---

# Using Klogging directly

Klogging can be used directly by Java programs, using a `LoggerFactory`:

```java
package com.example;

import io.klogging.java.LoggerFactory;

class Thing {

    private static final NoCoLogger logger = LoggerFactory.getLogger(Thing.class);

    public void doThing(Arg arg) {
        logger.info("Doing thing with {arg}", arg);
    }
}
```
