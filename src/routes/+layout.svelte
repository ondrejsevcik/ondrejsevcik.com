<script>
	import Header from './Header.svelte';
	import './tailwind-base.css';
	import './global.css';
	import './highlight-js.css';
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<footer class="footer">
		&copy; {new Date().getFullYear()} Ondrej Sevcik
	</footer>
</div>

<style>
	.layout {
		padding: 2rem 0.5rem;
	}

	.footer {
		text-align: center;
		color: var(--gray-600);
		font-size: var(--step--2);
		line-height: 1.25rem;
		margin-top: 3rem;
	}
</style>
