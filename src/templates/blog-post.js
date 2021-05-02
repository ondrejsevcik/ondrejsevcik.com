import React from "react"
import { FullPageLayout } from "../components/full-page-layout"
import { graphql } from "gatsby"
import { formatDate } from "../utils/format-date"
import { readingTime } from "../utils/reading-time"
import { SearchEngineOptimization } from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  let title = post.frontmatter.title
  let description = post.frontmatter.description
  let date = new Date(post.frontmatter.date)
  let html = post.html

  return (
    <FullPageLayout>
      <SearchEngineOptimization
        title={title}
        description={description}
        article={true}
      />
      <div className="mx-2">
        <section className="mt-8 max-w-xl m-auto">
          <header className="mb-6">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <div className="text-sm font-medium">
              <time dateTime={date.toISOString()}>{formatDate(date)}</time>
              <span className="mx-2 opacity-30">|</span>
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
