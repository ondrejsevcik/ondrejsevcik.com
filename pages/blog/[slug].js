import { getPostBySlug, getAllPosts } from "../../utils/api"
import { FullPageLayout } from "../../components/full-page-layout"
import { formatDate } from "../../utils/format-date"
import { readingTime } from "../../utils/reading-time"
import { SearchEngineOptimization } from "../../components/seo"
import markdownToHtml from "../../utils/markdownToHtml"
import styled from "styled-components"

const PostTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 3rem;
`

const Meta = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
`

const MetaDivider = styled.span`
  opacity: 0.3;
  padding: 0 0.5rem;
  &:before {
    content: "|";
  }
`

const BlogPostWrapper = styled.section`
  max-width: 65ch;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const BlogPostContent = styled.article`
  & h1 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
  }

  & h2 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }

  & h3 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
  }

  & a {
    color: var(--blue-800);

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  & > p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 65ch;
  }

  & figure {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  & figcaption {
    margin: auto;
    margin-top: 0.5rem;
    max-width: 32rem;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  & ol {
    margin-left: 1.5rem;
    list-style-type: decimal;
  }

  & ol > li {
    margin-bottom: 0.5rem;
  }

  & ul {
    margin-left: 2rem;
    list-style-type: disc;
  }

  & ul > li {
    margin-bottom: 0.5rem;
  }

  & blockquote {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-left-width: 4px;
    border-color: rgba(3, 137, 255, 1);
    background-color: rgba(213, 235, 255, 1);
    padding: 0.5rem;
  }

  /* There is also code inside <pre> element,
  but that one should be styled differently */
  & p code {
    background-color: rgba(31, 41, 55, 0.1);
    border-radius: 0.25rem;
    font-family: var(--font-sans);
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  & pre {
    overflow-x: auto;
    border-radius: 0.25rem;
    background-color: rgba(243, 244, 246, 1);
    padding: 0.75rem;
    font-family: var(--font-mono);
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  & .warning-box {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border-left-width: 4px;
    border-color: rgba(252, 214, 100, 1);
    background-color: rgba(254, 241, 203, 1);
    padding: 0.5rem;
  }

  & .info-box {
    padding: 0.5rem;
    background-color: rgba(254, 241, 203, 1);
    border-bottom-right-radius: 0.25rem;
    border-color: rgba(252, 214, 100, 1);
    border-left-width: 4px;
    border-top-right-radius: 0.25rem;
  }
`

export default function BlogPost({ post }) {
  let { title, date: dateString, description, html } = post
  let date = new Date(dateString)

  return (
    <FullPageLayout>
      <SearchEngineOptimization
        title={title}
        description={description}
        article={true}
      />
      <BlogPostWrapper>
        <header>
          <PostTitle>{title}</PostTitle>
          <div>
            <Meta as="time" dateTime={date.toISOString()}>
              {formatDate(date)}
            </Meta>
            <MetaDivider />
            <Meta>{readingTime(html)} min read</Meta>
          </div>
        </header>
        <BlogPostContent dangerouslySetInnerHTML={{ __html: html }} />
      </BlogPostWrapper>
    </FullPageLayout>
  )
}

// This function gets called at build time on server-side.
// Won't be called on client-side.
export async function getStaticProps({ params }) {
  const { content, ...post } = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "description",
    "content",
  ])

  const html = await markdownToHtml(content || "")

  return {
    props: {
      post: {
        ...post,
        html,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])
  const paths = posts.map(({ slug }) => ({ params: { slug } }))

  return { paths, fallback: false }
}
