import styles from "./page.module.css"

export const metadata = {
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
    description: "Excalidraw - best whiteboard tool",
    href: "https://excalidraw.com/",
  },
  {
    description: "DOMEvents.dev - Visualised DOM events",
    href: "https://domevents.dev/",
  },
]

export default function BookmarksPage() {
  return (
    <div className={styles.notesPage}>
      <h1 className={styles.title}>{metadata.title}</h1>
      <p>{metadata.description}</p>

      <h2 className={styles.subTitle}>Web Development</h2>

      <ul className={styles.list}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}>{l.description}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
