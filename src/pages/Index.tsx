
import React, { lazy, Suspense, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Skeleton } from '@/components/ui/skeleton';
import ScrollToTop from '@/components/ScrollToTop';

// Improved loading component with better performance
const ComponentLoader = () => (
  <div className="w-full py-8" aria-busy="true">
    <div className="max-w-6xl mx-auto px-4">
      <Skeleton className="w-3/4 h-8 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map(i => (
          <Skeleton key={i} className="h-48 w-full rounded-lg" />
        ))}
      </div>
    </div>
  </div>
);

// Dynamically import components with better chunk naming and prefetching
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

// Optimized lazy component with better loading strategy
const LazyComponent = ({ 
  component: Component, 
  placeholder = <ComponentLoader />,
  threshold = 0.01,
  rootMargin = "500px 0px", // Increased from 400px to 500px
  id = "",
}) => {
  const { ref, inView } = useIntersectionObserver({ 
    threshold, 
    rootMargin,
    triggerOnce: true,
  });
  
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  
  // Mark component as loaded when it comes into view
  useEffect(() => {
    if (inView && !hasLoaded) {
      setHasLoaded(true);
      
      // Use a small delay to prevent blocking main thread
      const timer = setTimeout(() => {
        setIsRendered(true);
      }, 10);
      
      return () => clearTimeout(timer);
    }
  }, [inView, hasLoaded]);

  return (
    <div ref={ref} className="min-h-[100px]">
      {(isRendered) ? (
        <Suspense fallback={placeholder}>
          <Component />
        </Suspense>
      ) : hasLoaded ? (
        placeholder
      ) : null}
    </div>
  );
};

// Memoize the entire page component to prevent unnecessary re-renders
const Index = React.memo(() => {
  // Preload critical components
  useEffect(() => {
    // Check if we're on a slow connection
    const connection = navigator.connection as any;
    const isSaveData = connection?.saveData;
    const isSlowConnection = connection?.effectiveType === 'slow-2g' || 
                             connection?.effectiveType === '2g';
    
    // Don't preload on slow connections or save-data mode
    if (!isSaveData && !isSlowConnection) {
      // Preload features in idle time with higher priority
      if ('requestIdleCallback' in window) {
        // First prioritize Features and ProductShowcase
        requestIdleCallback(() => {
          import(/* webpackChunkName: "features" */ '@/components/Features');
          
          // Then load ProductShowcase after a short delay
          setTimeout(() => {
            import(/* webpackChunkName: "product-showcase" */ '@/components/product-showcase');
          }, 1000);
        }, { timeout: 1000 });
      }
    }
    
    // Add event listener to prefetch components on scroll
    const handleScroll = () => {
      // If we're more than 20% down the page, prefetch the next sections
      if (window.scrollY > window.innerHeight * 0.2 && !isSaveData && !isSlowConnection) {
        window.removeEventListener('scroll', handleScroll);
        
        // Use requestIdleCallback if available
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            import(/* webpackChunkName: "ai-guardian" */ '@/components/AIGuardian');
            import(/* webpackChunkName: "user-roles" */ '@/components/UserRoles');
          }, { timeout: 2000 });
        } else {
          // Fallback to setTimeout
          setTimeout(() => {
            import(/* webpackChunkName: "ai-guardian" */ '@/components/AIGuardian');
            import(/* webpackChunkName: "user-roles" */ '@/components/UserRoles');
          }, 2000);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow space-y-12 relative">
        <Hero />
        <LazyComponent component={Features} id="Features" rootMargin="400px 0px" />
        <LazyComponent 
          component={ProductShowcase} 
          rootMargin="500px 0px"
          id="ProductShowcase"
        />
        <LazyComponent component={AIGuardianSection} id="AIGuardian" rootMargin="500px 0px" />
        <LazyComponent component={UserRoles} id="UserRoles" rootMargin="500px 0px" />
      </main>
      <Footer />
    </div>
  );
});

Index.displayName = 'Index';

export default Index;
