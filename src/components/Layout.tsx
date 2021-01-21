// @ts-ignore
import React from 'react';
import {createMuiTheme, createStyles, makeStyles, Theme, ThemeProvider} from '@material-ui/core/styles';
import NavBar from './NavBar';
import Drawer from './Drawer';
import Content from "./Content";
import {CssBaseline} from "@material-ui/core";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#bb86fc",
            contrastText: "#000000",
        },
        secondary: {
            main: "#03DAC5",
            contrastText: "#000000",
        },
        background: {
            default: "#121212",
            paper: "#121212",
        },
        action: {
            active: "rgba(255,255,255,0.24)",
            hover: "rgba(255,255,255,0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(255,255,255,0.16)",
            selectedOpacity: 0.16,
            disabled: 'rgba(187, 134, 252, 0.26)',
            focus: "rgba(255,255,255,0.0.24)",
            focusOpacity: 0.24,
        },
        text: {
            primary: "rgba(255,255,255,0.87)",
            secondary: "rgba(255,255,255,0.6)",
        },
        divider: "rgba(255,255,255,0.12)",
    },
});


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
    }),
);

export default function ({children}) {
    console.log("Rendering <Layout>");
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <NavBar/>
                <Drawer/>
                <Content>
                    {children}
                </Content>
            </ThemeProvider>
        </div>
    )
}