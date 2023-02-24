import rehypeHighlight from "rehype-highlight"
import mdx from "@next/mdx"

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
})

export default withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  async rewrites() {
    return [
      {
        source: "/hello/js/script.js",
        destination: "https://plausible.io/js/script.js",
      },
      {
        source: "/hello/api/event",
        destination: "https://plausible.io/api/event",
      },
      {
        source: "/rss.xml",
        destination: "/api/rss",
      },
    ]
  },
})
