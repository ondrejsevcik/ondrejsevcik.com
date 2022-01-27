import Head from "next/head"

export function SearchEngineOptimization({ title, description, article }) {
  const defaultDescription = "Blogging about everything dev."

  return (
    <Head>
      <title>{[title, "Ondrej Sevcik"].filter(t => t).join(" | ")}</title>
      <meta name="description" content={description || defaultDescription} />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Blog posts RSS"
        href="https://ondrejsevcik.com/rss.xml"
      ></link>

      {/* Open Graph data */}
      {article ? <meta property="og:type" content="article" /> : null}
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {/* <meta property="og:url" content="http://www.example.com/" /> */}
      {/* <meta property="og:image" content="http://example.com/image.jpg" /> */}

      {/* Twitter SEO */}
      {<meta name="twitter:card" value="summary" />}
      {<meta name="twitter:creator" content="@ondrejsevcik" />}

      <script
        defer
        data-domain="ondrejsevcik.com"
        src="https://plausible.io/js/plausible.js"
      ></script>
    </Head>
  )
}
