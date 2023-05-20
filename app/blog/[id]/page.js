import styles from "./page.module.css"
import { getBlogMarkdown } from "../../../utils/getMarkdown"
import { formatDate } from "../../../utils/format-date"

export async function generateMetadata({ params }) {
  const { title, description, date, image } = getBlogMarkdown(params.id)

  return {
    title,
    description,
    image,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: new Date(date).toISOString(),
      authors: ["Ondrej Sevcik"],
    },
  }
}

export default function BlogPostPage({ params }) {
  let { title, date: dateString, html } = getBlogMarkdown(params.id)

  let date = new Date(dateString)

  return (
    <section className={styles.blogPostWrapper}>
      <header>
        <h1 className={styles.postTitle}>{title}</h1>
        <time className={styles.meta} dateTime={date.toISOString()}>
          {formatDate(date)}
        </time>
      </header>
      <article
        className={styles.blogPostContent}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <footer className={styles.blogPostAside}>
        Liked the post? Have concerns? Reply via{" "}
        <a
          href={`mailto:hi@ondrejsevcik.com?subject=${title}`}
          target="_blank"
          rel="noreferrer"
        >
          email
        </a>
        .
      </footer>
    </section>
  )
}
