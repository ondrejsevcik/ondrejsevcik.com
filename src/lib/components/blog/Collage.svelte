<script>
	export let description;
	export let images;
</script>

<div class="wrapper">
	<div class="collage">
		{#each images as img}
			<a href={img.src} title={img.alt}>
				<img class="collageImg" src={img.src} alt={img.alt} width={300} height={300} />
			</a>
		{/each}
	</div>
	<p class="description">{description}</p>
</div>

<style>
	.wrapper {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.collage {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.collageImg {
		object-fit: cover;
		height: 6rem;
		width: 6rem;
	}

	@media (min-width: 495px) {
		.collageImg {
			height: 10rem;
			width: 10rem;
		}
	}

	.collageImg {
		transition-duration: 0.2s;
		transition-property: transform, box-shadow;
	}

	.collageImg:hover,
	.collageImg:focus {
		transform: scale(1.05);
		--shadow: 0 4px 6px -1px rgb(0 0 0/0.1), 0 2px 4px -2px rgb(0 0 0/0.1);
		box-shadow: 0 0 #0000, 0 0 #0000, var(--shadow);
	}

	.description {
		margin-top: 1rem;
		font-size: var(--step--1);
		line-height: 1.25rem;
		text-align: center;
	}
</style>
