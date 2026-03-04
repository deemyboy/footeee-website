import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { SportsSoccer } from '@mui/icons-material';

const Hero: React.FC = () => {
  const handleLearnMore = () => {
    const element = document.getElementById('roles-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #4fa6af 0%, #2c6a74 100%)',
        color: 'white',
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, mb: 4, flexWrap: 'wrap' }}>
            <Box
              component="img"
              src="/images/website-banner.png"
              alt="Footeee logo"
              sx={{ width: { xs: 360, md: 576 }, height: 'auto' }}
            />
            <Box
              component="img"
              src="/images/hero-preview.png"
              alt="Footeee app preview"
              sx={{ width: { xs: 100, md: 120 }, height: 'auto', borderRadius: 4, boxShadow: 4 }}
            />
          </Box>
          <Typography variant="h4" component="p" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
            One tap to find your next match.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<SportsSoccer />}
              sx={{ backgroundColor: 'white', color: '#4fa6af', '&:hover': { backgroundColor: '#f0f0f0' } }}
              href=""
              target="_blank"
              rel="noopener"
            >
              Download the app (coming soon)
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ borderColor: 'white', color: 'white' }}
              onClick={handleLearnMore}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
