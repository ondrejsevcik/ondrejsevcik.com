import React from "react"
import PageLayout from "../components/page-layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <PageLayout>
      <header>
        <h1>{post.frontmatter.title}</h1>
        <div>
          <time dateTime={post.frontmatter.date.substring(0, 10)}>
            {post.frontmatter.date.substring(0, 10)}
          </time>
        </div>
      </header>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </PageLayout>
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
