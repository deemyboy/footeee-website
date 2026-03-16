import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Person } from '@mui/icons-material';
import PhoneFrame from './PhoneFrame';
import { squadNames, playerGames } from './mockupData';

const MockupPlayerDetail: React.FC = () => {
  const { t } = useTranslation();

  const squadColors = ['#4a9aa3', '#4a9aa3', '#4a9aa3'];

  return (
    <PhoneFrame activeTab="players">
      {/* Top bar */}
      <Box sx={{ bgcolor: '#4a9aa3', px: 1.5, py: 0.8, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography sx={{ fontSize: 10, color: 'rgba(255,255,255,0.7)' }}>←</Typography>
        <Box sx={{ display: 'flex', gap: 0.8, flex: 1 }}>
          <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: '#e6ac74' }} />
          <Box sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: '#4a9aa3', border: '1px solid rgba(255,255,255,0.3)' }} />
        </Box>
        <Typography sx={{ fontSize: 8, color: 'white' }}>Faisal · {t('roles.player.title').toUpperCase()}</Typography>
      </Box>

      {/* Player info */}
      <Box sx={{ px: 1.5, pt: 1.5, pb: 0.8 }}>
        <Typography sx={{ fontSize: 16, fontWeight: 700, lineHeight: 1.2 }}>Ijaz</Typography>
        <Typography sx={{ fontSize: 8, color: '#888', lineHeight: 1.4 }}>Gogs</Typography>
        <Typography sx={{ fontSize: 8, color: '#888', lineHeight: 1.4 }}>ijaz@spaceman.net</Typography>
      </Box>

      {/* Squads section */}
      <Box sx={{ px: 1.5, pb: 0.8, borderTop: '1px solid #eee', pt: 0.8 }}>
        <Typography sx={{ fontSize: 10, fontWeight: 600, mb: 0.5 }}>
          {t('mockup.player.squadsCount', { count: squadNames.length })}
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.4, flexWrap: 'wrap' }}>
          {squadNames.map((squad, i) => (
            <Chip
              key={i}
              icon={<Person sx={{ fontSize: 10, color: 'white !important' }} />}
              label={`${squad.name} · ${squad.count}`}
              size="small"
              sx={{
                height: 18,
                fontSize: 7,
                bgcolor: squadColors[i],
                color: 'white',
                '& .MuiChip-label': { px: 0.5 },
                '& .MuiChip-icon': { ml: 0.3 },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Upcoming Games */}
      <Box sx={{ flex: 1, overflow: 'hidden', px: 1, borderTop: '1px solid #eee', pt: 0.8 }}>
        <Typography sx={{ fontSize: 10, fontWeight: 600, mb: 0.5, px: 0.5 }}>
          {t('mockup.player.upcomingGamesCount', { count: playerGames.length })}
        </Typography>
        {playerGames.map((game, i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              alignItems: 'center',
              py: 0.6,
              px: 0.8,
              mb: 0.5,
              border: '2px solid #4a9aa3',
              borderRadius: 2,
            }}
          >
            <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 0.8, flexShrink: 0 }}>
              <Person sx={{ fontSize: 12, color: '#888' }} />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography sx={{ fontSize: 9, fontWeight: 600, lineHeight: 1.2 }}>{game.venue}</Typography>
              <Typography sx={{ fontSize: 7, color: '#888', lineHeight: 1.2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {t(`mockup.time.${game.dayKey}`)} {t('mockup.time.at')} {game.time} · {game.players}
              </Typography>
            </Box>
            <Chip
              label={t('mockup.player.left', { count: game.left })}
              size="small"
              sx={{
                height: 18,
                fontSize: 7,
                bgcolor: '#4a9aa3',
                color: 'white',
                '& .MuiChip-label': { px: 0.5 },
                flexShrink: 0,
              }}
            />
          </Box>
        ))}
      </Box>
    </PhoneFrame>
  );
};

export default MockupPlayerDetail;
