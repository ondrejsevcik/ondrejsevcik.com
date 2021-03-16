import React from "react"
import { FullPageLayout } from "../components/full-page-layout"
import { graphql } from "gatsby"

export default function Styleguide({ data }) {
  const page = data.markdownRemark
  return (
    <FullPageLayout>
      <header>
        <h1>{page.frontmatter.title}</h1>
      </header>
      <article dangerouslySetInnerHTML={{ __html: page.html }} />
    </FullPageLayout>
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
