
import React from 'react';
import { Button } from '@/components/ui/button';
import { Info, TagIcon, Clock, Shield, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductInfo: React.FC = () => {
  const { toast } = useToast();

  return (
    <div className="mt-8 p-6 bg-brand-grey/10 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="rounded-full bg-white p-3 flex items-center justify-center">
          <Info className="h-6 w-6 text-brand-teal" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-brand-teal mb-2">Product Information</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p className="flex items-start">
              <TagIcon className="h-4 w-4 text-brand-orange mr-2 mt-0.5" />
              All prices shown exclude applicable taxes. Taxes will be calculated at checkout.
            </p>
            <p className="flex items-start">
              <Clock className="h-4 w-4 text-brand-orange mr-2 mt-0.5" />
              Service contracts require minimum 12-month commitment. Early termination fees may apply.
            </p>
            <p className="flex items-start">
              <Shield className="h-4 w-4 text-brand-orange mr-2 mt-0.5" />
              All devices come with a standard 2-year manufacturer warranty.
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
  );
};

export default ProductInfo;
