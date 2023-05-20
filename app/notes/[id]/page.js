import styles from "./page.module.css"
import { getMarkdownData } from "../../../utils/getMarkdown"

export async function generateMetadata({ params }) {
  const { title, description } = getMarkdownData(params.id)

  return { title, description }
}

export default function NoteDetailPage({ params }) {
  const { title, html } = getMarkdownData(params.id)

  return (
    <article className={styles.notesPage}>
      <h1 className={styles.title}>{title}</h1>

      {/* Not happy with this useless div, but haven't
       found a way to avoid it in React */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
