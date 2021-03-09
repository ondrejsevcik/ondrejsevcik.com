import React from "react"

export default function Footer() {
  return (
    <footer className="mt-4 mb-4 text-center text-sm color-gray-100">
      &copy; {new Date().getFullYear()} Ondrej Sevcik
    </footer>
  )
}
