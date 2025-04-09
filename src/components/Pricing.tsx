
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import BasePlans from './pricing/BasePlans';
import DevicesTab from './pricing/DevicesTab';
import ServicesTab from './pricing/ServicesTab';
import HelpSection from './pricing/HelpSection';
import PricingFooter from './pricing/PricingFooter';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('plans');

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-brand-grey/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Start with our powerful health monitoring dashboard and customize with devices and services
          </p>
          <Link to="/pricing">
            <Button className="mt-6 bg-brand-orange hover:bg-brand-orange/90">
              View Full Product Catalog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="plans">Base Plans</TabsTrigger>
              <TabsTrigger value="devices">Devices</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>
          </div>

          {/* Base Plans Tab */}
          <TabsContent value="plans">
            <BasePlans />
          </TabsContent>

          {/* Devices Tab */}
          <TabsContent value="devices">
            <DevicesTab />
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services">
            <ServicesTab />
          </TabsContent>
        </Tabs>

        <HelpSection />
        <PricingFooter />
      </div>
    </section>
  );
};

export default Pricing;
