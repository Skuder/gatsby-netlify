/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Bootstrapp Wordpress Sourced",
    description: "This is the description of our wellcome page",
    image: './static/gatsby.jpg',
    url: 'https://www.gatsbyjs.org'

  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: "practice.codingsrc.com",
        protocol: "http",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS Bootstrap WP Tutorial`,
        start_url: `/`,
        background_color: `#f8f9fa`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ],
}
