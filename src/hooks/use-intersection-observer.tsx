
import { useGenericIntersectionObserver } from './use-generic-intersection-observer';

interface UseIntersectionObserverProps {
  root?: null | Element;
  rootMargin?: string;
  threshold?: number | number[];
  enabled?: boolean;
  delay?: number;
  triggerOnce?: boolean;
}

export function useIntersectionObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  enabled = true,
  delay = 100,
  triggerOnce = false,
}: UseIntersectionObserverProps = {}) {
  return useGenericIntersectionObserver<HTMLDivElement>({
    root,
    rootMargin,
    threshold,
    enabled,
    delay,
    triggerOnce,
  });
}
