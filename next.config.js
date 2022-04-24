const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})
module.exports = withMDX({
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
    ]
  },
})
