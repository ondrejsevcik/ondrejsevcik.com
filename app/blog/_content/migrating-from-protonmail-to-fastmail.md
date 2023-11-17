---
title: "Why and How I Migrated From ProtonMail to Fastmail"
description: "I’m a long-time fan of ProtonMail. That’s why I had a hard time deciding whether I want to leave them or not."
image: "/blog-images/export-email.png"
date: "2022-01-29"
tags: ["tech"]
---

I’m a long-time fan of ProtonMail. Their mission is something that resonates with me. That’s why I had a hard time deciding whether I want to leave them or not.

## What’s the problem?

ProtonMail is built as a completely zero-knowledge service. It means they don’t know anything about my data. That’s great, but it has also some major drawbacks.

You cannot use anything but their official apps. ProtonMail has a Mail app for iPhone. But there is no Calendar app and there is no way to synchronize contacts between your email and phone.

For some time I tried using mail and calendar through my mobile browser, but it wasn’t a good experience. Things that should take a few seconds took minutes and over time I was reluctant to do them at all. It was hurting my productivity and I felt disorganized. I started searching for an alternative.

## Searching for an alternative

I was looking for some privacy-friendly alternative. I’ve also considered switching to Apple iCloud+ with a custom domain, but I quickly decided against it. It’s better to keep my data out of the [Big Five](https://en.wikipedia.org/wiki/Big_Tech) gang.

> Email contains who you know, where you go, and what you do.

After searching for some while, I’ve stumbled over Fastmail. The reviews were very positive and I’ve also recognized them from the 1Password podcast. I gave them a try and I don’t regret it since. It simply works. Scan a [setup QR code](https://www.fastmail.help/hc/en-us/articles/360058752834-Set-up-Fastmail-on-your-device) on your phone, download configuration profile on your Mac, and you're done - amazing!

One feature that I’m particularly enjoying is [Masked email](https://www.fastmail.com/1password/). I didn't realize this until I've started using it. But being able to create an email alias exactly when you need it is great. More privacy and less tracking across the web.

<figure>
  <img
    src="/blog-images/masked-email.png"
    alt="Masked email integration with 1Password"
    style="max-width:450px"
  />
  <figcaption>Masked email integration with 1Password</figcaption>
</figure>

## Migration

Moving Contacts and Calendar was easy as downloading a file ([.ics](https://en.wikipedia.org/wiki/ICalendar), [vCard](https://en.wikipedia.org/wiki/VCard)) from ProtonMail and uploading it back to Fastmail. But when it came to encrypted Mail, it wasn’t as straightforward as I would hope.

Since ProtonMail is zero-knowledge, it’s not possible to use the usual IMAP import to move your data directly between different mail providers. I had to download all my mails with an export tool to the `.mbox` package.

<figure>
  <img
    src="/blog-images/export-email.png"
    alt="Export email tool from ProtonMail"
    style="max-width:450px"
  />
  <figcaption>Export email tool from ProtonMail</figcaption>
</figure>

But even after that, the trouble didn’t end. Fastmail doesn’t support uploading the `.mbox` file. I used Apple Mail to import my emails from `.mbox` first and then connected it with my Fastmail account and drag&dropped my local mails to Fastmail inbox. A bit more work than expected.

The whole migration including changing DNS records took around 2 hours. Not bad.

## Conclusion

I still support ProtonMail in their mission and I will still pay for their VPN. But for now, I’ve decided that I need to migrate somewhere where it fits better into my setup.

Fastmail turned out to be a perfect alternative. Their service simply works and I like their commitment to privacy and community.

Maybe one day, I will migrate back, maybe not. Ultimately I’m glad that I have my own domain and can switch between different providers in a few hours. Those 12$/year for a domain are worth the freedom. You simply switch where it makes the most sense for you.
