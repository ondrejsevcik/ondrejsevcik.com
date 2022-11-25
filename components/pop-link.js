import styled from "styled-components"

const Link = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
`

const LinkBg = styled.span`
  position: absolute;
  border-radius: 100%;
  background-color: var(--yellow-600);
  width: 0;
  height: 0;

  transition-property: width, height;
  transition-duration: 0.1s;
  transition-timing-function: ease-out;

  ${Link}:hover > &,
  ${Link}:focus > & {
    width: 200%;
    height: 200%;
  }
`

const Content = styled.span`
  position: absolute;
  transition: transform 0.1s ease-out;

  ${Link}:hover > &,
  ${Link}:focus > & {
    transform: rotate(-25deg) scale(1.2);
  }
`

export function PopLink({ icon, label, href, rel }) {
  return (
    <Link aria-label={label} href={href} rel={rel}>
      <LinkBg aria-hidden="true"></LinkBg>
      <Content aria-hidden="true">{icon}</Content>
    </Link>
  )
}
