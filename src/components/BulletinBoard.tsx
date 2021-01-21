// @ts-ignore
import React, {useEffect, useState} from "react"
import {Button, Grid} from "@material-ui/core"
import FormCard from "./FormCard"
import FilterBar from "./FilterBar";
import {Link} from "gatsby";

const PrevNext = () => {

    return (
        <Grid container>
            <Button variant={"outlined"} color={"secondary"}>Prev</Button>
            <Link to={'/ASC/2'}><Button variant={"outlined"} color={"secondary"}>Next</Button></Link>
        </Grid>
    )
}

export default function BulletinBoard({children}) {


    return (
        <Grid container={true} spacing={1} direction={"column"}>
            <FilterBar/>
            <Grid item container spacing={1} direction="row">
                {
                    children.map((props, index) => {
                        return (
                            <Grid item>
                                <FormCard {...props} key={index}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid item container spacing={1} direction="row">
                <Grid item>
                    <PrevNext/>
                </Grid>
            </Grid>
        </Grid>
    )

}

