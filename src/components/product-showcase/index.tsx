
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { getProductsData } from './productData';
import { FeaturedProduct } from './FeaturedProduct';
import { HealthMonitoringSection } from './HealthMonitoringSection';
import { ProfessionalServicesSection } from './ProfessionalServicesSection';
import { HealthcareProfessionalsSection } from './HealthcareProfessionalsSection';
import { BackgroundDecorations } from './BackgroundDecorations';

const ProductShowcase: React.FC = () => {
  // Use the products data from the separate file
  const products = getProductsData();

  // Filter products by category
  const featuredDevice = products.find(product => product.category === "featured");
  const healthMonitoringDevices = products.filter(product => product.category === "device");
  const professionalServices = products.filter(product => product.category === "service");
  const healthcareProfessionals = products.filter(product => product.category === "healthcare");
  
  return (
    <div id="products" className="py-12 relative overflow-hidden">
      {/* Background decorations extracted to a separate component */}
      <BackgroundDecorations />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <Badge className="mb-3 px-3 py-1 text-sm font-medium bg-gradient-to-r from-brand-teal/10 to-brand-teal/20 text-brand-teal border-none">
            Our Solutions
          </Badge>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Complete Care Ecosystem
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Our integrated solutions work seamlessly together to provide comprehensive health tracking and emergency response.
          </p>
        </div>

        {/* All Products in One View - Simplified loading */}
        <div className="space-y-12">
          {/* Featured Product Section */}
          {featuredDevice && <FeaturedProduct product={featuredDevice} />}

          {/* Health Monitoring Devices Section */}
          <HealthMonitoringSection products={healthMonitoringDevices} />

          {/* Professional Services Section - Main focus of our update */}
          <ProfessionalServicesSection products={professionalServices} />

          {/* Healthcare Professionals Section */}
          <HealthcareProfessionalsSection products={healthcareProfessionals} />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
