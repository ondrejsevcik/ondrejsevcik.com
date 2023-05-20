import styles from "./page.module.css"
import { getMarkdownData } from "../../../utils/getMarkdown"

export async function generateMetadata({ params }) {
  const { title, description } = getMarkdownData(params.id)

  return { title, description }
}

export default function NoteDetailPage({ params }) {
  const { title, content } = getMarkdownData(params.id)

  return (
    <div className={styles.notesPage}>
      <h1 className={styles.title}>{title}</h1>

      {content}
    </div>
  )
}
