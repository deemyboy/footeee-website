import React from 'react';
import { Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTranslation } from 'react-i18next';
import theme from './theme';
import Hero from './components/Hero';
import RoleCards from './components/RoleCards';
import Footer from './components/Footer';
import Header from './components/Header';
import Privacy from './pages/Privacy';
import DeleteMyData from './pages/DeleteMyData';

const App: React.FC = () => {
  const path = window.location.pathname;
  const { t } = useTranslation();

  if (path === '/privacy') return <Privacy />;
  if (path === '/delete-my-data') return <DeleteMyData />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Header />
        <Hero />
        <Container maxWidth="lg" sx={{ py: 8 }} id="roles-section">
          <Typography variant="h2" align="center" gutterBottom>
            {t('roles.heading')}
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            {t('roles.subheading')}
          </Typography>
          <RoleCards />
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
