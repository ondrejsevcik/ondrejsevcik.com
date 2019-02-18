---
title: Make your deprecated CSS stand out
date: 2019-02-18 19:20:00
category: tech
---

Refactoring CSS is difficult. Due to it’s bazillion selectors and unlimited combinations it can get pretty nasty. 

If you’re working in a team with a large codebase, you rarely have a chance to refactor everything in one batch. Sometimes it is better to go one by one and check visually that your refactoring didn't break anything. In that case, this technique might help you.

The idea is very simple - make your deprecated CSS stand out (aka - scream!) and every time you see it in the UI, you have an unique chance to refactor it.

<figure>
  <a href="/images/deprecated-css-example.png"><img src="/images/deprecated-css-example.png" alt="Example of deprecated CSS on GitHub homepage"/></a>
  <figcaption>Example of deprecated CSS on GitHub homepage</figcaption>
</figure>

This has a several benefits:
- There is a visual feedback on what's outdated in the UI when you use your app
- It is safer and more effective than simple `// deprecated comment` or `deprecated.css` techniques
- It clearly communicates to your team that it is deprecated

If your coworkers start working on a new UI and use some of the deprecated CSS, they will immediately note that something is wrong. Over time, you will lover your technical debt and eventually you could remove the old classes from your CSS.

## Implementation (in Ember with SASS)

The implementation is quite easy. I will demonstrate it on Ember setup, but it should be more or less similar in any other setup. 

Let's start by marking some class as deprecated

```scss
.some-old-class {
  …
  // You can also include the message 
  // that will be shown in the dev tools
  @include deprecated(“Use .new-class instead.”); 
}
```

Then we need to add `deprecated` mixin

```scss
@mixin deprecated($message: '') {
  @if ($environment == 'development') {
    // Using outline has a two benefits
    // it is very rarely used and 
    // it doesn’t break the flow of the element 
    outline: 3px double red;
    --deprecation-message: "#{$message}";
  }
}
```

This mixin requires `$environment` variable. Using `/index.js`, we can create SASS file on the fly that will have this variable.

```js
const writeFile = require('broccoli-file-creator');

module.exports = {
  treeForStyles() {
    let tree = this._super.treeForStyles.apply(this, arguments);

    let target = this._findHost();
    let { env } = target;

    let sassEnvironmentFile = writeFile(
      '/app/styles/_environment-variable.scss',
      `$environment: "${env}"`
    );

    return merge([sassEnvironmentFile, tree]);
  }
}
```

and then just include this file in your app or addon SASS file

```scss
// app/styles/my-app.scss
@import “environment-variable”;
```

That's it, now go and refactor some of your old CSS.

Big thanks goes to [Francesco](https://fnovy.com/) for helping with Ember setup.

