import React from "react"
import Layout from "./src/components/Layout"
import theme from "./theme"
import Content from "./src/components/Content"

export function wrapRootElement({ element }) {
  return <Layout theme={theme}>{element}</Layout>
}

export function wrapPageElement(props) {
  console.log("wrapPageElement")
  console.log("props =", props)
  return <Content>{props.element}</Content>
}
