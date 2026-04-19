import React from 'react';

// Country flag data - simplified for demo
const countryFlags: { [key: string]: string } = {
  'US': '🇺🇸',
  'GB': '🇬🇧',
  'FR': '🇫🇷',
  'DE': '🇩🇪',
  'IT': '🇮🇹',
  'ES': '🇪🇸',
  'JP': '🇯🇵',
  'CN': '🇨🇳',
  'IN': '🇮🇳',
  'BR': '🇧🇷',
  'CA': '🇨🇦',
  'AU': '🇦🇺',
  'RU': '🇷🇺',
  'KR': '🇰🇷',
  'MX': '🇲🇽',
  'AR': '🇦🇷',
  'ZA': '🇿🇦',
  'EG': '🇪🇬',
  'NG': '🇳🇬',
  'KE': '🇰🇪'
};

export interface CountryFlagProps {
  countryCode: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({
  countryCode,
  size = 'medium',
  className = ''
}) => {
  const flag = countryFlags[countryCode.toUpperCase()];

  if (!flag) {
    return <span className={className}>🏳️</span>; // Default flag for unknown countries
  }

  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  return (
    <span className={`${sizeClasses[size]} ${className}`}>
      {flag}
    </span>
  );
};

export const getCountryFlag = (countryCode: string): string => {
  return countryFlags[countryCode.toUpperCase()] || '🏳️';
};

export const getAllCountries = (): string[] => {
  return Object.keys(countryFlags);
};

export const isValidCountryCode = (countryCode: string): boolean => {
  return countryCode.toUpperCase() in countryFlags;
};

export default CountryFlag;