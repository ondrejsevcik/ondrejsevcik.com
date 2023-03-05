import fs from "fs"
import { join } from "path"

export async function getAllPostMeta() {
  const slugs = fs
    .readdirSync(join(process.cwd(), "pages/blog"))
    .filter(f => f != "index.js")
    .filter(f => f != "index.module.css")

  return await Promise.all(
    slugs.map(slug =>
      import(`../pages/blog/${slug}/index.mdx`).then(({ meta }) => ({
        ...meta,
        slug,
      }))
    )
  )
}
