import { FullPageLayout } from "./full-page-layout"
import { formatDate } from "../utils/format-date"
import { SearchEngineOptimization } from "./seo"
import styles from "./blog-post-layout.module.css"

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
      <section className={styles.blogPostWrapper}>
        <header>
          <h1 className={styles.postTitle}>{title}</h1>
          <div>
            <time className={styles.meta} dateTime={date.toISOString()}>
              {formatDate(date)}
            </time>
          </div>
        </header>
        <article className={styles.blogPostContent}>{children}</article>
      </section>
    </FullPageLayout>
  )
}
