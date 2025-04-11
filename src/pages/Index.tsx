
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import ProductShowcase from '@/components/product-showcase';
import AIGuardianSection from '@/components/AIGuardian';
import UserRoles from '@/components/UserRoles';
import ScrollToTop from '@/components/ScrollToTop';

// Simplified Index component to ensure content always loads
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow space-y-12 relative">
        <Hero />
        <Features />
        <ProductShowcase />
        <AIGuardianSection />
        <UserRoles />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
