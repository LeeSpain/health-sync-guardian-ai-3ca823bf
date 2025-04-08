
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import loading component
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load the pages with better chunk names for easier debugging
const Index = lazy(() => import(/* webpackChunkName: "index-page" */ './pages/Index'));
const PricingPage = lazy(() => import(/* webpackChunkName: "pricing-page" */ './pages/PricingPage'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found-page" */ './pages/NotFound'));

// Loading fallback component
const PageLoader = () => (
  <div className="container mx-auto px-4 py-8">
    <Skeleton className="w-full h-20 mb-4" />
    <Skeleton className="w-3/4 h-12 mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <Skeleton key={i} className="w-full h-64 rounded-lg" />
      ))}
    </div>
  </div>
);

function App() {
  // Apply optimized scrolling globally
  useEffect(() => {
    // Enable passive event listeners for performance
    const passiveSupported = (() => {
      let passive = false;
      try {
        // Test via a getter in the options object to see if the passive property is accessed
        const opts = Object.defineProperty({}, 'passive', {
          get: function() {
            passive = true;
            return true;
          }
        });
        window.addEventListener('testPassive', null as any, opts);
        window.removeEventListener('testPassive', null as any, opts);
      } catch (e) {}
      return passive;
    })();
    
    // Apply touch-action to improve mobile scrolling
    document.documentElement.style.touchAction = 'manipulation';
    
    // Apply scroll behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Improve scroll performance with overscroll behavior
    document.documentElement.style.overscrollBehavior = 'contain';
    
    // Apply passive event listener to scroll events for performance
    const scrollHandler = () => {};
    window.addEventListener('scroll', scrollHandler, passiveSupported ? { passive: true } : false);
    
    // Prefetch likely-to-be-needed resources when idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        // Prefetch routes that might be needed
        const prefetcher = document.createElement('link');
        prefetcher.rel = 'prefetch';
        prefetcher.href = '/pricing';
        document.head.appendChild(prefetcher);
      });
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
