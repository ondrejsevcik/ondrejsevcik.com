import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = styled(Link)`
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
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </Nav>
  )
}
