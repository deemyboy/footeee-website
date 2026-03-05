import React from 'react';
import { Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Hero from './components/Hero';
import RoleCards from './components/RoleCards';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';

const App: React.FC = () => {
  const path = window.location.pathname;

  const isPrivacy = path === '/privacy';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isPrivacy ? (
        <Privacy />
      ) : (
        <>
          <Hero />
          <Container maxWidth="lg" sx={{ py: 8 }} id="roles-section">
            <Typography variant="h2" align="center" gutterBottom>
              One app for everyone
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Whether you just want to browse, join a game, or run the show – Footeee has you covered.
            </Typography>
            <RoleCards />
          </Container>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
