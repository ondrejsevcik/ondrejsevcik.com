import { json } from "@vercel/remix"
import type { MetaFunction, HeadersFunction } from "@vercel/remix"
import { groupBy } from "../../../utils/group-by"
import { Link, useLoaderData } from "@remix-run/react"
import styles from "./route.module.css"
import { getBlogPosts } from "./getBlogPosts.server"

export const meta: MetaFunction = () => {
  return [{ title: `Blog | Ondrej Sevcik` }]
}

export const loader = async () => {
  const blogPosts = await getBlogPosts()
  return json(
    { blogPosts },
    {
      headers: {
        // Cache for a day
        "cache-control": "public, max-age=86400, s-maxage=86400",
      },
    },
  )
}

export const headers: HeadersFunction = ({ loaderHeaders }) => ({
  "cache-control": loaderHeaders.get("cache-control") ?? "",
})

export default function BlogPage() {
  const { blogPosts } = useLoaderData<typeof loader>()
  const groupedPosts = Object.entries(
    groupBy(blogPosts, post => new Date(post.date).getFullYear().toString()),
  ).reverse()

  return (
    <div className={styles.list}>
      <h1 className={styles.title}>Blog</h1>
      <p>
        Sharing my thoughts on frontend development, life, and anything in
        between. Writing mostly for my past self. Thanks for stopping by!
      </p>

      {groupedPosts.map(([year, posts]) => (
        <section key={year}>
          <h2 className={styles.groupTitle}>{year}</h2>
          <div className={styles.groupPosts}>
            {posts
              .sort(
                (pA, pB) =>
                  new Date(pB.date).getTime() - new Date(pA.date).getTime(),
              )
              .map(post => (
                <div className={styles.groupPost} key={post.id}>
                  <Link
                    to={`/blog/${encodeURIComponent(post.id)}`}
                    className={styles.postLink}
                  >
                    {post.title}
                  </Link>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}
