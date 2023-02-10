import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.svx'],
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			layout: {
				blog: 'src/lib/components/blog/BlogPostLayout.svelte'
			}
		})
	]
};

export default config;
