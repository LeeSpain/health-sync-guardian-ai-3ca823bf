
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  ...props
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Reset states when src changes
  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  // Determine what to display as the image source
  const imageSrc = error ? '/placeholder.svg' : src;

  return (
    <div 
      className={cn("relative flex items-center justify-center overflow-hidden", className)} 
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
      }}
    >
      {/* Loading indicator */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-brand-teal/30 border-t-brand-teal rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* The actual image */}
      <img
        src={imageSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          "max-w-full max-h-full object-contain transition-opacity duration-300",
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
