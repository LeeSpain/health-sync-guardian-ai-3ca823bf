
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages directly
import Index from './pages/Index';
import PricingPage from './pages/PricingPage';
import NotFound from './pages/NotFound';
import MemberDashboard from './pages/MemberDashboard';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  // Apply optimized scrolling globally
  React.useEffect(() => {
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
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Router>
      {/* Add ScrollToTop component to ensure pages start at the top */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/dashboard" element={<MemberDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
