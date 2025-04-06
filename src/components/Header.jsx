import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const navItems = ['Home', 'About', 'Projects', 'Contact'];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box 
      sx={{ 
        width: { xs: '100%', sm: 280 },
        height: '100vh',
        background: '#F7F7F7',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ padding: 5}}></Box>
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton 
              sx={{
                py: 2,
                '&:hover': {
                  background: 'rgba(155, 148, 148, 0.1)', // Subtle hover effect
                }
              }}
            >
              <ListItemText 
                primary={item}
                primaryTypographyProps={{ 
                  color: 'text.primary',
                  fontWeight: 'medium',
                  textAlign: 'center',
                  color: '#000000'
                }} 
              />
            </ListItemButton>
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: '#F7F7F7',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          py: 0.8
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, color: '#000000' }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#000000', fontWeight: 'bold' }} fontFamily="Space Grotesk">
            UMANGA SHRESTHA
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex' }}>
              {navItems.map((item) => (
                <Button 
                  key={item} 
                  sx={{
                    mx: 1,
                    color: '#000000',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    '&:hover': {
                      backgroundColor: 'rgba(155, 148, 148, 0.1)',
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box',
              width: { xs: '100%', sm: 280 },
              borderRight: 'none',
              background: 'transparent',
              overflow: 'hidden'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
};

export default Header;