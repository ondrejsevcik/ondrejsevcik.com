---
title: "My Use Cases for Advanced Github Search"
description: "Here are a few use cases, I use GitHub Search for lately..."
image: "/blog-images/github-search-import.jpg"
date: "2024-02-22"
tags: ["tech"]
---

I’ve been overseeing many different repositories at Lokalise and that means also knowing and keeping track of what libraries are in use and in what version.

I always knew that GitHub has a search functionality, but until recently, I didn’t realize that I can use it exactly for this purpose.

Here are a few use cases, I use GitHub Search for lately.

## Find out what versions of package X do we use in different repositories

In my case, the package X is React. I was trying to find out what React versions we still use. This search command gave me the answer.

```bash
org:lokalise path:**/package.json react-dom NOT is:archived
```

## Find out how many files with extension X do we have

Github Search returns also the amount of files that match the search. With that, you can also easily find out how many files of certain type you have in your organization.

In my case, I was looking for how many React components we have.

A small problem is that once you get over 1000s, it will give you just an approximate number, but in my case, that was still good enough.

```bash
org:lokalise path:**/*.tsx NOT is:archived
```

<figure>
  <img
    src="/blog-images/github-search-files-count.jpg"
    alt="GitHub Search for .tsx files."
  />
  <figcaption>GitHub Search for <code>.tsx</code> files.</figcaption>
</figure>

## Find out how many files use styled-components

We’re in a process of migrating from `styled-components` to native CSS (which is more web friendly). With this search, I can track easily how the migration is going.

```bash
org:lokalise "from 'styled-components'" NOT is:archived
```

<figure>
  <img
    src="/blog-images/github-search-import.jpg"
    alt="GitHub Search for file import"
  />
  <figcaption>GitHub Search for file import</figcaption>
</figure>
