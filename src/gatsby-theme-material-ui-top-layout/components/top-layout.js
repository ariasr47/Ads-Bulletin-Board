import React from 'react';
import NavBar from '../../components/NavBar';
import Drawer from '../../components/Drawer';
import Toolbar from "@material-ui/core/Toolbar";
import Content from "../../components/Content";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, Theme, makeStyles, createStyles} from '@material-ui/styles';
import Box  from '@material-ui/core/Box';

export default function TopLayout({ children, theme }) {

console.log("Rendering <Layout>");
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box display='flex' bgcolor={theme.palette.background.default} height={'100vh'}>
          <NavBar/>
          <Drawer/>
          <Box display={'flex'} flexGrow={1} flexDirection={'column'} margin={'32px'} >
            <Toolbar/>
              {children}
          </Box>
        </Box>
      </ThemeProvider>
  )
}