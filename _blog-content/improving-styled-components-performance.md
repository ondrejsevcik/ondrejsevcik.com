---
title: "Improving the performance of styled components with native CSS features"
description: "Can we improve performance of styled components by using some of the native CSS features? I've decided to test it out"
image: "/blog-images/styled-components-test.jpg"
date: "2023-01-27"
tags: ["tech"]
---

Styled components are slow. But can we improve its performance by using some of the native CSS features? I've decided to test it out.

## The problem

The problem with styled components is that they recalculate styles based on runtime values. Every time the component is rendered, it needs to build up the stylesheet and insert it into the document. This is not an issue in small apps, but in larger applications, it affects performance.

What you want to avoid is dynamic components (a component that depends on theme or props).

Before a dynamic component is inserted into DOM, it needs to **parse the template → generate CSS → preprocess styles → inject it into DOM**. Static components on the other hand can skip some of these steps and are thus much faster.

## Exploring alternatives

Given that, I’ve started exploring how could we rewrite dynamic components into static ones.

Here is a classic example of a dynamic styled component.

```jsx
const Box = styled.div`
  padding: ${props => props.padding};
`

<Box padding="1rem">I'm a box</Box>
```

This could be easily rewritten as a static component with a help of CSS Variables.

```jsx
const Box = styled.div`
  padding: var(--padding);
`

<Box style={{--padding: '1rem'}}>I'm a box</Box>
```

But usually, in larger apps, we don’t use specific values directly, but rather design tokens from the design system.

Here’s a similar example, but this time with padding with three options.

```jsx
const Box = styled.div<{padding: 'small' | 'medium' | 'large'}>`
  padding: ${props => {
	  switch (props.color) {
	    case "small":
	      return "1rem";
	    case "medium":
	      return "2rem";
	    case "large":
	      return "3rem";
	  }
	}};
`

<Box padding="medium">I'm a box</Box>
```

In this case, we can’t really use CSS variables. But we could use data attributes instead.

```jsx
const Box = styled.div<{'data-padding': 'small' | 'medium' | 'large'}>`
  &[data-padding="small"] {
    padding: 1rem;
  }
  &[data-padding="medium"] {
    padding: 2rem;
  }
  &[data-padding="large"] {
    padding: 3rem;
  }
`

<Box data-padding="medium">I'm a box</Box>
```

This doesn’t look bad, and is much easier to read.

The only disadvantage of this approach is that it’s actually rendering the `data-padding` attribute into the DOM. Writing to DOM might affect the performance as well.

## Performance

I’ve decided to test it out.

In this [simple demo](https://codesandbox.io/s/styled-components-perf-test-conditions-ur9tpj), I build a table with 1000 items in it using 3 different approaches. The first one is using **dynamically styled-components**, the second is using **statically styled-components** and the third one is using **plain old CSS class names**.

It turns out that using `data-attributes` is indeed a little bit faster than using dynamic props on styled-components. Not surprisingly the fastest was using CSS class names.

<figure>
  <img
    src="/blog-images/styled-components-test.jpg"
    alt="React Profiller results "
    style="max-width:300px"
  />
  <figcaption>React Profiller results</figcaption>
</figure>

<aside>
  <p>This was very basic performance test. Take the results with a grain of salt.</p>
</aside>

---

Using native CSS features can indeed improve the performance of styled-components. It makes the styles also more readable. Rather than writing CSS inside JS function inside CSS declaration inside JS file, you can just write CSS that everybody understands.

But using CSS in JS is still controversial. It improves DX while hurting the user experience.

As long as CSS in JS doesn't improve UX & DX at the same time, it's better to stick with plain old CSS and a some good CSS methodology.
