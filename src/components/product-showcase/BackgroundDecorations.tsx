
import React from 'react';

export const BackgroundDecorations: React.FC = () => {
  return (
    <>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-grey/20 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-0"></div>
      
      {/* Decorative patterns */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl z-0"></div>
      
      {/* Curved lines */}
      <svg className="absolute top-1/3 left-0 w-full h-64 z-0 text-brand-teal/5" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0,100 C300,0 600,200 1200,100 L1200,200 L0,200 Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-20 left-0 w-full h-64 z-0 text-brand-orange/5" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z" fill="currentColor" />
      </svg>
    </>
  );
};
