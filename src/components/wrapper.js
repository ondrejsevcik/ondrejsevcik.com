import React from "react"
import PageLayout from "./page-layout"
import Footer from "./footer"

export default function Wrapper({ children }) {
  return <PageLayout>{children}</PageLayout>
}
