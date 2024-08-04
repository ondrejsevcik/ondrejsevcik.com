import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@vercel/remix";
import type { LoaderFunction, MetaFunction } from "@vercel/remix";
import { getNotes } from "./getNotes.server";
import styles from "./route.module.css";
import { cacheControlHeaders } from "../../.server/headers";

export const meta: MetaFunction = () => {
	return [{ title: "Notes | Ondrej Sevcik" }];
};

export const loader: LoaderFunction = async () => {
	const notes = getNotes();
	return json({ notes }, { headers: cacheControlHeaders });
};

function NotesCard({
	title,
	description,
	href,
}: {
	title: string;
	description: string;
	href: string;
}) {
	return (
		<Link to={href} className={styles.noteCard} prefetch="intent">
			<h2>{title}</h2>
			<p>{description}</p>
		</Link>
	);
}

export default function NotesPage() {
	const { notes } = useLoaderData<typeof loader>();

	return (
		<div className={styles.page}>
			<h1 className={styles.title}>Notes</h1>

			<div className={styles.cardList}>
				{notes.map((note) => (
					<NotesCard
						key={note.id}
						title={note.title}
						description={note.description}
						href={`/notes/${note.id}`}
					/>
				))}
			</div>
		</div>
	);
}
