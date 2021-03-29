import React from "react"
import { FullPageLayout } from "../components/full-page-layout"
import { Link } from "gatsby"

export default function HomePage() {
  return (
    <FullPageLayout>
      <div className="flex justify-center mx-2">
        <div className="mt-12 inline-grid grid-cols-1 sm:grid-cols-2 gap-8">
          <img
            className="rounded-full p-1 border-8 border-solid border-blue-800 w-48 sm:w-56 justify-self-center sm:justify-self-end"
            alt="Profile picture"
            src="/images/profile-picture.jpg"
          />

          <div className="max-w-xs">
            <div className="text-sm">Hi, I'm</div>
            <div className="text-2xl font-bold">Ondrej Sevcik</div>
            <p className="mt-2 mr-2">
              Frontend Developer with a special focus on simplicity and
              well-designed apps. Currently building Cafe app at{" "}
              <a href="https://cropster.com">Cropster</a> and occasionally
              writing on my <Link to="/blog">/blog</Link>.
            </p>
            <div className="flex mt-6">
              <a className="mr-6" href="mailto:hi@ondrejsevcik.com">
                hi@ondrejsevcik.com
              </a>
              <a className="mr-6" href="https://twitter.com/ondrejsevcik">
                Twitter
              </a>
              <a className="mr-6" href="https://github.com/ondrejsevcik">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </FullPageLayout>
  )
}
