
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Force reset load state when src changes
    setIsLoaded(false);
    setError(false);
  }, [src]);

  // Handle image onload event
  const handleLoad = () => {
    console.log(`Image loaded successfully: ${src}`);
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
    setIsLoaded(true);
  };

  // Set up intersection observer for non-priority images
  useEffect(() => {
    // If priority is true or already loaded, no need for observer
    if (priority || isLoaded) {
      setIsLoaded(true);
      return;
    }

    // Use Intersection Observer for lazy loading
    if (!observer.current && imageRef.current && !priority) {
      observer.current = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // When image enters viewport, set the real src
          if (imageRef.current) {
            if ('loading' in HTMLImageElement.prototype) {
              // Browser supports loading="lazy"
              imageRef.current.loading = "lazy";
            }
            // Force the browser to load the image
            imageRef.current.src = src;
            // Once visible, no need to observe anymore
            observer.current?.disconnect();
            observer.current = null;
          }
        }
      }, {
        rootMargin: '200px 0px', // Start loading 200px before it comes into view
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
  }, [src, priority, isLoaded]);

  // Preload high priority images
  useEffect(() => {
    if ((priority || preload) && src) {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleError;
    }
  }, [priority, preload, src]);

  // Determine if we should use the placeholder image
  const imageSrc = error ? '/placeholder.svg' : src;

  // For debugging
  useEffect(() => {
    if (priority || preload) {
      console.log(`Preloading prioritized image: ${src}`);
    }
  }, [priority, preload, src]);

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
        ref={imageRef}
        src={priority || preload ? imageSrc : (isLoaded ? imageSrc : '')} 
        data-src={!priority && !preload ? imageSrc : undefined}
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

      {/* Add a debug overlay for development */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500 bg-gray-100/50">
          Loading: {src.split('/').pop()}
        </div>
      )}
    </div>
  );
};
