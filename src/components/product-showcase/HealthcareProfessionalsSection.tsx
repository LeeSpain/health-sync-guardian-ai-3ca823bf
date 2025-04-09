
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Stethoscope, BadgePlus, UserRound, Calendar, MessageSquare } from 'lucide-react';
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
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4169E1] to-[#1E90FF] flex items-center justify-center mr-4 shadow-md">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl text-[#4169E1] font-bold">Healthcare Professionals</h3>
        </div>
        <Badge variant="outline" className="mt-4 md:mt-0 bg-[#4169E1]/10 text-[#4169E1] border-[#4169E1]/30 px-4 py-1.5 font-semibold shadow-sm">
          Expert Medical Team
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {products.map((professional, index) => (
          <Card key={index} className="overflow-hidden border-0 shadow-xl bg-white group">
            <div className="relative pb-1">
              <div className="h-2 w-full bg-gradient-to-r from-[#4169E1] to-[#1E90FF]"></div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#4169E1]/20 flex-shrink-0 bg-[#4169E1]/5 flex items-center justify-center">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-auto h-auto max-width-full max-height-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl text-[#4169E1] font-bold">{professional.name}</h4>
                      <Badge className="bg-[#4169E1]/10 text-[#4169E1] border-[#4169E1]/30 px-2 py-0.5 text-xs">
                        {professional.type}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mt-2 text-sm">{professional.description}</p>
                    
                    {professional.benefits && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                        {professional.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start text-gray-600 text-sm">
                            <div className="mt-0.5 rounded-full bg-[#4169E1]/10 p-1 mr-2 flex-shrink-0">
                              <Check className="h-3 w-3 text-[#4169E1]" />
                            </div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button className="bg-[#4169E1] hover:bg-[#4169E1]/90 text-white group">
                        <span>Connect Now</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <Button variant="outline" className="border-[#4169E1]/30 text-[#4169E1] hover:bg-[#4169E1]/5">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Schedule</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Professional credentials and trust indicators */}
      <div className="mt-12 p-6 bg-[#4169E1]/5 rounded-xl border border-[#4169E1]/10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <UserRound className="h-6 w-6 text-[#4169E1] mr-3" />
            <h4 className="text-lg font-semibold text-[#4169E1]">Certified Healthcare Professionals</h4>
          </div>
          <div className="flex flex-wrap gap-4">
            <Badge variant="outline" className="bg-white text-[#4169E1] border-[#4169E1]/20 px-3 py-1">
              24/7 Availability
            </Badge>
            <Badge variant="outline" className="bg-white text-[#4169E1] border-[#4169E1]/20 px-3 py-1">
              Secure Consultations
            </Badge>
            <Badge variant="outline" className="bg-white text-[#4169E1] border-[#4169E1]/20 px-3 py-1">
              Medical Board Certified
            </Badge>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>Our healthcare professionals are licensed medical practitioners with years of experience in remote care. All communications are HIPAA-compliant and securely encrypted.</p>
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="link" className="text-[#4169E1]">
            <MessageSquare className="mr-2 h-4 w-4" />
            Learn more about our professional standards
          </Button>
        </div>
      </div>
    </div>
  );
};
