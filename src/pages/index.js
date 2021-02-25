import React from "react"
import Layout from "../components/layout"

export default function HomePage() {
  return (
    <Layout>
      <div className="homepage-intro">
        <img
          className="profile-pic"
          alt="Profile picture"
          src="/images/profile-picture.jpg"
        />

        <div>
          <div style={{ fontSize: "0.9rem" }}>Hi, I'm</div>
          <div className="fs5 bold">Ondrej Sevcik</div>
          <p style={{ fontSize: "0.9rem" }}>
            Pumpkin spice, latte cup est seasonal viennese foam. Lungo qui
            caramelization est bar that coffee. Et aroma café au lait, robust
            mazagran iced beans cappuccino breve id rich decaffeinated.
          </p>
          <div
            style={{
              color: "grey",
              fontSize: "0.9rem",
              display: "flex",
              gap: "1rem",
            }}
          >
            <a href="mailto:hi@ondrejsevcik.com">hi@ondrejsevcik.com</a>
            <a href="https://twitter.com/ondrejsevcik">Twitter</a>
            <a href="https://github.com/ondrejsevcik">Github</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
