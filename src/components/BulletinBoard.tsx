import React from "react"
import Grid from "@material-ui/core/Grid"
import FormCard from "./FormCard"
import FilterBar from "./FilterBar"
import Pagination from "./Pagination"

const Container = props => <Grid container {...props} />
const Item = props => <Grid item {...props} />

const BulletinBoard = ({ nodes }) => {
  return (
    <Container spacing={1} direction={"row"}>
      <Item xs={12}>
        <FilterBar />
      </Item>
      {nodes.map(node => (
        <Item>
          <FormCard {...node} />
        </Item>
      ))}
      <Item xs={12}>
        <Pagination />
      </Item>
    </Container>
  )
}

export default BulletinBoard
