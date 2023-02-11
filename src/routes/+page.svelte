<script>
	import PopLink from '$lib/components/PopLink.svelte';
	import MailIcon from '$lib/components/icons/MailIcon.svelte';
	import TwitterIcon from '$lib/components/icons/TwitterIcon.svelte';
	import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
	import RssFeedIcon from '$lib/components/icons/RssFeedIcon.svelte';
	import MastodonIcon from '$lib/components/icons/MastodonIcon.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import profilePicture from '$lib/images/profile-picture.jpg';
</script>

<svelte:head>
	<title>Ondrej Sevcik</title>
</svelte:head>

<section class="contentWrapper">
	<!-- TODO optimize image size -->
	<img class="profileImg" alt="Profile portrait" src={profilePicture} width={250} height={250} />
	<div class="content">
		<div class="headerName">Hi, I&apos;m Ondrej 👋🏼</div>
		<p class="paragraphSmallMargin">
			Frontend Developer, runner, minimalist, and occasional writer.
		</p>
		<p class="paragraph">
			I specialize in building UIs that <strong>do not break</strong> and users{' '}
			<strong>love to use</strong>.
		</p>
		<p class="paragraph">
			If you want to chat, feel free to write me an email or reach out on Mastodon.
		</p>

		<div class="socialLinks">
			<PopLink href="mailto:hi@ondrejsevcik.com" label="Email">
				<MailIcon />
			</PopLink>
			<PopLink href="https://twitter.com/ondrejsevcik" label="Twitter">
				<TwitterIcon />
			</PopLink>
			<PopLink href="https://hachyderm.io/@ondrejsevcik" label="Mastodon" rel="me">
				<MastodonIcon />
			</PopLink>
			<PopLink href="https://github.com/ondrejsevcik" label="Github">
				<GithubIcon />
			</PopLink>
			<PopLink href="https://www.linkedin.com/in/ondrejsevcik/" label="LinkedIn profile">
				<LinkedInIcon />
			</PopLink>
			<PopLink href="/rss.xml" label="RSS feed">
				<RssFeedIcon />
			</PopLink>
		</div>
	</div>
</section>

<style>
	.headerName {
		font-size: var(--step-1);
		font-weight: 600;
	}

	.content {
		max-width: 24rem;
	}

	.profileImg {
		padding: 0.25rem;
		border-color: rgba(0, 93, 174, 1);
		border-style: solid;
		border-width: 8px;
		border-radius: 9999px;
		justify-self: center;
		width: 14rem;
		height: 14rem;
		transition: transform 0.1s ease-out;
	}

	.profileImg:hover {
		transform: scale(1.03);
	}

	.contentWrapper {
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.socialLinks {
		font-size: var(--step-0);
		line-height: 1.75rem;
		gap: 1.25rem;
		grid-template-columns: repeat(6, 1fr);
		display: inline-grid;
		margin-top: 1.5rem;
	}

	.paragraph {
		margin-top: 1rem;
	}

	.paragraphSmallMargin {
		margin-top: 0.5rem;
	}
</style>
