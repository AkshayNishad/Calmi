import React from 'react';
import { LANGUAGES } from '../../utils/constants/app_constants';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  return (
    <div className="language-selector">
      <select 
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        aria-label="Select Language"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};