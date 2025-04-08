
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import loading component
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load the pages
const Index = lazy(() => import('./pages/Index'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
  // Apply smooth scrolling globally
  useEffect(() => {
    // Prevent scroll jank by using passive scrolling where possible
    document.addEventListener('scroll', () => {}, { passive: true });
    
    // Apply scroll behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup on unmount
    return () => {
      document.removeEventListener('scroll', () => {});
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
