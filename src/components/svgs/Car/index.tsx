import type { FC } from 'react';

interface Props {
  color: string;
}

const Car: FC<Props> = ({ color }) => {
  return (
    <svg width="100" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="40" width="140" height="40" rx="5" fill={color} />
      <path d="M80 40 Q130 20 170 40" stroke="#333" stroke-width="2" fill="#E0E0E0" />
      <rect x="90" y="45" width="30" height="15" rx="2" fill="#BBDEFB" />
      <rect x="130" y="45" width="30" height="15" rx="2" fill="#BBDEFB" />
      <circle cx="60" cy="80" r="15" fill="#333" />
      <circle cx="60" cy="80" r="10" fill="#757575" />
      <circle cx="140" cy="80" r="15" fill="#333" />
      <circle cx="140" cy="80" r="10" fill="#757575" />
      <circle cx="175" cy="55" r="5" fill="#FFEB3B" />
      <path d="M80 50 L120 50" stroke="#333" stroke-width="2" />
    </svg>
  );
};

export default Car;
