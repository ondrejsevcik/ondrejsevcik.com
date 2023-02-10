<script>
	import { formatDate } from '$lib/utils/format-date';
	export let title;
	export let description;
	export let image;
	export let date;

	$: dateInstance = new Date(date);
</script>

<!-- // <SearchEngineOptimization
      //   title={title}
      //   description={description}
      //   article={true}
      //   image={image}
      // /> -->
<section class="blogPostWrapper">
	<header>
		<h1 class="postTitle">{title}</h1>
		<time class="meta" dateTime={dateInstance.toISOString()}>
			{formatDate(dateInstance)}
		</time>
	</header>
	<article class="blogPostContent"><slot /></article>
	<footer class="blogPostAside">
		Liked the post? Have concerns? Reply via <a
			href={`mailto:hi@ondrejsevcik.com?subject=${encodeURIComponent(title)}`}
			target="_blank"
			rel="noreferrer">email</a
		>.
	</footer>
</section>

<style>
	.postTitle {
		font-weight: 700;
		font-size: var(--step-3);
		line-height: 3.5rem;
		text-align: center;
	}

	@media (max-width: 768px) {
		.postTitle {
			line-height: 3rem;
		}
	}

	.meta {
		display: block;
		text-align: center;
		font-weight: 500;
		font-size: var(--step--2);
		line-height: 1.25rem;
		border-bottom: 1px solid #d1d5db;
		padding-bottom: 1.5rem;
		padding-top: 1rem;
	}

	.blogPostWrapper {
		max-width: 65ch;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-left: auto;
		margin-right: auto;
	}

	.blogPostContent :global(h2) {
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		font-size: var(--step-1);
		line-height: 2rem;
		font-weight: 600;
	}

	.blogPostContent :global(h3) {
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		font-size: var(--step-0);
		line-height: 1.75rem;
		font-weight: 600;
	}

	.blogPostContent :global(a) {
		color: var(--blue-800);
	}

	.blogPostContent :global(a:hover),
	.blogPostContent :global(a:focus) {
		text-decoration: underline;
	}

	.blogPostContent > :global(p) {
		margin-top: 1rem;
		margin-bottom: 1rem;
		max-width: 65ch;
	}

	.blogPostContent :global(ol) {
		margin-left: 2rem;
		list-style-type: decimal;
	}

	.blogPostContent :global(ol > li) {
		margin-bottom: 0.5rem;
	}

	.blogPostContent :global(ul) {
		margin-left: 2rem;
		list-style-type: disc;
	}

	.blogPostContent :global(ul > li) {
		margin-bottom: 0.5rem;
	}

	.blogPostContent :global(blockquote) {
		border-top-right-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
		border-left-width: 4px;
		border-color: rgba(3, 137, 255, 1);
		background-color: rgba(213, 235, 255, 1);
		padding: 0.5rem;
	}

	/* There is also code inside <pre> element,
  but that one should be styled differently */
	.blogPostContent :global(p code),
	.blogPostContent :global(li code) {
		background-color: rgba(31, 41, 55, 0.1);
		border-radius: 0.25rem;
		font-family: var(--font-sans);
		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}

	.blogPostContent :global(pre) {
		overflow-x: auto;
		font-family: var(--font-sans);
		font-size: var(--step--1);
		line-height: 1.3;

		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		margin-bottom: 2.5rem;
		border-radius: 0.5rem;

		background-color: #31324e;
		color: #c9cdd7;
	}

	@media (min-width: 768px) {
		.blogPostContent :global(pre) {
			margin-left: -1rem;
			margin-right: -1rem;
		}
	}

	.blogPostAside {
		margin-top: 3rem;
		text-align: center;
		font-weight: 500;
		font-size: var(--step--1);
		border-top: 1px solid #d1d5db;
		padding-top: 1rem;
	}

	.blogPostAside a {
		color: var(--blue-800);
	}
</style>
