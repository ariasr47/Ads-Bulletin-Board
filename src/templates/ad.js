// @ts-ignore
import React from "react"
import {graphql} from "gatsby"
import FormCard from "../components/FormCard";

const AdTemplate = ({data}) => {
    const props = data.strapiAd
    return (
        <FormCard {...props} />
    )
}

export default AdTemplate;

export const query = graphql`
    query AdTemplate($id: String!){
        strapiAd(id: {eq: $id}) {
            id
            title
            category
            price
            description
        }
    }
`