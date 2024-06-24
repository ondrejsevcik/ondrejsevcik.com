---
title: "Things That Surprised Me While Reading Remix Docs"
description: "I read Remix docs end to end. While most of it is straightforward, some parts surprised me. Here are some of them."
date: "2024-06-22"
tags: ["tech"]
---

I decided to read the Remix documentation from end to end. While most aspects of Remix are well thought out and straightforward, there were some parts that caught my attention, and I had to note them down.

Here are some of them.

## Throwing Responses in Remix Is Expected

Although in JavaScript you can throw all kinds of objects, the general recommendation is to throw an [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) instance. In Remix projects, it is also expected to throw a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response).

When a `Response` is thrown in a `loader`, it is automatically unwrapped into an `ErrorResponse` instance with `state`, `statusText`, and `data`. To differentiate a `Response` from an `Error`, you need to use the [`isRouteErrorResponse`](https://remix.run/docs/en/main/utils/is-route-error-response) utility.

## Remix Sanitizes Error Stack Trace Before Sending It to the Client

Errors received through `useRouteError` are automatically [sanitized](https://remix.run/docs/en/main/guides/errors#error-sanitization) by Remix to prevent the leakage of sensitive information. The server can still access the full error stack trace within the [handleError](https://remix.run/docs/en/main/file-conventions/entry.server#handleerror) handler.

```jsx
export async function loader() {
  if (badConditionIsTrue()) {
    throw new Error("Oh no! Something went wrong!")
  }
}

export function ErrorBoundary() {
  const error = useRouteError()
  // When NODE_ENV=production:
  // error.message = "Unexpected Server Error"
  // error.stack = undefined
}
```

## Loader Responses Are Processed Top-Down

Even though Remix calls all `loader` functions in parallel, it still processes them from the root to the leaf route.

For example, if the `/parent` loader returns a redirect, the return value of the `/parent/child` route will not be used.

## Client Loader Not Executing on the Initial Load

This is something that surprised me a bit. Initially, I thought that Remix runs `loaders` → `clientLoaders` → renders the UI. However, this is not how it works by default.

In the default setup, the `clientLoader` is not executed during [initial hydration](https://remix.run/docs/en/main/route/client-loader#hydration-behavior). It must be explicitly marked with `clientLoader.hydrate = true` to inform Remix that the `clientLoader` should also run during the initial render.

If the route exports a `clientLoader` but no `loader`, then `hydrate` is automatically treated as `true`.

## The Index Param in the Route Path

Because the index route and its parent might have the same URL, the `?index` [param](https://remix.run/docs/en/main/components/form#index) is used to differentiate between them.

```jsx
<Form action="/accounts" method="post" /> // will hit /accounts.tsx
<Form action="/accounts?index" method="post" /> // will hit /accounts._index.tsx
```

## Json and Redirect Are Just Wrappers for Response

You will see a lot of `json()` and `redirect()` calls throughout the Remix project. These functions are simply wrappers around the native `Response` object.

```jsx
return json({ any: "thing" })
// Is same as
return new Response(JSON.stringify({ any: "thing" }), {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
})
```

## Defer Can’t Be Used Conditionally

The [defer](https://remix.run/docs/en/main/guides/streaming#3-deferring-data-in-loaders) utility is used for streaming response to the client as soon as possible.

While experimenting with it, I wrote code similar to this, only to find out that it didn't work as intended.

```jsx
export const loader = () => {
  try {
    const promise = fetch("/something")
    return defer({ promise })
  } catch (e) {
    return redirect("/some-other-route") // this will never be called!
  }
}
```

Defer expects a promise, which is then streamed to the browser. Once streaming begins, there's no turning back—the loader can't "un-stream" part of the response and send a different response afterward.

Defer should be the last thing called in the loader function.

## Merging Headers for Nested Routes Can Be Complicated

Remix executes all `loader` functions in parallel, which can lead to race conditions when multiple loaders set response headers. For example, if all loaders set the `cache-control` header, it may cause caching issues depending on which loader finishes first.

For this reason, it's recommended to [define headers only in leaf routes](https://remix.run/docs/en/main/route/headers#nested-routes) (not in parent routes). This eliminates the problem altogether.

## You Can’t Use High-Order Functions in the Loader

Due to [how Remix bundles code for server and client](https://remix.run/docs/en/main/guides/constraints#higher-order-functions), it's impossible to use higher-order functions for loaders and other static exports.

For instance, this won't work because Remix cannot remove this code from the client due to module side effects:

```jsx
export const loader = buildMyLoader(() => {
  // This call is module side effect
  return json({ some: "data" })
})
```

## Loading Environment Variables in the Root Template

The root template loader is an ideal place to load environment variables. When combined with `shouldRevalidate` set to `false`, it ensures that [environment variables are loaded just once](https://remix.run/docs/en/main/route/should-revalidate#never-reloading-the-root) without reloading them on client-side navigation.

```jsx
export const loader = async () => {
  return json({ MY_KEY: process.env.MY_KEY })
}

export const shouldRevalidate = () => false
```

## The Remix App Can Work Without JavaScript

If you do not include the `<Script />` [tag](https://remix.run/docs/en/main/components/scripts) in the root template, Remix won’t send any JavaScript to the client. The whole app will then work like a traditional HTML-only web app.

```jsx
export default function Root() {
  return (
    ...
    <body>
      <Script /> // if ommited, it sends only HTML
    </body>
  )
}
```

## Remix Uses Meta Export From the Leaf Route

Remix does not perform any merging on `meta` tags. When multiple routes export `meta` tags, the leaf route receives all of them and must handle merging manually.

The gotcha here is that `meta` tags are only additive. Simply merging them all together can result in duplicate tags in your document.

The solution is to filter out [unwanted tags](https://remix.run/docs/en/main/route/meta#merging-with-parent-meta) beforehand.

```jsx
// Parent route
export const meta = () => [{ title: "Parent" }]

// Child route
export const meta = () => [{ title: "Child" }]

// Now the page has two <title> tags
```
