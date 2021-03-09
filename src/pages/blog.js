import React from "react"
import Wrapper from "../components/wrapper"
import { Link, graphql } from "gatsby"

export default function Blog({ data }) {
  return (
    <Wrapper>
      <ul>
        {data.allMarkdownRemark.nodes.map(node => (
          <li key={node.fields.slug}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <br />
            <time>{node.frontmatter.date.substring(0, 10)}</time>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

export const query = graphql`
  query Blog {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: "tech" } } }
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
