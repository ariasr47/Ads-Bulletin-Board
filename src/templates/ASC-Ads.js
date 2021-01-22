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
        allStrapiAd(limit: $limit, skip: $skip, sort: {fields: price, order: ASC}) {
            nodes {
                id
                title
                price
                description
            }
        }
    }
`
export default ASCTemplate;
