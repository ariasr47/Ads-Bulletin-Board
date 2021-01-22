// @ts-ignore
import React from "react";
import {graphql} from "gatsby";
import BulletinBoard from "../components/BulletinBoard";

const AdTemplate = ({data}) => {
    const props = data.allStrapiAd.nodes;
    return (
        <BulletinBoard>
            {props}
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
