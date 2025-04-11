
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Calendar } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Product } from '../types';

interface ProfessionalCardProps {
  professional: Product;
}

const ProfessionalCard = ({ professional }: ProfessionalCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-xl bg-white group">
      <div className="relative pb-1">
        <div className="flex flex-col md:flex-row items-start gap-6 p-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200 flex-shrink-0 bg-gray-50 flex items-center justify-center">
            <img
              src={professional.image}
              alt={professional.name}
              className="w-auto h-auto max-width-full max-height-full object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-gray-800">{professional.name}</h4>
              <Badge 
                className="bg-gray-100 text-gray-700 border-gray-200 px-2 py-0.5 text-xs"
              >
                {professional.type}
              </Badge>
            </div>
            
            <p className="mt-2 text-sm text-gray-500">{professional.description}</p>
            
            {professional.benefits && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                {professional.benefits.map((benefit, i) => (
                  <div 
                    key={i} 
                    className="flex items-start text-gray-500 text-sm"
                  >
                    <div className="mt-0.5 rounded-full p-1 mr-2 flex-shrink-0 bg-gray-100">
                      <Check className="h-3 w-3 text-gray-500" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-6 flex flex-wrap gap-3">
              <Button 
                className="bg-gray-800 hover:bg-gray-700 text-white group"
              >
                <span>Connect Now</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                <Calendar className="mr-2 h-4 w-4" />
                <span>Schedule</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfessionalCard;
