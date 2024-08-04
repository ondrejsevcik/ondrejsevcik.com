import type { HeadersFunction } from "@vercel/remix";
import {
	GithubIcon,
	LinkedInIcon,
	MailIcon,
	MastodonIcon,
	RssFeedIcon,
	TwitterIcon,
} from "./icons";
import { PopLink } from "./pop-link";
import styles from "./route.module.css";

const socialLinks = [
	{
		label: "Email",
		href: "mailto:ondrej@ondrejsevcik.com",
		icon: <MailIcon />,
	},
	{
		label: "Twitter",
		href: "https://twitter.com/ondrejsevcik",
		icon: <TwitterIcon />,
	},
	{
		label: "Mastodon",
		href: "https://hachyderm.io/@ondrejsevcik",
		icon: <MastodonIcon />,
		rel: "me",
	},
	{
		label: "Github",
		href: "https://github.com/ondrejsevcik",
		icon: <GithubIcon />,
	},
	{
		href: "https://www.linkedin.com/in/ondrejsevcik/",
		label: "LinkedIn profile",
		icon: <LinkedInIcon />,
	},
	{
		href: "/rss.xml",
		label: "RSS feed",
		icon: <RssFeedIcon />,
	},
];

export const headers: HeadersFunction = () => ({
	// I don't change index page too often so it can be cached for a while
	// cache for 1 day in browser and 2 days on CDN
	"cache-control": "public, max-age=86400, s-maxage=172800",
});

export default function HomePage() {
	return (
		<div className={styles.contentWrapper}>
			<img
				className={styles.profileImg}
				alt="Profile portrait"
				src="/images/profile-picture.jpg"
				width={250}
				height={250}
			/>
			<div className={styles.content}>
				<div className={styles.headerName}>
					Hi, I&apos;m Ondrej <span className={styles.hand}>👋🏼</span>
				</div>
				<p className={styles.paragraphSmallMargin}>
					Frontend Developer, runner, minimalist, and occasional writer.
				</p>
				<p className={styles.paragraph}>
					I specialize in building UIs that <strong>do not break</strong> and
					users <strong>love to use</strong>.
				</p>
				<p className={styles.paragraph}>
					If you want to chat, feel free to write me an email or reach out on
					Mastodon.
				</p>

				<div className={styles.socialLinks}>
					{socialLinks.map((socialLink) => (
						<PopLink
							key={socialLink.href}
							href={socialLink.href}
							label={socialLink.label}
							icon={socialLink.icon}
							rel={socialLink.rel}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
