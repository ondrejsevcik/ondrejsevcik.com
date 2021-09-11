import React from "react"
import { FullPageLayout } from "../components/full-page-layout"
import { PopLink } from "../components/pop-link"
import { Link } from "gatsby"
import {
  GithubIcon,
  MailIcon,
  LinkedInIcon,
  TwitterIcon,
  RssFeedIcon,
} from "../components/icons"

export default function HomePage() {
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

  return (
    <FullPageLayout>
      <div className="flex justify-center mx-2">
        {/* I would like to use Flexbox here, but Safari is missing gap support. I would have to hack a way around it. */}
        <div className="mt-12 inline-grid grid-cols-1 sm:grid-cols-2 gap-8">
          <img
            className="rounded-full p-1 border-8 border-solid border-blue-800 w-48 h-48 sm:w-56 sm:h-56 justify-self-center sm:justify-self-end"
            alt="Profile portrait"
            src="/images/profile-picture.jpg"
          />
          <div className="max-w-sm">
            <div className="text-2xl font-bold">Hi, I'm Ondrej 👋🏼</div>
            <p className="mt-2">
              Frontend Developer, runner, minimalist, and occasional writer.
            </p>
            <p className="mt-4">
              I specialize in building UIs that <strong>do not break</strong>{" "}
              and users <strong>love to use</strong>.
            </p>
            <p className="mt-4">
              If you want to chat, feel free to write me an email or reach out
              on Twitter.
            </p>

            <div className="inline-grid grid-cols-5 gap-5 mt-6 text-xl">
              {socialLinks.map(socialLink => (
                <span key={socialLink.href} className="w-6 h-6">
                  <PopLink href={socialLink.href} aria-label={socialLink.label}>
                    {socialLink.icon}
                  </PopLink>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FullPageLayout>
  )
}
