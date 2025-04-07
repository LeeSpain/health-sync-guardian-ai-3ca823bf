
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, animated = true }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={`text-brand-teal relative ${animated ? 'animate-heart-beat' : ''}`}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 32.5C20 32.5 7.5 25 7.5 15C7.5 12.5 8.75 10 11.25 10C15 10 16.25 12.5 20 12.5C23.75 12.5 25 10 28.75 10C31.25 10 32.5 12.5 32.5 15C32.5 25 20 32.5 20 32.5Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            className={animated ? "ecg-line" : ""}
            d="M12 23L16 18L20 25L24 16L28 23"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="font-bold text-xl md:text-2xl text-brand-teal">
        <span>iHealth</span>
        <span className="text-brand-orange">-Sync</span>
      </span>
    </div>
  );
};

export default Logo;
