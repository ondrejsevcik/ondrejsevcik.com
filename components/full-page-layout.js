import Link from "next/link"
import styles from "./full-page-layout.module.css"
import { SearchEngineOptimization } from "../components/seo"

const items = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
]

export function FullPageLayout({ withFooter = true, children }) {
  return (
    <div className={styles.layout}>
      <SearchEngineOptimization />

      <nav className={styles.nav}>
        {items.map(({ href, title }) => (
          <Link key={href} href={href} passHref>
            <a className={styles.navLink}>{title}</a>
          </Link>
        ))}
      </nav>

      {children}

      {withFooter ? (
        <footer className={styles.footerWrapper}>
          &copy; {new Date().getFullYear()} Ondrej Sevcik
        </footer>
      ) : null}
    </div>
  )
}
