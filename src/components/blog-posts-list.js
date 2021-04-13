import React from "react"
import { Link } from "gatsby"
import { formatDate } from "../utils/format-date"
import { readingTime } from "../utils/reading-time"
import { SEO } from "../components/seo"

export function BlogPostsList({ posts }) {
  return (
    <div className="grid grid-col-1 gap-4">
      <SEO title="Blog" />
      {posts.map(post => {
        return (
          <div key={post.slug} className="p-2 flex flex-col">
            <Link to={post.slug} className="link mb-1 text-2xl">
              {post.title}
            </Link>
            <div className="text-sm">
              <time dateTime={post.date.toISOString()}>
                {formatDate(post.date)}
              </time>
              <span>・</span>
              <span>{readingTime(post.html)} min read</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
