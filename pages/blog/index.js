import { FullPageLayout } from "../../components/full-page-layout"
import Link from "next/link"
import { SearchEngineOptimization } from "../../components/seo"
import { groupBy } from "../../utils/group-by"
import styles from "./index.module.css"
import { getAllPostMeta } from "../../utils/api"

export default function Blog({ groupedPosts }) {
  return (
    <FullPageLayout>
      <div className={styles.list}>
        <h1 className={styles.title}>Blog</h1>
        <p>
          Sharing my thoughts on frontend development, life, and anything in
          between. Writing mostly for my past self. Thanks for stopping by!
        </p>
        <SearchEngineOptimization title="Blog" />
        {groupedPosts.map(([year, posts]) => (
          <section key={year}>
            <h2 className={styles.groupTitle}>{year}</h2>
            <div className={styles.groupPosts}>
              {posts
                .sort(
                  (pA, pB) =>
                    new Date(pB.date).getTime() - new Date(pA.date).getTime()
                )
                .map(post => (
                  <div className={styles.groupPost} key={post.slug}>
                    <Link
                      href={`/blog/${encodeURIComponent(post.slug)}`}
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
