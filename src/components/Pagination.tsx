import React from "react"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

const Pagination = () => {
  return (
    <Grid item container spacing={1} direction="row">
      <Grid item>
        <Button variant={"outlined"} color={"secondary"}>
          Prev
        </Button>
      </Grid>
      <Grid item>
        <Button variant={"outlined"} color={"secondary"}>
          Next
        </Button>
      </Grid>
    </Grid>
  )
}

export default Pagination
