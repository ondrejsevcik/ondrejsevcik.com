import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <header>
        <h1>{post.frontmatter.title}</h1>
        <div className="post-meta">
          <time dateTime={post.frontmatter.date.substring(0, 10)}>
            {post.frontmatter.date.substring(0, 10)}
          </time>
        </div>
      </header>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
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
