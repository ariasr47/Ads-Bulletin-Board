import React from "react"
import NavBar from "./NavBar"
import Drawer from "./Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider, makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"

import "@fontsource/roboto"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
  },
}))

export default function Layout({ children, theme }) {
  const classes = useStyles()
  console.log("Rendering <Layout>")
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.root}>
        <NavBar />
        <Drawer />
        {children}
      </Box>
    </ThemeProvider>
  )
}
