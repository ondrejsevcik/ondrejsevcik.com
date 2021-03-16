import React from "react"
import { FullPageLayout } from "../components/full-page-layout"

export default function HomePage() {
  return (
    <FullPageLayout>
      <div className="flex justify-center">
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-8 mx-10 max-w-lg">
          <img
            className="rounded-full p-1 border-8 border-solid border-blue-100 w-56"
            alt="Profile picture"
            src="/images/profile-picture.jpg"
          />

          <div>
            <div className="text-sm">Hi, I'm</div>
            <div className="text-2xl font-bold">Ondrej Sevcik</div>
            <p className="text-sm mt-2">
              Pumpkin spice, latte cup est seasonal viennese foam. Lungo qui
              caramelization est bar that coffee. Et aroma café au lait, robust
              mazagran iced beans cappuccino breve id rich decaffeinated.
            </p>
            <div className="color-gray-100 text-sm flex mt-6">
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
