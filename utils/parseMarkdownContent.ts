import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter"
import remarkParseFrontmatter from "remark-parse-frontmatter"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import rehypeHighlight from "rehype-highlight"

type MarkdownContent = {
  title: string
  description: string
  date: string
  image?: string
  html: string
}

export function parseMarkdownContent(content: string): MarkdownContent {
  const result = unified()
    // Take Markdown as input and turn it into MD syntax tree
    .use(remarkParse)
    // Add support for frontmatter in MD
    .use(remarkFrontmatter, ["yaml"])
    // Prase and validate Markdown frontmatter (YAML) to file.data.frontmatter.
    .use(remarkParseFrontmatter)
    // Switch from MD syntax tree (remark) to HTML syntax tree (rehype)
    .use(remarkRehype, {
      // Necessary for support HTML embeds (see next plugin)
      allowDangerousHtml: true,
    })
    // Support HTML embedded inside markdown
    .use(rehypeRaw)
    // Improve code highlighting
    .use(rehypeHighlight)
    // Serialize syntax tree to HTML
    .use(rehypeStringify)
    // And finally, process the input
    .processSync(content)

  const { frontmatter } = result.data

  return {
    // @ts-ignore
    title: frontmatter.title,
    // @ts-ignore
    description: frontmatter.description,
    // @ts-ignore
    date: frontmatter.date,
    // @ts-ignore
    image: frontmatter.image,
    // @ts-ignore
    html: result.value,
  }
}
