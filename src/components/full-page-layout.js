import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import { SEO } from "../components/seo"

export function FullPageLayout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <SEO />
      <Navigation />
      <section className="flex-grow">{children}</section>
      <Footer />
    </div>
  )
}
