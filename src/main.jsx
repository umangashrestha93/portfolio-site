import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Background3D from './components/Background3D';
import Loader from './components/Loader';

const theme = createTheme({
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
  },
  palette: {
    mode: 'dark',
    background: {
      default: 'transparent',
      paper: '#0a0a0a',
    },
    primary: {
      main: '#6366f1', // Indigo
    },
    secondary: {
      main: '#ec4899', // Pink
    },
    text: {
      primary: '#ffffff',
      secondary: '#a3a3a3',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#050505',
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#050505',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#333333',
            borderRadius: '10px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
        }
      }
    }
  },
});

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the intro loader for 2.2 seconds exactly when the app loads
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatePresence>
        {loading && (
          <motion.div
            key="initial-loader"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              zIndex: 99999, // Super high z-index to cover EVERYTHING
              top: 0, left: 0, right: 0, bottom: 0,
              background: '#050505'
            }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
      
      {!loading && <Background3D />}
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>
);
