
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Shield, PhoneCall } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Product } from './types';

interface ProfessionalServicesSectionProps {
  products: Product[];
}

export const ProfessionalServicesSection = ({ products }: ProfessionalServicesSectionProps) => {
  // Find the Glucose Monitor (or any similar product)
  const glucoseMonitorIndex = products.findIndex(p => 
    p.name.includes("Glucose") || 
    p.name.includes("Monitor") || 
    p.name.includes("Sugar")
  );

  // Create top row (first 2 products) and bottom row (glucose monitor)
  const topRowProducts = products.slice(0, 2);
  const bottomRowProduct = glucoseMonitorIndex >= 0 ? products[glucoseMonitorIndex] : null;
  
  // Get remaining products (excluding top row and glucose monitor)
  const remainingProducts = products.filter((p, i) => 
    i >= 2 && i !== glucoseMonitorIndex
  );

  // Log products to help with debugging
  React.useEffect(() => {
    console.log("Professional Services products:", products.map(p => `${p.name}: ${p.image}`));
    console.log("Glucose Monitor index:", glucoseMonitorIndex);
  }, [products, glucoseMonitorIndex]);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-orange to-brand-orange/70 flex items-center justify-center mr-4 shadow-md">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl text-brand-orange font-bold">Professional Services</h3>
        </div>
        <Badge variant="outline" className="mt-4 md:mt-0 bg-brand-orange/10 text-brand-orange border-brand-orange/30 px-4 py-1.5 font-semibold shadow-sm">
          Premium Care
        </Badge>
      </div>
      
      {/* Display first two products in top row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {topRowProducts.map((product, index) => (
          <ServiceCard key={index} product={product} />
        ))}
      </div>
      
      {/* Display glucose monitor centered in bottom row */}
      {bottomRowProduct && (
        <div className="flex justify-center mb-8">
          <div className="md:w-1/2">
            <ServiceCard product={bottomRowProduct} />
          </div>
        </div>
      )}
      
      {/* Display any remaining products */}
      {remainingProducts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {remainingProducts.map((product, index) => (
            <ServiceCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

// Helper component for service cards
const ServiceCard = ({ product }: { product: Product }) => (
  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex flex-col md:flex-row bg-white h-full">
      {/* Image container - takes full height of parent */}
      <div className="md:w-2/5 flex items-center justify-center p-6 h-full">
        {product.image.includes('placeholder') ? (
          <div className="w-full h-full min-h-[160px] bg-gray-100 rounded-lg flex items-center justify-center">
            {product.icon}
          </div>
        ) : (
          <div className="w-full h-full min-h-[160px] flex items-center justify-center">
            <OptimizedImage
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
              width={200}
              height={200}
              priority={true}
              data-testid={`${product.name.toLowerCase().replace(/\s+/g, '-')}-image`}
            />
          </div>
        )}
      </div>
      
      {/* Content container (right side) */}
      <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
        <h4 className="text-xl text-brand-orange font-bold mb-3">{product.name}</h4>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        
        {product.benefits && (
          <ul className="mt-2 space-y-2 mb-5">
            {product.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start text-gray-600 text-sm">
                <Check className="h-3 w-3 text-brand-orange mt-1 mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Button className="mt-auto w-full bg-gradient-to-r from-brand-orange/90 to-brand-orange hover:from-brand-orange hover:to-brand-orange/90 shadow-md group">
          <span>Learn More</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  </Card>
);
