/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-plugin-tinacms`,
      options: {
        plugins: ["gatsby-tinacms-git", "gatsby-tinacms-remark"],
        sidebar: {
          position: "displace",
        },
      },
    },
  ],
}
