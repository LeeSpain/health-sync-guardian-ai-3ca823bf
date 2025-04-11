
import React from 'react';
import Footer from '@/components/Footer';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';
import MemberDashboardHeader from '@/components/dashboard/MemberDashboardHeader';

const MemberDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ScrollToTop />
      <MemberDashboardHeader />
      <main className="flex-grow">
        <div className="container mx-auto px-2 sm:px-4 py-4 max-w-7xl">
          <DashboardLayout />
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MemberDashboard;
