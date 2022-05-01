import Link from "next/link"
import styled from "styled-components"
import { SearchEngineOptimization } from "../components/seo"

const Layout = styled.div`
  padding: 2rem 0.5rem;
`

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
  display: flex;
  gap: 2rem;
  justify-content: center;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 3rem;
`

const FooterWrapper = styled.footer`
  text-align: center;
  color: var(--gray-600);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 3rem;
`

const items = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
]

export function FullPageLayout({ withFooter = true, children }) {
  return (
    <Layout>
      <SearchEngineOptimization />

      <Nav>
        {items.map(({ href, title }) => (
          <Link key={href} href={href} passHref>
            <NavLink>{title}</NavLink>
          </Link>
        ))}
      </Nav>

      {children}

      {withFooter ? (
        <FooterWrapper>
          &copy; {new Date().getFullYear()} Ondrej Sevcik
        </FooterWrapper>
      ) : null}
    </Layout>
  )
}
