import { FullPageLayout } from "../components/full-page-layout"
import { PopLink } from "../components/pop-link"
import {
  GithubIcon,
  MailIcon,
  LinkedInIcon,
  TwitterIcon,
  RssFeedIcon,
} from "../components/icons"
import styled from "styled-components"

const HeaderName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const Content = styled.div`
  max-width: 24rem;
`

const ProfileImg = styled.img`
  padding: 0.25rem;
  border-color: rgba(0, 93, 174, 1);
  border-style: solid;
  border-width: 8px;
  border-radius: 9999px;
  justify-self: center;
  width: 14rem;
  height: 14rem;
  transition: transform 0.1s ease-out;

  &:hover {
    transform: scale(1.03);
  }
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`

const SocialLinks = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  gap: 1.25rem;
  grid-template-columns: repeat(5, 1fr);
  display: inline-grid;
  margin-top: 1.5rem;
`

const Paragraph = styled.p`
  margin-top: ${prop => (prop.smallMargin ? `0.5rem` : `1rem`)};
`

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
    <FullPageLayout withoutFooter>
      <ContentWrapper>
        <ProfileImg alt="Profile portrait" src="/images/profile-picture.jpg" />
        <Content>
          <HeaderName>Hi, I&apos;m Ondrej 👋🏼</HeaderName>
          <Paragraph smallMargin>
            Frontend Developer, runner, minimalist, and occasional writer.
          </Paragraph>
          <Paragraph>
            I specialize in building UIs that <strong>do not break</strong> and
            users <strong>love to use</strong>.
          </Paragraph>
          <Paragraph>
            If you want to chat, feel free to write me an email or reach out on
            Twitter.
          </Paragraph>

          <SocialLinks>
            {socialLinks.map(socialLink => (
              <PopLink
                key={socialLink.href}
                href={socialLink.href}
                label={socialLink.label}
                icon={socialLink.icon}
              />
            ))}
          </SocialLinks>
        </Content>
      </ContentWrapper>
    </FullPageLayout>
  )
}
