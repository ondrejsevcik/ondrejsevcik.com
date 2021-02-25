import React from "react"
import Menu from "../components/menu"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (
    <div className="page-layout">
      <Menu />
      <article>{children}</article>
      <Footer />
    </div>
  )
}
