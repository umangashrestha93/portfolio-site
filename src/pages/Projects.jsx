import { Box, Container, Typography, Card, CardMedia, CardContent, IconButton, Button, Chip, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight, GitHub, Launch } from '@mui/icons-material';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState, useCallback } from 'react';
import portfolioImage from '../assets/images/portfolio.png';
import travelImage from '../assets/images/travel.png';
import cameraImage from '../assets/images/camera.png';
import ecommerceImage from '../assets/images/ecommerce.png';
import foodImage from '../assets/images/food.png';
import todoImage from '../assets/images/todo.png';

const ProjectCard = React.memo(({ project, index, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ width: '100%' }}
    >
      <Card
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={() => isMobile && setIsHovered(!isHovered)}
        sx={{
          width: '100%',
          maxWidth: { xs: 280, sm: 320, md: 360 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          position: 'relative',
          cursor: isMobile ? 'pointer' : 'default',
          '&:hover': {
            transform: !isMobile ? 'translateY(-8px)' : 'none',
            boxShadow: !isMobile ? '0 16px 32px rgba(0,0,0,0.2)' : '0 8px 24px rgba(0,0,0,0.12)',
          },
        }}
      >
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <Box sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            height: { xs: 180, sm: 200, md: 220 },
            borderRadius: '12px 12px 0 0'
          }}>
            <CardMedia
              component="img"
              image={project.imageUrl}
              alt={project.title}
              loading="lazy"
              onLoad={(e) => {
                // Force high quality rendering after load
                e.target.style.imageRendering = 'auto';
              }}
              sx={{
                position: 'absolute',
                width: project.isMobile ? '100%' : '100%',
                height: project.isMobile ? '100%' : '122%',
                objectFit: project.isMobile ?  'contain' : 'cover',
                objectPosition: 'center',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isHovered && !isMobile ? 'scale(1.05)' : 'scale(1)',
                filter: isHovered ? 'brightness(0.7)' : 'brightness(1)',
                willChange: 'transform, filter',
                imageRendering: 'optimizeQuality',
                backfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d'
              }}
            />
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.1) 100%)'
            }} />
          </Box>
        </Box>

        <CardContent sx={{
          flexGrow: 1,
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 2.5 },
          '&:last-child': { pb: { xs: 2, sm: 2.5 } },
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <Typography
            variant="h6"
            fontWeight="700"
            gutterBottom
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.2rem' },
              color: theme.palette.text.primary,
              wordBreak: 'break-word'
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              fontSize: { xs: '0.875rem', sm: '0.9375rem' },
              minHeight: { xs: '60px', sm: '70px' },
              whiteSpace: 'normal',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: 1.5
            }}
          >
            {project.description}
          </Typography>

          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            mt: 'auto',
            alignSelf: 'flex-start'
          }}>
            {project.technologies?.map((tech, i) => (
              <Chip
                key={i}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(255,255,255,0.1)'
                    : 'rgba(0,0,0,0.08)',
                  color: theme.palette.text.secondary,
                  fontSize: '0.7rem',
                  height: '24px',
                  maxWidth: '100%',
                  '& .MuiChip-label': {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
});

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const projects = [
    {
      title: 'My Portfolio Site',
      description: 'A modern, responsive portfolio website showcasing my work and skills with smooth animations.',
      imageUrl: portfolioImage,
      liveUrl: '#',
      githubUrl: '#',
      technologies: ['HTML', 'CSS', 'JAVASCRIPT']
    },
    {
      title: 'Tour Managemnet System',
      description: 'Productivity application with team collaboration features and progress tracking.',
      imageUrl: travelImage,
      liveUrl: '#',
      githubUrl: '#',
      technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'DJANGO']
    },
    {
      title: 'CAMERA RENTAL SYSTEM',
      description: 'Mobile-first application for tracking workouts and nutrition with data visualization.',
      imageUrl: cameraImage,
      liveUrl: '#',
      technologies: ['REACT J.S', 'TAILWIND CSS', 'NODE J.S', 'MONGO DB']
    },
    {
      title: 'Ecommerce Mobile App',
      description: 'Analytics dashboard for social media managers with real-time metrics.',
      imageUrl: ecommerceImage,
      githubUrl: '#',
      technologies: ['REACT NATIVE'],
      isMobile: true
    },
    {
      title: 'FOOD APP',
      description: 'Interactive map-based application for itinerary planning and destination discovery.',
      imageUrl: foodImage,
      liveUrl: '#',
      technologies: ['REACT NATIVE'],
      isMobile: true
    },
    {
      title: 'To Do List',
      description: 'Online education platform with course creation and student progress tracking.',
      imageUrl: todoImage,
      githubUrl: '#',
      technologies: ['REACT NATIVE'],
      isMobile: true
    },
  ];

  const checkScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  const scroll = useCallback((scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth'
      });
      setTimeout(checkScrollPosition, 500);
    }
  }, [checkScrollPosition]);

  const { scrollXProgress } = useScroll({
    container: scrollContainerRef,
  });

  const opacityRange = useTransform(scrollXProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: { xs: 3, sm: 6, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 800,
              marginBottom: { xs: 4, sm: 6 },
              color: theme.palette.text.primary,
              fontSize: { xs: '1.75rem', sm: '2.5rem' },
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(90deg, #fff, #aaa)'
                : 'linear-gradient(90deg, #333, #000)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.05em',
            }}
          >
            My Projects
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative' }}>
          {showLeftArrow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ opacity: opacityRange }}
            >
              <IconButton
                onClick={() => scroll(-360 * 2)}
                size={isMobile ? 'medium' : 'large'}
                sx={{
                  position: 'absolute',
                  left: { xs: -12, sm: -20 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: 3,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                  display: { xs: 'none', sm: 'flex' }
                }}
              >
                <ChevronLeft fontSize={isMobile ? 'medium' : 'large'} />
              </IconButton>
            </motion.div>
          )}

          <Box
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            sx={{
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
              py: 2,
              px: { xs: 0, sm: 4 },
              mx: { xs: -2, sm: 0 },
            }}
          >
            <Box
              component={motion.div}
              sx={{
                display: 'inline-flex',
                gap: { xs: 2, sm: 4 },
                paddingBottom: 1,
                px: { xs: 2, sm: 0 },
              }}
            >
              {projects.map((project, index) => (
                <Box
                  key={`project-${index}`}
                  sx={{
                    width: { xs: 260, sm: 320, md: 360 },
                    flexShrink: 0,
                    px: { xs: 0.5, sm: 0 }
                  }}
                >
                  <ProjectCard project={project} index={index} isMobile={isMobile} />
                </Box>
              ))}
            </Box>
          </Box>

          {showRightArrow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ opacity: opacityRange }}
            >
              <IconButton
                onClick={() => scroll(360 * 2)}
                size={isMobile ? 'medium' : 'large'}
                sx={{
                  position: 'absolute',
                  right: { xs: -12, sm: -20 },
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  backgroundColor: theme.palette.background.paper,
                  boxShadow: 3,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                  display: { xs: 'none', sm: 'flex' }
                }}
              >
                <ChevronRight fontSize={isMobile ? 'medium' : 'large'} />
              </IconButton>
            </motion.div>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;