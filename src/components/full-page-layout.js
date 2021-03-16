import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

export function FullPageLayout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <Navigation />
      <section className="flex-grow">{children}</section>
      <Footer />
    </div>
  )
}
