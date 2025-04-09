
import React from 'react';
import { Button } from '@/components/ui/button';
import { Info, TagIcon, Clock, Shield, ArrowRight, Euro } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductInfo: React.FC = () => {
  const { toast } = useToast();

  return (
    <div className="mt-8 space-y-6">
      <div className="p-6 bg-brand-orange/5 rounded-lg border border-brand-orange/20 shadow-sm">
        <h3 className="text-lg font-semibold text-brand-orange mb-2">Dashboard Services</h3>
        <p className="text-sm text-gray-600 mb-4">
          Nurse-Sync and Medic-Sync services are accessible through your dashboard after joining our service. 
          These professional healthcare monitoring services provide immediate access to qualified healthcare professionals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-brand-teal">Nurse-Sync</h4>
            <p className="text-xs text-gray-500 mt-1">
              Connect with certified nurses for regular health monitoring and advice
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-medium text-brand-teal">Medic-Sync</h4>
            <p className="text-xs text-gray-500 mt-1">
              Schedule virtual consultations with doctors and specialists 
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-brand-grey/10 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="rounded-full bg-white p-3 flex items-center justify-center shadow-sm">
            <Info className="h-6 w-6 text-brand-teal" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brand-teal mb-2">Product Information</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-start">
                <TagIcon className="h-4 w-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                All prices shown exclude applicable taxes. Taxes will be calculated at checkout.
              </p>
              <p className="flex items-start">
                <Clock className="h-4 w-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                Service contracts require minimum 12-month commitment. Early termination fees may apply.
              </p>
              <p className="flex items-start">
                <Shield className="h-4 w-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                All devices come with a standard 2-year manufacturer warranty.
              </p>
              <p className="flex items-start">
                <Euro className="h-4 w-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                AI-Powered Devices: €4.99/mo + 10% tax. Professional Care: €24.99/mo + 10% tax.
              </p>
            </div>
            <Button 
              variant="link" 
              className="text-brand-teal p-0 h-auto mt-2"
              onClick={() => toast({
                title: "Documentation",
                description: "Product documentation would open in a new window."
              })}
            >
              View Complete Documentation <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
