
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Create a function to measure and report performance
const measurePerformance = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { onCLS, onFID, onLCP, onINP } = await import('web-vitals');
    
    const reportWebVitals = (metric: any) => {
      console.log(metric);
    };
    
    // Core Web Vitals
    onCLS(reportWebVitals);
    onFID(reportWebVitals);
    onLCP(reportWebVitals);
    onINP(reportWebVitals);
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
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      measurePerformance();
    }, { timeout: 2000 });
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(() => {
      measurePerformance();
    }, 2000);
  }
  
  // Remove event listeners that are no longer needed
  window.addEventListener('load', () => {
    // Remove startup scripts that are no longer needed
    const removeUnusedScripts = () => {
      // Any cleanup logic for performance monitoring
    };
    
    if ('requestIdleCallback' in window) {
      requestIdleCallback(removeUnusedScripts);
    } else {
      setTimeout(removeUnusedScripts, 2000);
    }
  });
};

// Start the application
initApp();
