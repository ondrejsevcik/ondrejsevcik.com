import Script from "next/script"

import "../styles/tailwind-base.css"
import "../styles/global.css"
import "../styles/highlight-js.css"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        defer
        data-domain="ondrejsevcik.com"
        data-api="/hello/api/event"
        src="/hello/js/script.js"
      />
      <Component {...pageProps} />
    </>
  )
}
