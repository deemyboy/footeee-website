import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Chip, Box, Button } from '@mui/material';
import { Search, Person, Build } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import RoleModal from './RoleModal';
import AppScreenMockup from './mockups/AppScreenMockup';

interface Role {
  key: string;
  icon: React.ReactElement;
  color: string;
  screenType: 'guest' | 'player' | 'manager-games' | 'manager-recent';
  chipColor: 'default' | 'primary' | 'secondary';
}

const roles: Role[] = [
  {
    key: 'guest',
    icon: <Search sx={{ fontSize: 40 }} />,
    color: '#757575',
    screenType: 'guest',
    chipColor: 'default',
  },
  {
    key: 'player',
    icon: <Person sx={{ fontSize: 40 }} />,
    color: '#e6ac74',
    screenType: 'player',
    chipColor: 'secondary',
  },
  {
    key: 'manager',
    icon: <Build sx={{ fontSize: 40 }} />,
    color: '#4fa6af',
    screenType: 'manager-recent',
    chipColor: 'primary',
  },
];

const RoleCards: React.FC = () => {
  const { t } = useTranslation();
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
        {roles.map((role) => {
          const title = t(`roles.${role.key}.title`);
          const features = [
            t(`roles.${role.key}.feature1`),
            t(`roles.${role.key}.feature2`),
            t(`roles.${role.key}.feature3`),
          ];
          return (
            <Grid size={{ xs: 12, md: 4 }} key={role.key}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ overflow: 'hidden', bgcolor: '#f0f4f5', aspectRatio: '5/6' }}>
                  <AppScreenMockup screenType={role.screenType} />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Box sx={{ color: role.color }}>{role.icon}</Box>
                    <Typography variant="h4" component="h3">
                      {title}
                    </Typography>
                  </Box>

                  <Typography variant="body1" color="text.secondary" paragraph>
                    {t(`roles.${role.key}.description`)}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    {features.map((feature) => (
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
                    {t('roles.seeView', { role: title })}
                  </Button>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <RoleModal open={modalOpen} onClose={handleCloseModal} role={selectedRole} />
    </>
  );
};

export default RoleCards;
