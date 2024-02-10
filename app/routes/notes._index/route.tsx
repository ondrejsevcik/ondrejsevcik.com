import { Link, useLoaderData } from "@remix-run/react"
import { json } from "@remix-run/node"
import styles from "./route.module.css"
import type { MetaFunction } from "@remix-run/node"
import { getNotes } from "./getNotes.server"

export const meta: MetaFunction = () => {
  return [{ title: `Notes | Ondrej Sevcik` }]
}

export const loader = async () => {
  const notes = await getNotes()
  return json({ notes })
}

function NotesCard({ title, description, href }) {
  return (
    <Link to={href} className={styles.noteCard}>
      <h1>{title}</h1>
      <p>{description}</p>
    </Link>
  )
}

export default function NotesPage() {
  const { notes } = useLoaderData()

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Notes</h1>

      <div className={styles.cardList}>
        {notes.map(note => (
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
