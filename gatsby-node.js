exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allStrapiAd {
        edges {
          node {
            id
          }
        }
        totalCount
      }
    }
  `)
  {
    data.allStrapiAd.edges.forEach(edge => {
      const id = edge.node.id
      actions.createPage({
        path: `Ads/${id}`,
        component: require.resolve(`./src/templates/Ad.js`),
        context: { id: id },
      })
    })
    const postsPerPage = 20
    const numPages = Math.ceil(data.allStrapiAd.totalCount / postsPerPage)
    console.log(postsPerPage)
    for (let i = 0; i < numPages; i++) {
      actions.createPage({
        path: `/Ads/`,
        component: require.resolve("./src/templates/Ads.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: numPages,
          currentPage: i + 1,
          prevPage: i,
          nextPage: i + 2,
        },
      })
    }
  }
}
