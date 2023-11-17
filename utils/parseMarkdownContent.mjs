import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter"
import remarkParseFrontmatter from "remark-parse-frontmatter"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeStringify from "rehype-stringify"

export function parseMarkdownContent(content) {
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
    // Sanitize HTML
    .use(rehypeSanitize)
    // Serialize syntax tree to HTML
    .use(rehypeStringify)
    // And finally, process the input
    .processSync(content)

  return {
    frontmatter: result.data.frontmatter,
    html: result.value,
  }
}
