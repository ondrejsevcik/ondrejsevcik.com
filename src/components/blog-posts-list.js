import React from "react"
import { Link } from "gatsby"
import { SearchEngineOptimization } from "../components/seo"
import { groupBy } from "../utils/group-by"
import styled from "styled-components"

const List = styled.div`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const PostLink = styled(Link)`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: var(--blue-800);
  transition: box-shadow 200ms ease 0s;
  box-shadow: 0px 0px 0px currentColor;

  &:hover,
  &:focus {
    transition: box-shadow 50ms ease 0s;
    box-shadow: 0px 2px 0px currentColor;
  }
`

const GroupPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

const GroupTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 4rem;
`

export function BlogPostsList({ posts }) {
  let groupedPosts = Object.entries(
    groupBy(posts, post => post.date.getFullYear().toString())
  ).reverse()

  return (
    <List>
      <SearchEngineOptimization title="Blog" />
      {groupedPosts.map(([year, posts]) => {
        return (
          <section key={year}>
            <GroupTitle>{year}</GroupTitle>
            <GroupPosts>
              {posts.map(post => (
                <PostLink key={post.slug} to={post.slug}>
                  {post.title}
                </PostLink>
              ))}
            </GroupPosts>
          </section>
        )
      })}
    </List>
  )
}
