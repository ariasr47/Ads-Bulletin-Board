// @ts-ignore
import React from "react";
import {graphql} from "gatsby";
import BulletinBoard from "../components/BulletinBoard";

const DESCTemplate = ({data, pageContext}) => {
    console.log(pageContext.name)
    const props = data.allStrapiAd.nodes;
    return (
        <BulletinBoard>
            {props}
        </BulletinBoard>
    )
}

export const query = graphql`
    query MyQuery2($limit: Int!, $skip: Int!) {
        allStrapiAd(limit: $limit, skip: $skip, sort: {fields: price, order: DESC}) {
            nodes {
                id
                title
                price
                description
            }
        }
    }
`
export default DESCTemplate;
