module.exports = {
  siteMetadata: {
    title: "Sumit's Blog",
  },
  plugins: [
    'gatsby-plugin-sass',
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
