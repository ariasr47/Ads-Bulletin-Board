import React from 'react';
import NavBar from '../../components/NavBar';
import Drawer from '../../components/Drawer';
import Content from "../../components/Content";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { Box } from '@material-ui/core';



export default function TopLayout({ children, theme }) {
console.log("Rendering <Layout>");

  return (
    <Box display={'flex'} bgcolor={theme.palette.background.paper}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar/>
                <Drawer/>
                <Content>
                    {children}
                </Content>
      </ThemeProvider>
    </Box>
  );
}