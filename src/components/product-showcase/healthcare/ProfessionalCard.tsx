
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Product } from '../types';

interface ProfessionalCardProps {
  professional: Product;
}

const ProfessionalCard = ({ professional }: ProfessionalCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg bg-white group border border-nurse-purple/30 hover:border-nurse-purple/50 transition-all duration-300">
      <div className="relative pb-1">
        <div className="absolute top-0 left-0 w-full h-1 bg-nurse-purple"></div>
        
        <div className="p-6">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-start w-full">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-nurse-purple/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={professional.image}
                  alt={`${professional.name} Icon`}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              
              <div className="flex-1 ml-4">
                <div className="flex flex-col w-full">
                  <h4 className="text-nurse-purple text-xl font-bold mb-1">{professional.name}</h4>
                  <Badge 
                    className="self-start bg-nurse-purple/10 text-nurse-purple px-3 py-0.5 rounded-full text-xs"
                  >
                    {professional.type}
                  </Badge>
                </div>
                
                <p className="mt-2 text-gray-600 text-sm">
                  {professional.description}
                </p>
              </div>
            </div>
            
            {professional.benefits && (
              <div className="grid grid-cols-1 gap-3 w-full mt-2">
                {professional.benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-600 text-sm">
                    <div className="w-5 h-5 rounded-full bg-nurse-purple/10 flex items-center justify-center mr-2 flex-shrink-0">
                      <Check className="h-3 w-3 text-nurse-purple" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            )}
            
            <Button 
              className="mt-2 bg-nurse-purple hover:bg-nurse-purple/90 text-white rounded-md w-full group"
            >
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfessionalCard;
