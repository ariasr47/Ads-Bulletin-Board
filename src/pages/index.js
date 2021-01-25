import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"

export default function Home() {
  useEffect(() => {
    navigate("/sorted/DESC/ads")
  }, [])
  return null
}
