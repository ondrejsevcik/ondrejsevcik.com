import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@vercel/remix";
import type { MetaFunction } from "@vercel/remix";
import { getLinkPosts } from "./getLinkPosts.server";
import styles from "./route.module.css";

export const meta: MetaFunction = () => {
	return [{ title: "Links | Ondrej Sevcik" }];
};

export const loader = async () => {
	const linkPosts = getLinkPosts();
	return json({ linkPosts });
};

function NotesCard({
	title,
	href,
}: {
	title: string;
	href: string;
}) {
	return (
		<Link to={href} className={styles.noteCard} prefetch="intent">
			<h1>{title}</h1>
		</Link>
	);
}

export default function NotesPage() {
	const { linkPosts } = useLoaderData<typeof loader>();

	return (
		<div className={styles.page}>
			<h1 className={styles.title}>Links</h1>

			<div className={styles.cardList}>
				{linkPosts.map((note) => (
					<NotesCard
						key={note.id}
						title={note.title}
						href={`/links/${note.id}`}
					/>
				))}
			</div>
		</div>
	);
}
