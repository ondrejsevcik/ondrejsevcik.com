import { json } from "@remix-run/node"
import styles from "./route.module.css"
import { formatDate } from "../../../utils/formatDate"
import { useLoaderData } from "@remix-run/react"
import { getBlogPost } from "./getBlogPost.server"

export const loader = async ({ params }) => {
  const blogPost = await getBlogPost(params.id)
  return json({ blogPost })
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const title = `${data.blogPost.title} | Ondrej Sevcik`
  return [
    { title: title },
    { name: "description", content: data.blogPost.description },
    { property: "og:title", content: title },
    { property: "og:description", content: data.blogPost.description },
    { property: "og:images", content: data.blogPost.image },
    { property: "og:type", content: "article" },
    { property: "og:type", content: "publishedTime" },
    { property: "article:author", content: "Ondrej Sevcik" },
    {
      property: "article:published_time",
      content: new Date(data.blogPost.date).toISOString(),
    },
  ]
}

export default function BlogPostPage() {
  const { blogPost } = useLoaderData()
  let { title, date: dateString, html } = blogPost

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
      <footer className={styles.footer}>
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
