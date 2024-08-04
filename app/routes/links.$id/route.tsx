import { useLoaderData } from "@remix-run/react";
import { type LoaderFunction, type MetaFunction, json } from "@vercel/remix";
import z from "zod";
import { getLinkPost } from "./getLinkPost.server";
import { PostContent } from "../../components/PostContent";

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
		linkPost: { title, date: dateString, ogUrl, html },
	} = useLoaderData<typeof loader>();
	const date = new Date(dateString);

	return (
		<PostContent
			title={title}
			date={date}
			html={html}
			footer={
				<p>
					Read the whole story{" "}
					<a href={ogUrl} target="_blank" rel="noopener noreferrer">
						here
					</a>
					.
				</p>
			}
		/>
	);
}
