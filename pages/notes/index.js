import { FullPageLayout } from "../../components/full-page-layout"
import { SearchEngineOptimization } from "../../components/seo"
import { meta as bookmarks } from "./bookmarks/index"
import styles from "./index.module.css"
import Link from "next/link"

export const meta = {
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
    <FullPageLayout>
      <SearchEngineOptimization title={meta.title} />

      <div className={styles.page}>
        <h1 className={styles.title}>{meta.title}</h1>

        <div className={styles.cardList}>
          <NotesCard
            title={bookmarks.title}
            description={bookmarks.description}
            href="/notes/bookmarks"
          />
        </div>
      </div>
    </FullPageLayout>
  )
}
