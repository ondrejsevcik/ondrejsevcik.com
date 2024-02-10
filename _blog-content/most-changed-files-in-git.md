---
title: "Find Most Changed Files in Git Repository"
description: "With this command, you can list the most changed files in your repository over time."
date: "2020-03-07"
tags: ["til"]
---

Somewhere I've read that the files you change most often are most likely the ones that are doing too much and should be refactored into smaller ones.

With a bit of googling, I've landed on this one-liner

```bash
# Shows most 100 changed files in last year in current branch
# --pretty=format:<empty> is a workaround to hide the commit message and show only file names
git log --name-only --since="last year" --pretty=format: | sort | uniq -c | sort -rg | head -100
```

You can also throw in `grep` to narrow down the results for a specific filetype or path.

```bash
# Only JavaScript files (.js extension)
git log --name-only --since="last year" --pretty=format: | grep .js$ | sort | uniq -c | sort -rg | head -100
```
