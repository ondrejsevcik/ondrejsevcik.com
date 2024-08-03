import { useLoaderData } from "@remix-run/react";
import { type LoaderFunction, type MetaFunction, json } from "@vercel/remix";
import z from "zod";
import { getLinkPost } from "./getLinkPost.server";
import styles from "./route.module.css";

const ParamsSchema = z.object({ id: z.string() });

export const loader: LoaderFunction = async ({
	params,
}: {
	params: Record<string, unknown>;
}) => {
	const { id } = ParamsSchema.parse(params);
	const linkPost = getLinkPost(id);
	return json({ linkPost });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const { linkPost } = data;
	const title = `${linkPost.title} | Ondrej Sevcik`;
	return [
		{ title: title },
		{ property: "og:title", content: title },
		// { name: "description", content: note.description },
		// { property: "og:description", content: note.description },
		{ property: "og:type", content: "article" },
		{ property: "article:author", content: "Ondrej Sevcik" },
		{
			property: "article:published_time",
			content: new Date(linkPost.date).toISOString(),
		},
	];
};

export default function NoteDetailPage() {
	const {
		linkPost: { title, ogUrl, html },
	} = useLoaderData<typeof loader>();

	return (
		<article className={styles.linkPost}>
			<h1 className={styles.title}>{title}</h1>

			{/* Not happy with this useless div, but haven't
       found a way to avoid it in React */}
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: trusted content */}
			<div dangerouslySetInnerHTML={{ __html: html }} />

			<p>
				Read the whole story{" "}
				<a href={ogUrl} target="_blank" rel="noopener noreferrer">
					here
				</a>
				.
			</p>
		</article>
	);
}
