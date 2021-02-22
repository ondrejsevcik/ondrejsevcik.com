import React from "react"
import { Link } from "gatsby"

export default function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Articles</Link> | <Link to="/til">TIL</Link>
    </nav>
  )
}
