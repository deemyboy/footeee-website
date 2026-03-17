import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Search, Add, Home } from '@mui/icons-material';
import PhoneFrame from './PhoneFrame';
import { guestGames } from './mockupData';

const MockupGuestList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PhoneFrame activeTab="games" bottomTabs={['players', 'venues', 'games']}>
      {/* Top bar */}
      <Box sx={{ bgcolor: '#4a9aa3', px: 1.5, py: 0.8, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography sx={{ fontSize: 10, color: 'rgba(255,255,255,0.7)' }}>←</Typography>
        <Box sx={{ display: 'flex', gap: 0.8, alignItems: 'center', flex: 1 }}>
          <Search sx={{ fontSize: 14, color: '#e6ac74' }} />
          <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: '#e6ac74' }} />
          <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: '#4a9aa3', border: '1px solid rgba(255,255,255,0.3)' }} />
        </Box>
        <Chip
          label={t('mockup.guest.label')}
          size="small"
          sx={{ height: 16, fontSize: 7, bgcolor: 'rgba(255,255,255,0.2)', color: 'white', '& .MuiChip-label': { px: 0.8 } }}
        />
      </Box>

      {/* Game list */}
      <Box sx={{ flex: 1, overflow: 'hidden', px: 1, py: 0.8 }}>
        {guestGames.slice(0, 6).map((game, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              alignItems: 'center',
              py: 0.6,
              px: 0.8,
              mb: 0.5,
              border: '1px solid',
              borderColor: i === 4 ? '#e6ac74' : '#e0e0e0',
              borderRadius: 2,
              bgcolor: i === 4 ? 'rgba(230,172,116,0.05)' : 'transparent',
            }}
          >
            <Box sx={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #4a9aa3', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 0.8, flexShrink: 0 }}>
              <Home sx={{ fontSize: 10, color: '#4a9aa3' }} />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography sx={{ fontSize: 9, fontWeight: 600, lineHeight: 1.2 }}>{game.venue}</Typography>
              <Typography sx={{ fontSize: 7, color: '#888', lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {t(`mockup.time.${game.dayKey}`)} {t('mockup.time.at')} {game.time} · {game.players}
              </Typography>
            </Box>
            <Chip
              label={t('mockup.guest.join')}
              size="small"
              sx={{
                height: 18,
                fontSize: 7,
                bgcolor: '#4a9aa3',
                color: 'white',
                '& .MuiChip-label': { px: 0.6 },
                flexShrink: 0,
              }}
            />
          </Box>
        ))}
      </Box>

      {/* New Game FAB */}
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            bgcolor: '#4a9aa3',
            color: 'white',
            borderRadius: 4,
            px: 1,
            py: 0.4,
            display: 'flex',
            alignItems: 'center',
            gap: 0.3,
            boxShadow: 2,
          }}
        >
          <Add sx={{ fontSize: 10 }} />
          <Typography sx={{ fontSize: 7, fontWeight: 600 }}>{t('mockup.guest.newGame')}</Typography>
        </Box>
      </Box>
    </PhoneFrame>
  );
};

export default MockupGuestList;
