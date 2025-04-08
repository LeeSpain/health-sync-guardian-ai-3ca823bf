
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

// Lazy loaded component with intersection observer
const LazyComponent = ({ 
  component: Component, 
  placeholder = <ComponentLoader />,
  threshold = 0.1
}) => {
  const { ref, inView } = useIntersectionObserver({ threshold });
  
  return (
    <div ref={ref}>
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow overflow-hidden space-y-12">
        <Hero />
        <LazyComponent component={Features} />
        <LazyComponent component={ProductShowcase} />
        <LazyComponent component={AIGuardianSection} />
        <LazyComponent component={UserRoles} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
