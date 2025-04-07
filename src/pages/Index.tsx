
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductShowcase from '@/components/ProductShowcase';
import Pricing from '@/components/Pricing';
import AIGuardianSection from '@/components/AIGuardian';
import UserRoles from '@/components/UserRoles';
import PriceComparison from '@/components/PriceComparison';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow overflow-hidden space-y-12">
        <Hero />
        <Features />
        <ProductShowcase />
        <AIGuardianSection />
        <UserRoles />
        <Pricing />
        <PriceComparison />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
