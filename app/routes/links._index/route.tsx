import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@vercel/remix";
import type { HeadersFunction, MetaFunction } from "@vercel/remix";
import type { LinkPostContent } from "utils/getMarkdown";
import { cacheControlHeaders, keepCacheControl } from "../../.server/headers";
import { getLinkPosts } from "./getLinkPosts.server";
import styles from "./route.module.css";

export const meta: MetaFunction = () => {
	return [{ title: "Links | Ondrej Sevcik" }];
};

export async function loader() {
	const linkPosts = getLinkPosts();
	return json({ linkPosts }, { headers: cacheControlHeaders });
}

export const headers: HeadersFunction = keepCacheControl;

function LinkPost({ post }: { post: LinkPostContent }) {
	const { id, title, tags } = post;
	return (
		<article className={styles.linkPost}>
			<h2>
				<Link to={`/links/${id}`} prefetch="intent">
					{title}
				</Link>
			</h2>
			{/* // TODO add tags
			<ul>
				{tags.map((tag) => (
					<li key={tag}>#{tag}</li>
				))}
			</ul> */}
		</article>
	);
}

export default function NotesPage() {
	const { linkPosts } = useLoaderData<typeof loader>();

	return (
		<div className={styles.page}>
			<h1 className={styles.title}>Links</h1>
			<p>
				Links to content I found interesting, sometimes with my commentary.{" "}
				<a href="/links-rss">Subscribe with RSS</a>.
			</p>

			{linkPosts.map((linkPost) => (
				<LinkPost key={linkPost.id} post={linkPost} />
			))}
		</div>
	);
}
