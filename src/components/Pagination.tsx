import React from "react"
import Button from "@material-ui/core/Button"

const Pagination = () => {
  return (
    <>
      <Button variant={"outlined"} color={"secondary"}>
        Prev
      </Button>
      <Button variant={"outlined"} color={"secondary"}>
        Next
      </Button>
    </>
  )
}

export default Pagination
