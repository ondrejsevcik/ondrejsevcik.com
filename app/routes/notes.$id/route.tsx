import { json } from "@vercel/remix"
import { useLoaderData } from "@remix-run/react"
import styles from "./route.module.css"
import { getNote } from "./getNote.server"

export const loader = async ({ params }) => {
  const note = await getNote(params.id)
  return json({ note })
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const { note } = data
  const title = `${note.title} | Ondrej Sevcik`
  return [
    { title: title },
    { name: "description", content: note.description },
    { property: "og:title", content: title },
    { property: "og:description", content: note.description },
    { property: "og:type", content: "article" },
    { property: "article:author", content: "Ondrej Sevcik" },
    {
      property: "article:published_time",
      content: new Date(note.date).toISOString(),
    },
  ]
}

export default function NoteDetailPage() {
  const {
    note: { title, html },
  } = useLoaderData()

  return (
    <article className={styles.notesPage}>
      <h1 className={styles.title}>{title}</h1>

      {/* Not happy with this useless div, but haven't
       found a way to avoid it in React */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
