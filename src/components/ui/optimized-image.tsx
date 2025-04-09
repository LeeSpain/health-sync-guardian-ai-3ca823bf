
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  objectFit = 'contain',
  ...props
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleError = () => {
    // Log error but don't retry more than twice
    console.error(`Failed to load image: ${src}`);
    
    // If we haven't retried too many times, try again
    if (retryCount < 2) {
      const img = new Image();
      img.src = `${src}?retry=${retryCount}`;
      img.onload = () => {
        setRetryCount(prev => prev + 1);
        setError(false);
      };
      img.onerror = () => {
        setError(true);
      };
    } else {
      setError(true);
    }
  };

  const handleLoad = () => {
    setLoaded(true);
    setError(false);
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        className
      )} 
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto', // Changed to auto for better responsiveness
      }}
    >
      {/* Loading skeleton - only show if not loaded and not errored */}
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/60">
          <Skeleton className="w-full h-full absolute inset-0" />
          <div className="w-8 h-8 border-4 border-brand-teal/30 border-t-brand-teal rounded-full animate-spin z-10"></div>
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100/60 text-gray-500 text-sm">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 mx-auto mb-2 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
          <span>Image failed to load</span>
        </div>
      )}
      
      {/* The actual image */}
      <img
        src={error ? '/placeholder.svg' : src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onError={handleError}
        onLoad={handleLoad}
        style={{
          objectFit: objectFit,
          width: '100%',
          height: '100%',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          display: error ? 'none' : 'block'
        }}
        className={cn(
          "transition-opacity duration-300",
          loaded && !error ? "opacity-100" : "opacity-0"
        )}
        {...props}
      />
    </div>
  );
};
