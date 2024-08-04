import { Feed } from "feed";
import { getSortedLinkPosts } from "../../../utils/getMarkdown";

const baseUrl = "https://ondrejsevcik.com";

export function getRssFeedContent() {
	const posts = getSortedLinkPosts();
	const feedUrl = `${baseUrl}/links-rss`;

	const feed = new Feed({
		title: "Ondrej Sevcik",
		description:
			"Links to content that I found interesting. Sometimes with my commentary.",
		generator: " ",
		id: feedUrl,
		link: baseUrl,
		language: "en",
		copyright: `Ondrej Sevcik ${new Date().getFullYear()}`,
		feedLinks: {
			rss2: `${baseUrl}/links-rss`,
		},
		author: {
			name: "Ondrej Sevcik",
		},
	});

	for (const post of posts) {
		const { id, title, date } = post;
		const url = `${baseUrl}/links/${id}`;

		feed.addItem({
			title,
			id: url,
			link: url,
			date: new Date(date),
		});
	}

	return feed.rss2();
}
