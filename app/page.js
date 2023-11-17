import Image from "next/image"
import { PopLink } from "./components/pop-link"
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  MastodonIcon,
  RssFeedIcon,
  TwitterIcon,
} from "./components/icons"
import styles from "./page.module.css"

let socialLinks = [
  {
    label: "Email",
    href: "mailto:hi@ondrejsevcik.com",
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
]

export default function HomePage() {
  return (
    <div className={styles.contentWrapper}>
      <Image
        className={styles.profileImg}
        alt="Profile portrait"
        src="/images/profile-picture.jpg"
        width={250}
        height={250}
      />
      <div className={styles.content}>
        <div className={styles.headerName}>Hi, I&apos;m Ondrej 👋🏼</div>
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
          {socialLinks.map(socialLink => (
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
  )
}
