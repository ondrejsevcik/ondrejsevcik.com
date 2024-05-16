---
title: "Patterns for Organizing State in React Applications"
description: "A few patterns that I use for organizing state in React applications to avoid ending up with a mess."
date: "2024-02-27"
tags: ["tech"]
---

One common problem that I’ve noticed in many UI applications is that as the application grows, **the business logic is scattered around in various different components**.

This makes it very **difficult to understand** what each component is supposed to do and how the overall functionality works. Usually, **you end up with a lot of components that are hard to test**.

The following principles help to avoid these issues.

## #1: Express Your UI State Using Type Unions (aka Typestate)

When your component state grows large, it’s a good idea to use a TypeScript type union to define all possible states in a single place.

This will help with mapping out all possible states (aka eliminate impossible states). It will also help everyone quickly understand what this component is capable of.

<aside>
  <p>Use property kind to give each union type a descriptive name.</p>
</aside>

```tsx
// Not ideal
// It's hard to know what are valid states
// (e.g. There could be data and errorMessage set - is that a bug or one of the possible states?)
function Component() {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<Data>()
  const [errorMessage, setErrorMessage] = useState<string>("")

  // ..
}

// Better
// All states are defined in types.
// It's impossible to have data together with an error message set.
type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "loaded"; data: Data }
  | { kind: "error"; message: string }

function Component() {
  const [state, setState] = useState<State>({ kind: "idle" })

  // ..
}
```

## #2: Keep the state and its actions together

Keep the state and actions that can manipulate this state close together.

Together with typestates, this gives everyone a clear overview of all possible states and actions that can be done with the state in a single place.

```tsx
// Bad - don't provide setters to internal structures.
function Component() {
  const { state, setItems } = useMyState()

  const addNewItem = item => {
    setItems(items => [...items, item])
  }

  return <SomeUi />
}

// Better - provide actions. Keep the logic in one place (e.g. inside hook).
function Component() {
  const { items, addNewItem } = useMyState()

  return <SomeUi />
}
```

## #3: Most components should be without business logic

Prefer keeping the business logic in one place. If you follow the previous pattern, this should come naturally.

In practice, this means your components will often have `onSomething` callbacks. The actual logic will bubble up to the place where the state is manipulated.

<aside>
  <p>Nothing hinders your understanding of the system more than having to go through 10 different components to understand how the state is being manipulated.</p>
</aside>

With this approach, the majority of components will have very simple tests - tests that do not require Mocking API or mocking server calls.

```tsx
// Not ideal - Child holds business logic
function Parent() {
  const [state, actions] = useMyState()

  return <Child item={state.item} addNewItem={actions.addNewItem} />
}

function Child({ item, addNewItem }) {
  // This is business logic
  const handleClick = () => {
    if (item.isValid) addNewItem(item)
  }

  return <button onClick={handleClick}>Add item</button>
}

// Better
// The business logic was moved from Child
// into the action.addNewItem method itself.
function Parent() {
  const [state, actions] = useMyState()

  return <Child item={state.item} onAddItemClicked={actions.addNewItem} />
}

// This API makes Child very easy to test
function Child({ item, onAddItemClicked }) {
  return <button onClick={onAddItemClicked}>Add item</button>
}
```
