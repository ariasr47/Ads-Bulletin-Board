// @ts-ignore
import React from "react";
import Layout from "./src/components/Layout";
import '@fontsource/roboto'

export const wrapRootElement = ({element, props}) => {
    return <Layout {...props}>{element}</Layout>
}