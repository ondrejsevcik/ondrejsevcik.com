import { groupBy } from "../../utils/group-by"
import { getSortedBlogData } from "../../utils/getMarkdown"
import Link from "next/link"
import styles from "./page.module.css"

export const metadata = {
  title: "Blog",
}

export default function BlogPage() {
  const allPosts = getSortedBlogData()
  const groupedPosts = Object.entries(
    groupBy(allPosts, post => new Date(post.date).getFullYear().toString()),
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
                    href={`/blog/${encodeURIComponent(post.id)}`}
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
