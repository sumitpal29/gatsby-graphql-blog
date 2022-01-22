module.exports = {
  siteMetadata: {
    title: "Sumit's Blog",
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-image`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Sumit's Blog",
        short_name: "Sumit's Blog",
        start_url: '/',
        background_color: '#fece47',
        theme_color: '#fece47',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      plugins: [`gatsby-remark-reading-time`],
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'rzgged25',
        dataset: 'production',
        token: process.env.SP_SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `localMarkdowns`,
        path: `${__dirname}/local-contents`,
      },
    },
  ],
};
