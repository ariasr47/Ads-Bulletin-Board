import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import Button from "@material-ui/core/Button"

export default function Home() {
  useEffect(() => {
    navigate("/ads")
  }, [])
  return null
}
