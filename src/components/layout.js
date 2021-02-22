import React from "react"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Menu />
      <article>{children}</article>
      <Footer />
    </div>
  )
}
