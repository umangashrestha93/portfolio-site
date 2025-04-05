import React from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Chip,
  Grid
} from '@mui/material';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'React Native',
    'Next.js', 'Java', 'Git & GitHub'
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#F8F4E1',
        px: { xs: 3, sm: 2, md: 2 },
        py: { xs: 5, md: 1 },
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >

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
          backgroundColor: '#2D2D2D',
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
        }}
      >
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 6,
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
            I am <strong>Umanga Kumar Shrestha</strong>, a passionate Front-End Developer with hands-on experience
            in building modern web and mobile applications using <strong>React.js</strong>, <strong>React Native</strong>,
            and <strong>Next.js</strong>. With a degree in Computer Science from Herald College Kathmandu,
            I have worked on real-world projects like delivery apps, admin dashboards, and e-commerce platforms.
            I focus on delivering responsive, intuitive UIs while continuously learning and adapting to new technologies.
          </Typography>
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
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
