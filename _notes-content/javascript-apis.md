---
title: "Little-known Browser JavaScript APIs"
date: "2024-05-18"
description: "A collection of infrequently used JavaScript APIs that I've stumbled upon."
---

## crypto.randomUUID()

Generate UUIDs with browser native [randomUUID](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) API.

```js
// returns 36b8f84d-df4e-4d49-b662-bcde71a8764f
self.crypto.randomUUID()
```

## String.padStart()

Add padding to the beginning of the string. This is useful when you want to format hours and always show 2 digits.

```js
let hours = 2
hours.toString().padStart(2, "0")
// returns 02

let hours = 12
hours.toString().padStart(2, "0")
// returns 12
```
