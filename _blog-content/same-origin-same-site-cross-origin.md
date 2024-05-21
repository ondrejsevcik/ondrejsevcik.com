---
title: "Same-Origin, Same-Site, and Cross-Site explained in simple terms"
description: "These terms are used in the context of web security to distinguish between different types of requests or resources."
date: "2024-05-21"
tags: ["tech"]
---

These terms are used a lot in the context of web security to distinguish between different types of requests or resources.

---

**Same-Origin** is when two web pages have the same origin if the protocol, port (if specified), and host are the same for both pages.

- `https://ondrejsevcik.com` request to `https://ondrejsevcik.com`

**Same-Site** is a more relaxed version of same-origin. It allows pages to interact if they're from the same site, which means they have the same registered domain.

- `https://sub.ondrejsevcik.com` request to `https://ondrejsevcik.com`

**Cross-Site** refers to situations where interactions happen between different sites.

- `https://ondrejsevcik.com` request to `https://github.com`

Hope this helps.
