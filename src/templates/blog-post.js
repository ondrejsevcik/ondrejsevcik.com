import React from "react"
import { FullPageLayout } from "../components/full-page-layout"
import { graphql } from "gatsby"
import { formatDate } from "../utils/format-date"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  let title = post.frontmatter.title
  let date = new Date(post.frontmatter.date)
  let html = post.html

  return (
    <FullPageLayout>
      <div className="mx-2">
        <section className="mt-8 max-w-2xl m-auto">
          <header className="mb-6">
            <h1 className="text-3xl mb-1">{title}</h1>
            <time dateTime={date.toISOString()} className="text-sm">
              {formatDate(date)}
            </time>
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
        date
      }
    }
  }
`
