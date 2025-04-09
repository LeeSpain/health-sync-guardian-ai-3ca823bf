
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
  const [imageSrc, setImageSrc] = useState(src);
  const imageRef = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const uniqueId = useRef(`img-${Math.random().toString(36).substring(2, 9)}`);
  
  // Force reset load state when src changes
  useEffect(() => {
    if (src !== imageSrc) {
      setIsLoaded(priority || preload);
      setError(false);
      setImageSrc(src);
    }
  }, [src, priority, preload, imageSrc]);

  // Handle image onload event
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
    setIsLoaded(true); // Still mark as "loaded" to remove loading state
    setImageSrc('/placeholder.svg'); // Set fallback image
  };

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
          // When image enters viewport, update src to trigger loading
          if (imageRef.current && !isLoaded) {
            if ('loading' in HTMLImageElement.prototype) {
              // Browser supports loading="lazy"
              imageRef.current.loading = "lazy";
            }
            
            // Force loading of the image
            if (imageRef.current.src !== src) {
              imageRef.current.src = src;
            }
            
            // Once visible, no need to observe anymore
            observer.current?.disconnect();
            observer.current = null;
          }
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

  // Preload high priority images
  useEffect(() => {
    if ((priority || preload) && src) {
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleError;
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
      data-image-id={uniqueId.current}
    >
      <img
        ref={imageRef}
        src={error ? '/placeholder.svg' : (priority || preload || isLoaded ? src : '')} 
        data-src={!priority && !preload ? src : undefined}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "w-full h-full object-contain transition-opacity duration-300",
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
            <div className="text-xs">Loading</div>
          </div>
        </div>
      )}
    </div>
  );
};
