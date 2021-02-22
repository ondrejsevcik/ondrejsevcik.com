import React from "react"

export default function Footer() {
  return (
    <div className="footer">
      <div className="copyright">
        &copy; {new Date().getFullYear()} Ondrej Sevcik
      </div>
    </div>
  )
}
