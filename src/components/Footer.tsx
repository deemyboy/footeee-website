import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ bgcolor: '#2c3e50', color: 'white', py: 6, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              Footeee
            </Typography>
            <Typography variant="body2">{t('footer.copyright', { year: new Date().getFullYear() })}</Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              {t('footer.quickLinks')}
            </Typography>
            <Link href="#" color="inherit" display="block">
              {t('footer.about')}
            </Link>
            <Link href="#" color="inherit" display="block">
              {t('footer.features')}
            </Link>
            <Link href="#" color="inherit" display="block">
              {t('footer.privacy')}
            </Link>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom>
              {t('footer.download')}
            </Typography>
            <Typography variant="body2">{t('footer.availableOn')}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
