import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Rune from '../components/rune';
import str from '../components/lang';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import SvgFilter from '../images/filter.svg'; 
import CastRuneSpread from '../components/castRuneSpread';
import RuneList from '../components/runeList';
import Layout from '../components/layout';
const drawerWidth = 240;
const navItems = ['RUNES', 'CAST_ONE', 'CAST_THREE'];


const themeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      contrastText: 'rgba(255,0,0,0.87)',
      dark: '#ff8989',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#000000',
      paper: '#2b2b2b',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      disabled: '#ffcdd2',
      hint: '#ffffff',
      secondary: '#ffcdd2',
    },
    divider: '#616161',
  },
};

const theme = createTheme( themeOptions );

function IndexPage(props) {
  const { window } = props;

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
	  <Layout>
	  <CastRuneSpread str={ str } />
	  </Layout>
  );
}

IndexPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default IndexPage;

