import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

import Box from "@material-ui/core/Box"

export default function Home() {
  return (
    <Box margin={32}>
      <Link to="/Ads">
        <Button color={"secondary"} variant="outlined">
          Proceed{" "}
        </Button>
      </Link>
    </Box>
  )
}
