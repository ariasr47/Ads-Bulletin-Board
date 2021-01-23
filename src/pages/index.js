import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

export default function Home() {
  return (
    <Link to="/Ads">
      <Button color={"secondary"} variant="outlined">
        Proceed{" "}
      </Button>
    </Link>
  )
}
