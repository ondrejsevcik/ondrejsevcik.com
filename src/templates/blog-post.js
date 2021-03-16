import React from "react"
import { FullPageLayout } from "../components/full-page-layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <FullPageLayout>
      <header>
        <h1>{post.frontmatter.title}</h1>
        <div>
          <time dateTime={post.frontmatter.date.substring(0, 10)}>
            {post.frontmatter.date.substring(0, 10)}
          </time>
        </div>
      </header>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
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
