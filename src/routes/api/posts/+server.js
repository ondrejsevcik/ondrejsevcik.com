import { json } from '@sveltejs/kit';

// Inspired by https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog#writing-a-utility-to-fetch-posts
const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/**/*.svx');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.replace('/src/routes/', '').replace('/+page.svx', '');

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedPosts);
};
