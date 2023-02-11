// Inspired by https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog#writing-a-utility-to-fetch-posts
export const fetchMarkdownPosts = async () => {
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
