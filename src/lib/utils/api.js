import fs from "fs"
import { join } from "path"

export async function getAllPostMeta() {
  const blogPosts = fs
    .readdirSync(join(process.cwd(), "pages/blog"))
    .filter(f => f != "index.js")
    .filter(f => f != "index.module.css")
    .map(fileName => fileName.replace(/\.mdx$/, ""))

  return await Promise.all(
    blogPosts.map(blogPost =>
      import(`../pages/blog/${blogPost}.mdx`).then(({ meta }) => ({
        ...meta,
        slug: blogPost,
      }))
    )
  )
}
