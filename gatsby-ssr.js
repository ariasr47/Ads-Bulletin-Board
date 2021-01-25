import React from "react"
import Layout from "./src/components/Layout"
import theme from "./theme"

export function wrapRootElement({ element }) {
  return <Layout theme={theme}>{element}</Layout>
}
