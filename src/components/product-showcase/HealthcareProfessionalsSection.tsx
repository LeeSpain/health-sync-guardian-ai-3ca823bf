
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Stethoscope, BadgePlus } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Product } from './types';

interface HealthcareProfessionalsSectionProps {
  products: Product[];
}

export const HealthcareProfessionalsSection = ({ products }: HealthcareProfessionalsSectionProps) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1E90FF] to-[#4169E1] flex items-center justify-center mr-4 shadow-md">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl text-[#1E90FF] font-bold">Healthcare Professionals</h3>
        </div>
        <Badge variant="outline" className="mt-4 md:mt-0 bg-[#4169E1]/10 text-[#1E90FF] border-[#1E90FF]/30 px-4 py-1.5 font-semibold shadow-sm">
          Expert Medical Team
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {products.map((professional, index) => (
          <Card key={index} className="overflow-hidden border-0 shadow-xl bg-white group">
            <div className="relative pb-1">
              <div className="h-2 w-full bg-gradient-to-r from-[#1E90FF] to-[#4169E1]"></div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-[#4169E1]/10 flex items-center justify-center border border-[#1E90FF]/30">
                      {professional.icon}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#1E90FF] text-white flex items-center justify-center shadow-md">
                      <BadgePlus className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl text-[#1E90FF] font-bold">{professional.name}</h4>
                      <Badge className="bg-[#4169E1]/10 text-[#1E90FF] border-[#1E90FF]/30 px-2 py-0.5 text-xs">
                        {professional.type}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mt-2 text-sm">{professional.description}</p>
                    
                    {professional.benefits && (
                      <div className="mt-4 space-y-2">
                        {professional.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start text-gray-600 text-sm">
                            <div className="mt-0.5 rounded-full bg-[#1E90FF]/10 p-1 mr-2 flex-shrink-0">
                              <Check className="h-3 w-3 text-[#1E90FF]" />
                            </div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-6">
                      <Button className="bg-white hover:bg-[#1E90FF]/5 text-[#1E90FF] border border-[#1E90FF]/30 group">
                        <span>Connect Now</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
