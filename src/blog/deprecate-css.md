---
title: Make your deprecated CSS stand out
date: 2019-02-18
tags: tech
---

Refactoring CSS is difficult. Due to its bazillion selectors and unlimited combinations, it can get pretty nasty.

If you’re working in a team with a large codebase, you rarely have a chance to refactor everything in one batch. Sometimes it is better to go one by one and check visually that your refactoring didn't break anything. In that case, this technique might help you.

The idea is very simple - make your deprecated CSS stand out and every time you see it in the UI, you have a unique chance to get rid of it. Of course, this should apply only to the development environment.

<figure>
  <a href="/images/deprecated-css-example.png"><img src="/images/deprecated-css-example.png" alt="Example of deprecated .align-center class on GitHub homepage"/></a>
  <figcaption>Example of deprecated <code>.align-center</code> class on GitHub with a deprecation message.</figcaption>
</figure>

This has several benefits:

- There is visual feedback on what's deprecated in the UI when you use your app
- It is safer and more effective than a simple `// deprecated comment` or `deprecated.css` techniques
- It clearly communicates to your team that it is deprecated

If your coworkers start working on a new UI and use some of the deprecated CSS, they will immediately note that something is wrong. Over time, you will lower your technical debt and eventually you can remove the old CSS from your code.

## Implementation (in Ember with SASS)

The implementation is quite easy. I will demonstrate it for Ember app, but it should be very similar for webpack or any other build tool.

Let's start by marking some class as deprecated

```scss
.some-old-class {
  …
  // You can also provide message
  // that will be shown in the dev tools
  @include deprecated("Use .new-class instead.");
}
```

Then we need to add `deprecated` mixin

```scss
@mixin deprecated($message: '') {
  @if ($environment == 'development') {
    // Using outline has two benefits
    // it is very rarely used and
    // it doesn’t break the flow of the element
    outline: 3px double red;
    --deprecation-message: '#{$message}';
  }
}
```

This mixin displays deprecation only in `development` mode. We need to somehow inject the `$environment` variable. In Ember, you can customize `treeForStyles` method in `/index.js` and create a file with this SASS variable during each build. To be able to create a file on the fly, you need a [broccoli-file-creator](https://github.com/rwjblue/broccoli-file-creator) package.

```javascript
const writeFile = require('broccoli-file-creator');

module.exports = {
  treeForStyles() {
    let tree = this._super.treeForStyles.apply(this, arguments);

    let target = this._findHost();
    let {env} = target;

    let sassEnvironmentFile = writeFile(
      '/app/styles/_environment-variable.scss',
      `$environment: "${env}"`,
    );

    return merge([sassEnvironmentFile, tree]);
  },
};
```

And then just include this file in your app or addon SASS file

```scss
// app/styles/my-app.scss
@import 'environment-variable';
```

That's it! Now go and refactor some of your old CSS.

Big thanks to [Francesco](https://fnovy.com/) for helping with Ember setup.
