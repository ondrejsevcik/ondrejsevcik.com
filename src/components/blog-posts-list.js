import React from "react"
import { Link } from "gatsby"
import { SearchEngineOptimization } from "../components/seo"

export function BlogPostsList({ posts }) {
  let groupedPosts = Object.entries(
    groupBy(posts, post => post.date.getFullYear().toString())
  ).reverse()

  return (
    <div className="grid grid-col-1 gap-4">
      <SearchEngineOptimization title="Blog" />
      {groupedPosts.map(([year, posts]) => {
        return (
          <div key={year} className="">
            <div className="text-2xl font-bold mb-4 mt-4">{year}</div>
            {posts.map(post => {
              return (
                <div key={post.slug} className="mb-4">
                  <Link
                    to={post.slug}
                    className="text-blue-800 text-lg font-medium animated-underline"
                  >
                    {post.title}
                  </Link>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

function groupBy(arr, getKeyFn) {
  let groups = {}
  arr.forEach(function (el) {
    let key = getKeyFn(el)
    if (key in groups === false) {
      groups[key] = []
    }
    groups[key].push(el)
  })
  return groups
}
