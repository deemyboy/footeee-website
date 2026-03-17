import React, { useRef, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import MockupGuestList from './MockupGuestList';
import MockupPlayerDetail from './MockupPlayerDetail';
import MockupManagerDashboard from './MockupManagerDashboard';

type ScreenType = 'guest' | 'player' | 'manager-games' | 'manager-recent';

interface AppScreenMockupProps {
  screenType: ScreenType;
}

const LANGUAGES_WITH_SCREENSHOTS: string[] = [];

const imageMap: Record<ScreenType, string> = {
  'manager-games': 'hero-preview',
  'manager-recent': 'manager-dashboard',
  guest: 'guest-list',
  player: 'player-detail',
};

const INTERNAL_WIDTH = 300;
const INTERNAL_HEIGHT = 600;

const AppScreenMockup: React.FC<AppScreenMockupProps> = ({ screenType }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const containerWidth = entry.contentRect.width;
        setScale(containerWidth / INTERNAL_WIDTH);
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (LANGUAGES_WITH_SCREENSHOTS.includes(lang)) {
    const filename = imageMap[screenType];
    return (
      <Box
        component="img"
        src={`/images/localized/${lang}/${filename}.png`}
        alt={screenType}
        sx={{ width: '100%', height: 'auto', borderRadius: 3 }}
      />
    );
  }

  const renderScreen = () => {
    switch (screenType) {
      case 'guest':
        return <MockupGuestList />;
      case 'player':
        return <MockupPlayerDetail />;
      case 'manager-games':
        return <MockupManagerDashboard variant="games" />;
      case 'manager-recent':
        return <MockupManagerDashboard variant="recent" />;
    }
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        aspectRatio: `${INTERNAL_WIDTH} / ${INTERNAL_HEIGHT}`,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: INTERNAL_WIDTH,
          height: INTERNAL_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {renderScreen()}
      </Box>
    </Box>
  );
};

export default AppScreenMockup;
