import React from "react"
import Link from "next/link"
import styles from "./layout.module.css"

import "../styles/tailwind-base.css"
import "../styles/global.css"
import "../styles/highlight-js.css"

const items = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
  { href: "/notes", title: "Notes" },
]

export const metadata = {
  title: {
    default: "Ondrej Sevcik",
    template: "%s | Ondrej Sevcik",
  },
  description: "Blogging about everything dev.",
  twitter: {
    title: "Ondrej Sevcik",
    creator: "@ondrejsevcik",
  },
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <nav className={styles.nav}>
          {items.map(({ href, title }) => (
            <Link key={href} href={href} className={styles.navLink}>
              {title}
            </Link>
          ))}
        </nav>

        {children}

        <footer className={styles.footerWrapper}>
          &copy; {new Date().getFullYear()} Ondrej Sevcik
        </footer>
      </body>
    </html>
  )
}
