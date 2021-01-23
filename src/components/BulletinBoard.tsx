import React from "react"
import Grid from "@material-ui/core/Grid"
import FormCard from "./FormCard"
import FilterBar from "./FilterBar"
import Pagination from "./Pagination"

const BulletinBoard = ({ children }) => {
  return (
    <Grid container spacing={1} direction={"column"}>
      <FilterBar />
      <Grid item container spacing={1} direction="row">
        {children.map((props, index) => {
          return (
            <Grid item>
              <FormCard {...props} key={index} />
            </Grid>
          )
        })}
      </Grid>
      <Pagination />
    </Grid>
  )
}

export default BulletinBoard
