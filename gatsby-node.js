const queryAllNodes = `query MyQuery {  allStrapiAd(sort: {fields: price, order: ASC}) {    nodes {      id    } }}`

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions

  const data = await graphql(queryAllNodes).then(
    // Returns data in ASC order
    result => result.data.allStrapiAd.nodes
  )

  return Promise.all([
    createSingle(data, createPage),
    createASC(data.length, createPage),
  ])
}

const createSingle = async (data, createPage) => {
  const ad_template = require.resolve(`./src/templates/ad_template.tsx`)

  data.forEach(node => {
    createPage({
      path: `/ad/${node.id}`,
      component: ad_template,
      context: { id: node.id },
    })
  })
}

const createASC = async (totalCount, createPage) => {
  const postsPerPage = 20
  const numPages = Math.ceil(totalCount / postsPerPage)
  const ads_template = require.resolve("./src/templates/ads_template.tsx")
  for (let i = 0; i < numPages; i++) {
    createPage({
      path: i == 0 ? `/ads` : `/ads/${i + 1}`,
      component: ads_template,
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
