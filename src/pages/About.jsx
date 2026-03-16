import React from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Chip,
  Grid,
  Container,
  Button,
} from '@mui/material';
import resume from '../assets/resume/UmangaStha.pdf'

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Next.js',
  'React Native',
  'REST API',
  'Java',
  'Git & GitHub',
  'Jira'
];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'UmangaStha.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box id='about-section'
      sx={{
        backgroundColor: '#F7F7F7',
        py: { xs: 5, md: 15 },
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 2,
            fontFamily: 'Space Grotesk',
            fontSize: isMobile ? '28px' : '36px',
          }}
        >
          About Me
        </Typography>

        <Box
          sx={{
            width: 50,
            height: 4,
            background: '#2F4F4F',
            margin: '8px auto 24px auto',
            borderRadius: '2px',
          }}
        />

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: theme.palette.text.secondary,
            mb: 6,
            maxWidth: '700px',
            mx: 'auto',
            lineHeight: 1.8,
            fontSize: isMobile ? '16px' : '18px',
            fontFamily: 'Space Grotesk',
            marginBottom: 10
          }}
        >
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 6,
            marginBottom: isMobile ? 8 : 30
          }}
        >

          <Box flex={1}>
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              sx={{ fontWeight: 600, mb: 2, fontFamily: 'Space Grotesk', fontSize: isMobile ? '20px' : '24px' }}
            >
              Get to know me!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.9,
                fontSize: isMobile ? '16px' : '18px',
                fontFamily: 'Space Grotesk',
              }}
            >
              I am <strong>Umanga Kumar Shrestha</strong>, a Software Developer specializing in modern web and mobile application development. I build high-performance, scalable applications using <strong>React.js</strong>, <strong>React Native</strong>, and <strong>Next.js</strong>.
              With a Computer Science degree from Herald College Kathmandu and professional industry experience, I have developed production-ready applications such as delivery platforms, admin dashboards, and e-commerce systems. I focus on creating responsive, intuitive user interfaces while writing clean, maintainable code that ensures reliability and performance.
              I am passionate about solving real-world problems through technology and continuously expanding my skills to build better digital products.
            </Typography>

            <Box sx={{ marginTop: 5 }}>
              <Button
                variant="contained"
                size={isMobile ? 'medium' : 'large'}
                sx={{
                  background: 'linear-gradient(to right,rgb(83, 51, 101),rgb(53, 11, 104))',
                  color: 'white',
                  px: 6,
                  py: 2,
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
                onClick={handleDownload}
              >
                Download Resume
              </Button>
            </Box>
          </Box>


          <Box flex={1}>
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              sx={{ fontWeight: 600, mb: 2, fontFamily: 'Space Grotesk', fontSize: isMobile ? '20px' : '24px' }}
            >
              My Skills
            </Typography>

            <Grid container spacing={2}>
              {skills.map((skill, index) => (
                <Grid item key={index}>
                  <Chip
                    label={skill}
                    sx={{
                      fontSize: isMobile ? '14px' : '16px',
                      fontWeight: 500,
                      px: 1.5,
                      py: 1,
                      fontFamily: 'Space Grotesk',
                      transition: '0.2s',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: 2
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