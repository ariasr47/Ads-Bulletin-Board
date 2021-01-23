import React from "react"
import { Link } from "gatsby"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

export default function Home() {
  return (
    <Container>
      <Link to="/Ads">
        <Button color={"secondary"} variant="outlined">
          Proceed
        </Button>{" "}
      </Link>
    </Container>
  )
}
