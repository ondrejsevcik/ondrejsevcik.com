import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import { SearchEngineOptimization } from "../components/seo"

import styled from "styled-components"

const Layout = styled.div`
  display: grid;
  gap: 2rem;
  justify-items: center;
  padding: 2rem 0.5rem;
`

export function FullPageLayout({ children }) {
  return (
    <Layout>
      <SearchEngineOptimization />
      <Navigation />
      {children}
      <Footer />
    </Layout>
  )
}
