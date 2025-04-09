
import React, { lazy, Suspense, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Skeleton } from '@/components/ui/skeleton';
import ScrollToTop from '@/components/ScrollToTop';

// Lazy loaded components with chunk naming for better caching
const Features = lazy(() => 
  import(/* webpackChunkName: "features" */ '@/components/Features')
);
const ProductShowcase = lazy(() => 
  import(/* webpackChunkName: "product-showcase" */ '@/components/product-showcase')
);
const AIGuardianSection = lazy(() => 
  import(/* webpackChunkName: "ai-guardian" */ '@/components/AIGuardian')
);
const UserRoles = lazy(() => 
  import(/* webpackChunkName: "user-roles" */ '@/components/UserRoles')
);

// Create simpler component loaders
const ComponentLoader = () => (
  <div className="w-full py-8">
    <Skeleton className="w-3/4 mx-auto h-8 mb-6" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {[1, 2, 3].map(i => (
        <Skeleton key={i} className="h-48 w-full rounded-lg" />
      ))}
    </div>
  </div>
);

// Optimized lazy component with better loading strategy
const LazyComponent = ({ 
  component: Component, 
  placeholder = <ComponentLoader />,
  threshold = 0.05,
  rootMargin = "400px 0px", 
  id = "",
}) => {
  const { ref, inView } = useIntersectionObserver({ 
    threshold, 
    rootMargin,
    triggerOnce: true, 
  });
  
  const [hasLoaded, setHasLoaded] = useState(false);
  
  React.useEffect(() => {
    if (inView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [inView, hasLoaded]);
  
  return (
    <div ref={ref} className="min-h-[200px]">
      {(inView || hasLoaded) ? (
        <Suspense fallback={placeholder}>
          <Component />
        </Suspense>
      ) : (
        placeholder
      )}
    </div>
  );
};

// Memoize the entire page component to prevent unnecessary re-renders
const Index = React.memo(() => {
  // Preload critical components
  React.useEffect(() => {
    // Check if we're on a slow connection
    const connection = navigator.connection as any;
    const isSaveData = connection?.saveData;
    const isSlowConnection = connection?.effectiveType === 'slow-2g' || 
                             connection?.effectiveType === '2g';
    
    // Don't preload on slow connections or save-data mode
    if (!isSaveData && !isSlowConnection) {
      // Preload features in idle time
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          import(/* webpackChunkName: "features" */ '@/components/Features');
        }, { timeout: 2000 });
      }
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow space-y-12 relative">
        <Hero />
        <LazyComponent component={Features} id="Features" rootMargin="300px 0px" />
        <LazyComponent 
          component={ProductShowcase} 
          rootMargin="400px 0px"
          id="ProductShowcase"
        />
        <LazyComponent component={AIGuardianSection} id="AIGuardian" rootMargin="300px 0px" />
        <LazyComponent component={UserRoles} id="UserRoles" rootMargin="300px 0px" />
      </main>
      <Footer />
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
