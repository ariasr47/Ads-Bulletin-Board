// @ts-ignore
import React from "react"
import { graphql } from "gatsby"
import FormCard from "../components/FormCard"

const ad_template = ({ data }) => {
  const node = data.strapiAd
  return <FormCard {...node} />
}

export const query = graphql`
  query AdTemplate($id: String!) {
    strapiAd(id: { eq: $id }) {
      id
      title
      category
      price
      description
    }
  }
`

export default ad_template
