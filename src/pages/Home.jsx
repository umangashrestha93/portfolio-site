import React, { lazy, Suspense } from 'react';
import Header from '../components/Header';
import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const renderContents = () => {
    return (
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: { xs: 'flex-start', md: 'flex-start' }, 
        justifyContent: 'center', 
        minHeight: `100vh`, 
        px: { xs: 4, sm: 8, md: 15 }, 
        maxWidth: '1400px', 
        position: 'relative',
        zIndex: 10
      }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ width: '100%' }}>
          
          <motion.div variants={itemVariants}>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 500,
                letterSpacing: 3,
                textTransform: 'uppercase',
                fontSize: { xs: '0.8rem', md: '0.9rem' },
                mb: 3,
                fontFamily: 'Space Grotesk'
              }}
            >
              Software Developer
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography 
              variant={isMobile ? 'h2' : 'h1'} 
              component="h1" 
              sx={{ 
                fontWeight: 700, 
                color: theme.palette.text.primary, 
                lineHeight: 1.05, 
                letterSpacing: -2,
                mb: 4, 
                fontFamily: 'Space Grotesk',
              }}
            >
              Building digital <br />
              experiences that <br />
              <Box component="span" sx={{ 
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`, 
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                resonate.
              </Box>
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              component="p"
              sx={{
                maxWidth: '500px',
                color: theme.palette.text.secondary,
                lineHeight: 1.7,
                fontSize: { xs: '1rem', md: '1.1rem' },
                mb: 6,
                fontFamily: 'Space Grotesk'
              }}
            >
              Hi, I'm Umanga Shrestha. I engineer scalable web and mobile applications with obsessive attention to detail, using React, React Native, and Next.js.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              sx={{
                color: theme.palette.text.primary,
                px: 5,
                py: 2,
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '0.95rem',
                fontFamily: 'Space Grotesk',
                textTransform: 'uppercase',
                letterSpacing: 1.5,
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  background: '#ffffff',
                  color: '#000000',
                  transform: 'translateY(-2px)',
                },
              }}
              onClick={() => {
                const element = document.getElementById('projects-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Work
            </Button>
          </motion.div>
        </motion.div>
      </Box>
    );
  };

  return (
    <Box id='home-section' sx={{ 
      minHeight: '100vh',
      background: 'transparent', // The 3D Canvas sits behind this
    }}>
      {/* React 19 Native Head Metadata Hoisting */}
      <title>Umanga Shrestha | Software Developer</title>
      <meta name="description" content="Hi, I'm Umanga Shrestha. I engineer scalable web and mobile applications with obsessive attention to detail, using React, React Native, and Next.js." />
      <meta name="keywords" content="Umanga Shrestha, Umanga, Shrestha, Software Developer, React Developer, React Native Developer, Mobile Developer, Frontend Engineer, Portfolio" />
      <meta name="author" content="Umanga Shrestha" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://umangastha.com.np/" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://umangastha.com.np/" />
      <meta property="og:title" content="Umanga Shrestha | Software Developer" />
      <meta property="og:description" content="Hi, I'm Umanga Shrestha. I engineer scalable web and mobile applications with obsessive attention to detail, using React, React Native, and Next.js." />
      <meta property="og:image" content="https://umangastha.com.np/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://umangastha.com.np/" />
      <meta property="twitter:title" content="Umanga Shrestha | Software Developer" />
      <meta property="twitter:description" content="Hi, I'm Umanga Shrestha. I engineer scalable web and mobile applications with obsessive attention to detail, using React, React Native, and Next.js." />
      <meta property="twitter:image" content="https://umangastha.com.np/og-image.jpg" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Umanga Shrestha",
          "url": "https://umangastha.com.np/",
          "image": "https://umangastha.com.np/og-image.jpg",
          "jobTitle": "Software Developer",
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Computer Science"
          },
          "knowsAbout": [
            "HTML", "CSS", "JavaScript", "React", "React.js", "Next.js",
            "React Native", "TypeScript", "Node.js", "Git", "Figma",
            "Web Development", "Mobile Development", "MongoDB", "Express.js", "Django"
          ],
          "sameAs": [
            "https://www.linkedin.com/in/umanga-shrestha-57b055212/",
            "https://github.com/umangashrestha93",
            "https://www.instagram.com/umanga_shrestha_/"
          ]
        })}
      </script>

      <Header />
      {renderContents()}
      
      <Suspense fallback={<Loader />}>
        <Box sx={{ position: 'relative', zIndex: 10 }}>
          <About />
          <Projects />
          <Contact />
        </Box>
      </Suspense>
      
      <Footer />
    </Box>
  );
};

export default React.memo(Home);