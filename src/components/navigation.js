import React from "react"
import { Link } from "gatsby"

export default function Navigation() {
  return (
    <nav className="mt-8 flex justify-center">
      <Link className="mr-8" to="/">Home</Link>
      <Link className="mr-8" to="/blog">Blog</Link>
      <Link to="/til">TIL</Link>
      {/* <Link to="/">Projects</Link> */}
      {/* <Link to="/">Resume</Link> */}
    </nav>
  )
}
