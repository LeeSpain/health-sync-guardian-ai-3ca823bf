
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Wand2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Product } from './types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HealthMetricsDashboard } from './HealthMetricsDashboard';
import { DecorationLines } from './DecorationLines';
import { DeviceCard } from './DeviceCard';

interface HealthMonitoringSectionProps {
  products: Product[];
}

export const HealthMonitoringSection = ({ products }: HealthMonitoringSectionProps) => {
  // Find thermometer and bed sensor products for special positioning
  const thermometerIndex = products.findIndex(p => p.name === "Thermometer");
  const bedSensorIndex = products.findIndex(p => p.name === "Bed Sensor");
  
  // Create arrays for top row (first 3 products) and bottom row (thermometer and bed sensor)
  const topRowProducts = products.slice(0, 3);
  const bottomRowProducts = [];
  
  // Only add thermometer and bed sensor to bottom row if they exist and aren't already in top row
  if (thermometerIndex >= 0 && thermometerIndex >= 3) {
    bottomRowProducts.push(products[thermometerIndex]);
  }
  
  if (bedSensorIndex >= 0 && bedSensorIndex >= 3) {
    bottomRowProducts.push(products[bedSensorIndex]);
  }
  
  // Get remaining products (excluding top row, thermometer, and bed sensor)
  const remainingProducts = products.filter((p, i) => 
    i >= 3 && i !== thermometerIndex && i !== bedSensorIndex
  );
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal to-brand-teal/70 flex items-center justify-center mr-4 shadow-md">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl text-brand-teal font-bold">Health Monitoring Devices</h3>
        </div>
        <Badge variant="outline" className="mt-4 md:mt-0 bg-brand-teal/10 text-brand-teal border-brand-teal/30 px-4 py-1.5 font-semibold shadow-sm">
          Seamless Integration
        </Badge>
      </div>
      
      {/* Mobile view: Enhanced carousel */}
      <div className="md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index}>
                <DeviceCard 
                  product={product} 
                  priorityImage={index < 3}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="static translate-y-0 mx-2 bg-white border border-gray-200 hover:bg-gray-50" />
            <CarouselNext className="static translate-y-0 mx-2 bg-white border border-gray-200 hover:bg-gray-50" />
          </div>
        </Carousel>
      </div>
      
      {/* Desktop view: Custom grid layout with centered bottom row */}
      <div className="hidden md:block relative">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-brand-teal/5 to-brand-teal/2 blur-3xl -z-10"></div>
        
        {/* Top row - 3 products */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {topRowProducts.map((product, index) => (
            <div key={index} className="transform transition-all duration-500 hover:-translate-y-2">
              <DeviceCard 
                product={product} 
                priorityImage={true} 
              />
            </div>
          ))}
        </div>
        
        {/* Bottom row - centered thermometer and bed sensor */}
        {bottomRowProducts.length > 0 && (
          <div className="flex justify-center gap-6 mb-6">
            {bottomRowProducts.map((product, index) => (
              <div 
                key={index} 
                className="transform transition-all duration-500 hover:-translate-y-2 w-full max-w-[calc(33.33%-1rem)]"
              >
                <DeviceCard 
                  product={product} 
                  priorityImage={true} 
                />
              </div>
            ))}
          </div>
        )}
        
        {/* Any remaining products */}
        {remainingProducts.length > 0 && (
          <div className="grid grid-cols-3 gap-6">
            {remainingProducts.map((product, index) => (
              <div key={index} className="transform transition-all duration-500 hover:-translate-y-2">
                <DeviceCard 
                  product={product} 
                  priorityImage={false} 
                />
              </div>
            ))}
          </div>
        )}
        
        {/* Decorative connecting lines */}
        <DecorationLines />
      </div>
      
      {/* Health metrics visualization */}
      <HealthMetricsDashboard />
      
      {/* Call to action */}
      <div className="mt-8 text-center">
        <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 group">
          Explore All Devices
          <Wand2 className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
        </Button>
      </div>
    </div>
  );
};
