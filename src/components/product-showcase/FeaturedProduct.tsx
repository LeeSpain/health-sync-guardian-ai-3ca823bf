
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Shield } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Product } from './types';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface FeaturedProductProps {
  product: Product;
}

export const FeaturedProduct = ({ product }: FeaturedProductProps) => {
  return (
    <Card className="overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 mb-8">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Product Image with enhanced presentation */}
        <div className="md:w-1/2 bg-gradient-to-br from-orange-50 to-orange-100/30 p-8 flex items-center justify-center">
          <div className="relative w-full max-w-[400px] mx-auto">
            <OptimizedImage 
              src={product.image} 
              alt={product.name} 
              className="relative w-full h-auto object-contain mx-auto"
              priority={true}
              preload={true}
              width={400}
              height={400}
            />
          </div>
        </div>
        
        {/* Right side content - More compact and professional */}
        <div className="md:w-2/3 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="bg-brand-orange/10 text-brand-orange border-brand-orange/30 px-3 py-1 text-xs font-medium">
              Featured Device
            </Badge>
            <Badge className="bg-brand-teal/10 text-brand-teal border-brand-teal/30 text-xs">
              Flagship Product
            </Badge>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            {product.name}
          </h3>
          
          <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            {product.benefits?.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-4 w-4 text-brand-teal mt-0.5 mr-1.5 flex-shrink-0" />
                <span className="text-xs text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-auto flex justify-between items-center">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-brand-orange mr-1.5" />
              <span className="text-xs text-gray-500">Medical-grade security</span>
            </div>
            
            <Button className="bg-gradient-to-r from-brand-orange to-brand-orange/90 hover:from-brand-orange/90 hover:to-brand-orange shadow-sm group rounded-full px-4 py-2 text-sm">
              <span>View Details</span>
              <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
