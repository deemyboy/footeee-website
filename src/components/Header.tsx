import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#1a2a3a', py: 1, position: 'sticky', top: 0, zIndex: 1100 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 700 }}>
            Footeee
          </Typography>
          <LanguageSwitcher />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
