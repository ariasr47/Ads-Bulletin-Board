import React from "react"
import Link from "gatsby-link";

export default function Home() {
    console.log("Rendering <Home>");

    return (<div>
        <Link to={"/ASC/1"}>Proceed</Link>
    </div>)
}
