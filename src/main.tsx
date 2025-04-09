
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Create root element efficiently
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found!");
} else {
  // Create root and render app
  const root = createRoot(rootElement);
  root.render(<App />);
  
  // Measure performance metrics when idle
  if (process.env.NODE_ENV === 'development') {
    const measurePerformance = async () => {
      try {
        const { onCLS, onFID, onLCP, onINP, onTTFB } = await import('web-vitals');
        
        // Simple reporting function
        const reportWebVital = (metric: any) => {
          console.log(`Web Vital: ${metric.name}`, metric);
        };
        
        // Core Web Vitals
        onCLS(reportWebVital);
        onFID(reportWebVital);
        onLCP(reportWebVital);
        onINP(reportWebVital);
        onTTFB(reportWebVital);
      } catch (error) {
        console.error('Failed to load web-vitals:', error);
      }
    };
    
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => measurePerformance(), { timeout: 2000 });
    } else {
      setTimeout(measurePerformance, 2000);
    }
  }

  // Add efficient passive event listeners
  window.addEventListener('scroll', () => {}, { passive: true });
  window.addEventListener('touchstart', () => {}, { passive: true });
}
