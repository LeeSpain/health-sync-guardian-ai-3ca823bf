
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Wand2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Product } from './types';
import { DeviceCard } from './DeviceCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { HealthMetricsDashboard } from './HealthMetricsDashboard';
import { DecorationLines } from './DecorationLines';

interface HealthMonitoringSectionProps {
  products: Product[];
}

export const HealthMonitoringSection = ({ products }: HealthMonitoringSectionProps) => {
  // All health monitoring products are high priority for this section
  const isPriorityProduct = (product: Product) => true;
  
  React.useEffect(() => {
    // Log all product images for debugging
    console.log('Health Monitoring products:', 
      products.map(p => `${p.name}: ${p.image}`).join(', '));
  }, [products]);
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
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
                  priorityImage={isPriorityProduct(product)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="static translate-y-0 mx-2 bg-white border border-gray-200 hover:bg-gray-50" />
            <CarouselNext className="static translate-y-0 mx-2 bg-white border border-gray-200 hover:bg-gray-50" />
          </div>
        </Carousel>
      </div>
      
      {/* Desktop view: Fixed grid layout that avoids overlapping */}
      <div className="hidden md:block relative">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-brand-teal/5 to-brand-teal/2 blur-3xl -z-10"></div>
        
        {/* Improved grid system */}
        <div className="grid grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="transform transition-all duration-500 hover:-translate-y-2">
              <DeviceCard 
                product={product} 
                priorityImage={isPriorityProduct(product)} 
              />
            </div>
          ))}
        </div>
        
        {/* Decorative connecting lines */}
        <DecorationLines />
      </div>
      
      {/* Health metrics visualization - simplified for better performance */}
      <HealthMetricsDashboard />
      
      {/* Call to action */}
      <div className="mt-10 text-center">
        <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 group">
          Explore All Devices
          <Wand2 className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
        </Button>
      </div>
    </div>
  );
};
