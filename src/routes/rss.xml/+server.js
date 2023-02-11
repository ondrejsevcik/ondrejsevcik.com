import { fetchMarkdownPosts } from '$lib/utils/fetchMarkdownPosts';

const site = {
	url: 'https://ondrejsevcik.com',
	title: 'Ondrej Sevcik - Blog about everything dev.',
	description: 'Blogging about everything dev.'
};

export const prerender = true;

function generateRss(posts) {
	return `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
    <channel>
        <title>${site.title}</title>
        <link>${site.url}</link>
        <description>${site.description}</description>
        <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
        <language>en</language>
		${posts
			.map(
				(post) =>
					`<item>
            <title>${post.meta.title}</title>
            <link>https://ondrejsevcik.com/blog/${post.path}</link>
            <guid isPermaLink="true">https://ondrejsevcik.com/blog/${post.path}</guid>
            <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
            <description>${post.meta.description}</description>
        </item>
		`
			)
			.join('')}
    </channel>
</rss>
`;
}

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();
	const sortedPosts = allPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

	const body = generateRss(sortedPosts);
	const options = {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	};

	return new Response(body, options);
};
