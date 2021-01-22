import React from "react"
import Link from "gatsby-link";

export default function Home() {
    console.log("Rendering <Home>");

    return <Link to={"/Ads"} color="white">Proceed</Link>
}
