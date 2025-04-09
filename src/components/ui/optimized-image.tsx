
import React from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loadingClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  preload?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  loadingClassName = "bg-gray-200 animate-pulse",
  width,
  height,
  priority = false,
  preload = false,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  
  // Handle image onload event
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
    setIsLoaded(true); // Still mark as "loaded" to remove loading state
  };

  return (
    <div
      className={cn(
        "relative",
        !isLoaded && loadingClassName,
        className
      )}
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
      }}
    >
      <img
        src={error ? '/placeholder.svg' : src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "max-w-full max-h-full object-contain transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />

      {/* Loading state indicator (only show for non-loaded images) */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50">
          <div className="text-center">
            <div className="animate-spin h-5 w-5 border-2 border-brand-teal/30 border-t-brand-teal rounded-full mx-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
};
