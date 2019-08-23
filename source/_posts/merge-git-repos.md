---
title: How to merge git repository into monorepo
date: 2019-08-23 20:00:00
category: tech
---

Merging two unrelated git repositories into one might look like an ambitious task, but once you understand what's happening, you will find out it's pretty simple.

## What we are about to do

In this article, we will merge a git repository into monorepo. The example is demonstrated on a [yarn workspace](https://yarnpkg.com/en/docs/workspaces/) (which is a bunch of npm packages in one repository) and one npm package that should be merged into it. This is a common setup for a lot of front-end projects out there.

We start with two git repositories (monorepo and packageC) and end up with just monorepo, that will contain git history and all files from packageC.

Beware: This technique doesn't allow you to merge tags from packageC.

<figure>
  <a href="/images/git-folders-before-after.png"><img src="/images/git-folders-before-after.png" alt="Folder structure before and after merge"/></a>
  <figcaption>Folder structure before and after merge</figcaption>
</figure>

TIP: If you don't want to keep history, it's way simpler to just copy files to the new repository and make a commit (KISS).

## Step by step

### 1. Clone source repository

Even if you already have a copy of your source repository, I recommend making a new one. There will be changes and if something goes wrong, it's easier to just delete and start over rather than trying to undo the changes (unless you know git very well).

```bash
## Replace packageC with your folder name
git clone <repo-url> packageC
```

## 2. Move all files into packages/\* sub-directory

Moving all files from a source repository into `packages` sub-directory will make your life easier. You will avoid conflicts when you later merge it into monorepo. Also, certain operations in your monorepo will become easier (e.g.: finding renames, making a diff based on a file path).

```bash
# The --prune-empty - removes commits which are empty due to the rewrite
export TARGET_DIR="packages/packageC"
git filter-branch --prune-empty --tree-filter '
  mkdir -p "$TARGET_DIR"
  git ls-tree --name-only $GIT_COMMIT | xargs -I files mv files "$TARGET_DIR"
'
```

Since now, the history will be rewritten as if all files were always located in `packages/packageC` folder.

BTW: With `git filter-branch` you can also extract package out of monorepo back into a single repository, but that's a topic for another article.

### 3. Merge into monorepo

Now everything is ready to be merged. But before we do so, I will shortly explain what is this `git merge --allow-unrelated-histories` flag about.

By default, git won't allow you to merge branch that doesn't have a common ancestor. With this flag, we're telling git that we know about it and that this merge is deliberate.

Git repository is always created with an initial commit, but in this case, we don't have any. Our monorepo and packageC were created separately and thus have separate initial commits. To fix this, git will pretend that there was an empty initial commit that's common for those unrelated histories. You can read more about it in the [official documentation](https://git-scm.com/docs/git-merge#Documentation/git-merge.txt---allow-unrelated-histories).

<figure style="max-width: 24rem; margin:auto;">
  <a href="/images/git-history-before-after-merge.png"><img src="/images/git-history-before-after-merge.png" alt="Git history before and after merge"/></a>
  <figcaption>Git history before and after merge</figcaption>
</figure>

```bash
# Add remote in your monorepo to packageC
git remote add packageC ~/git/packageC

# Fetch commits from packageC
# --no-tags - do not fetch tags, otherwise they will pollute your tags in current monorepo
git fetch packageC --no-tags

# Merge
git merge packageC/master --allow-unrelated-histories

# Remove remote
git remote remove packageC
```

### 4. Clean up

After a successful merge, it's time for cleanup. Remove duplicate config files (`.editorconfig`, `.eslint`, ...), delete old repository and fix your CI build.
