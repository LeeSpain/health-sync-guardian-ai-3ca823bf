
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Calendar } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Product } from '../types';

interface NurseSyncCardProps {
  product: Product;
}

const NurseSyncCard = ({ product }: NurseSyncCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-xl bg-white group border border-[#008B8B]/30 hover:border-[#008B8B]/50 transition-all duration-300">
      <div className="relative pb-1">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#008B8B]"></div>
        
        <div className="p-6">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-start w-full">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#008B8B]/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src="/lovable-uploads/3c29ea8e-33d7-4056-81be-ebbaf2293eac.png"
                  alt="Nurse-Sync Logo"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              
              <div className="flex-1 ml-4">
                <div className="flex flex-col w-full">
                  <h4 className="text-[#008B8B] text-2xl font-bold mb-2">{product.name}</h4>
                  <Badge 
                    className="self-start bg-[#008B8B]/10 text-[#008B8B] px-3 py-0.5 rounded-full text-xs"
                  >
                    Healthcare Professionals
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
                  <div className="w-5 h-5 rounded-full bg-[#008B8B]/10 flex items-center justify-center mr-2 flex-shrink-0">
                    <Check className="h-3 w-3 text-[#008B8B]" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex gap-4 w-full">
              <Button 
                className="flex-1 bg-[#008B8B] hover:bg-[#008B8B]/90 text-white rounded-md group"
              >
                <span className="text-base">Connect Now</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-[#FF7F50]/30 text-[#FF7F50] hover:bg-[#FF7F50]/10 rounded-md"
              >
                <Calendar className="mr-2 h-5 w-5" />
                <span className="text-base">Schedule</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NurseSyncCard;
