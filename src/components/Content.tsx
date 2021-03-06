import React, { useState } from "react"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import { Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    padding: theme.spacing(2),
  },
}))

const Content = props => {
  const classes = useStyles()
  console.log(props)
  return (
    <main className={classes.content}>
      <Toolbar />
      {props.children}
    </main>
  )
}

export default Content
