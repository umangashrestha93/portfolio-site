import React, { lazy, Suspense } from 'react';
import Header from '../components/Header';
import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import Footer from '../components/Footer';

const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const renderContents = () => {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: { xs: 'center', md: 'flex-start' }, 
        justifyContent: 'center', 
        minHeight: `calc(100vh - 80px)`, 
        px: { xs: 3, sm: 5, md: 10 }, 
        py: { xs: 4, md: 0 }, 
        maxWidth: '1000px', 
        marginLeft: {md: 10, xs: 0}, 
        marginTop: { xs: 10, md: 0}, 
      }}>
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant={isMobile ? 'h3' : 'h2'} 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              color: '#f5f5f5', 
              lineHeight: 1.2, 
              mb: 2, 
            }}
            fontFamily="Space Grotesk"
          >
            Hello! I'm Umanga Shrestha
          </Typography>

          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            component="p"
            sx={{
              maxWidth: '600px',
              color: '#e0e0e0',
              lineHeight: 1.6,
            }}
            fontFamily="Space Grotesk"
          >
            A Front-End Developer with experience in building web and mobile applications
            using React.js, React Native, and Next.js.
          </Typography>
        </Box>

        <Button
          variant="contained"
          size={isMobile ? 'medium' : 'large'}
          sx={{
            background: 'linear-gradient(to right,rgb(83, 51, 101),rgb(53, 11, 104))',
            color: 'white',
            px: 4,
            py: 1.5,
            borderRadius: '8px',
            fontWeight: 600,
            fontFamily: 'Space Grotesk',
            '&:hover': {
              backgroundColor: '#213555',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(2, 29, 48, 0.3)',
            },
            transition: 'all 0.3s ease',
          }}
          onClick={() => {
            const element = document.getElementById('projects-section');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          View My Projects
        </Button>
      </Box>
    );
  };

  return (
    <Box id= 'home-section' sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(to right,rgb(83, 51, 101),rgb(53, 11, 104))',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      overflowX: 'hidden',
    }}>
      <Header />
      {renderContents()}
      
      <Suspense fallback={<div>Loading...</div>}>
        <Box sx={{ marginTop: 4}} id="about">
          <About />
        </Box>
        <Box id="projects-section">
          <Projects />

        </Box>
        <Contact />
      </Suspense>
      
      <Footer />
    </Box>
  );
};

export default React.memo(Home);