import fs from "fs"
import { join } from "path"
import { getSortedBlogData } from "./getMarkdown"

export async function getAllPostMeta() {
  const slugs = fs
    .readdirSync(join(process.cwd(), "pages/blog"))
    .filter(f => f != "index.js")
    .filter(f => f != "index.module.css")

  const oldPosts = await Promise.all(
    slugs.map(slug =>
      import(`../pages/blog/${slug}/index.mdx`).then(({ meta }) => ({
        ...meta,
        slug,
      })),
    ),
  )

  const newPosts = getSortedBlogData().map(post => ({
    ...post,
    slug: post.id,
  }))

  return [...oldPosts, ...newPosts]
}
