import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export function getMarkdownContent(content: string): Record<string, unknown> {
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
		.processSync(content);

	return {
		...(result.data.frontmatter as Record<string, unknown>),
		html: result.value.toString(),
	};
}
