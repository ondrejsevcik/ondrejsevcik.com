import React from "react"
import { FullPageLayout } from "../components/full-page-layout"
import { graphql } from "gatsby"
import { formatDate } from "../utils/format-date"
import { readingTime } from "../utils/reading-time"
import { SEO } from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  let title = post.frontmatter.title
  let description = post.frontmatter.description
  let date = new Date(post.frontmatter.date)
  let html = post.html

  return (
    <FullPageLayout>
      <SEO title={title} description={description} article={true} />
      <div className="mx-2">
        <section className="mt-8 max-w-2xl m-auto">
          <header className="mb-6">
            <h1 className="text-3xl mb-1">{title}</h1>
            <div className="text-sm">
              <time dateTime={date.toISOString()}>{formatDate(date)}</time>
              <span>・</span>
              <span>{readingTime(html)} min read</span>
            </div>
          </header>
          <article
            dangerouslySetInnerHTML={{ __html: html }}
            className="blog-post"
          />
        </section>
      </div>
    </FullPageLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        date
      }
    }
  }
`
