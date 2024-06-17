import { getRssFeedContent } from "./getRssFeedContent"
import type { LoaderFunctionArgs } from "@vercel/remix" // or cloudflare/deno

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const feedContent = getRssFeedContent()
  const headers = new Headers(request.headers)
  headers.set("Content-Type", "text/xml")
  headers.set("Cache-Control", "public, max-age=3600")

  return new Response(feedContent, {
    status: 200,
    headers,
  })
}
