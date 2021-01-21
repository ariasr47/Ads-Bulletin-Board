// @ts-ignore
import React from "react";
import {graphql} from "gatsby";
import BulletinBoard from "../components/BulletinBoard";

const ASCTemplate = ({data, pageContext}) => {
    console.log(pageContext.name)
    const props = data.allStrapiAd.nodes;
    return (
        <BulletinBoard>
            {props}
        </BulletinBoard>
    )
}

export const query = graphql`
    query MyQuery1($limit: Int!, $skip: Int!) {
        allStrapiAd(limit: $limit, skip: $skip, sort: {fields: Price, order: ASC}) {
            nodes {
                id
                Title
                Price
                Description
            }
        }
    }
`
export default ASCTemplate;
