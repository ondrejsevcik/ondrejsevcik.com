import { metadata as bookmarks } from "./bookmarks/page"
import styles from "./page.module.css"
import Link from "next/link"

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
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{metadata.title}</h1>

      <div className={styles.cardList}>
        <NotesCard
          title={bookmarks.title}
          description={bookmarks.description}
          href="/notes/bookmarks"
        />
      </div>
    </div>
  )
}
