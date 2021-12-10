import Link from "next/link"
import styled from "styled-components"

const NavLink = styled.a`
  transition: box-shadow 200ms ease 0s;
  box-shadow: 0px 0px 0px currentColor;

  &:hover,
  &:focus {
    transition: box-shadow 50ms ease 0s;
    box-shadow: 0px 2px 0px currentColor;
  }
`

const Nav = styled.nav`
  display: inline-flex;
  gap: 2rem;

  justify-content: center;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
`

export default function Navigation() {
  const items = [
    { href: "/", title: "Home" },
    { href: "/blog", title: "Blog" },
  ]

  return (
    <Nav>
      {items.map(({ href, title }) => (
        <Link key={href} href={href} passHref>
          <NavLink>{title}</NavLink>
        </Link>
      ))}
    </Nav>
  )
}
