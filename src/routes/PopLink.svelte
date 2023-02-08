<script>
	export let label;
	export let href;
	export let rel;
</script>

<a class="link" aria-label={label} {href} {rel}>
	<span class="linkBg" aria-hidden="true" />
	<span class="content" aria-hidden="true">
		<slot />
	</span>
</a>

<style>
	.link {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.5rem;
		height: 1.5rem;
	}

	.linkBg {
		position: absolute;
		border-radius: 100%;
		background-color: var(--yellow-600);
		width: 0;
		height: 0;

		transition-property: width, height;
		transition-duration: 0.1s;
		transition-timing-function: ease-out;
	}

	.link:hover > .linkBg,
	.link:focus > .linkBg {
		width: 200%;
		height: 200%;
	}

	.content {
		position: absolute;
		transition: transform 0.1s ease-out;
	}

	.link:hover > .content,
	.link:focus > .content {
		transform: rotate(-25deg) scale(1.2);
	}
</style>
