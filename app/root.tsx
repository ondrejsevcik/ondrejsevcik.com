import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinksFunction, MetaFunction } from "@vercel/remix"
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

import "~/styles/tailwind-base.css"
import "~/styles/global.css"
import "~/styles/highlight-js.css"

import styles from "./root.module.css"

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export const meta: MetaFunction = () => {
  return [{ title: `Ondrej Sevcik` }]
}

const items = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
  { href: "/notes", title: "Notes" },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Blogging about everything dev." />
        <meta name="twitter:creator" content="@ondrejsevcik" />
        <meta name="twitter:title" content="Ondrej Sevcik" />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
        <Meta />
        <Links />
      </head>
      <body className={styles.layout}>
        <nav className={styles.nav}>
          {items.map(({ href, title }) => (
            <Link key={href} to={href} className={styles.navLink}>
              {title}
            </Link>
          ))}
        </nav>

        <Outlet />

        <footer className={styles.footerWrapper}>
          &copy; {new Date().getFullYear()} Ondrej Sevcik
        </footer>

        <script
          defer
          data-domain="ondrejsevcik.com"
          data-api="/hello/api/event"
          src="/hello/js/script.js"
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
