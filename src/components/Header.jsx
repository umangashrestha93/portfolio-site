import React, { useState, useEffect } from 'react';
import { Box, IconButton, Drawer, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinksVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const renderDesktopNav = () => (
    <Box sx={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      {navItems.map((item, i) => (
        <motion.div
          key={item.id}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={navLinksVariants}
        >
          {item.id === 'home-section' ? (
            <Typography
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'Space Grotesk',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: 2,
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: theme.palette.text.primary,
                }
              }}
            >
              {item.name}
            </Typography>
          ) : (
            <ScrollLink
              to={item.id}
              spy={true}
              smooth={true}
              duration={800}
              offset={0}
            >
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: theme.palette.text.primary,
                  }
                }}
              >
                {item.name}
              </Typography>
            </ScrollLink>
          )}
        </motion.div>
      ))}
    </Box>
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          display: 'flex',
          justifyContent: 'center',
          padding: '24px 0',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            px: { xs: 3, md: 5 },
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Box
              component="img"
              src={profileImage}
              alt="Umanga Shrestha"
              sx={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'left',
                border: '1px solid rgba(255,255,255,0.2)',
                filter: 'grayscale(100%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  borderColor: theme.palette.primary.main,
                  boxShadow: `0 0 15px ${theme.palette.primary.main}`,
                }
              }}
            />
          </motion.div>

          {!isMobile ? (
            renderDesktopNav()
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            PaperProps={{
              sx: {
                width: '100%',
                background: '#050505',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ position: 'absolute', top: 24, right: 24, color: theme.palette.text.primary }}
            >
              <CloseIcon />
            </IconButton>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Typography
                    onClick={() => {
                      if (item.id === 'home-section') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }
                      handleDrawerToggle();
                    }}
                    sx={{
                      color: theme.palette.text.primary,
                      fontSize: '2.5rem',
                      fontWeight: 600,
                      fontFamily: 'Space Grotesk',
                      textTransform: 'lowercase',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                      '&:hover': { color: theme.palette.primary.main }
                    }}
                  >
                    {item.name}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Header);