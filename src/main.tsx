
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Enhanced performance measurement function
const measurePerformance = async () => {
  if (process.env.NODE_ENV === 'development') {
    try {
      const { onCLS, onFID, onLCP, onINP, onTTFB } = await import('web-vitals');
      
      const reportWebVital = (metric: any) => {
        // Log vital with timestamp for better debugging
        console.log(`[${new Date().toISOString()}] Web Vital: ${metric.name}`, metric);
      };
      
      // Core Web Vitals + Time to First Byte
      onCLS(reportWebVital);
      onFID(reportWebVital);
      onLCP(reportWebVital);
      onINP(reportWebVital);
      onTTFB(reportWebVital);
    } catch (error) {
      console.error('Failed to load web-vitals:', error);
    }
  }
};

// Defer non-critical work
const deferWork = (fn: () => void, timeout = 1000) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => fn(), { timeout });
  } else {
    setTimeout(fn, timeout);
  }
};

// Optimize initial rendering
const initApp = () => {
  // Get the root element
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Root element not found!");
    return;
  }
  
  // Create root
  const root = createRoot(rootElement);
  
  // Render the app
  root.render(<App />);
  
  // Measure performance after first paint
  deferWork(() => {
    measurePerformance();
  }, 2000);
  
  // Add efficient passive event listeners
  window.addEventListener('scroll', () => {}, { passive: true });
  window.addEventListener('touchstart', () => {}, { passive: true });
  
  // Cleanup non-critical resources when idle
  window.addEventListener('load', () => {
    deferWork(() => {
      // Remove startup scripts or listeners that are no longer needed
      // Add memory leak detection in development
      if (process.env.NODE_ENV === 'development') {
        deferWork(() => {
          console.log('Memory usage:', performance.memory ? 
            `${Math.round(performance.memory.usedJSHeapSize / 1048576)} MB / ${Math.round(performance.memory.jsHeapSizeLimit / 1048576)} MB` : 
            'Not available');
        }, 5000);
      }
    }, 1000);
  });
};

// Start the application
initApp();
