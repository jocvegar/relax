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
<<<<<<< HEAD
        background_color: `#2E4500`,
        theme_color: `#2E4500`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `src/images/icon_144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
        ],
        icon_options: {
          purpose: `maskable`,
        },
        cache_busting_mode: "none",
=======
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
>>>>>>> parent of 0c49d1a... Fixes typo and header color
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/`, `/breathe/`],
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
  ],
}
