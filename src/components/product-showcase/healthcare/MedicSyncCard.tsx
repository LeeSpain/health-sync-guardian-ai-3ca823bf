
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Product } from '../types';

interface MedicSyncCardProps {
  product: Product;
}

const MedicSyncCard = ({ product }: MedicSyncCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-xl bg-white group border border-[#2563EB]/30 hover:border-[#2563EB]/50 transition-all duration-300">
      <div className="relative pb-1">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#2563EB]"></div>
        
        <div className="p-6">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-start w-full">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#2563EB]/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt="Medic-Sync Logo"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              
              <div className="flex-1 ml-4">
                <div className="flex flex-col w-full">
                  <h4 className="text-[#2563EB] text-2xl font-bold mb-2">{product.name}</h4>
                  <Badge 
                    className="self-start bg-[#2563EB]/10 text-[#2563EB] px-3 py-0.5 rounded-full text-xs"
                  >
                    {product.type}
                  </Badge>
                </div>
                
                <p className="mt-3 text-gray-600 text-base">
                  {product.description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mt-2">
              {product.benefits && product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-600 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#2563EB]/10 flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#2563EB]" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 w-full">
              <a 
                href="https://www.medic-sync.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button 
                  className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white rounded-md group"
                >
                  <span className="text-base">Learn More</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MedicSyncCard;
