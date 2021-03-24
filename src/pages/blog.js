import React from "react"
import { FullPageLayout } from "../components/full-page-layout"
import { BlogPostsList } from "../components/blog-posts-list"
import { graphql } from "gatsby"

export default function Blog({ data }) {
  return (
    <FullPageLayout>
      <div className="max-w-xl m-auto">
        <div className="mx-4 mt-8">
          <BlogPostsList
            posts={data.allMarkdownRemark.nodes.map(node => ({
              slug: node.fields.slug,
              title: node.frontmatter.title,
              date: new Date(node.frontmatter.date),
              html: node.html,
            }))}
          />
        </div>
      </div>
    </FullPageLayout>
  )
}

export const query = graphql`
  query Blog {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: "tech" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          title
          date
        }
      }
    }
  }
`
