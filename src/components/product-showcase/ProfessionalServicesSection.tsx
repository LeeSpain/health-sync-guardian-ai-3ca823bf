
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Shield } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Product } from './types';
import { OptimizedImage } from '@/components/ui/optimized-image';

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
  
  console.log("Professional Services products:", products.map(p => `${p.name}: ${p.image}`));
  console.log("Glucose Monitor index:", glucoseMonitorIndex);

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center">
          <div className="inline-flex items-center justify-center p-2 bg-brand-orange/10 rounded-full mr-4">
            <Shield className="h-6 w-6 text-brand-orange" />
          </div>
          <h3 className="text-2xl text-brand-orange font-bold">Professional Care Services</h3>
        </div>
        <Badge variant="outline" className="mt-4 md:mt-0 bg-brand-orange/10 text-brand-orange border-brand-orange/30 px-4 py-1.5 font-semibold shadow-sm">
          Premium Care
        </Badge>
      </div>
      
      <p className="text-gray-600 mb-8 max-w-2xl">
        Expert healthcare services and monitoring solutions designed for your peace of mind
      </p>
      
      {/* Display all products in a responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ServiceCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

// Helper component for service cards - redesigned to match ServicesTab style
const ServiceCard = ({ product }: { product: Product }) => {
  return (
    <Card className="group overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 h-full">
      <div className="flex flex-col h-full">
        {/* Image container - full height image with no background */}
        <div className="relative h-[300px] overflow-hidden">
          <OptimizedImage
            src={product.image}
            alt={product.name}
            priority={false}
            objectFit="cover"
            className="w-full h-full object-center"
          />
          
          {/* Subtle overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
          
          {/* Product name overlay at bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-xl font-bold text-white drop-shadow-md">{product.name}</h4>
          </div>
        </div>
        
        {/* Content container */}
        <div className="p-6 flex flex-col h-full">
          <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
          
          {product.benefits && (
            <ul className="mt-2 space-y-3 mb-5">
              {product.benefits.slice(0, 3).map((benefit, i) => (
                <li key={i} className="flex items-start text-gray-600">
                  <Check className="h-5 w-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}
          
          <div className="mt-auto">
            <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 group relative overflow-hidden shadow-md">
              <span className="relative z-10">Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-orange/90 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
