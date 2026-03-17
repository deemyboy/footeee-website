import React from 'react';
import { Box, Container, Typography, Divider, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

const LAST_UPDATED = 'March 2026';

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: '#0f172a', color: 'white', py: { xs: 6, md: 10 }, minHeight: '100vh' }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ mb: 1, fontWeight: 800 }}>
            {t('privacy.title')}
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.8, mb: 4 }}>
            {t('privacy.lastUpdated', { date: LAST_UPDATED })}
          </Typography>

          <Divider sx={{ mb: 4, borderColor: 'rgba(255,255,255,0.15)' }} />

          <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
            {t('privacy.intro')}
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
            {t('privacy.section1Title')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, opacity: 0.95 }}>
            {t('privacy.section1Intro')}
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3, opacity: 0.95 }}>
            <li>{t('privacy.section1Item1')}</li>
            <li>{t('privacy.section1Item2')}</li>
            <li>{t('privacy.section1Item3')}</li>
          </Box>

          <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
            {t('privacy.section2Title')}
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 3, opacity: 0.95 }}>
            <li>{t('privacy.section2Item1')}</li>
            <li>{t('privacy.section2Item2')}</li>
            <li>{t('privacy.section2Item3')}</li>
            <li>{t('privacy.section2Item4')}</li>
            <li>{t('privacy.section2Item5')}</li>
          </Box>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
            {t('privacy.section2NoSell')}
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
            {t('privacy.section3Title')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
            {t('privacy.section3Text')}
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
            {t('privacy.section4Title')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
            {t('privacy.section4Text')}
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
            {t('privacy.section5Title')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
            {t('privacy.section5Text')}
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
            {t('privacy.section6Title')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
            {t('privacy.section6Text')}
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
            {t('privacy.section7Title')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
            {t('privacy.section7Text')}
          </Typography>

          <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
            {t('privacy.section8Title')}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
            {t('privacy.section8Text')}
          </Typography>

          <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.15)' }} />

          <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
            {t('privacy.contactTitle')}
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.95 }}>
            {t('privacy.contactEmail')}{' '}
            <Link href="mailto:privacy@footeee.xyz" color="inherit" underline="always">
              privacy@footeee.xyz
            </Link>
            <br />
            {t('privacy.contactWebsite')}{' '}
            <Link href="https://footeee.xyz" color="inherit" underline="always">
              https://footeee.xyz
            </Link>
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Privacy;
