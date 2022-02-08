import { getAllPostMeta } from "./api"
import { Feed } from "feed"
import fs from "fs"

const baseUrl = "https://ondrejsevcik.com"

export async function generateRssFeed() {
  let posts = await getAllPostMeta()
  posts = posts.sort((a, b) => a.date - b.date)

  const feed = new Feed({
    title: "Ondrej Sevcik",
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
    const { slug, title, date, description } = post
    const url = `${baseUrl}/blog/${slug}`

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      date: new Date(date),
    })
  })

  fs.writeFileSync("public/rss.xml", feed.rss2())
}
