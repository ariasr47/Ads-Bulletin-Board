// @ts-ignore
import React from "react"
import { graphql } from "gatsby"
import BulletinBoard from "../components/BulletinBoard"

const ads_template = ({ pageContext, data }) => {
  console.log("ads_template")
  const nodes = data.allStrapiAd.nodes
  const order = pageContext.order
  return <BulletinBoard order={order} nodes={nodes} />
}

export const query = graphql`
  query MyQuery($order: [SortOrderEnum] = [ASC, DESC]) {
    allStrapiAd(sort: { fields: price, order: $order }) {
      nodes {
        id
        price
        title
        category
        description
      }
    }
  }
`

export default ads_template
