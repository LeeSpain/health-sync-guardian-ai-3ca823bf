
import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  root?: null | Element;
  rootMargin?: string;
  threshold?: number | number[];
  enabled?: boolean;
}

// Generic type parameter for any HTML element
export function useGenericIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  enabled = true,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const elementRef = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    if (!enabled) {
      setEntry(null);
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
      if (observer && currentElement) {
        observer.unobserve(currentElement);
        observer.disconnect();
      }
    };
  }, [enabled, root, rootMargin, threshold]);

  return { ref: elementRef, inView: entry?.isIntersecting || false, entry };
}
