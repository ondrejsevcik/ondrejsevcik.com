---
title: "Book Notes - Extreme Programming Explained (2nd Edition)"
description: "XP term has been thrown around for some time and I finally got my hands on this book. Here are my notes and thoughts on the topic."
image: "/blog-images/extreme-programming-cover.jpg"
date: "2022-10-23"
tags: ["tech"]
---

The main idea of [Extreme Programming](https://www.amazon.com/Extreme-Programming-Explained-Embrace-Change-ebook-dp-B00N1ZN6C0/dp/B00N1ZN6C0) is that you should not try to predict things and plan everything in detail, but rather use a methodology that embraces changes.

Stay aware. Adapt. Change.

XP is about well-known practices like **relentless testing**, **coding standards**, and **continuous integration**.

But it’s also about some radical programming ideas - **on-site customer** (to help to guide the decisions), **refactoring** as a part of the development cycle (rather than upfront design), **pair programming, collective code ownership** (everyone is responsible for the whole codebase and can change code anytime), **flexible planning** (pick your goals every day) and **design for change** (be ready to change anytime).

Even though the ideas from the book are probably not applicable to every situation, I found them inspiring. It definitely broadens my view on how can build software.

## Book notes

### Communication

- Communication in teams is done with code - build the documentation from code.
- Written communication allows you to reach a large audience. But it’s one-way communication and it is often taken as a fact, rather than an invitation for discussion.
- Face-to-face conversation allows for clarification and immediate feedback.
- Everything in software changes - requirements, design, business, technology, and team. We need to be able to cope with change.

### Teams

- 12 is the number of people who can comfortably interact with each other in a day.
- You can recognize up to 150 people in your organization.
- Keep effective teams together.
- Value in software is created by what people know, their relationships, and what they accomplish together.
- Leading by example is a powerful form of leadership.

### Pair programming

- Pair programming is a dialog between two people simultaneously programming (and analyzing and designing and testing) and trying to program better.
- A person alone makes too many mistakes? Program in pairs.
- Pairing doesn’t mean that you can’t think alone. If you need to work on an idea alone, go do it. Then come back and check in with your team.
- If programmers won’t pair or if they insist on owning code, have the courage to fire them. The rest of the team will bail you out.

### Building

- Don’t wait for perfection. Start and improve from there.
- Automatic build should not take more than 10 minutes. Otherwise, it will be used less often → less feedback.
- Anyone can improve any part of the system at any time. If something is wrong, just fix it.
- Code is the only permanent (and up-to-date) artifact. Generate other documents from code.

### Waste

- The greatest waste is overproduction. If you make something and can’t sell it, the effort that went into making it is lost.
- Software development is full of waste - fat requirements documents, elaborate architectures that are never used, code that goes months without being integrated, and documentation no one reads until it is irrelevant or misleading.
- The waste is rooted more in what we believe and feel than in what we do. Becoming aware of and addressing those beliefs and feelings takes time and experience.

### Single Code Base

- Multiple code streams are an enormous source of waste in software development.
- Reduce risk by signing a sequence of short contracts instead of one long one.
- Trust two metrics to measure the health of XP teams
  1. Number of defects found after development - An XP team should have dramatically fewer defects
  2. The time lag between the beginning of investment in an idea and when the idea first generates revenue

### Testing

- You either write a test before you change code or you don’t.
- Start the week by writing automated tests that will run when the stories are completed. Then spend the rest of the week completing the stories and getting the tests to pass.
- Write a failing automated test before changing any code.
- Beta testing is a symptom of weak testing practices and poor communication with customers.
