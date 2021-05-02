import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import { SearchEngineOptimization } from "../components/seo"

export function FullPageLayout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <SearchEngineOptimization />
      <Navigation />
      <section className="flex-grow">{children}</section>
      <Footer />
    </div>
  )
}
