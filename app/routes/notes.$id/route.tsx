import { useLoaderData } from "@remix-run/react";
import {
	type HeadersFunction,
	type LoaderFunction,
	type MetaFunction,
	json,
} from "@vercel/remix";
import z from "zod";
import { cacheControlHeaders, keepCacheControl } from "../../.server/headers";
import { getNote } from "./getNote.server";
import styles from "./route.module.css";

const ParamsSchema = z.object({ id: z.string() });

export const loader: LoaderFunction = async ({ params }) => {
	const { id } = ParamsSchema.parse(params);
	const note = getNote(id);
	return json({ note }, { headers: cacheControlHeaders });
};

export const headers: HeadersFunction = keepCacheControl;

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const { note } = data;
	const title = `${note.title} | Ondrej Sevcik`;
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
	];
};

export default function NoteDetailPage() {
	const {
		note: { title, html },
	} = useLoaderData<typeof loader>();

	return (
		<article className={styles.notesPage}>
			<h1 className={styles.title}>{title}</h1>

			{/* Not happy with this useless div, but haven't
       found a way to avoid it in React */}
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: trusted content */}
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</article>
	);
}
