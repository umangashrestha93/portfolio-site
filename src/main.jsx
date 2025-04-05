import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/Home';

const theme = createTheme({
  typography: {
    fontFamily: 'Space Grotesk, sans-serif',
  },
  palette: {
    background: {
      default: '#F8F4E1',
    },
  },
});

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
