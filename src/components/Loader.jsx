import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Artificial progress to simulate loading over 2 seconds
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5; // Controls the speed of the percentage tracker
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#050505',
        position: 'relative'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>

        {/* Expressive Rotating Geometric Rings */}
        <Box sx={{ position: 'relative', width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '100%', height: '100%',
              border: '2px solid rgba(99, 102, 241, 0.4)', // Indigo
              borderRadius: '30%',
            }}
          />

          <motion.div
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '90%', height: '90%',
              border: '2px solid rgba(236, 72, 153, 0.4)', // Pink
              borderRadius: '45%',
            }}
          />

          <motion.div
            animate={{ rotate: 180, scale: [1, 0.9, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '80%', height: '80%',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '35%',
            }}
          />

          <Typography
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            sx={{ fontWeight: 800, fontSize: '1.8rem', fontFamily: 'Space Grotesk', color: '#fff', letterSpacing: -1, zIndex: 2 }}
          >
            US.
          </Typography>

        </Box>

        {/* High-End Loading Bar & Data Tracker */}
        <Box sx={{ width: 240, display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: 'center' }}>

          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 0.5 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Typography sx={{ color: '#fff', fontFamily: 'Space Grotesk', letterSpacing: 4, fontSize: '0.7rem', textTransform: 'uppercase' }}>
                Loading
              </Typography>
            </motion.div>

            <Typography sx={{ color: '#fff', fontFamily: 'Space Grotesk', fontSize: '0.8rem', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>
              {Math.min(Math.floor(progress), 100)}%
            </Typography>
          </Box>

          <Box sx={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1 0%, #ec4899 100%)',
                width: `${progress}%`,
              }}
            />
          </Box>

        </Box>

      </Box>
    </Box>
  );
};

export default Loader;
