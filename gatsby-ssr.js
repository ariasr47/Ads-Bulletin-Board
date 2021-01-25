import React from "react"
import Layout from "./src/components/Layout"
import theme from "./theme"
import Content from "./src/components/Content"

export function wrapRootElement({ element }) {
  return <Layout theme={theme}>{element}</Layout>
}

export function wrapPageElement({ element }) {
  return <Content>{element}</Content>
}
