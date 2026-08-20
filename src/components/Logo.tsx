import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'badge';
  size?: 'sm' | 'md' | 'lg';
  hideText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  hideText = false,
}) => {
  const heightClass = size === 'sm' ? 'h-7' : size === 'lg' ? 'h-11' : 'h-9';

  return (
    <div
      id="ratguard-brand-logo"
      className={`inline-flex items-center gap-2 select-none ${className}`}
    >
      {/* Shield Icon with Rat & Ultrasonic Waves */}
      <svg
        className={heightClass}
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield Outer Outline */}
        <path
          d="M80 6L144 26V74C144 104 116 128 80 134C44 128 16 104 16 74V26L80 6Z"
          fill={variant === 'light' ? '#FFFFFF' : '#111111'}
        />
        <path
          d="M80 12L138 30V72C138 98 112 120 80 126C48 120 22 98 22 72V30L80 12Z"
          fill={variant === 'light' ? '#111111' : '#F8F9FA'}
        />
        {/* Shield Inner Gradient Plate */}
        <path
          d="M80 18L132 34V70C132 94 108 114 80 120C52 114 28 94 28 70V34L80 18Z"
          fill={variant === 'light' ? '#222222' : '#FFFFFF'}
        />
        {/* Rat Silhouette */}
        <path
          d="M48 85C48 68 62 55 78 55C86 55 93 59 98 65C104 60 112 60 118 64C114 74 106 82 96 85C92 95 82 101 70 101C56 101 48 94 48 85Z"
          fill={variant === 'light' ? '#FFFFFF' : '#111111'}
        />
        {/* Rat Head & Ear Detail */}
        <path
          d="M52 82C50 78 51 72 56 70C61 68 66 72 65 77C64 81 57 84 52 82Z"
          fill={variant === 'light' ? '#111111' : '#FFFFFF'}
        />
        {/* Ultrasonic Radiating Wave 1 */}
        <path
          d="M106 48C114 54 118 64 118 74"
          stroke="#0066FF"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Ultrasonic Radiating Wave 2 */}
        <path
          d="M116 38C128 50 134 64 134 80"
          stroke="#0066FF"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Text */}
      {!hideText && (
        <span
          className={`font-extrabold tracking-tight flex items-baseline ${
            size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
          } ${variant === 'light' ? 'text-white' : 'text-[#111111]'}`}
          style={{ letterSpacing: '-0.02em' }}
        >
          <span>RatGuard</span>
          <span className="text-[#0066FF] ml-0.5 font-black">Pro</span>
        </span>
      )}
    </div>
  );
};
