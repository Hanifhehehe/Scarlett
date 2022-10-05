/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
      {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Baloo Tamma 2\: 400,500,600,700,800`,
          `Indie Flower`
        ],
        display: 'swap'
      }
    }
  ],
}
