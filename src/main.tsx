
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize performance monitoring
const reportWebVitals = (metric: any) => {
  // We would normally send this to an analytics service
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
};

// Create a function to measure and report performance
const measurePerformance = async () => {
  if (process.env.NODE_ENV === 'development') {
    const { onCLS, onFID, onLCP } = await import('web-vitals');
    onCLS(reportWebVitals);
    onFID(reportWebVitals);
    onLCP(reportWebVitals);
  }
};

// Initialize the app with performance monitoring
const initApp = () => {
  const root = createRoot(document.getElementById("root")!);
  root.render(<App />);
  
  // Measure performance after paint
  requestIdleCallback(() => {
    measurePerformance();
  });
};

// Start the application
initApp();
