import Head from "next/head"

export function SearchEngineOptimization({
  title,
  description,
  article,
  image,
}) {
  const defaultDescription = "Blogging about everything dev."

  return (
    <Head>
      <title>{[title, "Ondrej Sevcik"].filter(t => t).join(" | ")}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description || defaultDescription} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Blog posts RSS"
        href="https://ondrejsevcik.com/rss.xml"
      />

      {/* Open Graph data */}
      {article ? <meta property="og:type" content="article" /> : null}
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {/* <meta property="og:url" content="http://www.example.com/" /> */}
      {image ? <meta property="og:image" content={image} /> : null}

      {/* Twitter SEO */}
      {<meta name="twitter:card" value="summary" />}
      {<meta name="twitter:creator" content="@ondrejsevcik" />}

      <script
        defer
        data-domain="ondrejsevcik.com"
        data-api="/hello/api/event"
        src="/hello/js/script.js"
      ></script>
    </Head>
  )
}
