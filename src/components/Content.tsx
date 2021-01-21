// @ts-ignore
import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

export default function Content({children}) {
    const classes = useStyles();
    return (
        <main className={classes.root}>
            <Toolbar/>
            {children}
        </main>
    )
}