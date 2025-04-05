import React from 'react';
import Header from '../components/Header';
import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';

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
        marginLeft: 10
      }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            component="h1"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              lineHeight: 1.2,
              mb: 2
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
              color: theme.palette.text.secondary,
              lineHeight: 1.6
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
            backgroundColor: '#2D2D2D',
            color: '#FFFFFF',
            px: 4,
            py: 1.5,
            borderRadius: '8px',
            fontWeight: 600,
            fontFamily: "Space Grotesk",
            '&:hover': {
              backgroundColor: '#434343',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          View My Projects
        </Button>
      </Box>
    )
  }

  return (
    <Box sx={{
      // minHeight: '100vh',
      backgroundColor: '#F8F4E1',
      overflowX: 'hidden',
      padding: 0,
      margin: 0,
    }}>
      <Header />
      {renderContents()}
    </Box>
  );
};

export default Home;