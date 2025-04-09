
import React from 'react';
import { Badge } from '@/components/ui/badge';

const PricingHeader: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-brand-teal/10 to-brand-orange/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-teal mb-4">iHealth-Sync Complete Product Catalog</h1>
          <p className="text-xl text-gray-600 mb-6">Customize your health monitoring system with our innovative products and services</p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge variant="outline" className="px-4 py-2 text-brand-teal border-brand-teal bg-white/80 backdrop-blur-sm">
              Free shipping on orders over €200
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-brand-orange border-brand-orange bg-white/80 backdrop-blur-sm">
              30-day money-back guarantee
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;
