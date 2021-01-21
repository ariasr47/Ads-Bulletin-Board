// @ts-ignore
import React from "react"
import {Box, ButtonGroup, Divider, Grid, Icon, IconButton} from "@material-ui/core"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"
import {FaSortNumericDown} from "@react-icons/all-files/fa/FaSortNumericDown";
import {FaSortNumericUp} from "@react-icons/all-files/fa/FaSortNumericUp";
import {FaYenSign} from "@react-icons/all-files/fa/FaYenSign";
import {FaEuroSign} from "@react-icons/all-files/fa/FaEuroSign";
import {FaDollarSign} from "@react-icons/all-files/fa/FaDollarSign";
import {FaList} from "@react-icons/all-files/fa/FaList";
import {FaTh} from "@react-icons/all-files/fa/FaTh";
import Link from "gatsby-link";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "row",
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.secondary,
            '& svg': {
                margin: theme.spacing(0.4),
            },
            '& hr': {
                margin: theme.spacing(0, 0.3),
            },
        },
        inactive: {
            opacity: 0.45,
        }
    }),
);

const NumericalSort = (props) => {
    return (
        <ButtonGroup aria-label="primary button group">
            <Link to={"/DESC/1"}>
                <IconButton aria-label="filter">
                    <Icon component={FaSortNumericDown} color={"primary"}/>
                </IconButton>
            </Link>
            <Link to={"/ASC/1"}>
                <IconButton aria-label="filter">
                    <Icon component={FaSortNumericUp} color={"disabled"}/>
                </IconButton>
            </Link>
        </ButtonGroup>
    )
}

const FilterBar = React.memo(props => {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Box className={classes.root}>
                <ButtonGroup aria-label="primary button group">
                    <IconButton aria-label="view list" disabled={true}>
                        <Icon component={FaList} color={"disabled"} className={"inactive"}/>
                    </IconButton>
                    <IconButton aria-label="module">
                        <Icon component={FaTh} color={"primary"}/>
                    </IconButton>
                </ButtonGroup>
                <Divider orientation="vertical" flexItem/>
                <ButtonGroup aria-label="outlined primary button group">
                    <IconButton aria-label="usd">
                        <Icon component={FaDollarSign} color={"primary"}/>
                    </IconButton>
                    <IconButton aria-label="euro" disabled={true}>
                        <Icon component={FaEuroSign} color={"disabled"}/>
                    </IconButton>
                    <IconButton disabled={true}>
                        <Icon component={FaYenSign} color={"disabled"}/>
                    </IconButton>
                </ButtonGroup>
                <Divider orientation="vertical" flexItem/>
                <NumericalSort/>
            </Box>
        </Grid>
    )
})

export default FilterBar;