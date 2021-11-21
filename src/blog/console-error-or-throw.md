---
title: Console.error or throw new Error?
description: How do I decide whether to use console.error or throw.
date: 2021-11-21
tags: tech
---

Recently, I was involved in a discussion about error handling. We couldn't agree on proper usage of `console.error` and when to use `throw`. So I've decided to write a short post on how I see it.

## When to use console.error

Almost never. `console.error` is nothing else but `console.log` that outputs red in your developer tools. **It can’t be really considered as an error handling tool.**

Use `console.error` (or `console.assert`) to make assertions to prevent impossible. Anytime you think "this could never happen", add assertion on that.

**Keep those assertions also in production code** unless it is a performance issue. You will experience way more "impossible" scenarios in production and having assertions in your code will help you to discover them earlier.

## When to use throw new Error

Anytime you have corrupted data or an impossible state - throw!

> Dead program can do less harm than a program with corrupted data.

Consider following scenario

```js
try {
  let today = new Date(‘orange’)
} catch (e) {
  // handle error
}
```

Since it’s impossible to create a date from `orange`, it’s better to throw an error.

## What’s the alternative (future)?

Exceptions (throwing errors) are mostly used in OOP languages. Functional languages treat **errors as a type** rather than something special.

It's becoming more common to see this pattern also in non-OOP languages. But I would be careful to use it until it becomes standard.

```rust
let f = File::open("hello.txt");

let f = match f {
    Ok(file) => // do something with file
    Err(error) => // do something with error
};
```

The example above is from Rust. The method `open()` returns either `File` type or `Error` type. In either case, **it’s just a type**, no `exceptions`.

I find this error handling most straightforward. It makes it obvious what functions may return `Errors`, plus it forces you to handle them properly.

## Conclusion

Don't use `console.error` for real error handling. Use `throw new Error()` when you can't satisfy your business needs. And **treat all errors equally, no matter where they come from**. It will make your life easier.

PS: Warning is just a future error.
