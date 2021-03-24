/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ondrej Sevcik",
    titleTemplate: "%s | Ondrej Sevcik",
    description: "Blogging about everything dev.",
    url: "https://ondrejsevcik.com", // No trailing slash allowed!
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-postcss",
  ],
}
