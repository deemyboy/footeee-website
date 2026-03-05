import React from 'react';
import { Box, Container, Typography, Divider, Link } from '@mui/material';

const LAST_UPDATED = 'March 2026';

const Privacy: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#0f172a', color: 'white', py: { xs: 6, md: 10 }, minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 1, fontWeight: 800 }}>
          Privacy Policy
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.8, mb: 4 }}>
          Last updated: {LAST_UPDATED}
        </Typography>

        <Divider sx={{ mb: 4, borderColor: 'rgba(255,255,255,0.15)' }} />

        <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
          Footeee (“we”, “our”, “us”) operates the Footeee mobile application (the “App”) and this website. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your information when you use the App and related
          services.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, opacity: 0.95 }}>
          We may collect the following categories of information:
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3, opacity: 0.95 }}>
          <li>
            <strong>Account information</strong> (e.g., name, email address, login credentials in hashed/secure form).
          </li>
          <li>
            <strong>App usage information</strong> (e.g., matches you create/join, squads, venues, and interactions).
          </li>
          <li>
            <strong>Device/technical data</strong> (e.g., device type, OS version, app version, diagnostics).
          </li>
        </Box>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
          2. How We Use Your Information
        </Typography>
        <Box component="ul" sx={{ pl: 3, mb: 3, opacity: 0.95 }}>
          <li>To create and manage your account.</li>
          <li>To provide core features such as match creation, joining, and squad management.</li>
          <li>To provide support and respond to requests.</li>
          <li>To improve reliability, performance, and user experience.</li>
          <li>To protect the security and integrity of our services.</li>
        </Box>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
          We do not sell your personal information.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
          3. Sharing and Disclosure
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
          We may share information only as necessary to operate the service, comply with legal obligations, or protect
          rights and safety. For example, we may use infrastructure providers (hosting, email, etc.) who process data on
          our behalf under appropriate safeguards.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
          4. Data Storage and Security
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
          We use reasonable technical and organizational measures to protect your information (e.g., HTTPS, access
          controls). No method of transmission or storage is 100% secure, so we cannot guarantee absolute security.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
          5. Data Retention
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
          We retain personal information as long as necessary to provide the service and for legitimate business
          purposes (e.g., compliance, security, dispute resolution), unless a longer retention period is required by
          law.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
          6. Your Rights
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
          Depending on your location (including UK/EU), you may have rights to access, correct, delete, or restrict
          processing of your personal data, and to request portability. To exercise these rights, contact us.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
          7. Children’s Privacy
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
          Footeee is not intended for children under 13. We do not knowingly collect personal information from children
          under 13.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 1, fontWeight: 700 }}>
          8. Changes to This Policy
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.95 }}>
          We may update this policy from time to time. Updates will be posted on this page with a revised “Last updated”
          date.
        </Typography>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.15)' }} />

        <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
          Contact
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.95 }}>
          Email:{' '}
          <Link href="mailto:privacy@footeee.xyz" color="inherit" underline="always">
            privacy@footeee.xyz
          </Link>
          <br />
          Website:{' '}
          <Link href="https://footeee.xyz" color="inherit" underline="always">
            https://footeee.xyz
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Privacy;
