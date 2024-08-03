import { Feed } from "feed";
import { getSortedPosts } from "../../../utils/getMarkdown";

const baseUrl = "https://ondrejsevcik.com";

export function getRssFeedContent() {
	let posts = getSortedPosts("blog");
	posts = posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	const feed = new Feed({
		title: "Ondrej Sevcik",
		description: "Blogging about everything dev.",
		generator: "",
		id: baseUrl,
		link: baseUrl,
		language: "en",
		copyright: `Ondrej Sevcik ${new Date().getFullYear()}`,
		feedLinks: {
			rss2: `${baseUrl}/rss.xml`,
		},
		author: {
			name: "Ondrej Sevcik",
		},
	});

	for (const post of posts) {
		const { id, title, date, description } = post;
		const url = `${baseUrl}/blog/${id}`;

		feed.addItem({
			title,
			id: url,
			link: url,
			description,
			date: new Date(date),
		});
	}

	return feed.rss2();
}
