---
title: "List Directories by Size"
description: "List directories by size in your terminal without any additional software."
date: "2020-03-29"
tags: ["til"]
---

This one proved to be useful many times!

```bash
# du
#   -d - depth
#   -h - "Human-readable" output
# sort
#   -h - make sure it sorts correctly MB,KB
#   -r - (reverse) make sure it is sorted from the largest
du -d 1 -h | sort -h -r

# will output
 30M	.
 28M	./node_modules
1.6M	./.git
248K	./docs
188K	./public
 28K	./posts
```
