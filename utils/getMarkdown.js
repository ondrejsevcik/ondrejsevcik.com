import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { micromark } from "micromark"

const notesDir = path.join(process.cwd(), "app/notes/_content")

export function getSortedNotesData() {
  const fileNames = fs.readdirSync(notesDir)
  const allPostsData = fileNames
    .map(fn => fn.replace(/\.md$/, ""))
    .map(id => getMarkdownData(id))

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getMarkdownData(id) {
  const fullPath = path.join(notesDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data,
    html: micromark(matterResult.content),
  }
}
