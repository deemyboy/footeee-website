import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { SportsSoccer } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import AppScreenMockup from './mockups/AppScreenMockup';

const Hero: React.FC = () => {
  const { t } = useTranslation();

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
          <Box
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, mb: 4, flexWrap: 'wrap' }}
          >
            <Box
              component="img"
              src="/images/website-banner.png"
              alt="Footeee logo"
              sx={{ width: { xs: 360, md: 576 }, height: 'auto', filter: 'drop-shadow(0px 6px 8px rgba(0,0,0,0.65))' }}
            />
            <Box sx={{ width: { xs: 100, sm: 130, md: 160 }, flexShrink: 0, filter: 'drop-shadow(0px 6px 8px rgba(0,0,0,0.65))' }}>
              <AppScreenMockup screenType="manager-games" />
            </Box>
          </Box>
          <Typography variant="h4" component="p" sx={{ mb: 4, fontWeight: 400, opacity: 0.9 }}>
            {t('hero.tagline')}
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
              {t('hero.download')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ borderColor: 'white', color: 'white' }}
              onClick={handleLearnMore}
            >
              {t('hero.learnMore')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
