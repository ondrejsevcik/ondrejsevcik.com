const React = require("react")

const PostBodyComponents = [
  // Cloudflare Web Analytics
  <script
    defer
    src="https://static.cloudflareinsights.com/beacon.min.js"
    data-cf-beacon='{"token": "7815132db2d144f7a5a4dd3bf8c6bbce"}'
  ></script>,
]

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents(PostBodyComponents)
}
