import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Alert,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

const DeleteMyData: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [scope, setScope] = useState('full');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      alert(t('deleteData.emailRequired'));
      return;
    }

    const scopeLabels: Record<string, string> = {
      full: t('deleteData.scopeFullLabel'),
      data: t('deleteData.scopeDataLabel'),
      profile: t('deleteData.scopeProfileLabel'),
    };

    const subject = encodeURIComponent(`Data Deletion Request — ${email}`);
    const body = encodeURIComponent(
      `DATA DELETION REQUEST\n\n` +
        `Email: ${email}\n` +
        `Username: ${username || t('deleteData.notProvided')}\n` +
        `Scope: ${scopeLabels[scope]}\n` +
        `Notes: ${notes || t('deleteData.none')}\n\n` +
        `Submitted: ${new Date().toUTCString()}`,
    );

    window.location.href = `mailto:privacy@footeee.xyz?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <Box sx={{ bgcolor: '#0f172a', color: '#f1f5f9', py: 10, minHeight: '100vh' }}>
        <Container maxWidth="sm">
          <Typography variant="h2" sx={{ mb: 2, fontWeight: 800 }}>
            {t('deleteData.title')}
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: '#cbd5e1' }}>
            {t('deleteData.description')}
          </Typography>

          <Paper
            sx={{
              p: 4,
              bgcolor: '#1e293b',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 3,
            }}
          >
            {submitted ? (
              <Alert severity="success">
                {t('deleteData.successMessage')}
              </Alert>
            ) : (
              <>
                <TextField
                  fullWidth
                  required
                  label={t('deleteData.emailLabel')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    mb: 3,
                    '& .MuiInputBase-root': {
                      backgroundColor: '#0f172a',
                      color: '#f1f5f9',
                    },
                    '& .MuiInputLabel-root': {
                      color: '#94a3b8',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.15)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#22c55e',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label={t('deleteData.usernameLabel')}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{
                    mb: 3,
                    '& .MuiInputBase-root': {
                      backgroundColor: '#0f172a',
                      color: '#f1f5f9',
                    },
                    '& .MuiInputLabel-root': {
                      color: '#94a3b8',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.15)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#22c55e',
                    },
                  }}
                />

                <TextField
                  select
                  fullWidth
                  label={t('deleteData.scopeLabel')}
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  sx={{
                    mb: 3,
                    '& .MuiInputBase-root': {
                      backgroundColor: '#0f172a',
                      color: '#f1f5f9',
                    },
                    '& .MuiInputLabel-root': {
                      color: '#94a3b8',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.15)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#22c55e',
                    },
                  }}
                >
                  <MenuItem value="full">{t('deleteData.scopeFull')}</MenuItem>
                  <MenuItem value="data">{t('deleteData.scopeData')}</MenuItem>
                  <MenuItem value="profile">{t('deleteData.scopeProfile')}</MenuItem>
                </TextField>

                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  label={t('deleteData.notesLabel')}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  sx={{
                    mb: 3,
                    '& .MuiInputBase-root': {
                      backgroundColor: '#0f172a',
                      color: '#f1f5f9',
                    },
                    '& .MuiInputLabel-root': {
                      color: '#94a3b8',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.15)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.3)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#22c55e',
                    },
                  }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={confirmed}
                      onChange={(e) => setConfirmed(e.target.checked)}
                      sx={{
                        color: '#cbd5e1',
                        '&.Mui-checked': {
                          color: '#22c55e',
                        },
                      }}
                    />
                  }
                  label={t('deleteData.confirmLabel')}
                  sx={{
                    mb: 2,
                    color: '#cbd5e1',
                  }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  disabled={!confirmed}
                  onClick={handleSubmit}
                  sx={{
                    backgroundColor: '#22c55e',
                    color: '#0a0f0d',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#16a34a',
                    },
                    '&.Mui-disabled': {
                      backgroundColor: '#1e293b',
                      color: '#64748b',
                    },
                  }}
                >
                  {t('deleteData.submitButton')}
                </Button>
              </>
            )}
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default DeleteMyData;
