---
title: "Why I’m skeptical of rewriting JavaScript tools in “faster” languages"
date: "2024-10-21"
tags: ["dev"]
ogUrl: https://nolanlawson.com/2024/10/20/why-im-skeptical-of-rewriting-javascript-tools-in-faster-languages/
---

> In the world of Node.js scripts, we don’t get the benefits of the bytecode cache at all. Every time you run a Node script, the entire script has to be parsed and compiled from scratch. This is a big reason for the reported perf wins between JavaScript and non-JavaScript tooling.

JavaScript is just following the - make it work -> make it right -> make it fast phases.

We're now slowly entering the "make it fast" phase.
