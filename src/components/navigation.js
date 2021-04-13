import React from "react"
import { Link } from "gatsby"

export default function Navigation() {
  return (
    <nav className="mt-8 flex justify-center text-lg">
      <Link className="link mr-8" to="/">Home</Link>
      <Link className="link mr-8" to="/blog">Blog</Link>
      <Link className="link" to="/til">TIL</Link>
      {/* <Link to="/">Projects</Link> */}
      {/* <Link to="/">Resume</Link> */}
    </nav>
  )
}
