import {
	Link,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@vercel/remix";

import globalStylesSrc from "./styles/global.css?url";
import highlightJsSrc from "./styles/highlight-js.css?url";
import tailwindBaseSrc from "./styles/tailwind-base.css?url";

import styles from "./root.module.css";

export const meta: MetaFunction = () => {
	return [
		{ title: "Ondrej Sevcik" },
		{ name: "description", content: "Blogging about everything dev." },
	];
};

export const links: LinksFunction = () => {
	return [
		{ rel: "stylesheet", href: tailwindBaseSrc },
		{ rel: "stylesheet", href: globalStylesSrc },
		{ rel: "stylesheet", href: highlightJsSrc },
	];
};

const items = [
	{ href: "/", title: "Home" },
	{ href: "/blog", title: "Blog" },
	{ href: "/notes", title: "Notes" },
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="twitter:creator" content="@ondrejsevcik" />
				<meta name="twitter:title" content="Ondrej Sevcik" />
				<meta name="fediverse:creator" content="@ondrejsevcik@hachyderm.io" />
				<link rel="alternate" type="application/rss+xml" href="/rss.xml" />
				<Meta />
				<Links />
			</head>
			<body className={styles.layout}>
				<nav className={styles.nav}>
					{items.map(({ href, title }) => (
						<Link
							key={href}
							to={href}
							className={styles.navLink}
							prefetch="intent"
						>
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
			</body>
		</html>
	);
}
