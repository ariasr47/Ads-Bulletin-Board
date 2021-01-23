import React from "react"
import { Link } from "gatsby"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

export default function Home() {
  return (
    <Box mx={auto}>
      <Link to="/Ads">
        <Button color={"secondary"} variant="outlined">
          Proceed
        </Button>
      </Link>
    </Box>
  )
}
