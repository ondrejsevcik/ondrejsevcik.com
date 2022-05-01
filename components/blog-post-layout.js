import { FullPageLayout } from "./full-page-layout"
import { formatDate } from "../utils/format-date"
import { SearchEngineOptimization } from "./seo"
import styled from "styled-components"

const PostTitle = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
`

const Meta = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
`

const BlogPostWrapper = styled.section`
  max-width: 65ch;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: auto;
  margin-right: auto;
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
`

export default function BlogPostLayout({ meta, children }) {
  let { title, date: dateString, description, image } = meta
  let date = new Date(dateString)

  return (
    <FullPageLayout>
      <SearchEngineOptimization
        title={title}
        description={description}
        article={true}
        image={image}
      />
      <BlogPostWrapper>
        <header>
          <PostTitle>{title}</PostTitle>
          <div>
            <Meta as="time" dateTime={date.toISOString()}>
              {formatDate(date)}
            </Meta>
          </div>
        </header>
        <BlogPostContent>{children}</BlogPostContent>
      </BlogPostWrapper>
    </FullPageLayout>
  )
}
