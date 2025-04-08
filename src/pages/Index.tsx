
import React, { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy loaded components
const Features = lazy(() => import('@/components/Features'));
const ProductShowcase = lazy(() => import('@/components/ProductShowcase'));
const AIGuardianSection = lazy(() => import('@/components/AIGuardian'));
const UserRoles = lazy(() => import('@/components/UserRoles'));

// Component loader
const ComponentLoader = () => (
  <div className="w-full py-12">
    <Skeleton className="w-3/4 mx-auto h-10 mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {[1, 2, 3].map(i => (
        <Skeleton key={i} className="h-64 w-full rounded-lg" />
      ))}
    </div>
  </div>
);

// Improved lazy loaded component with optimized intersection observer
const LazyComponent = ({ 
  component: Component, 
  placeholder = <ComponentLoader />,
  threshold = 0.1,
  rootMargin = "300px 0px", // Load earlier (300px before component enters viewport)
  delay = 100, // Small delay to batch state updates
}) => {
  const { ref, inView } = useIntersectionObserver({ 
    threshold, 
    rootMargin,
    delay,
    triggerOnce: true, // Only trigger once to prevent unnecessary re-renders
  });
  
  // Use a minimum height to prevent layout shift
  return (
    <div ref={ref} className="min-h-[300px]">
      {inView ? (
        <Suspense fallback={placeholder}>
          <Component />
        </Suspense>
      ) : (
        placeholder
      )}
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow space-y-12 relative">
        <Hero />
        <LazyComponent component={Features} />
        <LazyComponent 
          component={ProductShowcase} 
          rootMargin="400px 0px" // Load product showcase even earlier due to its complexity
        />
        <LazyComponent component={AIGuardianSection} />
        <LazyComponent component={UserRoles} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
