import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem } from '@mui/material';

const languages = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'it', flag: '🇮🇹', name: 'Italiano' },
  { code: 'pt', flag: '🇵🇹', name: 'Português' },
  { code: 'nl', flag: '🇳🇱', name: 'Nederlands' },
  { code: 'pl', flag: '🇵🇱', name: 'Polski' },
  { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  { code: 'tr', flag: '🇹🇷', name: 'Türkçe' },
  { code: 'sv', flag: '🇸🇪', name: 'Svenska' },
  { code: 'no', flag: '🇳🇴', name: 'Norsk' },
  { code: 'da', flag: '🇩🇰', name: 'Dansk' },
  { code: 'fi', flag: '🇫🇮', name: 'Suomi' },
  { code: 'el', flag: '🇬🇷', name: 'Ελληνικά' },
  { code: 'uk', flag: '🇺🇦', name: 'Українська' },
  { code: 'ro', flag: '🇷🇴', name: 'Română' },
  { code: 'cs', flag: '🇨🇿', name: 'Čeština' },
  { code: 'zh-CN', flag: '🇨🇳', name: '中文(简体)' },
  { code: 'zh-HK', flag: '🇭🇰', name: '中文(繁體)' },
  { code: 'ja', flag: '🇯🇵', name: '日本語' },
  { code: 'hi', flag: '🇮🇳', name: 'हिन्दी' },
  { code: 'ar', flag: '🇸🇦', name: 'العربية' },
  { code: 'sw', flag: '🇰🇪', name: 'Kiswahili' },
  { code: 'am', flag: '🇪🇹', name: 'አማርኛ' },
  { code: 'ha', flag: '🇳🇬', name: 'Hausa' },
  { code: 'yo', flag: '🇳🇬', name: 'Yorùbá' },
  { code: 'zu', flag: '🇿🇦', name: 'isiZulu' },
  { code: 'af', flag: '🇿🇦', name: 'Afrikaans' },
  { code: 'ig', flag: '🇳🇬', name: 'Igbo' },
  { code: 'so', flag: '🇸🇴', name: 'Soomaali' },
  { code: 'ti', flag: '🇪🇷', name: 'ትግርኛ' },
  { code: 'xh', flag: '🇿🇦', name: 'isiXhosa' },
  { code: 'ln', flag: '🇨🇩', name: 'Lingála' },
  { code: 'rw', flag: '🇷🇼', name: 'Kinyarwanda' },
  { code: 'sn', flag: '🇿🇼', name: 'chiShona' },
  { code: 'st', flag: '🇱🇸', name: 'Sesotho' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      size="small"
      sx={{
        color: 'white',
        '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
        '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.5)' },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
        '.MuiSvgIcon-root': { color: 'white' },
        minWidth: 160,
      }}
      renderValue={(value) => {
        const lang = languages.find((l) => l.code === value);
        return lang ? `${lang.flag} ${lang.name}` : value;
      }}
    >
      {languages.map((lang) => (
        <MenuItem key={lang.code} value={lang.code}>
          {lang.flag} {lang.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSwitcher;
