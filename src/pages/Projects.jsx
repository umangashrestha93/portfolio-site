import { Box, Container, Typography, Card, CardMedia, CardContent, IconButton, Chip, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import React, { useRef, useState, useCallback } from 'react';
import portfolioImage from '../assets/images/portfolio.png';
import travelImage from '../assets/images/travel.png';
import cameraImage from '../assets/images/camera.png';
import ecommerceImage from '../assets/images/ecommerce.png';
import foodImage from '../assets/images/food.png';
import todoImage from '../assets/images/todo.png';
import squegg from '../assets/images/squegg.png';
import msat from '../assets/images/MSAT.png';
import beyond5 from '../assets/images/beyond5.png';

const ProjectCard = React.memo(({ project, index, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ width: '100%', perspective: "1500px" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => isMobile && setIsHovered(!isHovered)}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: { xs: 300, sm: 340, md: 380 },
            height: '460px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '12px',
            overflow: 'hidden',
            background: 'rgba(15, 15, 15, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            position: 'relative',
            cursor: project.appLink ? 'pointer' : 'default',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '12px',
              border: '1px solid transparent',
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) border-box`,
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'destination-out',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.4s ease',
              zIndex: 1,
              pointerEvents: 'none',
            }
          }}
          onClick={() => project.appLink && window.open(project.appLink, '_blank')}
        >
          <Box sx={{ 
            position: 'relative', 
            overflow: 'hidden', 
            height: { xs: 180, md: 220 }, 
            flexShrink: 0,
            background: '#050505',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <CardMedia
              component="img"
              image={project.imageUrl}
              alt={project.title}
              loading="lazy"
              decoding="async"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: project.isMobile ? 'contain' : 'cover',
                objectPosition: 'center',
                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s',
                transform: isHovered && !isMobile ? 'scale(1.05)' : 'scale(1)',
                filter: isHovered ? 'brightness(0.8)' : 'brightness(1)',
                willChange: 'transform',
                margin: 'auto',
                display: 'block'
              }}
            />
          </Box>

          <CardContent sx={{
            flexGrow: 1,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            zIndex: 2,
            background: 'linear-gradient(to top, rgba(15,15,15,1) 0%, rgba(15,15,15,0.8) 100%)'
          }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: '1.2rem',
                color: theme.palette.text.primary,
                fontFamily: 'Space Grotesk',
                mb: 1.5,
                letterSpacing: -0.5
              }}
            >
              {project.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: '0.9rem',
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                mb: 3,
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontFamily: 'Space Grotesk',
              }}
            >
              {project.description}
            </Typography>

            <Box sx={{ mt: 'auto', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {project.technologies?.map((tech, i) => (
                <Chip
                  key={i}
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: theme.palette.text.secondary,
                    fontSize: '0.75rem',
                    height: '24px',
                    fontFamily: 'Space Grotesk',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease',
                    ...(isHovered && {
                      color: theme.palette.text.primary,
                      borderColor: 'rgba(255,255,255,0.2)',
                    })
                  }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
});

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const isAndroid = () => /Android/i.test(navigator.userAgent);

  const SqueggAppLink = isAndroid() ? 'https://play.google.com/store/apps/details?id=com.nudiao.squegg&hl=en' : 'https://apps.apple.com/us/app/squegg/id1438724856';
  const MsatAppLink = isAndroid() ? "https://play.google.com/store/apps/details?id=com.abbothcp&hl=en" : "https://apps.apple.com/us/app/msat-muscle-strength-tool/id6444227788"

  const projects = React.useMemo(() => [
    {
      title: 'My Squegg',
      description: 'Squegg offers a medical device and connected app solution for assessment and monitoring of key upper extremity impairments including grip strength and pinch strength.',
      imageUrl: squegg,
      technologies: ['React Native', 'JavaScript'],
      appLink: SqueggAppLink
    },
    {
      title: 'MSAT',
      description: 'Muscle Strength Assessment Tool is used to measure grip strength and evaluate patient progress reliably.',
      imageUrl: msat,
      technologies: ['React Native', 'JavaScript'],
      appLink: MsatAppLink
    },
    {
      title: 'BEYOND5 HealthCare',
      description: 'A new national Allied Health access model, designed to shift access beyond 9–5 into the hours people actually live their lives.',
      imageUrl: beyond5,
      technologies: ['React.JS', 'MUI', 'JavaScript', 'MONGODB', 'EXPRESS.JS', 'FRAMER MOTION', 'THREE.JS' ],
      appLink: ''
    },
    {
      title: 'Portfolio Site',
      description: 'A deeply customized, ultra-premium portfolio to showcase my work and design aesthetics.',
      imageUrl: portfolioImage,
      technologies: ['React', 'Three.js', 'Framer Motion'],
      appLink: ''
    },
    {
      title: 'Tour Management',
      description: 'A Portal for a Travel and Tours Company showcasing tour details, handling packages, and managing leads securely.',
      imageUrl: travelImage,
      technologies: ['Django', 'JavaScript', 'HTML/CSS'],
      appLink: ''
    },
    {
      title: 'Shutter Scope',
      description: 'Shutter scope is an online-based web application solving camera gear rental problems securely.',
      imageUrl: cameraImage,
      technologies: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
      appLink: ''
    },
    {
      title: 'Ecommerce App',
      description: 'A robust and scalable mobile ecommerce application built for high performance and smooth UX.',
      imageUrl: ecommerceImage,
      technologies: ['React Native'],
      isMobile: true,
      appLink: ''
    },
  ], []);

  const checkScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  const scroll = useCallback((scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
      setTimeout(checkScrollPosition, 500);
    }
  }, [checkScrollPosition]);

  const { scrollXProgress } = useScroll({ container: scrollContainerRef });
  const opacityRange = useTransform(scrollXProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <Box id="projects-section" sx={{ background: 'transparent', pb: { xs: 8, md: 15 }, pt: { xs: 8, md: 15 }, position: 'relative', zIndex: 2 }}>
      <Container maxWidth="xl">
        
       <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: theme.palette.text.primary, fontFamily: 'Space Grotesk', fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: -1 }}>
              Work
            </Typography>
            <Box sx={{ height: '1px', flexGrow: 1, background: 'rgba(255,255,255,0.1)' }} />
          </Box>
        </motion.div>

        <Box sx={{ position: 'relative' }}>
          {showLeftArrow && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ opacity: opacityRange }}>
              <IconButton
                onClick={() => scroll(-400)}
                size="large"
                sx={{
                  position: 'absolute', left: -20, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                  backgroundColor: 'rgba(10,10,10,0.8)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': { backgroundColor: '#111' },
                  display: { xs: 'none', sm: 'flex' }
                }}
              >
                <ChevronLeft />
              </IconButton>
            </motion.div>
          )}

          <Box
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            sx={{
              overflowX: 'auto', whiteSpace: 'nowrap', scrollBehavior: 'smooth',
              scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' },
              py: 4, px: { xs: 2, sm: 4 }, mx: { xs: -2, sm: -4 },
            }}
          >
            <Box component={motion.div} sx={{ display: 'inline-flex', gap: { xs: 3, sm: 5 }, px: { xs: 0, sm: 2 } }}>
              {projects.map((project, index) => (
                <Box key={`project-${index}`} sx={{ width: { xs: 280, sm: 340, md: 380 }, flexShrink: 0, whiteSpace: 'normal' }}>
                  <ProjectCard project={project} index={index} isMobile={isMobile} />
                </Box>
              ))}
            </Box>
          </Box>

          {showRightArrow && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ opacity: opacityRange }}>
              <IconButton
                onClick={() => scroll(400)}
                size="large"
                sx={{
                  position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                  backgroundColor: 'rgba(10,10,10,0.8)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': { backgroundColor: '#111' },
                  display: { xs: 'none', sm: 'flex' }
                }}
              >
                <ChevronRight />
              </IconButton>
            </motion.div>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default React.memo(Projects);