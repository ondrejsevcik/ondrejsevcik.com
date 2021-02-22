---
title: Find and remove merged git branches
date: 2020-01-18
tags: til
---

Working in multiple repositories with multiple branches and many PRs, it's very easy to lose track of what has been merged. That's why I'm glad I've found this command.

```bash
# Shows a list of branches that have been merged to master
git branch --merged master

# Combine it with grep and automatically delete all merged branches.
# Just make sure you're on master when you do that.
git branch --merged master | grep --invert-match '^\*' | xargs -n 1 git branch -d
```
