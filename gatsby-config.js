module.exports = {
  siteMetadata: {
    title: `Front End Challenge`,
    description: `This is the Front End Challenge continued.`,
    author: `@ariasr47`,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://sheltered-taiga-32855.herokuapp.com",
        contentTypes: ["ad"],
        queryLimit: 1000,
      },
    },
  ],
}
