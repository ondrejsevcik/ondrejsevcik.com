import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  text-align: center;
  color: var(--gray-600);
  font-size: 0.875rem;
  line-height: 1.25rem;
`

export default function Footer() {
  return (
    <FooterWrapper>
      &copy; {new Date().getFullYear()} Ondrej Sevcik
    </FooterWrapper>
  )
}
