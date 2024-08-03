import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@vercel/remix";
import type { LoaderFunction, MetaFunction } from "@vercel/remix";
import { getLinkPosts } from "./getLinkPosts.server";
import styles from "./route.module.css";

export const meta: MetaFunction = () => {
	return [{ title: "Links | Ondrej Sevcik" }];
};

export const loader: LoaderFunction = async () => {
	const linkPosts = getLinkPosts();
	return json({ linkPosts });
};

function LinkPost({ title, href }: { title: string; href: string }) {
	return (
		<article>
			<Link to={href} className={styles.noteCard} prefetch="intent">
				<h2>{title}</h2>
			</Link>
		</article>
	);
}

export default function NotesPage() {
	const { linkPosts } = useLoaderData<typeof loader>();

	return (
		<div className={styles.page}>
			TODO add description here
			<h1 className={styles.title}>Links</h1>

			<div className={styles.cardList}>
				{linkPosts.map(({ id, title }) => (
					<LinkPost key={id} title={title} href={`/links/${id}`} />
				))}
			</div>
		</div>
	);
}
