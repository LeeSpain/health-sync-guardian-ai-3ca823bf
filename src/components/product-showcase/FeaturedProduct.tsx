
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Heart, Shield, Star } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Product } from './types';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { OptimizedImage } from '@/components/ui/optimized-image';

interface FeaturedProductProps {
  product: Product;
}

export const FeaturedProduct = ({ product }: FeaturedProductProps) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-orange to-brand-orange/70 flex items-center justify-center mr-3 shadow-md">
            {product.icon}
          </div>
          <h3 className="text-xl text-brand-orange font-bold">Featured Device</h3>
        </div>
        <Badge variant="outline" className="mt-3 md:mt-0 bg-brand-orange/10 text-brand-orange border-brand-orange/30 px-3 py-1 font-semibold shadow-sm">
          Flagship Product
        </Badge>
      </div>
      
      <Card className="overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Product Image with cleaner presentation */}
          <div className="md:w-2/5 bg-gradient-to-br from-orange-50 to-orange-100/30">
            <div className="flex items-center justify-center h-full p-6">
              <div className="relative w-full max-w-xs mx-auto">
                <div className="relative aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/60 rounded-xl shadow-sm"></div>
                  <OptimizedImage 
                    src={product.image} 
                    alt={product.name} 
                    className="relative w-[85%] h-[85%] object-contain mx-auto"
                    priority={true} // Featured product should have priority loading
                    preload={true}
                    width={400}
                    height={400}
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side content - More compact and focused */}
          <div className="md:w-3/5 p-6 flex flex-col">
            <div className="mb-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs text-gray-500 ml-2">Top Rated</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <h4 className="text-xl md:text-2xl text-brand-orange font-bold">
                {product.name}
              </h4>
              <Badge className="bg-brand-orange/10 text-brand-orange border-brand-orange/30 px-2 py-0.5 text-xs font-semibold">
                NEW
              </Badge>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
            
            <div className="bg-brand-orange/5 p-3 rounded-lg border border-brand-orange/10 mb-4">
              <h5 className="font-semibold text-sm text-brand-orange/90 mb-2">Key Benefits</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start text-gray-700 group">
                    <div className="mt-0.5 mr-2 flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-brand-orange/10 flex items-center justify-center">
                        <Check className="h-2.5 w-2.5 text-brand-orange" />
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center mt-auto">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center transition-colors hover:bg-brand-teal/20 cursor-pointer">
                      <Heart className="h-4 w-4 text-brand-teal" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Health monitoring features</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center transition-colors hover:bg-brand-orange/20 cursor-pointer ml-2">
                      <Shield className="h-4 w-4 text-brand-orange" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Medical-grade security</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <Button className="ml-auto bg-gradient-to-r from-brand-orange to-brand-orange/90 hover:from-brand-orange/90 hover:to-brand-orange shadow-sm group rounded-full px-4 py-2 text-sm">
                <span>View Details</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
