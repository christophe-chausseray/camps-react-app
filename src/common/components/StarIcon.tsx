import React from 'react';

type IconProps = {
  title?: string;
  size?: number;
  color?: string;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

const StarIcon = ({title, size = 24, color = 'currentColor', ...props}: IconProps) => (
  <svg role="img" aria-label="StarIcon" height={size} width={size}>
    <polygon fill={color} points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
  </svg>
);

export { StarIcon };
