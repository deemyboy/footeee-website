import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Chip, Box, Button } from '@mui/material';
import { Search, Person, Build } from '@mui/icons-material';
import RoleModal from './RoleModal';

interface Role {
  title: string;
  icon: React.ReactElement;
  color: string;
  description: string;
  features: string[];
  screenshot: string;
  chipColor: 'default' | 'primary' | 'secondary';
  longDescription: string;
}

const roles: Role[] = [
  {
    title: 'Guest',
    icon: <Search sx={{ fontSize: 40 }} />,
    color: '#757575',
    description: 'Check out our footballing delights at your leisure.',
    features: ['Browse all games', 'See venues and times', 'No account needed'],
    screenshot: '/images/guest-list.png',
    chipColor: 'default',
    longDescription:
      'Browse all upcoming games, see venue details, and check player availability – all without an account. Perfect for casual fans.',
  },
  {
    title: 'Player',
    icon: <Person sx={{ fontSize: 40 }} />,
    color: '#e6ac74',
    description: 'Your next pitchside invasion is just minutes away!',
    features: ['Join games instantly', 'Track your squads', 'Get notifications'],
    screenshot: '/images/player-detail.png',
    chipColor: 'secondary',
    longDescription:
      'Join games with one tap, see who else is playing, and receive notifications when a spot opens up or a game is about to start.',
  },
  {
    title: 'Manager',
    icon: <Build sx={{ fontSize: 40 }} />,
    color: '#4fa6af',
    description: 'Let Footeee look after your footballing world!',
    features: ['Create and manage games', 'Organise squads', 'Full control'],
    screenshot: '/images/manager-dashboard.png',
    chipColor: 'primary',
    longDescription:
      'Full control over games, squads, and players. Create games, assign squads, track attendance, and manage your football community.',
  },
];

const RoleCards: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleOpenModal = (role: Role) => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRole(null);
  };
  return (
    <>
      <style>{`
      @media (min-width: 900px) {
        #role-cards-grid > div {
          flex-basis: calc(33.333% - 32px) !important;
          max-width: calc(33.333% - 32px) !important;
        }
      }
    `}</style>

      <Grid container spacing={4} sx={{ mt: 4 }} id="role-cards-grid">
        {roles.map((role) => (
          <Grid size={{ xs: 12, md: 4 }} key={role.title}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={role.screenshot}
                alt={`${role.title} view`}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Box sx={{ color: role.color }}>{role.icon}</Box>
                  <Typography variant="h4" component="h3">
                    {role.title}
                  </Typography>
                </Box>

                <Typography variant="body1" color="text.secondary" paragraph>
                  {role.description}
                </Typography>

                <Box sx={{ mt: 2 }}>
                  {role.features.map((feature) => (
                    <Chip
                      key={feature}
                      label={feature}
                      size="small"
                      color={role.chipColor}
                      variant="outlined"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
              </CardContent>

              <Box sx={{ p: 2, pt: 0 }}>
                <Button variant="outlined" color="primary" fullWidth onClick={() => handleOpenModal(role)}>
                  See {role.title} view
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <RoleModal open={modalOpen} onClose={handleCloseModal} role={selectedRole} />
    </>
  );
};

export default RoleCards;
