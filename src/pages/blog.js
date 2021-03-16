import React from "react"
import { FullPageLayout } from "../components/full-page-layout"
import { Link, graphql } from "gatsby"

export default function Blog({ data }) {
  return (
    <FullPageLayout>
      <div className="max-w-xl m-auto">
        <div className="grid grid-col-1 gap-4 mt-8 mx-4">
          {data.allMarkdownRemark.nodes.map(node => {
            let date = new Date(node.frontmatter.date)
            return (
              <Link
                key={node.fields.slug}
                to={node.fields.slug}
                className="p-4 rounded-xl hover:bg-gray-100"
              >
                <h2 className="mb-2 text-2xl">{node.frontmatter.title}</h2>
                <time dateTime={date.toISOString()}>{formatDate(date)}</time>
              </Link>
            )
          })}
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

function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date)
}
