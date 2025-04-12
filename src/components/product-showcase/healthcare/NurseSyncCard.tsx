
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
    <Card className="overflow-hidden border-0 shadow-xl bg-white group border-2 border-[#1A1F2C]">
      <div className="relative pb-1">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#1A1F2C]"></div>
        
        <div className="p-8">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-start w-full">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-[#1A1F2C]/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src="/lovable-uploads/3c29ea8e-33d7-4056-81be-ebbaf2293eac.png"
                  alt="Nurse-Sync Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex-1 ml-6">
                <div className="flex flex-col w-full">
                  <h4 className="text-[#1A1F2C] text-2xl font-bold mb-2">{product.name}</h4>
                  <Badge 
                    className="self-start bg-[#1A1F2C]/10 text-[#1A1F2C] px-4 py-1 rounded-full text-sm"
                  >
                    Healthcare Professionals
                  </Badge>
                </div>
                
                <p className="mt-3 text-gray-600 text-base">
                  {product.description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
              {product.benefits && product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <div className="w-6 h-6 rounded-full bg-[#1A1F2C]/10 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-[#1A1F2C]" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex gap-4">
              <Button 
                className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/90 text-white rounded-md group px-8 py-6"
              >
                <span className="text-base">Connect Now</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-200 text-[#1A1F2C] hover:bg-gray-50 rounded-md px-8 py-6"
              >
                <Calendar className="mr-2 h-5 w-5 text-[#1A1F2C]" />
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
