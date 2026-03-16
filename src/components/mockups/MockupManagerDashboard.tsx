import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Settings, Home } from '@mui/icons-material';
import PhoneFrame from './PhoneFrame';
import { managerGames, recentActivity } from './mockupData';

interface MockupManagerDashboardProps {
  variant: 'games' | 'recent';
}

const MockupManagerDashboard: React.FC<MockupManagerDashboardProps> = ({ variant }) => {
  const { t } = useTranslation();

  const tabs = variant === 'games'
    ? ['games', 'squads', 'players', 'venues']
    : ['recent', 'games', 'squads', 'players'];

  const activeTabLabel = variant === 'games' ? 'games' : 'recent';

  return (
    <PhoneFrame activeTab="manage">
      {/* Top bar */}
      <Box sx={{ bgcolor: '#4a9aa3', px: 1.5, py: 0.8, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography sx={{ fontSize: 10, color: 'rgba(255,255,255,0.7)' }}>←</Typography>
        <Box sx={{ display: 'flex', gap: 0.8, flex: 1 }}>
          <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: '#e6ac74' }} />
          <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: '#4a9aa3', border: '1px solid rgba(255,255,255,0.3)' }} />
        </Box>
        <Typography sx={{ fontSize: 8, color: 'white' }}>Isaac · {t('roles.manager.title').toUpperCase()}</Typography>
      </Box>

      {/* Title section */}
      <Box sx={{ px: 1.5, pt: 1, pb: 0.5 }}>
        <Typography sx={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2 }}>{t('mockup.manager.title')}</Typography>
        <Typography sx={{ fontSize: 8, color: '#888', lineHeight: 1.4 }}>{t('mockup.manager.subtitle')}</Typography>
      </Box>

      {/* Stats */}
      <Box sx={{ px: 1.5, pb: 0.8 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 0.3 }}>
          <Box>
            <Typography sx={{ fontSize: 14, fontWeight: 700, lineHeight: 1 }}>{variant === 'games' ? 10 : 5}</Typography>
            <Typography sx={{ fontSize: 7, color: '#888' }}>{t('mockup.manager.gamesManaged')}</Typography>
          </Box>
          <Box>
            <Settings sx={{ fontSize: 10, color: '#999', position: 'absolute', right: 16 }} />
            <Typography sx={{ fontSize: 14, fontWeight: 700, lineHeight: 1 }}>2</Typography>
            <Typography sx={{ fontSize: 7, color: '#888' }}>{t('mockup.manager.squadsManaged')}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box>
            <Typography sx={{ fontSize: 7, color: '#888' }}>—</Typography>
            <Typography sx={{ fontSize: 7, color: '#888' }}>{t('mockup.manager.playersInSquads')}</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 7, color: '#888' }}>—</Typography>
            <Typography sx={{ fontSize: 7, color: '#888' }}>{t('mockup.manager.upcoming')}</Typography>
          </Box>
        </Box>
      </Box>

      {/* Tab bar */}
      <Box sx={{ display: 'flex', gap: 0.5, px: 1.5, mb: 0.8 }}>
        {tabs.map((tab) => (
          <Chip
            key={tab}
            label={t(`mockup.nav.${tab === 'recent' ? 'recent' : tab}`)}
            size="small"
            sx={{
              height: 18,
              fontSize: 7,
              bgcolor: tab === activeTabLabel ? '#4a9aa3' : 'transparent',
              color: tab === activeTabLabel ? 'white' : '#666',
              border: tab === activeTabLabel ? 'none' : '1px solid #ddd',
              '& .MuiChip-label': { px: 0.6 },
            }}
          />
        ))}
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, overflow: 'hidden', px: 1 }}>
        {variant === 'games' ? (
          managerGames.slice(0, 4).map((game, i) => (
            <Box
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'center',
                py: 0.6,
                px: 0.8,
                mb: 0.5,
                border: '1px solid #e0e0e0',
                borderRadius: 2,
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
            </Box>
          ))
        ) : (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5, px: 0.5 }}>
              <Typography sx={{ fontSize: 10, fontWeight: 600 }}>{t('mockup.nav.recent')}</Typography>
              <Typography sx={{ fontSize: 7, color: '#888' }}>7 {t('mockup.time.days')}</Typography>
            </Box>
            {recentActivity.map((activity, i) => (
              <Box key={i} sx={{ py: 0.6, px: 0.5 }}>
                <Typography sx={{ fontSize: 9, fontWeight: 600, lineHeight: 1.3 }}>
                  {t('mockup.manager.joinedGame', { name: activity.name })}
                </Typography>
                <Typography sx={{ fontSize: 7, color: '#888', lineHeight: 1.2 }}>
                  {activity.venue}
                </Typography>
              </Box>
            ))}
          </>
        )}
      </Box>
    </PhoneFrame>
  );
};

export default MockupManagerDashboard;
