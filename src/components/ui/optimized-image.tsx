
import React, { useState, useCallback, memo } from 'react';
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

export const OptimizedImage = memo(({
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

  // Use useCallback for event handlers to prevent recreating functions on each render
  const handleError = useCallback(() => {
    if (retryCount < 2) {
      setRetryCount(prev => prev + 1);
      // Add a cache buster to the URL
      const cacheBuster = `?retry=${Date.now()}`;
      const img = new Image();
      img.src = src.includes('?') ? `${src}&cb=${cacheBuster}` : `${src}${cacheBuster}`;
      img.onload = () => {
        setError(false);
        setLoaded(true);
      };
      img.onerror = () => {
        setError(true);
      };
    } else {
      setError(true);
    }
  }, [retryCount, src]);

  const handleLoad = useCallback(() => {
    setLoaded(true);
    setError(false);
  }, []);

  // Preload high priority images
  React.useEffect(() => {
    if (priority && !loaded && !error) {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleError;
    }
  }, [priority, src, loaded, error, handleLoad, handleError]);

  return (
    <div 
      className={cn(
        "relative w-full h-full flex items-center justify-center",
        className
      )} 
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
      }}
    >
      {/* Only show loader when not loaded and not errored */}
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
      
      {/* The actual image - using native loading="lazy" for better performance */}
      <img
        src={error ? '/placeholder.svg' : src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          "max-w-full max-h-full w-full h-full transition-opacity duration-300",
          loaded && !error ? "opacity-100" : "opacity-0",
          objectFit === 'cover' ? "object-cover" : "object-contain"
        )}
        style={{
          objectFit: objectFit,
        }}
        {...props}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';
