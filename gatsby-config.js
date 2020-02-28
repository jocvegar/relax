module.exports = {
  siteMetadata: {
    title: `Relax`,
    description: `A mental fidget app`,
    author: `Jose V.`,
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
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mental Fidget`,
        short_name: `Relax`,
        start_url: `/`,
        background_color: `#2E4500`,
        theme_color: `#2E4500`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/index/`, `/breathe/`],
    //     workboxConfig: {
    //       globPatterns: ["**/*"],
    //     },
    //   },
    // },
  ],
}
