import React from "react"
import Grid from "@material-ui/core/Grid"
import FormCard, { CardProps } from "./FormCard"
import FilterBar from "./FilterBar"
import Pagination from "./Pagination"

const Container = props => <Grid container {...props} />
const Item = props => <Grid item {...props} />

const BulletinBoard = ({ order, nodes }) => {
  console.log("BulletinBoard")
  console.log(nodes)

  return (
    <Container spacing={1} direction={"row"}>
      <Item xs={12}>
        <FilterBar order={order} />
      </Item>
      {nodes.map((node: CardProps, index) => (
        <Item key={index}>
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
