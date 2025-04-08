
import React from 'react';

export const DecorationLines: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full opacity-30" viewBox="0 0 1200 600" preserveAspectRatio="none">
        {/* Horizontal connection lines */}
        <path 
          d="M100,150 H1100" 
          fill="none" 
          stroke="url(#gradient-path-h)" 
          strokeWidth="1.5" 
          strokeDasharray="6,4"
          className="opacity-60"
        />
        <path 
          d="M100,350 H1100" 
          fill="none" 
          stroke="url(#gradient-path-h)" 
          strokeWidth="1.5" 
          strokeDasharray="6,4"
          className="opacity-60"
        />
        
        {/* Vertical connection lines */}
        <path 
          d="M400,50 V550" 
          fill="none" 
          stroke="url(#gradient-path-v)" 
          strokeWidth="1.5" 
          strokeDasharray="6,4"
          className="opacity-60"
        />
        <path 
          d="M800,50 V550" 
          fill="none" 
          stroke="url(#gradient-path-v)" 
          strokeWidth="1.5" 
          strokeDasharray="6,4"
          className="opacity-60"
        />
        
        <defs>
          <linearGradient id="gradient-path-h" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#008B8B" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#008B8B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#008B8B" stopOpacity="0.1" />
            <animate 
              attributeName="x1" 
              values="0%;100%;0%" 
              dur="20s" 
              repeatCount="indefinite" 
            />
          </linearGradient>
          <linearGradient id="gradient-path-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#008B8B" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#008B8B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#008B8B" stopOpacity="0.1" />
            <animate 
              attributeName="y1" 
              values="0%;100%;0%" 
              dur="15s" 
              repeatCount="indefinite" 
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
