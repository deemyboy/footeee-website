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

const DeleteMyData: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [scope, setScope] = useState('full');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      alert('Please enter the email linked to your account.');
      return;
    }

    const scopeLabels: Record<string, string> = {
      full: 'Full account + all data deletion',
      data: 'Activity data deletion only',
      profile: 'Profile data deletion only',
    };

    const subject = encodeURIComponent(`Data Deletion Request — ${email}`);
    const body = encodeURIComponent(
      `DATA DELETION REQUEST\n\n` +
        `Email: ${email}\n` +
        `Username: ${username || 'Not provided'}\n` +
        `Scope: ${scopeLabels[scope]}\n` +
        `Notes: ${notes || 'None'}\n\n` +
        `Submitted: ${new Date().toUTCString()}`,
    );

    window.location.href = `mailto:privacy@footeee.xyz?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Box sx={{ bgcolor: '#0f172a', color: '#f1f5f9', py: 10, minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Typography variant="h2" sx={{ mb: 2, fontWeight: 800 }}>
          Delete My Data
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, color: '#cbd5e1' }}>
          You have the right to request deletion of your account and associated personal data. We process requests
          within 30 days.
        </Typography>

        <Paper
          sx={{
            p: 4,
            bgcolor: '#1e293b', // slate-800
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 3,
          }}
        >
          {submitted ? (
            <Alert severity="success">
              Your request has been prepared. Please send the email that opened in your mail app. We will process it
              within 30 days.
            </Alert>
          ) : (
            <>
              <TextField
                fullWidth
                required
                label="Email linked to your account"
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
                label="Username (optional)"
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
                label="What would you like deleted?"
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
                <MenuItem value="full">Everything — delete my account and all data</MenuItem>
                <MenuItem value="data">Data only — keep account but delete activity data</MenuItem>
                <MenuItem value="profile">Profile only — delete profile info</MenuItem>
              </TextField>

              <TextField
                fullWidth
                multiline
                minRows={3}
                label="Anything else?"
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
                label="I understand this action is irreversible."
                sx={{
                  mb: 2,
                  color: '#cbd5e1', // <-- this fixes the text color
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
                Submit Request
              </Button>
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default DeleteMyData;
