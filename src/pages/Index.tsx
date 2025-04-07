
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductShowcase from '@/components/ProductShowcase';
import Pricing from '@/components/Pricing';
import AIGuardianSection from '@/components/AIGuardian';
import UserRoles from '@/components/UserRoles';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow overflow-hidden">
        <Hero />
        <div className="relative">
          {/* Diagonal section divider */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-brand-grey z-10" 
               style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}>
          </div>
          <Features />
        </div>
        <ProductShowcase />
        <div className="relative">
          {/* Wave section divider */}
          <div className="absolute top-0 left-0 right-0 h-32 w-full overflow-hidden z-10">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
              <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
                    className="fill-white"></path>
            </svg>
          </div>
          <AIGuardianSection />
        </div>
        <UserRoles />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
