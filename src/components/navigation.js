import React from "react"
import { Link } from "gatsby"

export default function Navigation() {
  return (
    <nav className="mt-8 flex justify-center text-lg font-medium">
      <Link className="link mr-8" to="/">
        Home
      </Link>
      <Link className="link" to="/blog">
        Blog
      </Link>
    </nav>
  )
}
