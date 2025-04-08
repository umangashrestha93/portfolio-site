import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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
import { Link as ScrollLink } from 'react-scroll';
import profileImage from '../assets/images/umangaaa.jpg';

const navItems = [
  { name: 'Home', id: 'home-section' },
  { name: 'About', id: 'about-section' },
  { name: 'Projects', id: 'projects-section' },
  { name: 'Contact', id: 'contact-section' }
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (id) => {
    if (id === 'home-section') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
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
          <ListItem key={item.id} disablePadding>
            {item.id === 'home-section' ? (
              <ListItemButton 
                onClick={() => handleNavClick(item.id)}
                sx={{
                  py: 2,
                  '&:hover': {
                    background: 'rgba(155, 148, 148, 0.1)',
                  }
                }}
              >
                <ListItemText 
                  primary={item.name}
                  primaryTypographyProps={{ 
                    fontWeight: 'medium',
                    textAlign: 'center',
                    color: '#000000'
                  }} 
                />
              </ListItemButton>
            ) : (
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => handleNavClick(item.id)}
                style={{ width: '100%' }}
              >
                <ListItemButton 
                  sx={{
                    py: 2,
                    '&:hover': {
                      background: 'rgba(155, 148, 148, 0.1)',
                    }
                  }}
                >
                  <ListItemText 
                    primary={item.name}
                    primaryTypographyProps={{ 
                      fontWeight: 'medium',
                      textAlign: 'center',
                      color: '#000000'
                    }} 
                  />
                </ListItemButton>
              </ScrollLink>
            )}
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

          <Box
            onClick={() => handleNavClick('home-section')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: isMobile ? 0 : 1,
              justifyContent: 'flex-start',
              cursor: 'pointer'
            }}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Profile"
              sx={{
                height: { xs: 40, sm: 50, md: 60 },
                width: { xs: 40, sm: 50, md: 60 },
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #e0e0e0',
                boxShadow: 1,
                mr: isMobile ? 2 : 0
              }}
            />
          </Box>
          {!isMobile && (
            <Box sx={{ display: 'flex' }}>
              {navItems.map((item) => (
                item.id === 'home-section' ? (
                  <Button 
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
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
                    {item.name}
                  </Button>
                ) : (
                  <ScrollLink
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    <Button 
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
                      {item.name}
                    </Button>
                  </ScrollLink>
                )
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