
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loadingClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  loadingClassName = "bg-gray-200 animate-pulse",
  width,
  height,
  priority = false,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [error, setError] = useState(false);

  // Handle image onload event
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  // Preload if priority is true
  useEffect(() => {
    if (priority && src) {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleError;
    }
  }, [priority, src]);

  // Determine if we should use the placeholder image
  const imageSrc = error ? '/placeholder.svg' : src;

  return (
    <div
      className={cn(
        "overflow-hidden relative",
        !isLoaded && loadingClassName,
        className
      )}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
      }}
    >
      <img
        src={imageSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  );
};
