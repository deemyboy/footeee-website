import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';

interface Role {
  title: string;
  description: string;
  longDescription: string;
  screenshot: string;
  icon: React.ReactElement;
  color: string;
}

interface RoleModalProps {
  open: boolean;
  onClose: () => void;
  role: Role | null;
}

const RoleModal: React.FC<RoleModalProps> = ({ open, onClose, role }) => {
  if (!role) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ color: role.color }}>{role.icon}</Box>
          <Typography variant="h5">{role.title} Experience</Typography>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" paragraph>
              {role.longDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {role.description}
            </Typography>
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <img src={role.screenshot} alt={role.title} style={{ width: 200, borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }} />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button variant="contained" color="primary" href="#" onClick={onClose}>
          Download the app (coming soon)
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RoleModal;