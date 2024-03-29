---
title: "6 Rules I Follow to Get Simple and Stable Tests"
description: "These rules I always follow no matter what kind of tests I write."
date: "2022-07-31"
tags: ["tech"]
---

It took me several years of trying and failing to figure out what does work when I write tests. Here are 6 rules that I always follow no matter what kind of tests I write.

## Follow AAA pattern

Clean unit tests follow the **AAA** pattern:

- **Arrange:** Setup the test scenario
- **Act:** Execute the business logic
- **Assert:** Make some expectations

This is the holy grail of simple tests.

## Single concept per test

Test single concept in each unit test. If you follow the AAA pattern, this should feel natural.

Oftentimes, I see tests that cover a lot of different concepts in a single unit test. That’s a code smell. It’s better to split up such a test into multiple tests - each testing its own thing.

<aside>
  <p>Rule of thumb - if there is an `act` after your `assert`, you should consider to splitting it out into two separate tests.</p>
</aside>

Your tests will be easier to understand, and easier to fix.

```js
// Bad - mixing two concepts
it('should add new item into cart', () => {
  let cart = new Cart()
  cart.add(new Item('Shoes')) // <-- // Testing adding item into cart
  expect(cart.size).toBe(1);
  cart.removeAllItems(); // <-- Testing removing all items from cart
  expect(cart.size).toBe(0);
});

// Better - split it up
it('should add new item into cart', () => {
  let cart = new Cart();
  cart.add(new Item('Shoes');
  expect(cart.size).toBe(1);
});

it('should be possible to remove all items from cart', () => {
  let cart = new Cart([new Item()]);
  cart.removeAllItems();
  expect(cart.size).toBe(0);
});
```

## Avoid logic in your tests

Avoid any `if`, `else`, `switch`, or [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) in your test code.

<aside>
  <p>The moment you use any of the control flow statements - you added logic to your test and now you need a **test for your test**.</p>
</aside>

This often happens with a parametrized test where you expect slightly different behavior for different inputs, but also with tests where someone wanted to avoid failure for a flaky test.

In cases like these, it’s always better to split it up and keep it flat and simple.

```js
// Bad
it("should have focus when clicked", () => {
  render(<Input />)
  const input = screen.getByRole("input")

  // this null check is pointless
  if (input !== null) {
    click(input)
    expect(input).toHaveFocus()
  }
})

// Better
it("should have focus when clicked", () => {
  render(<Input />)
  click(screen.getByRole("input"))
  expect(screen.getByRole("input")).toHaveFocus()
})
```

## Optimize for simplicity

Good test is **short, flat, simple**, and delightful to work with. When you look at a test, you should get the intent immediately.

**Do not nest** tests. It adds unnecessary complexity. Each nesting level adds an extra [cognitive complexity](https://docs.codeclimate.com/docs/cognitive-complexity) to your code.

Refactor common setup code into a **fixture** to avoid repetition.

## Only public API

If your test is doing something that your user can’t, it's most likely testing implementation details.

This is a code smell. Any change in the underlying implementation will break your test.

Test only API that your user can use.

## Use TDD to drive your coverage

10/10 times when I use TDD, my code coverage climbs over 80%.

Start with the **happy path** - make sure that code works for your primary use cases.

Continue with **unhappy paths** - Cover the error conditions, unexpected input, or any other edge cases.

You can skip testing trivial one-liners, getters, and setters.

With this, you should hit the 80% coverage mark easily.

<aside>
  <p>Don’t obsess about code coverage - it only tells you what lines were executed, not if they work as intended. Focus more on writing meaningful tests.</p>
</aside>

## That’s it

With these few rules, you can write tests that everybody will understand and it will be a pleasure to work with.

Let me know if you have some other rules that you follow, and why.
