import React from 'react';
import { Box, Typography, Container, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import profileImage from '../assets/images/umangaaa.jpg'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(to right, #1A1A1D, #0D0D0F)',
        color: 'white',
        py: 10,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4
        }}>
          <Box sx={{ maxWidth: 500 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Umanga Shrestha
            </Typography>
            <Typography variant="body1">
              I'm a passionate developer dedicated to creating beautiful, functional web applications.
              With expertise in modern JavaScript frameworks and a keen eye for design,
              I build solutions that are both powerful and user-friendly.
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-end' }
          }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                aria-label="LinkedIn"
                color="inherit"
                href="https://www.linkedin.com/in/umanga-shrestha-57b055212/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="GitHub"
                color="inherit"
                href="https://github.com/umangashrestha93"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                color="inherit"
                href="https://www.instagram.com/umanga_shrestha_/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 6, opacity: 0.8 }}
        >
          © {new Date().getFullYear()} Umanga Shrestha. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;