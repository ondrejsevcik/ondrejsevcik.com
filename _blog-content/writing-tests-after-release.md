---
title: "Writing Tests After Release Is a Mistake"
description: "More often than not, I see developers writing tests after the code is released to production. And that’s a big mistake."
image: "/blog-images/hoping-for-the-best.png"
date: "2022-04-26"
tags: ["tech"]
---

Writing tests in 2022 is more common than ever before, but more often than not, I see developers writing tests after the code is released to production. And that’s a big mistake.

### What is wrong with that?

It seems obvious - writing tests takes time, so I will be faster if I don’t spend my time writing them before the code is released, right? Wrong!

Writing code is just one part of producing features, and developers often ignore all the other areas that get affected. You end up with almost all the same problems like not testing at all.

<figure>
    <img src="/blog-images/hoping-for-the-best.png" alt="Hoping for the best" />
    <figcaption>Hoping for the best</figcaption>
</figure>

When you write tests after the release, you end up

**Testing your code manually** - You don’t ship untested code, do you? You either write automatic tests, or you test your code manually. Manual testing is the slowest. The bigger the change, the more time you spend on manual testing. It simply does not scale well.

**Producing worse Architecture** - TDD helps you organize your thoughts about the behavior and API design. Bad API accumulates and makes you even slower in the future.

**Producing more bugs** - Manual testing means you test less often. Bad architecture means the code is more complex than it should be. Combine those two, and you end up with more bugs in production code.

**Longer code reviews** - No tests, bad architecture, and more bugs will lead to more and longer discussions about the code itself. Check your Pull Requests for how many comments and changes are usually required before you get approval.

**Producing code that's harder to test** - Code that is not written with testing in mind is always more difficult to test. You will write more brittle tests or have to rewrite your code to make it testable. And that is, again, time-consuming.

**Not testing all the edge cases** - You wrote the code several weeks ago, so it's natural that you forget all the edge cases that should be tested. This will haunt you in the future in the form of bugs.

**(Sometimes) Skipping the tests** - Since the code is in production and is working, your manager wants you to work on the next feature, naturally. And so the tests never get written. Don't blame your manager for that.

All this adds up over time and makes you slower.

### What to do instead?

If you want to write quality software that lasts, there is no way you can avoid writing tests. Writing tests after the release may be better than no tests at all, but it’s not good enough. Unless you write tests first, you will always struggle with quality, design, and delivering on time.

Testing is a skill, and you need to cultivate it. The more you do it, the better you become at it. And as you get better in TDD, you are likely to produce quality faster.

Start with TDD today. You won’t regret it, I promise.
