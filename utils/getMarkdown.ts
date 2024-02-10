import fs from "fs"
import path from "path"
import { parseMarkdownContent } from "./parseMarkdownContent"

const blogDir = path.join(process.cwd(), "_blog-content")
const notesDir = path.join(process.cwd(), "app/notes/_content")

export function getSortedBlogData() {
  return getSortedData(blogDir)
}

export function getSortedNotesData() {
  return getSortedData(notesDir)
}

export function getNoteMarkdown(id: string) {
  return getMarkdownData({ id, dir: notesDir })
}

export function getBlogMarkdown(id: string) {
  return getMarkdownData({ id, dir: blogDir })
}

function getSortedData(dir: string) {
  const fileNames = fs.readdirSync(dir)
  const allPostsData = fileNames
    .map(fn => fn.replace(/\.md$/, ""))
    .map(id => getMarkdownData({ id, dir }))

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

function getMarkdownData({ id, dir }: { id: string; dir: string }) {
  const fullPath = path.join(dir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const content = parseMarkdownContent(fileContents)

  return { id, ...content }
}
