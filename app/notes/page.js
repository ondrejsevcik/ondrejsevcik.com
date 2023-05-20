import styles from "./page.module.css"
import Link from "next/link"
import { getSortedNotesData } from "../../utils/getMarkdown"

export const metadata = {
  title: "Notes",
}

function NotesCard({ title, description, href }) {
  return (
    <Link href={href} className={styles.noteCard}>
      <h1>{title}</h1>
      <p>{description}</p>
    </Link>
  )
}

export default function NotesPage() {
  const notesData = getSortedNotesData()

  console.log("notesData", notesData)
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{metadata.title}</h1>

      <div className={styles.cardList}>
        {notesData.map(note => (
          <NotesCard
            key={note.id}
            title={note.title}
            description={note.description}
            href={`/notes/${note.id}`}
          />
        ))}
      </div>
    </div>
  )
}
