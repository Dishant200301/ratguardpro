import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'badge' | 'white-text';
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

  if (variant === 'white-text') {
    const iconSizes = {
      sm: 'h-6 w-6 rounded-md',
      md: 'h-7 w-7 rounded-lg',
      lg: 'h-9 w-9 rounded-xl',
      xl: 'h-11 w-11 rounded-xl',
    };
    const textSizes = {
      sm: 'text-sm sm:text-[15px]',
      md: 'text-base sm:text-lg',
      lg: 'text-xl sm:text-2xl',
      xl: 'text-2xl sm:text-3xl',
    };

    return (
      <div
        id="ratguard-brand-logo"
        className={`inline-flex items-center gap-2 select-none ${className}`}
      >
        <img
          src="/apple-touch-icon.webp"
          alt="RatGuard Pro Logo"
          className={`${iconSizes[size] || iconSizes.md} object-contain shadow-sm shrink-0`}
          loading="eager"
        />
        <span
          className={`${textSizes[size] || textSizes.md} font-bold tracking-tight text-white font-sans flex items-center leading-none`}
        >
          RatGuard<span className="text-[#0066FF] ml-0.5">Pro</span>
        </span>
      </div>
    );
  }

  return (
    <div
      id="ratguard-brand-logo"
      className={`inline-flex items-center justify-center select-none ${className}`}
    >
      <img
        src="/images/common/logo.webp"
        alt="RatGuard Pro Logo"
        className={`${sizeClasses[size] || sizeClasses.md} w-auto object-contain transition-transform duration-200${
          variant === 'light' ? 'brightness-0 invert' : ''
        }`}
        loading="eager"
      />
    </div>
  );
};
