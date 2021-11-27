import React from "react"
import { FullPageLayout } from "../components/full-page-layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { SearchEngineOptimization } from "../components/seo"
import { groupBy } from "../utils/group-by"
import styled from "styled-components"

const List = styled.div`
  max-width: 42rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const PostLink = styled(Link)`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: var(--blue-800);

  &:hover {
    text-decoration: underline;
  }
`

const GroupPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`

const GroupPost = styled.div`
  display: flex;
  flex-direction: column;
`

const GroupTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 4rem;
`

export default function Blog({ data }) {
  let posts = data.allMarkdownRemark.nodes.map(node => ({
    slug: node.fields.slug,
    title: node.frontmatter.title,
    description: node.frontmatter.description,
    date: new Date(node.frontmatter.date),
    tags: node.frontmatter.tags,
    html: node.html,
  }))

  let groupedPosts = Object.entries(
    groupBy(posts, post => post.date.getFullYear().toString())
  ).reverse()

  return (
    <FullPageLayout>
      <List>
        <SearchEngineOptimization title="Blog" />
        {groupedPosts.map(([year, posts]) => {
          return (
            <section key={year}>
              <GroupTitle>{year}</GroupTitle>
              <GroupPosts>
                {posts.map(post => (
                  <GroupPost>
                    <PostLink key={post.slug} to={post.slug}>
                      {post.title}
                    </PostLink>
                  </GroupPost>
                ))}
              </GroupPosts>
            </section>
          )
        })}
      </List>
    </FullPageLayout>
  )
}

export const query = graphql`
  query Blog {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          title
          date
          tags
        }
      }
    }
  }
`
