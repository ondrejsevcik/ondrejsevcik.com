---
title: "How I Used Unified, Remark, and Rehype to Build a Perfect Markdown Processor for My Blog"
description: "I’ve decided that it’s time to switch from writing in MDX to pure plain markdown."
date: "2023-11-20"
tags: ["tech"]
---

## A short personal story

I’ve decided that it’s time to switch from writing in MDX to pure plain markdown.

The reason for that is mostly that I want to keep my content portable. With pure markdown, I can move my content whenever I want. I won’t be worried about being stuck with Next.js or React forever because I tied my content to it. Not anymore.

## How many libraries do you need?

Up until now, I’ve been using [micromark](https://github.com/micromark/micromark), [nextjs/mdx](https://www.npmjs.com/package/@next/mdx), [@mdx-js/loader](https://www.npmjs.com/package/@mdx-js/loader), and [gray-matter](https://www.npmjs.com/package/gray-matter) to get my posts on screen.

To be honest, I wasn’t really sure what each package does. It somehow worked, but it was far from optimal. Now, it was a good time to understand the whole compilation process.

That’s when I stumbled upon [Unified](https://unifiedjs.com/), [Remark](https://remark.js.org/), and [Rehype](https://github.com/rehypejs/rehype) first time. When I came to the Unified website and looked at the example, this is what I saw.

```jsx
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)
```

If you’re like me, you may be wondering - why do I need 4 different packages to compile plain markdown? And why do they all have different names?

## Making sense out of it

Markdown has many different flavors and different people have different requirements for features they expect from it. That’s why there isn’t a single package that would satisfy everyone’s needs.

Instead, there is a Unified, Remark and Rehype.

**Unified** is a small library for manipulating content. It takes a string and turns it into structured data (syntax tree) that other plugins can work with. Plugins can do virtually anything, from spellcheck to linting or transforming from one format to another (e.g. Markdown → HTML).

Unified on its own doesn’t do much. It acts as a unifying package for all the other plugins out there.

**Remark** is a collection of plugins that are all about Markdown (it’s in the name - Mark = Markdown). **Any package that starts with `remark-*` is operating on the markdown syntax tree.**

**Rehype** on the other hand is all about HTML (Hype = HyperText). **Anything `rehype-*` is operating on an HTML syntax tree.**

If you put these three together, you get a highly customizable tool for transforming content between Markdown and HTML.

## Setup for my blog

On my blog, I write using markdown and my output is (obviously) HTML. This is probably the most common setup for 99% of blogs out there.

I plan to use metadata in the markdown and have support for code highlights. Also, I want to be able to occasionally drop pure HTML into my markdown which will also end up in the output. It’s nice to have the option to put directly into markdown some HTML tags to enrich the content (e.g. `<aside>`).

It took me a bit of searching before I figured out what plugins I needed. There is a lot of them and finding exactly what you want can take a bit of time.

This is my current setup for turning markdown text into HTML that ends up on this blog.

```jsx
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter"
import remarkParseFrontmatter from "remark-parse-frontmatter"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import rehypeHighlight from "rehype-highlight"

const result = unified()
  // Take Markdown as input and turn it into MD syntax tree
  .use(remarkParse)
  // Add support for frontmatter in Markdown
  .use(remarkFrontmatter, ["yaml"])
  // Prase and validate Markdown frontmatter (YAML)
  .use(remarkParseFrontmatter)
  // Switch from MD syntax tree to HTML syntax tree (remakr -> rehype)
  .use(remarkRehype, {
    // Necessary for support HTML embeds (see next plugin)
    allowDangerousHtml: true,
  })
  // Support HTML embedded inside markdown
  .use(rehypeRaw)
  // Improve code highlighting
  .use(rehypeHighlight)
  // Serialize syntax tree to HTML
  .use(rehypeStringify)
  // And finally, process the input
  .processSync(content)
```

---

After a bit of experimenting with the unified ecosystem, I must say I like it. Although it takes a bit of time to make sense of it, it is a very sensible approach to transforming content.

There are hundreds of [plugins for remark](https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins) and another [hundred for rehype](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md). Go check them out and build your own pipeline.
