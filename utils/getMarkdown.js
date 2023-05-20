import fs from "fs"
import path from "path"
import matter from "gray-matter"

const dir = path.join(process.cwd(), "app/notes/_content")

export function getSortedNotesData() {
  const fileNames = fs.readdirSync(dir)
  const allPostsData = fileNames
    .map(fn => fn.replace(/\.md$/, ""))
    .map(id => getMarkdownData(id))

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getMarkdownData(id) {
  const fullPath = path.join(dir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data,
    content: matterResult.content,
  }
}
