
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { getProductsData } from './productData';
import { FeaturedProduct } from './FeaturedProduct';
import { HealthMonitoringSection } from './HealthMonitoringSection';
import { ProfessionalServicesSection } from './ProfessionalServicesSection';
import { HealthcareProfessionalsSection } from './HealthcareProfessionalsSection';

const ProductShowcase: React.FC = () => {
  // Use the products data from the separate file
  const products = getProductsData();

  // Filter products by category
  const featuredDevice = products.find(product => product.category === "featured");
  const healthMonitoringDevices = products.filter(product => product.category === "device");
  const professionalServices = products.filter(product => product.category === "service");
  const healthcareProfessionals = products.filter(product => product.category === "healthcare");
  
  return (
    <div id="products" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-grey/20 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-0"></div>
      
      {/* Decorative patterns */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl z-0"></div>
      
      {/* Curved lines */}
      <svg className="absolute top-1/3 left-0 w-full h-64 z-0 text-brand-teal/5" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0,100 C300,0 600,200 1200,100 L1200,200 L0,200 Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-20 left-0 w-full h-64 z-0 text-brand-orange/5" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z" fill="currentColor" />
      </svg>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-brand-teal/10 to-brand-teal/20 text-brand-teal border-none">
            Our Products
          </Badge>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-brand-teal to-brand-teal/80 bg-clip-text text-transparent mb-4">
            Complete Care Ecosystem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our integrated solutions work seamlessly together to provide comprehensive health tracking and emergency response.
          </p>
        </div>

        {/* All Products in One View */}
        <div className="space-y-16">
          {/* Featured Product Section */}
          {featuredDevice && <FeaturedProduct product={featuredDevice} />}

          {/* Health Monitoring Devices Section */}
          <HealthMonitoringSection products={healthMonitoringDevices} />

          {/* Professional Services Section */}
          <ProfessionalServicesSection products={professionalServices} />

          {/* Healthcare Professionals Section */}
          <HealthcareProfessionalsSection products={healthcareProfessionals} />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
