module.exports = {
  siteMetadata: {
    title: `Painter's Boot Camp`,
    description: `Blog featuring articles about how to make better color and image compositions.`,
    author: `Andrew J Fleming`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://paintersbootcamp.local/graphql`,
        develop: {
          hardCacheMediaFiles: true,
        },
        schema: {
          timeout: 120000, 
          requestConcurrency: 50, 
          perPage: 50,
        }
      },
    },
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
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display\:400,400i,500i`,
          `roboto\:400,400i,500i`
        ],
        display: 'swap',
      },
    },
  ],
}