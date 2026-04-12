import React, { useState } from 'react';
import { Box, Typography, TextField, Button, useTheme, useMediaQuery, CircularProgress, Container } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';

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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully.")
        form.reset();
      } else {
        toast.error("Error sending message. Please try again.")
      }
    } catch (error) {
      toast.error("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(255,255,255,0.03)',
      borderRadius: '8px',
      color: theme.palette.text.primary,
      fontFamily: 'Space Grotesk',
      transition: 'all 0.3s ease',
      '& fieldset': {
        borderColor: 'rgba(255,255,255,0.1)',
        transition: 'border-color 0.3s ease',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255,255,255,0.3)',
      },
      '&.Mui-focused fieldset': {
        borderWidth: '1px',
        borderColor: theme.palette.primary.main,
      },
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.secondary,
      fontFamily: 'Space Grotesk',
      '&.Mui-focused': {
        color: theme.palette.primary.main,
      }
    }
  };

  return (
    <Box id="contact-section" component="section" sx={{ width: '100%', py: { xs: 8, md: 15 }, position: 'relative', zIndex: 2 }}>
      <Container maxWidth="xl" component={motion.div} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
        
        <motion.div variants={itemVariants}>
          <Box sx={{ mb: { xs: 6, md: 10 }, display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: theme.palette.text.primary, fontFamily: 'Space Grotesk', fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: -1 }}>
              Contact
            </Typography>
            <Box sx={{ height: '1px', flexGrow: 1, background: 'rgba(255,255,255,0.1)' }} />
          </Box>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 6, md: 12 } }}>
          
          <Box flex={1} component={motion.div} variants={itemVariants}>
            <Typography variant="h4" sx={{ fontWeight: 500, mb: 3, color: theme.palette.text.primary, fontFamily: 'Space Grotesk', letterSpacing: -1 }}>
              Let's create something <br/> <Box component="span" sx={{ color: theme.palette.secondary.main }}>extraordinary.</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.8, fontSize: '1.05rem', fontFamily: 'Space Grotesk', mb: 4, maxWidth: '500px' }}>
              Have an idea or a project in mind? Reach out and let's discuss how we can bring it to life with precision and style.
            </Typography>
          </Box>

          <Box flex={1.2} component={motion.div} variants={itemVariants}>
            <Box component="form" onSubmit={onSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField required fullWidth name="name" label="Name" variant="outlined" sx={textFieldStyle} />
              <TextField required fullWidth name="email" label="Email Address" type="email" variant="outlined" sx={textFieldStyle} />
              <TextField required fullWidth name="message" label="Message" multiline rows={6} variant="outlined" sx={textFieldStyle} />

              <Box sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  sx={{
                    py: 2, px: 6,
                    fontSize: '1rem',
                    fontWeight: 600,
                    fontFamily: 'Space Grotesk',
                    textTransform: 'uppercase',
                    letterSpacing: 1.5,
                    color: '#fff',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    borderRadius: '4px',
                    boxShadow: 'none',
                    transition: 'all 0.4s ease',
                    opacity: isSubmitting ? 0.7 : 1,
                    '&:hover': {
                      boxShadow: `0 10px 30px -10px ${theme.palette.primary.main}`,
                      transform: 'translateY(-2px)'
                    },
                  }}
                >
                  {isSubmitting ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Send Message'}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

      </Container>
      <ToastContainer position="bottom-right" toastStyle={{ backgroundColor: '#111', color: '#fff', fontFamily: 'Space Grotesk', border: '1px solid rgba(255,255,255,0.1)' }} />
    </Box>
  );
};

export default Contact;