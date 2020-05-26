module.exports = {
  siteMetadata: {
    title: `Evie learns Hindi`,
    description: `An opinioated way of learning hindi, built by a Swede/English from Spain`,
    author: `Evita`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `learning_hindi`,
        short_name: `hindi`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hindi.jpeg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-theme-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
