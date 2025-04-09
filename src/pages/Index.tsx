
import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Skeleton } from '@/components/ui/skeleton';
import ScrollToTop from '@/components/ScrollToTop';

// Lazy loaded components with optimized chunk names
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

// Component loader with better visual appearance
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

// Product showcase loader - specific to product showcase section
const ProductShowcaseLoader = () => (
  <div className="w-full py-12">
    <Skeleton className="w-1/3 mx-auto h-8 mb-4" />
    <Skeleton className="w-2/3 mx-auto h-6 mb-8" />
    <Skeleton className="w-full h-64 mb-8 rounded-lg" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <Skeleton key={i} className="h-64 w-full rounded-lg" />
      ))}
    </div>
  </div>
);

// Enhanced lazy loaded component with optimized intersection observer
const LazyComponent = ({ 
  component: Component, 
  placeholder = <ComponentLoader />,
  threshold = 0.05, // Lower threshold to start loading earlier
  rootMargin = "800px 0px", // Load much earlier (800px before component enters viewport)
  id = "", // For debugging
}) => {
  const { ref, inView } = useIntersectionObserver({ 
    threshold, 
    rootMargin,
    triggerOnce: true, // Only trigger once to prevent unnecessary re-renders
  });
  
  // Track if component has been loaded
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
    if (inView && !hasLoaded) {
      console.log(`Loading component: ${id || Component.name}`);
      setHasLoaded(true);
    }
  }, [inView, hasLoaded, id, Component.name]);
  
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

const Index: React.FC = () => {
  // Preload components based on network conditions
  useEffect(() => {
    // Check if we should preload based on connection type
    const shouldPreload = () => {
      if (!('connection' in navigator)) return true;
      
      // @ts-ignore - connection may not be recognized in TypeScript
      const connection = navigator.connection;
      if (!connection) return true;
      
      // Don't preload if user has save-data enabled or on slow connections
      if (connection.saveData) return false;
      if (connection.effectiveType === 'slow-2g' || 
          connection.effectiveType === '2g') return false;
      
      return true;
    };
    
    // Preload product showcase component immediately, but with lower priority
    const preloadProductShowcase = () => {
      if (shouldPreload()) {
        const preload = import(/* webpackChunkName: "product-showcase" */ '@/components/product-showcase');
        console.log('Preloading ProductShowcase component');
        return preload;
      }
    };
    
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadProductShowcase, { timeout: 2000 });
    } else {
      setTimeout(preloadProductShowcase, 1000);
    }
    
    // Preload other sections when the page is idle
    const preloadOtherSections = () => {
      if (shouldPreload()) {
        // Preload other important sections
        import(/* webpackChunkName: "features" */ '@/components/Features');
        import(/* webpackChunkName: "ai-guardian" */ '@/components/AIGuardian');
      }
    };
    
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Wait a bit longer to preload other sections
        setTimeout(preloadOtherSections, 3000);
      }, { timeout: 4000 });
    } else {
      setTimeout(preloadOtherSections, 3000);
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToTop /> {/* Added ScrollToTop component to ensure page scrolls to top on navigation */}
      <Navbar />
      <main className="flex-grow space-y-12 relative">
        <Hero />
        <LazyComponent component={Features} id="Features" rootMargin="600px 0px" />
        <LazyComponent 
          component={ProductShowcase} 
          placeholder={<ProductShowcaseLoader />}
          rootMargin="1000px 0px" // Load product showcase much earlier
          id="ProductShowcase"
        />
        <LazyComponent component={AIGuardianSection} id="AIGuardian" rootMargin="600px 0px" />
        <LazyComponent component={UserRoles} id="UserRoles" rootMargin="500px 0px" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
