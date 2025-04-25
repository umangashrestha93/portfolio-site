import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  CircularProgress
} from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "0687ce52-b3cd-4d91-a402-51c94c57f7b0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    setIsSubmitting(true)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Form Submitted Sucessfully!")
        form.reset();
      } else {
        console.error("Submission error:", data);
        toast.error("There was an error submitting the form. Please try again.")
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <Box
      id='contact-section'
      component="section"
      sx={{
        width: '100%',
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, #16404D, #2A5E6A)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          opacity: 0.7,
        }
      }}
    >
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1
      }} />

      <Box sx={{
        maxWidth: 1200,
        mx: 'auto',
        px: isMobile ? 3 : 4,
        width: '100%',
        position: 'relative',
        zIndex: 2
      }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              fontSize: isMobile ? '2.5rem' : '3rem',
              color: 'common.white'
            }}
          >
            Contact
          </Typography>
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            sx={{
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            p: isMobile ? 4 : 6,
            borderRadius: 3,
            boxShadow: 3,
            backgroundColor: 'background.paper',
            maxWidth: 800,
            mx: 'auto',
            width: '100%'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              required
              fullWidth
              name="name"
              label="Name"
              variant="outlined"
              margin="normal"
              InputProps={{
                style: {
                  fontSize: isMobile ? '1.1rem' : '1.2rem',
                  padding: isMobile ? '12px 14px' : '16px 18px'
                }
              }}
              InputLabelProps={{
                style: {
                  fontSize: isMobile ? '1.1rem' : '1.2rem'
                }
              }}
            />
            <TextField
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              InputProps={{
                style: {
                  fontSize: isMobile ? '1.1rem' : '1.2rem',
                  padding: isMobile ? '12px 14px' : '16px 18px'
                }
              }}
              InputLabelProps={{
                style: {
                  fontSize: isMobile ? '1.1rem' : '1.2rem'
                }
              }}
            />
            <TextField
              required
              fullWidth
              name="message"
              label="Message"
              multiline
              rows={isMobile ? 5 : 7}
              variant="outlined"
              margin="normal"
              InputProps={{
                style: {
                  fontSize: isMobile ? '1.1rem' : '1.2rem',
                  padding: isMobile ? '12px 14px' : '16px 18px'
                }
              }}
              InputLabelProps={{
                style: {
                  fontSize: isMobile ? '1.1rem' : '1.2rem'
                }
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={isSubmitting}
              sx={{
                py: 2,
                mt: 3,
                fontSize: isMobile ? '1.1rem' : '1.3rem',
                fontWeight: 'bold',
                letterSpacing: 1.1,
                background: 'linear-gradient(to right, #16404D, #2A5E6A)',
                '&:disabled': {
                  background: '#cccccc'
                }
              }}
            >
              {isSubmitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Submit'
              )}
            </Button>

          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Contact;