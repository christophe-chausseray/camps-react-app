import React from 'react';

type IconProps = {
  title?: string;
  size?: number;
  color?: string;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

const CloseIcon = ({ title, size = 24, color = 'currentColor', ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    {title && <title>{title}</title>}
    <g fillRule="nonzero" stroke={color} fill="none" strokeLinecap="round">
      <path d="M4 4l16 16M20 4L4 20" />
    </g>
  </svg>
);

export { CloseIcon };
