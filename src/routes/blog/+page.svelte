<script>
	import { groupBy } from '$lib/utils/group-by';

	export let data;

	let groupedPosts = Object.entries(
		groupBy(data.posts, (post) => new Date(post.meta.date).getFullYear().toString())
	).reverse();
</script>

<svelte:head>
	<title>Blog | Ondrej Sevcik</title>
</svelte:head>

<div class="list">
	{#each groupedPosts as [year, posts]}
		<section>
			<h2 class="groupTitle">{year}</h2>
			<div class="groupPosts">
				{#each posts as post}
					<div class="groupPost">
						<a href={post.path} class="postLink">{post.meta.title}</a>
					</div>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	.list {
		max-width: 36rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-left: auto;
		margin-right: auto;
	}

	.postLink {
		font-size: var(--step-0);
		line-height: 1.5;
		font-weight: 500;
		color: var(--blue-800);
	}

	.postLink:hover {
		text-decoration: underline;
	}

	.groupPosts {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
	}

	.groupPost {
		display: flex;
		flex-direction: column;
	}

	.groupTitle {
		font-weight: 700;
		font-size: var(--step-1);
		line-height: 4rem;
	}
</style>
