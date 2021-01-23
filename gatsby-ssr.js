import React from "react"
import Layout from "./src/components/Layout"
import theme from "./theme"

export function wrapPageElement({ element }) {
  return <Layout theme={theme}>{element}</Layout>
}
