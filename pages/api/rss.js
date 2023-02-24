import { getRssFeedContent } from "../../utils/getRssFeedContent"

export default async function handler(req, res) {
  const feedContent = await getRssFeedContent()

  return res
    .setHeader("Content-Type", "text/xml")
    .setHeader("Cache-Control", "public, max-age=0, must-revalidate")
    .status(200)
    .send(feedContent)
}
