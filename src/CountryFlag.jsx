import './style.css';

function getCountryClass(country) {
  if (!country) return '';
  let key = country.toLowerCase();
  if (key === 'ad') key = 'andorra';
  return `f-${key}`;
}

function getSizeClass(size) {
  switch (size) {
    case 'small':
      return 'small-flag';
    case 'big':
      return 'big-flag';
    default:
      return 'normal-flag';
  }
}

export default function CountryFlag({ country, rounded, shadow, size }) {
  const countryClass = getCountryClass(country);
  const sizeClass = getSizeClass(size);
  return (
    <span
      className={`flag ${countryClass} ${rounded ? 'rounded' : ''} ${shadow ? 'shadow' : ''} ${sizeClass}`}
    />
  );
}

CountryFlag.defaultProps = {
  rounded: false,
  shadow: false,
  size: 'normal',
};
