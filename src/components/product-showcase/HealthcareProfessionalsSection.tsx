
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Stethoscope, Users, Calendar, MessageSquare } from 'lucide-react';
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
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] flex items-center justify-center mr-4 shadow-md">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl text-[#9b87f5] font-bold">Healthcare Professionals</h3>
        </div>
        <Badge variant="outline" className="mt-4 md:mt-0 bg-[#9b87f5]/10 text-[#9b87f5] border-[#9b87f5]/30 px-4 py-1.5 font-semibold shadow-sm">
          Expert Medical Team
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {products.map((professional, index) => (
          <Card 
            key={index} 
            className={`overflow-hidden border-0 shadow-xl bg-white group ${professional.type === 'Nurse-Sync' ? 'border-2 border-[#9b87f5]' : ''}`}
          >
            <div className="relative pb-1">
              {professional.type === 'Nurse-Sync' && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]"></div>
              )}
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className={`w-24 h-24 rounded-full overflow-hidden border-4 ${professional.type === 'Nurse-Sync' ? 'border-[#9b87f5]/20' : 'border-gray-200'} flex-shrink-0 ${professional.type === 'Nurse-Sync' ? 'bg-[#9b87f5]/5' : 'bg-gray-50'} flex items-center justify-center`}>
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-auto h-auto max-width-full max-height-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-xl font-bold ${professional.type === 'Nurse-Sync' ? 'text-[#9b87f5]' : 'text-gray-800'}`}>{professional.name}</h4>
                      <Badge 
                        className={`${professional.type === 'Nurse-Sync' 
                          ? 'bg-[#9b87f5]/10 text-[#9b87f5] border-[#9b87f5]/30' 
                          : 'bg-gray-100 text-gray-700 border-gray-200'} px-2 py-0.5 text-xs`}
                      >
                        {professional.type}
                      </Badge>
                    </div>
                    
                    <p className={`mt-2 text-sm ${professional.type === 'Nurse-Sync' ? 'text-gray-600' : 'text-gray-500'}`}>{professional.description}</p>
                    
                    {professional.benefits && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                        {professional.benefits.map((benefit, i) => (
                          <div 
                            key={i} 
                            className={`flex items-start ${professional.type === 'Nurse-Sync' ? 'text-gray-600' : 'text-gray-500'} text-sm`}
                          >
                            <div className={`mt-0.5 rounded-full p-1 mr-2 flex-shrink-0 ${professional.type === 'Nurse-Sync' 
                              ? 'bg-[#9b87f5]/10' 
                              : 'bg-gray-100'}`}>
                              <Check className={`h-3 w-3 ${professional.type === 'Nurse-Sync' ? 'text-[#9b87f5]' : 'text-gray-500'}`} />
                            </div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button 
                        className={`${professional.type === 'Nurse-Sync' 
                          ? 'bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white' 
                          : 'bg-gray-800 hover:bg-gray-700 text-white'} group`}
                      >
                        <span>Connect Now</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <Button 
                        variant="outline" 
                        className={`${professional.type === 'Nurse-Sync' 
                          ? 'border-[#9b87f5]/30 text-[#9b87f5] hover:bg-[#9b87f5]/5' 
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                      >
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
      <div className="mt-12 p-6 bg-[#9b87f5]/5 rounded-xl border border-[#9b87f5]/10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Users className="h-6 w-6 text-[#9b87f5] mr-3" />
            <h4 className="text-lg font-semibold text-[#9b87f5]">Certified Healthcare Professionals</h4>
          </div>
          <div className="flex flex-wrap gap-4">
            <Badge variant="outline" className="bg-white text-[#9b87f5] border-[#9b87f5]/20 px-3 py-1">
              24/7 Availability
            </Badge>
            <Badge variant="outline" className="bg-white text-[#9b87f5] border-[#9b87f5]/20 px-3 py-1">
              Secure Consultations
            </Badge>
            <Badge variant="outline" className="bg-white text-[#9b87f5] border-[#9b87f5]/20 px-3 py-1">
              Medical Board Certified
            </Badge>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>Our healthcare professionals are licensed medical practitioners with years of experience in remote care. All communications are HIPAA-compliant and securely encrypted.</p>
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="link" className="text-[#9b87f5]">
            <MessageSquare className="mr-2 h-4 w-4" />
            Learn more about our professional standards
          </Button>
        </div>
      </div>
    </div>
  );
};
