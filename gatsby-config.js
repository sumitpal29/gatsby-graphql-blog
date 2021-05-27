module.exports = {
  siteMetadata: {
    title: "Sumit's Blog",
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: "gatsby-source-sanity",
    options: {
      projectId: 'rzgged25',
      dataset: 'production',
      token: process.env.SP_SANITY_TOKEN,
    }
  }],
};
