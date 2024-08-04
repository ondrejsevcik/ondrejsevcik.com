import { useLoaderData } from "@remix-run/react";
import { json } from "@vercel/remix";
import type {
	HeadersFunction,
	LoaderFunction,
	MetaFunction,
} from "@vercel/remix";
import z from "zod";
import styles from "./route.module.css";
import { getBlogPost } from "./getBlogPost.server";
import { PostContent } from "../../components/PostContent";

const idSchema = z.string().min(1);

export const loader: LoaderFunction = async ({ params }) => {
	const id = idSchema.parse(params.id);
	const blogPost = getBlogPost(id);
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
		<PostContent title={title} date={date} html={html}>
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
		</PostContent>
	);
}
