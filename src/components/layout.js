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
import SvgIcon from '@mui/material/SvgIcon';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import Wyrd from '../images/wyrd.svg'; 
import SvgFilter from '../images/filter.svg'; 
import CastRune from '../components/castRune';
import RuneList from '../components/runeList';
import { Link } from "gatsby"


const drawerWidth = 240;
const navItems = ['runes', 'rune_cast', 'rune_spread','about'];

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

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
	  <Wyrd style={{width:`2em`}} className="right"/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
	  <ListItem key={item} disablePadding>
          <Link to={`/${item}`}  style={{width:`100%`}}>
            <Button sx={{ width:"100%",p:3,textAlign: 'center' }}>
              { str( item ) } 
            </Button>
	</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
	  <ThemeProvider theme={theme} >
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
	  { str("TITLE") }
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
          <Link to={`/${item}`} >
              <Button key={item} sx={{ color: '#fff' }}>
                { str( item ) }
              </Button>
          </Link>
	    ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{width:'100%',alignItems:`center`,p: 3 }}>
        <Toolbar />
        <Container maxWidth="md">
        <div style={{display:"none"}}><SvgFilter /></div>
	  { props.children }
      </Container >
	</Box>
    </Box>
	</ThemeProvider>
  );
}

export default Layout;

