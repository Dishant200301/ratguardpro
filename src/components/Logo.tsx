import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  hideText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9 max-w-[150px]',
    md: 'h-9 sm:h-11 max-w-[190px]',
    lg: 'h-11 sm:h-13 max-w-[220px]',
    xl: 'h-14 sm:h-16 max-w-[260px]',
  };

  return (
    <div
      id="ratguard-brand-logo"
      className={`inline-flex items-center justify-center select-none ${className}`}
    >
      <img
        src="/common/logo.png"
        alt="RatGuard Pro Logo"
        className={`${sizeClasses[size] || sizeClasses.md} w-auto object-contain transition-transform duration-200${
          variant === 'light' ? 'brightness-0 invert' : ''
        }`}
        loading="eager"
      />
    </div>
  );
};

