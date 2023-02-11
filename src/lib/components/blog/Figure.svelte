<script>
	export let src;
	export let alt;
	export let maxWidth;
	export let width;
	export let height;
</script>

<figure class="figure">
	<a href={src} style="max-width: {maxWidth ?? '100%'}">
		<img class="img" {src} {alt} {width} {height} />
	</a>
	<figcaption class="figCaption"><slot /></figcaption>
</figure>

<style>
	.figure {
		display: flex;
		flex-direction: column;
		margin-top: 2.5rem;
		margin-bottom: 2.5rem;
		gap: 1rem;
		align-items: center;
	}

	.figCaption {
		max-width: 32rem;
		font-size: var(--step--1);
		line-height: 1.25rem;
	}

	.img {
		border-radius: 4px;
		transition-duration: 0.2s;
		transition-property: transform, box-shadow;
	}

	.img:hover,
	.img:focus {
		transform: scale(1.03);
		--shadow: 0 4px 6px -1px rgb(0 0 0/0.1), 0 2px 4px -2px rgb(0 0 0/0.1);
		box-shadow: 0 0 #0000, 0 0 #0000, var(--shadow);
	}
</style>
