---
title: "How to Detect AdBlock in Plain JavaScript With a Few Lines of Code"
description: "Using analytics tools to measure the impact of your application is part of every website these days. But measuring how many of your users block your analytics is probably even more important. And luckily, it’s not that difficult to figure it out."
date: "2022-09-05"
tags: ["tech"]
---

Using analytics tools to measure the impact is part of every website these days.

But measuring how many of your users block analytics is probably even more important.

And luckily, it’s not that difficult to figure it out.

## How it works

In a nutshell - you need to add a fake advertisement div to your website and check if it is visible or not.

In practice:

1. Add an empty `div` that’s positioned in the top right corner of your website. That way, it won’t bother users who don’t use AdBlock.
2. Preferably also add `aria-hidden="true"` to not show this fake ad to users who use accessibility tools.
3. Once the page is loaded, check whether this fake advertisement div is visible or not.

```html
<div class="ad-box" style="position:fixed;top:0;left:0;" aria-hidden="true">
  &nbsp;
</div>
<script>
  setTimeout(function () {
    var adBoxEl = document.querySelector(".ad-box")
    var hasAdBlock = window.getComputedStyle(adBoxEl)?.display === "none"
    // ... save to DB
  }, 2000)
</script>
```

The way most AdBlocks work these days is that they target specific CSS classes (like `class="ad-box"`) and apply `display: none` on it. That way, the Ad disappears in your browser.

<aside>
  <p>Always double-check that you don’t break the experience for users that do not use AdBlock.</p>
</aside>

You can see all the CSS classes that are used for blocking in [EasyList blocklist](https://easylist.to/easylist/easylist.txt).
