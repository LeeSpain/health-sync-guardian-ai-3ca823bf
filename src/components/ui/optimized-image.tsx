
import React, { useState, useEffect } from 'react';
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
  const maxRetries = 2;

  // Reset states when src changes
  useEffect(() => {
    setLoaded(false);
    setError(false);
    setRetryCount(0);
  }, [src]);

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    
    // Try to reload the image a couple times before showing error
    if (retryCount < maxRetries) {
      setRetryCount(prev => prev + 1);
      // Force a reload with a cache-busting parameter
      const cacheBuster = `?reload=${Date.now()}-${retryCount}`;
      const imgElement = document.querySelector(`img[data-source-path="${src}"]`) as HTMLImageElement;
      if (imgElement) {
        imgElement.src = `${src.split('?')[0]}${cacheBuster}`;
      }
    } else {
      setError(true);
    }
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  // Determine what to display as the image source
  const imageSrc = error ? '/placeholder.svg' : src;

  return (
    <div 
      className={cn(
        "relative overflow-hidden flex items-center justify-center",
        className
      )} 
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
      }}
    >
      {/* Loading skeleton */}
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/60">
          <Skeleton className="w-full h-full absolute inset-0" />
          <div className="w-8 h-8 border-4 border-brand-teal/30 border-t-brand-teal rounded-full animate-spin z-10"></div>
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/60 text-gray-500 text-sm">
          <div className="text-center p-2">
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
        </div>
      )}
      
      {/* The actual image */}
      <img
        src={imageSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        // Use the proper HTML attribute for browser support
        {...(priority ? { fetchpriority: "high" } : {})}
        onError={handleError}
        onLoad={handleLoad}
        style={{
          objectFit: objectFit,
          width: '100%',
          height: '100%',
          transition: 'opacity 0.3s ease'
        }}
        className={cn(
          "transition-opacity duration-300",
          !loaded && "opacity-0",
          loaded && "opacity-100"
        )}
        data-image-loaded={loaded}
        data-image-error={error}
        data-source-path={src}
        {...props}
      />
    </div>
  );
};
