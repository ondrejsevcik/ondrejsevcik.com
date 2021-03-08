import React from "react"
import { Link } from "gatsby"

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/til">TIL</Link>
      {/* <Link to="/">Projects</Link> */}
      {/* <Link to="/">Resume</Link> */}
    </nav>
  )
}
