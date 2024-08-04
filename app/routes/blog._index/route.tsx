import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@vercel/remix";
import type { HeadersFunction, MetaFunction } from "@vercel/remix";
import { groupBy } from "../../../utils/group-by";
import { cacheControlHeaders, keepCacheControl } from "../../.server/headers";
import { getBlogPosts } from "./getBlogPosts.server";
import styles from "./route.module.css";

export const meta: MetaFunction = () => {
	return [{ title: "Blog | Ondrej Sevcik" }];
};

export async function loader() {
	const blogPosts = getBlogPosts();
	return json({ blogPosts }, { headers: cacheControlHeaders });
}

export const headers: HeadersFunction = keepCacheControl;

export default function BlogPage() {
	const { blogPosts } = useLoaderData<typeof loader>();
	const groupedPosts = Object.entries(
		groupBy(blogPosts, (post) => new Date(post.date).getFullYear().toString()),
	).reverse();

	return (
		<div className={styles.list}>
			<h1 className={styles.title}>Blog</h1>
			<p>
				Sharing my thoughts on frontend development, life, and anything in
				between. Writing mostly for my past self. Thanks for stopping by!
			</p>

			{groupedPosts.map(([year, posts]) => (
				<section key={year}>
					<h2 className={styles.groupTitle}>{year}</h2>
					<div className={styles.groupPosts}>
						{posts
							.sort(
								(pA, pB) =>
									new Date(pB.date).getTime() - new Date(pA.date).getTime(),
							)
							.map((post) => (
								<div className={styles.groupPost} key={post.id}>
									<Link
										to={`/blog/${encodeURIComponent(post.id)}`}
										className={styles.postLink}
										prefetch="intent"
									>
										{post.title}
									</Link>
								</div>
							))}
					</div>
				</section>
			))}
		</div>
	);
}
