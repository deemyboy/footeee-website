import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AppScreenMockup from './mockups/AppScreenMockup';

interface Role {
  key: string;
  icon: React.ReactElement;
  color: string;
  screenType: 'guest' | 'player' | 'manager-games' | 'manager-recent';
}

interface RoleModalProps {
  open: boolean;
  onClose: () => void;
  role: Role | null;
}

const RoleModal: React.FC<RoleModalProps> = ({ open, onClose, role }) => {
  const { t } = useTranslation();

  if (!role) return null;

  const title = t(`roles.${role.key}.title`);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ color: role.color }}>{role.icon}</Box>
          <Typography variant="h5">{t('roles.experience', { role: title })}</Typography>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" paragraph>
              {t(`roles.${role.key}.longDescription`)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t(`roles.${role.key}.description`)}
            </Typography>
          </Box>
          <Box sx={{ flexShrink: 0, width: '40%', maxWidth: 250 }}>
            <AppScreenMockup screenType={role.screenType} />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {t('common.close')}
        </Button>
        <Button variant="contained" color="primary" href="#" onClick={onClose}>
          {t('common.download')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RoleModal;
