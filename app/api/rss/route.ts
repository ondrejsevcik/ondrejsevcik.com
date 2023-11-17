import { getRssFeedContent } from "../../../utils/getRssFeedContent"

export async function GET(request: Request) {
  const feedContent = await getRssFeedContent()
  const headers = new Headers(request.headers)
  headers.set("Content-Type", "text/xml")
  headers.set("Cache-Control", "public, max-age=0, must-revalidate")

  return new Response(feedContent, {
    status: 200,
    headers,
  })
}
