import { FullPageLayout } from "../../components/full-page-layout"
import Link from "next/link"
import { SearchEngineOptimization } from "../../components/seo"
import { groupBy } from "../../utils/group-by"
import styled from "styled-components"
import { getAllPostMeta } from "../../utils/api"

const List = styled.div`
  max-width: 42rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: auto;
  margin-right: auto;
`

const PostLink = styled.a`
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

export default function Blog({ groupedPosts }) {
  return (
    <FullPageLayout>
      <List>
        <SearchEngineOptimization title="Blog" />
        {groupedPosts.map(([year, posts]) => (
          <section key={year}>
            <GroupTitle>{year}</GroupTitle>
            <GroupPosts>
              {posts
                .sort(
                  (pA, pB) =>
                    new Date(pB.date).getTime() - new Date(pA.date).getTime()
                )
                .map(post => (
                  <GroupPost key={post.slug}>
                    <Link
                      href={`/blog/${encodeURIComponent(post.slug)}`}
                      passHref
                    >
                      <PostLink>{post.title}</PostLink>
                    </Link>
                  </GroupPost>
                ))}
            </GroupPosts>
          </section>
        ))}
      </List>
    </FullPageLayout>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPostMeta()
  const groupedPosts = Object.entries(
    groupBy(allPosts, post => new Date(post.date).getFullYear().toString())
  ).reverse()

  return { props: { groupedPosts } }
}
