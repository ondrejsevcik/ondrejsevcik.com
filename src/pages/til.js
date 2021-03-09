import React from "react"
import PageLayout from "../components/page-layout"
import { Link, graphql } from "gatsby"

export default function TilPage({ data }) {
  return (
    <PageLayout>
      <ul>
        {data.allMarkdownRemark.nodes.map(node => (
          <li key={node.fields.slug}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <br />
            <time>{node.frontmatter.date.substring(0, 10)}</time>
          </li>
        ))}
      </ul>
    </PageLayout>
  )
}

export const query = graphql`
  query Til {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: "til" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
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
