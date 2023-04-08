import { FullPageLayout } from "../../../components/full-page-layout"
import { SearchEngineOptimization } from "../../../components/seo"
import styles from "./index.module.css"

export const meta = {
  title: "Bookmarks",
  description: "Collection of useful websites that I often use.",
}

const links = [
  {
    description: "Diffr - Diff tool (privacy friendly)",
    href: "https://loilo.github.io/diffr/",
  },
  {
    description: "SVGOMG - SVG optimizer",
    href: "https://jakearchibald.github.io/svgomg/",
  },
  {
    description: "Squoosh - Privacy friendly image optimizer",
    href: "https://squoosh.app/",
  },
  {
    description: "Metatags - Meta tag code debugger and generator",
    href: "https://metatags.io/",
  },
  {
    description: "Excelidraw - best whiteboard tool",
    href: "https://excalidraw.com/",
  },
  {
    description: "DOMEvents.dev - Visualised DOM events",
    href: "https://domevents.dev/",
  },
]

export default function BookmarksPage() {
  return (
    <FullPageLayout>
      <SearchEngineOptimization title={meta.title} />
      <div className={styles.notesPage}>
        <h1 className={styles.title}>{meta.title}</h1>
        <p>{meta.description}</p>

        <h2 className={styles.subTitle}>Web Development</h2>

        <ul className={styles.list}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.description}</a>
            </li>
          ))}
        </ul>
      </div>
    </FullPageLayout>
  )
}
