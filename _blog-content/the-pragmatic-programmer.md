---
title: "The Pragmatic Programmer, 20th Anniversary Edition"
description: "The Pragmatic Programmer, 20th Anniversary Edition"
date: "2020-04-27"
tags: ["book-review"]
image: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg"
---

This is definitely one of the most influential books that affected how I approach writing software. It's full of pragmatic and practical wisdom for the everyday life of a developer.

## Book notes

- Care about your software
  - There is no point in developing software unless you care about doing it well.
- Think about your work
  - Never run on autopilot, always think critically about what you're doing.
- It's in your hands
  - Try to fix it, or change the organization.
  - "You can ChangeYourOrganization or [ChangeYourOrganization](https://wiki.c2.com/?ChangeYourOrganization)."
- Provide options, don't make excuses and take responsibility
  - "I don't know... but I will find out!"
- Fix broken windows!
  - One hack in code leads to another hack and soon your code will become unmanageable.
- Be a catalyst for change
  - "It's easier to ask forgiveness than it is to get permission."
  - When you know something is right, just do it.
- Knowledge is an expiring asset
  - Make learning a habit
- Prototype to learn
  - Correctness
  - Completeness
  - Robustness (error checking)
  - Style
  - and then throw it away (it's a prototype!)
- Estimate with multiple scenarios
  - Pessimistic and optimistic estimate
  - "If everything goes right, it might be a few hours, but more realistically about 1 day, and if the weather turns out to be bad, then as much as a week."
  - "I will get back to you" - take some time for a more precise estimate
- Keep knowledge in plain text (could be JSON, HTML, YAML, ...)
  - Can be manipulated and read by every tool/human
- Achieve editor fluency
- Always use version control
- Fix the problem, not the blame
  - doesn't matter whose fault it is, it is your problem
- Keep a daybook
  - a journal of what you worked on
- Perfect software doesn't exist
  - It's better to accept this as a fact rather than wasting time and chasing this impossible dream.
- Design by contract
  - Be strict in what you accept before you begin and promise as little as possible in return.
- Crash early
  - the alternative is to work with corrupted data
  - a dead program usually does less damage than corrupted one
- Use assertions to prevent impossible
  - whenever you think "this could never happen" - add an assertion on that
  - Don't use assertions in place of real error handling
  - Testing doesn't find all bugs. Keep assertions also in production code (unless they are performance issue)
- Finish what you start
  - A routine that allocates the resource should also free it
- Take small steps - always!
- Avoid fortune telling
  - don't design code for an uncertain future - make your code replaceable or easy to throw away
- Tell, Don't ask
- Don't chain method calls
- Avoid global data
  - If it's important enough to be global, wrap it in an API
- Use reactive programming, streams, and events to decouple code
- Prefer `|>` pipe style of programming
  - loose coupling, no lingering state, fewer bugs
- Don't pay inheritance tax
  - alternatives are better - Interfaces, delegation, mixins, traits
  - Inheritance is rarely the answer
- Configuration as a service
  - Although static configuration is common, configuration as a service is better - can build configuration UI, the configuration can change during runtime (no restart needed).
- Concurrency
  - Shared state is an incorrect state
  - Use Actors and Processes to manage concurrency
- Don't let existing code dictate future code
  - All code can be replaced if it is no longer appropriate
- Name well; Rename when Needed
  - If you can't change the name of a variable for some reason, fix it! Make renaming easy and do it often.
- Maintain small stable teams
  - ~10 people where everyone knows, trust and depend on each other
  - fully functional - a team that can deliver features from planning to production (dev, design, DB, documentation, ...)
- Schedule your improvement/maintenance
  - Old system maintenance
  - Process reflection/refinement
  - New tech explorations
  - Learning new skill
- Do what works, not what's fashionable
  - Try it with a small team. If it works, expand, if not, abort (or keep the bits that work).
