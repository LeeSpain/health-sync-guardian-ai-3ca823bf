
import { useState, useEffect, useRef, useCallback } from 'react';

interface UseIntersectionObserverProps {
  root?: null | Element;
  rootMargin?: string;
  threshold?: number | number[];
  enabled?: boolean;
  delay?: number;
  triggerOnce?: boolean; // Add option to trigger only once
}

export function useGenericIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  enabled = true,
  delay = 0,
  triggerOnce = false,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [inView, setInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // Use callback for performance optimization
  const updateEntry = useCallback((entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;
    
    // Clear any existing timeout
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Create an update function that can be called directly or after a delay
    const update = () => {
      const isIntersecting = entry?.isIntersecting || false;
      
      // Only update state if the value has changed or we haven't triggered yet
      if (entry && (!triggerOnce || !hasTriggered)) {
        setEntry(entry);
        
        if (isIntersecting) {
          setInView(true);
          // If triggerOnce is true, mark as triggered
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce) {
          // Only set to false if we're not in triggerOnce mode
          setInView(false);
        }
      }
    };

    if (delay > 0) {
      // Set a new timeout
      timeoutRef.current = window.setTimeout(() => {
        update();
        timeoutRef.current = null;
      }, delay);
    } else {
      update();
    }
  }, [delay, triggerOnce, hasTriggered]);

  useEffect(() => {
    // If we've already triggered once and triggerOnce is true, no need to observe
    if (!enabled || (triggerOnce && hasTriggered)) {
      return;
    }

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport) {
      // Fallback for browsers without IntersectionObserver support
      setEntry({
        isIntersecting: true,
      } as IntersectionObserverEntry);
      setInView(true);
      if (triggerOnce) {
        setHasTriggered(true);
      }
      return;
    }

    // Create a new observer with the current settings
    observerRef.current = new IntersectionObserver(
      updateEntry,
      { 
        root, 
        rootMargin, 
        threshold 
      }
    );

    const observer = observerRef.current;
    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      // Clean up on unmount or when dependencies change
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (observer && currentElement) {
        observer.unobserve(currentElement);
        observer.disconnect();
      }
    };
  }, [enabled, root, rootMargin, threshold, updateEntry, triggerOnce, hasTriggered]);

  return { ref: elementRef, inView, entry, hasTriggered };
}
