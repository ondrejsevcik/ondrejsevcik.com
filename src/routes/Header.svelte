<script>
	let items = [
		{ href: '/', title: 'Home' }
		// { href: '/blog', title: 'Blog' }
	];
</script>

<header>
	<nav class="nav">
		{#each items as item}
			<a href={item.href} class="navLink">{item.title}</a>
		{/each}
	</nav>
</header>

<style>
	.navLink {
		transition: box-shadow 200ms ease 0s;
		box-shadow: 0px 0px 0px currentColor;
	}

	.navLink:hover,
	.navLink:focus {
		transition: box-shadow 50ms ease 0s;
		box-shadow: 0px 2px 0px currentColor;
	}

	.nav {
		display: flex;
		gap: 2rem;
		justify-content: center;
		font-weight: 500;
		font-size: var(--step-0);
		line-height: 1.75rem;
		margin-bottom: 3rem;
	}
</style>
