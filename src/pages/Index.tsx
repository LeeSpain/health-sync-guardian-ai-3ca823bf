
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MembershipFlow from '@/components/membership/MembershipFlow';
import ProductShowcase from '@/components/product-showcase';
import UserRoles from '@/components/UserRoles';
import AIGuardian from '@/components/AIGuardian';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <MembershipFlow />
      <ProductShowcase />
      <UserRoles />
      <AIGuardian />
      <Footer />
    </div>
  );
};

export default Index;
