
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from '@/components/ui/badge';
import { Product } from './types';

interface DeviceCardProps {
  product: Product;
  priorityImage?: boolean;
}

export const DeviceCard = ({ product, priorityImage = false }: DeviceCardProps) => {
  // Determine if this is a high-priority product
  const isPriorityProduct = 
    priorityImage || 
    product.name === "Guardian Button" || 
    product.name === "Bed Sensor" || 
    product.name === "Thermometer" ||
    product.name === "Heart Rate Monitor" ||
    product.name === "Smart Scales" ||
    product.name === "iHealth Dashboard Tablet";
  
  // Track when image is loaded
  const [imageLoaded, setImageLoaded] = React.useState(false);
  
  // Handle image loaded event
  const handleImageLoaded = () => {
    setImageLoaded(true);
    console.log(`Image loaded: ${product.name}`);
  };
  
  // Handle image error
  const handleImageError = () => {
    console.error(`Failed to load image for ${product.name}:`, product.image);
    setImageLoaded(true); // Still mark as "loaded" to remove loading state
  };
  
  return (
    <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-white h-full">
      {/* Gradient top bar with animation */}
      <div className="h-2 w-full bg-gradient-to-r from-brand-teal/70 to-brand-teal relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/20 overflow-hidden">
          <div className="w-1/2 h-full bg-white/30 absolute -skew-x-12 -translate-x-full animate-[shine_2s_ease-in-out_infinite] opacity-50"></div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Device header */}
        <div className="flex items-start mb-4">
          <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 border border-brand-teal/20 shadow-sm group-hover:scale-110 transition-transform duration-300">
            {product.icon}
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-brand-teal transition-colors duration-300">{product.name}</h4>
            <Badge variant="outline" className="bg-brand-teal/5 text-brand-teal border-brand-teal/30 text-xs">
              {product.type}
            </Badge>
          </div>
        </div>
        
        {/* Image with optimized loading strategy */}
        <div className="mb-5 relative bg-gray-50 rounded-lg overflow-hidden">
          <AspectRatio ratio={16/9} className="bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-brand-teal/10"></div>
            
            {/* Show loading state until image is loaded */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-pulse rounded-full h-12 w-12 bg-brand-teal/20 flex items-center justify-center">
                  <div className="animate-spin h-6 w-6 border-2 border-brand-teal/30 border-t-brand-teal rounded-full"></div>
                </div>
              </div>
            )}
            
            {/* Directly use img tag with native loading attributes for better control */}
            <img 
              src={product.image}
              alt={product.name}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading={isPriorityProduct ? "eager" : "lazy"}
              fetchpriority={isPriorityProduct ? "high" : "auto"}
              width={640}
              height={360}
              onLoad={handleImageLoaded}
              onError={handleImageError}
              data-testid={`device-image-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
            />
            
            {/* Subtle glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
          </AspectRatio>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-5">{product.description}</p>
        
        {/* Benefits */}
        {product.benefits && (
          <div className="space-y-2 mb-5">
            {product.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start text-gray-700 group/item">
                <div className="rounded-full bg-brand-teal/10 p-1 mr-2 flex-shrink-0 group-hover/item:bg-brand-teal/20 transition-colors">
                  <Check className="h-3 w-3 text-brand-teal" />
                </div>
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Action footer */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Button className="w-full bg-white hover:bg-brand-teal/5 text-brand-teal border border-brand-teal/30 group/btn">
            <span>View Details</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
