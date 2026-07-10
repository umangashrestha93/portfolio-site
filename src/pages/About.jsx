import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Chip, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import resume from '../assets/resume/updatedResume.pdf';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js',
    'React Native', 'TypeScript', 'Node.js', 'Git', 'Figma'
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'UmangaStha.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <Box id='about-section' sx={{ background: 'transparent', pb: { xs: 5, md: 15 }, position: 'relative', zIndex: 2 }}>
      <Container maxWidth="xl" component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
        
        <motion.div variants={itemVariants}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                fontFamily: 'Space Grotesk',
                fontSize: { xs: '2rem', md: '3rem' },
                letterSpacing: -1
              }}
            >
              About
            </Typography>
            <Box sx={{ height: '1px', flexGrow: 1, background: 'rgba(255,255,255,0.1)' }} />
          </Box>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: { xs: 8, md: 12 }, alignItems: 'flex-start' }}>
          
          {/* Biography Section */}
          <Box flex={1.2} component={motion.div} variants={itemVariants}>
            <Typography variant="h5" sx={{ fontWeight: 500, mb: 4, color: theme.palette.text.primary, fontFamily: 'Space Grotesk', letterSpacing: -0.5 }}>
              Passionate about creating <Box component="span" sx={{ color: theme.palette.primary.main }}>intuitive</Box> and <Box component="span" sx={{ color: theme.palette.secondary.main }}>dynamic</Box> user experiences.
            </Typography>

            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'Space Grotesk', mb: 3 }}>
              I am a Software Developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using modern web technologies.
            </Typography>
            
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'Space Grotesk', mb: 6 }}>
              With a foundation in Computer Science and strong industry experience, I thrive at the intersection of design and engineering—ensuring applications are not only highly performant and scalable but also visually stunning.
            </Typography>

            <Box 
              component="span" 
              onClick={handleDownload}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                color: theme.palette.text.primary,
                fontWeight: 600,
                fontFamily: 'Space Grotesk',
                fontSize: '1rem',
                cursor: 'pointer',
                borderBottom: `1px solid ${theme.palette.text.primary}`,
                pb: 0.5,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: theme.palette.primary.main,
                  borderBottom: `1px solid ${theme.palette.primary.main}`,
                  gap: 1.5
                }
              }}
            >
              Resume <ArrowOutwardIcon fontSize="small" />
            </Box>
          </Box>

          {/* Skills Section */}
          <Box flex={1} component={motion.div} variants={itemVariants} sx={{ width: '100%' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 4, color: theme.palette.text.primary, fontFamily: 'Space Grotesk' }}>
              Technologies I frequently use
            </Typography>
            
            <Grid container spacing={2}>
              {skills.map((skill, index) => (
                <Grid item key={index}>
                  <Chip
                    label={skill}
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      px: 2,
                      py: 2.5,
                      fontFamily: 'Space Grotesk',
                      background: 'transparent',
                      color: theme.palette.text.secondary,
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255,255,255,0.05)',
                        color: theme.palette.text.primary,
                        borderColor: 'rgba(255,255,255,0.3)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default About;