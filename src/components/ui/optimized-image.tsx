
import React from 'react';
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
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  // Simple error handling
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
  };

  // Simple load handling
  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div 
      className={cn("relative flex items-center justify-center", className)} 
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
      }}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-brand-teal/30 border-t-brand-teal rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={error ? '/placeholder.svg' : src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onError={handleError}
        onLoad={handleLoad}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
        {...props}
      />
    </div>
  );
};
