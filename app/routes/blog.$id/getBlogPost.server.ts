import { getBlogMarkdown } from "../../../utils/getMarkdown"

export function getBlogPost(id: string) {
  return getBlogMarkdown(id)
}
