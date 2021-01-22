// @ts-ignore
import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box"
import {createStyles, makeStyles, Theme, withTheme} from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }),
);

const Content = ({children}) => {
    const classes = useStyles();
    return (
        <Box flexGrow={1}>
            <Toolbar/>
            {children}
        </Box>
    )
}

export default Content;