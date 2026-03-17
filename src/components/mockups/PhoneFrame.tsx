import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  Work as ManageIcon,
  People as PlayersIcon,
  Groups as SquadsIcon,
  LocationOn as VenuesIcon,
  SportsEsports as GamesIcon,
} from '@mui/icons-material';

interface PhoneFrameProps {
  children: React.ReactNode;
  activeTab?: string;
  bottomTabs?: string[];
}

const defaultTabs = ['manage', 'players', 'squads', 'venues', 'games'];

const tabIcons: Record<string, React.ReactElement> = {
  manage: <ManageIcon sx={{ fontSize: 16 }} />,
  players: <PlayersIcon sx={{ fontSize: 16 }} />,
  squads: <SquadsIcon sx={{ fontSize: 16 }} />,
  venues: <VenuesIcon sx={{ fontSize: 16 }} />,
  games: <GamesIcon sx={{ fontSize: 16 }} />,
};

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, activeTab = 'games', bottomTabs = defaultTabs }) => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';

  return (
    <Box
      dir={isRtl ? 'rtl' : 'ltr'}
      sx={{
        width: 300,
        height: 600,
        borderRadius: '24px',
        overflow: 'hidden',
        bgcolor: '#fff',
        border: '3px solid #222',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Status bar */}
      <Box sx={{ bgcolor: '#4a9aa3', px: 1.5, py: 0.3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ fontSize: 9, color: 'white', fontWeight: 600 }}>10:10</Typography>
        <Box sx={{ display: 'flex', gap: 0.3, alignItems: 'center' }}>
          <Box sx={{ width: 10, height: 6, border: '1px solid white', borderRadius: 0.5, position: 'relative' }}>
            <Box sx={{ position: 'absolute', inset: 1, bgcolor: 'white', borderRadius: 0.3 }} />
          </Box>
        </Box>
      </Box>

      {/* Content area */}
      <Box sx={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {children}
      </Box>

      {/* Bottom navigation */}
      <Box
        sx={{
          borderTop: '1px solid #e0e0e0',
          display: 'flex',
          justifyContent: 'space-around',
          py: 0.5,
          bgcolor: '#fff',
        }}
      >
        {bottomTabs.map((tab) => (
          <Box
            key={tab}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.1,
              color: activeTab === tab ? '#4a9aa3' : '#999',
              minWidth: 0,
              px: 0.5,
            }}
          >
            {tabIcons[tab] || <GamesIcon sx={{ fontSize: 16 }} />}
            <Typography sx={{ fontSize: 7, fontWeight: activeTab === tab ? 700 : 400, lineHeight: 1 }}>
              {t(`mockup.nav.${tab}`)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PhoneFrame;
