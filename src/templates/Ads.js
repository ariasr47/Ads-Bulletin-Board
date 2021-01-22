// @ts-ignore
import React from "react";
import {graphql} from "gatsby";
import BulletinBoard from "../components/BulletinBoard";

const AdTemplate = ({data}) => {
    const children = data.allStrapiAd.nodes;
    return (
        <BulletinBoard>
            {children}
        </BulletinBoard>
    )
}

export const query = graphql`
    query MyQuery1 {
        allStrapiAd {
            nodes {
                id
                title
                price
                description
            }
        }
    }
`
export default AdTemplate;
