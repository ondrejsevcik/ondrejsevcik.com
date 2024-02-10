---
title: "How to Increase CSS Class Selector Specificity to Beat the ID Selector Without Using Important"
description: "Two tips to workaround #ID vs .class selector specificity issues."
image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
date: "2023-04-26"
tags: ["tech"]
---

Recently, while working on some legacy code, I had to figure out how to overwrite ID selector styles without using `!important`.

The CSS was similar to this

```html
<div id="parent">
  <div class="child">Content</div>
</div>

<style>
  /* specificity 100 + 10 = 110 */
  #parent .child {
    color: red;
  }

  /* specificity 10 */
  .child {
    color: yellow;
  }
</style>
```

This results in a text with red color, but in my case, I needed to make the text yellow.

Normally, I would just refactor the CSS and HTML, but in this case, I couldn’t change the HTML and order of CSS due to some legacy code.

The easy solution would be to use an infamous `!important` keyword to overwrite everything, but I didn’t want to go that way.

### Using attribute selector

The better way is to change the ID selector to the attribute selector. Instead of `#parent` it's possible to use `[id="parent"]`. This has the same specificity as a class selector.

Now instead of specificity `110`, it is down to `20`.

```css
/* specificity 10 + 10 = 20 */
[id="parent"] .child {
  color: red;
}

/* specificity 10 */
.child {
  color: yellow;
}
```

<aside>
  <p>When you want to target by ID, prefer the attribute selector over the ID selector. It will save you some headaches down the road.</p>
</aside>

### Chaining the selector with itself

Now I had to increase the `.child` specificity above 20 to beat the `[id="parent" .child"` selector. One way to achieve that is to **chain the class selector with itself**.

The specificity of `.child` is 10. The specificity of `.child.child.child` is 30.

```html
<div id="parent">
  <div class="child">Content</div>
</div>

<style>
  /* specificity 10 + 10 = 20 */
  [id="parent"] .child {
    color: red;
  }

  /* specificity 10 + 10 + 10 = 30 */
  .child.child.child {
    color: yellow;
  }
</style>
```

This is an easy way to bump up specificity without adding additional classes or knowing about the context where the item will be placed.

I find this better than using `!important`, but it is still a hack. If possible, try to avoid this.
