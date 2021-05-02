import React from "react"
import { Link } from "gatsby"
import { formatDate } from "../utils/format-date"
import { readingTime } from "../utils/reading-time"
import { SearchEngineOptimization } from "../components/seo"

export function BlogPostsList({ posts }) {
  return (
    <div className="grid grid-col-1 gap-4">
      <SearchEngineOptimization title="Blog" />
      {posts.map(post => {
        return (
          <div key={post.slug} className="p-2">
            <div className="mb-1 text-2xl">
              <Link to={post.slug} className="link">
                {post.title}
              </Link>
            </div>
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
