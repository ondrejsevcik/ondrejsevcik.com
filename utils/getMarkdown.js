import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { micromark } from "micromark"

const blogDir = path.join(process.cwd(), "app/blog/_content")
const notesDir = path.join(process.cwd(), "app/notes/_content")

export function getSortedBlogData() {
  return getSortedData(blogDir)
}

export function getSortedNotesData() {
  return getSortedData(notesDir)
}

export function getNoteMarkdown(id) {
  return getMarkdownData({ id, dir: notesDir })
}

export function getBlogMarkdown(id) {
  return getMarkdownData({ id, dir: blogDir })
}

function getSortedData(dir) {
  const fileNames = fs.readdirSync(dir)
  const allPostsData = fileNames
    .map(fn => fn.replace(/\.md$/, ""))
    .map(id => getMarkdownData({ id, dir }))

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

function getMarkdownData({ id, dir }) {
  const fullPath = path.join(dir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data,
    html: micromark(matterResult.content),
  }
}
