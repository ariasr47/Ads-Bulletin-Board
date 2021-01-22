// @ts-ignore
import React, {useEffect, useState} from "react"
import {Button, Grid} from "@material-ui/core"
import {withTheme} from "@material-ui/styles";
import FormCard from "./FormCard"
import FilterBar from "./FilterBar";
import {Link} from "gatsby";



const BulletinBoard = ({children}) => {

    return (
        <Grid container spacing={2} direction={"column"}>
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
            <Grid item container spacing={2} direction="row">
                <Grid item>
                    <Link to={'#'}>
                        <Button variant={"outlined"} color={"secondary"}>
                            Prev
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BulletinBoard;