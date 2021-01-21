exports.createPages = async function ({actions, graphql}) {

    const {data} = await graphql(`
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
                path: id,
                component: require.resolve(`./src/templates/ad.js`),
                context: {id: id},
            })
        })
        const postsPerPage = 20
        const numPages = Math.ceil(data.allStrapiAd.totalCount / postsPerPage)
        console.log(postsPerPage)
        for (let i = 0; i < numPages; i++) {
            actions.createPage({
                path: `/ASC/${i + 1}/`,
                component: require.resolve("./src/templates/ASC-Ads.js"),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages: numPages,
                    currentPage: i + 1,
                    prevPage: i,
                    nextPage: i + 2
                },
            });
            actions.createPage({
                path: `/DESC/${i + 1}/`,
                component: require.resolve("./src/templates/DESC-Ads.js"),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages: numPages,
                    currentPage: i + 1,
                    prevPage: i,
                    nextPage: i + 2
                },
            })
        }
    }

}
