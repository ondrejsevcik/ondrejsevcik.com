import { json } from "@vercel/remix";
import type { MetaFunction, HeadersFunction } from "@vercel/remix";
import styles from "./route.module.css";
import { formatDate } from "../../../utils/formatDate";
import { useLoaderData } from "@remix-run/react";
import { getBlogPost } from "./getBlogPost.server";

export const loader = async ({ params }) => {
	const blogPost = await getBlogPost(params.id);
	return json(
		{ blogPost },
		{
			headers: {
				// Cache for a day
				"cache-control": "public, max-age=86400, s-maxage=86400",
			},
		},
	);
};

export const headers: HeadersFunction = ({ loaderHeaders }) => ({
	"cache-control": loaderHeaders.get("cache-control") ?? "",
});

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	if (!data) return [];

	const title = `${data.blogPost.title} | Ondrej Sevcik`;

	const metaTags = [
		{ title: title },
		{ name: "description", content: data.blogPost.description },
		{ property: "og:title", content: title },
		{ property: "og:description", content: data.blogPost.description },
		{ property: "og:type", content: "article" },
		{ property: "article:author", content: "Ondrej Sevcik" },
		{
			property: "article:published_time",
			content: new Date(data.blogPost.date).toISOString(),
		},
	];

	if (data.blogPost.image) {
		metaTags.push({
			property: "og:image",
			content: `https://ondrejsevcik.com${data.blogPost.image}`,
		});
	}

	return metaTags;
};

export default function BlogPostPage() {
	const { blogPost } = useLoaderData<typeof loader>();
	const { title, date: dateString, html } = blogPost;
	const date = new Date(dateString);

	return (
		<section className={styles.blogPostWrapper}>
			<header>
				<h1 className={styles.postTitle}>{title}</h1>
				<time className={styles.meta} dateTime={date.toISOString()}>
					{formatDate(date)}
				</time>
			</header>
			<article
				className={styles.blogPostContent}
				// biome-ignore lint/security/noDangerouslySetInnerHtml: content is trusted.
				dangerouslySetInnerHTML={{ __html: html }}
			/>
			<footer className={styles.footer}>
				Liked the post? Have concerns? Reply via{" "}
				<a
					href={`mailto:hi@ondrejsevcik.com?subject=${title}`}
					target="_blank"
					rel="noreferrer"
				>
					email
				</a>
				.
			</footer>
		</section>
	);
}
