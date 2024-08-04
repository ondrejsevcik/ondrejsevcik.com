import { useLoaderData } from "@remix-run/react";
import {
	type HeadersFunction,
	type LoaderFunctionArgs,
	type MetaFunction,
	json,
} from "@vercel/remix";
import z from "zod";
import { cacheControlHeaders, keepCacheControl } from "../../.server/headers";
import { PostContent } from "../../components/PostContent";
import { getLinkPost } from "./getLinkPost.server";
import styles from "./route.module.css";

const ParamsSchema = z.object({ id: z.string() });

export async function loader({ params }: LoaderFunctionArgs) {
	const { id } = ParamsSchema.parse(params);
	const linkPost = getLinkPost(id);
	return json({ linkPost }, { headers: cacheControlHeaders });
}

export const headers: HeadersFunction = keepCacheControl;

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	if (!data) return [];

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

export default function LinkPostDetailRoute() {
	const {
		linkPost: { title, date: dateString, ogUrl, html },
	} = useLoaderData<typeof loader>();
	const date = new Date(dateString);

	return (
		<PostContent title={title} date={date} html={html}>
			<p>
				Read the whole story at{" "}
				<a
					className={styles.readStoryLink}
					target="_blank"
					rel="noopener noreferrer"
					href={ogUrl}
				>
					{ogUrl}
				</a>
			</p>
		</PostContent>
	);
}
