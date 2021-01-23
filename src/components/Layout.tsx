import React from "react"
import NavBar from "./NavBar"
import Drawer from "./Drawer"
import Toolbar from "@material-ui/core/Toolbar"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider, makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    padding: theme.spacing(2),
    height: "100vh",
    flexGrow: 1,
  },
}))

export default function TopLayout({ children, theme }) {
  const classes = useStyles(theme)
  console.log("Rendering <Layout>")
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex">
        <NavBar />
        <Drawer />
        <main className={classes.content}>
          <Toolbar />
          {children}
        </main>
      </Box>
    </ThemeProvider>
  )
}
