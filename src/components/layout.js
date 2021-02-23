import React from "react"
import Menu from "../components/menu"
import Footer from "../components/footer"

export default function Layout({ children }) {
  return (
    <div>
      <Menu />
      <article>{children}</article>
      <Footer />
    </div>
  )
}
