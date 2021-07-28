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
        <div className="mt-12 inline-grid grid-cols-1 sm:grid-cols-2 gap-8">
          <img
            className="rounded-full p-1 border-8 border-solid border-blue-800 w-48 h-48 sm:w-56 sm:h-56 justify-self-center sm:justify-self-end"
            alt="Profile portrait"
            src="/images/profile-picture.jpg"
          />

          <div className="max-w-xs">
            <div className="text-sm">Hi, I'm</div>
            <div className="text-2xl font-bold">Ondrej Sevcik</div>
            <p className="mt-2 mr-2">
              Frontend Developer with a special focus on simplicity and
              well-designed apps. Currently building Cafe app at{" "}
              <a className="link" href="https://cropster.com">
                Cropster
              </a>{" "}
              and occasionally writing on my{" "}
              <Link className="link" to="/blog">
                /blog
              </Link>
              .
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
