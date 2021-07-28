import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export function SearchEngineOptimization({ title, description, article }) {
  const { site } = useStaticQuery(query)
  const { siteMetadata } = site

  const seo = {
    title: title,
    description: description || siteMetadata.description,
  }

  return (
    <Helmet
      defaultTitle={siteMetadata.title}
      title={seo.title}
      titleTemplate={siteMetadata.titleTemplate}
    >
      <html lang="en" />
      <meta name="description" content={seo.description} />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Blog posts RSS"
        href={`${siteMetadata.url}/rss.xml`}
      ></link>

      {/* Open Graph data */}
      {article ? <meta property="og:type" content="article" /> : null}
      {seo.title ? <meta property="og:title" content={seo.title} /> : null}
      {seo.description ? (
        <meta property="og:description" content={seo.description} />
      ) : null}
      {/* <meta property="og:url" content="http://www.example.com/" /> */}
      {/* <meta property="og:image" content="http://example.com/image.jpg" /> */}

      {/* Twitter SEO */}
      {<meta name="twitter:card" value="summary" />}
      {<meta name="twitter:creator" content="@ondrejsevcik" />}
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        url
      }
    }
  }
`
