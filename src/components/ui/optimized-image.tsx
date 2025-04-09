
import React, { useState, useEffect, useRef } from 'react';
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
  lazyBoundary?: string;
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
  lazyBoundary = "200px",
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(priority || preload);
  const [error, setError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  
  // Handle image onload event
  const handleLoad = () => {
    console.log(`Image loaded: ${src}`);
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
    setIsLoaded(true); // Still mark as "loaded" to remove loading state
  };

  // Immediately load priority images
  useEffect(() => {
    if (priority || preload) {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleError;
    }
  }, [priority, preload, src]);

  // Set up intersection observer for non-priority images
  useEffect(() => {
    // If priority is true or already loaded, no need for observer
    if (priority || preload || isLoaded) {
      return;
    }

    // Clean up previous observer if it exists
    if (observer.current) {
      observer.current.disconnect();
      observer.current = null;
    }

    // Use Intersection Observer for lazy loading
    if (imageRef.current && !priority) {
      observer.current = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Just set isLoaded to true - this will trigger the image to load
          setIsLoaded(true);
          
          // Once visible, no need to observe anymore
          observer.current?.disconnect();
          observer.current = null;
        }
      }, {
        rootMargin: lazyBoundary, // Start loading before it comes into view
        threshold: 0.01 // Trigger as soon as even 1% is visible
      });

      observer.current.observe(imageRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = null;
      }
    };
  }, [src, priority, preload, isLoaded, lazyBoundary]);

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
        ref={imageRef}
        src={(isLoaded || priority || preload) ? (error ? '/placeholder.svg' : src) : ''}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "w-auto h-auto max-w-full max-h-full object-contain transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />

      {/* Loading state indicator (only show for non-loaded images) */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500 bg-gray-100/50">
          <div className="text-center">
            <div className="animate-spin h-5 w-5 border-2 border-brand-teal/30 border-t-brand-teal rounded-full mx-auto mb-1"></div>
          </div>
        </div>
      )}
    </div>
  );
};
