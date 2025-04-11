
import React, { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';
import ScrollToTop from '@/components/ScrollToTop';

// Component loader with better fallback
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

// Simplified component imports
const Features = lazy(() => import('@/components/Features'));
const ProductShowcase = lazy(() => import('@/components/product-showcase'));
const AIGuardianSection = lazy(() => import('@/components/AIGuardian'));
const UserRoles = lazy(() => import('@/components/UserRoles'));

// Simpler Index component to ensure content always loads
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow space-y-12 relative">
        <Hero />
        <Suspense fallback={<ComponentLoader />}>
          <Features />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <ProductShowcase />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <AIGuardianSection />
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <UserRoles />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
