import { getAllPosts } from "./api"
import { Feed } from "feed"
import fs from "fs"

const baseUrl = "https://ondrejsevcik.com"

export function generateRssFeed() {
  const posts = getAllPosts(["slug", "title", "date", "content"]).sort(
    (a, b) => a.date - b.date
  )

  const feed = new Feed({
    title: "Blog posts by Ondrej Sevcik",
    description: "Blogging about everything dev.",
    generator: "",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author: {
      name: "Ondrej Sevcik",
    },
  })

  posts.forEach(post => {
    const { slug, title, date, content } = post
    const url = `${baseUrl}/blog/${slug}`

    feed.addItem({
      title,
      id: url,
      link: url,
      description: content.substring(0, 100) + "...",
      date: new Date(date),
    })
  })

  fs.writeFileSync("public/rss.xml", feed.rss2())
}
