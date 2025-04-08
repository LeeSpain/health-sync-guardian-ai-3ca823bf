
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
  const uniqueId = useRef(`img-${Math.random().toString(36).substring(2, 9)}`);

  useEffect(() => {
    // Force reset load state when src changes
    setIsLoaded(false);
    setError(false);
    
    // Debug logging for each image load attempt
    console.log(`[${uniqueId.current}] Setting up image: ${src} (Priority: ${priority ? 'YES' : 'no'})`);
  }, [src, priority]);

  // Handle image onload event
  const handleLoad = () => {
    console.log(`[${uniqueId.current}] Image loaded successfully: ${src}`);
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    console.error(`[${uniqueId.current}] Failed to load image: ${src}`);
    setError(true);
    setIsLoaded(true);
  };

  // Set up intersection observer for non-priority images
  useEffect(() => {
    // If priority is true or already loaded, no need for observer
    if (priority || preload || isLoaded) {
      console.log(`[${uniqueId.current}] Image is priority or already loaded: ${src}`);
      return;
    }

    // Use Intersection Observer for lazy loading
    if (!observer.current && imageRef.current && !priority) {
      console.log(`[${uniqueId.current}] Setting up observer for: ${src}`);
      
      observer.current = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // When image enters viewport, set the real src
          if (imageRef.current) {
            console.log(`[${uniqueId.current}] Image entering viewport, loading: ${src}`);
            
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
        console.log(`[${uniqueId.current}] Cleaning up observer for: ${src}`);
        observer.current.disconnect();
        observer.current = null;
      }
    };
  }, [src, priority, preload, isLoaded]);

  // Preload high priority images
  useEffect(() => {
    if ((priority || preload) && src) {
      console.log(`[${uniqueId.current}] Preloading prioritized image: ${src}`);
      const img = new Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleError;
    }
  }, [priority, preload, src]);

  // Determine if we should use the placeholder image
  const imageSrc = error ? '/placeholder.svg' : src;
  
  // For debugging all image loading states
  useEffect(() => {
    console.log(`[${uniqueId.current}] Image state update: 
      Src: ${src}
      Loaded: ${isLoaded ? 'YES' : 'no'}
      Error: ${error ? 'YES' : 'no'}
      Priority: ${priority ? 'YES' : 'no'}
      Preload: ${preload ? 'YES' : 'no'}
    `);
  }, [isLoaded, error, priority, preload, src]);

  // Set display to true immediately for service images
  const isProfessionalServiceImage = className?.includes('professional-service-image') || false;
  
  return (
    <div
      className={cn(
        "overflow-hidden relative",
        !isLoaded && !isProfessionalServiceImage && loadingClassName,
        className?.includes('professional-service-image') ? "w-full h-full" : "",
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
        src={priority || preload || isProfessionalServiceImage ? imageSrc : (isLoaded ? imageSrc : '')} 
        data-src={!priority && !preload && !isProfessionalServiceImage ? imageSrc : undefined}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "w-full h-full object-contain transition-opacity duration-300",
          (isLoaded || isProfessionalServiceImage) ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />

      {/* Loading state indicator - hide for professional service images */}
      {!isLoaded && !isProfessionalServiceImage && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500 bg-gray-100/50">
          <div className="text-center">
            <div className="animate-spin h-5 w-5 border-2 border-brand-teal/30 border-t-brand-teal rounded-full mx-auto mb-1"></div>
            <div className="text-xs">Loading image</div>
          </div>
        </div>
      )}
    </div>
  );
};
