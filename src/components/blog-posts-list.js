import React from "react"
import { Link } from "gatsby"
import { formatDate } from "../utils/format-date"
import { SEO } from "../components/seo"

export function BlogPostsList({ posts }) {
  return (
    <div className="grid grid-col-1 gap-4">
      <SEO title="Blog" />
      {posts.map(post => {
        return (
          <div key={post.slug} className="p-2 flex flex-col">
            <Link to={post.slug} className="mb-1 text-xl hover:underline">
              {post.title}
            </Link>
            <time dateTime={post.date.toISOString()} className="text-sm">
              {formatDate(post.date)}
            </time>
          </div>
        )
      })}
    </div>
  )
}
