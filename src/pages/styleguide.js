import React from "react"
import PageLayout from "../components/page-layout"
import { graphql } from "gatsby"

export default function Styleguide({ data }) {
  const page = data.markdownRemark
  return (
    <PageLayout>
      <header>
        <h1>{page.frontmatter.title}</h1>
      </header>
      <article dangerouslySetInnerHTML={{ __html: page.html }} />
    </PageLayout>
  )
}

export const query = graphql`
  query Styleguide {
    markdownRemark(fields: { slug: { eq: "/styleguide-content/" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
