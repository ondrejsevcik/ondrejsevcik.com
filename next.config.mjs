const config = {
  async rewrites() {
    return [
      {
        source: "/hello/js/script.js",
        destination: "https://plausible.io/js/script.js",
      },
      {
        source: "/hello/api/event",
        destination: "https://plausible.io/api/event",
      },
    ]
  },
}

export default config
