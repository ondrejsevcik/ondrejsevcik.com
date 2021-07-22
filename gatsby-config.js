/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ondrej Sevcik",
    titleTemplate: "%s | Ondrej Sevcik",
    description: "Blogging about everything dev.",
    // No trailing slash allowed!
    url: "https://ondrejsevcik.com",
    // Used by sitemap plugin
    siteUrl: `https://ondrejsevcik.com`,
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
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ondrejsevcik.com`,
        stripQueryString: true,
      },
    },
  ],
}
