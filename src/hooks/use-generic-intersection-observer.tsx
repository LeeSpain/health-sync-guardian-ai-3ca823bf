
import { useState, useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  root?: null | Element;
  rootMargin?: string;
  threshold?: number | number[];
  enabled?: boolean;
  delay?: number; // Add a delay option to debounce observer callbacks
}

// Generic type parameter for any HTML element
export function useGenericIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  enabled = true,
  delay = 0, // Default to no delay
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [inView, setInView] = useState(false);
  const elementRef = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    // Clear any existing timeout
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const update = () => {
      setEntry(entry);
      setInView(entry?.isIntersecting || false);
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
  };

  useEffect(() => {
    if (!enabled) {
      setEntry(null);
      setInView(false);
      return;
    }

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport) {
      setEntry({
        isIntersecting: true,
      } as IntersectionObserverEntry);
      setInView(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      updateEntry,
      { root, rootMargin, threshold }
    );

    const observer = observerRef.current;
    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      // Clear any pending timeout
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (observer && currentElement) {
        observer.unobserve(currentElement);
        observer.disconnect();
      }
    };
  }, [enabled, root, rootMargin, threshold, delay]);

  return { ref: elementRef, inView, entry };
}
