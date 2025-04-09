
import React from 'react';
import { Button } from '@/components/ui/button';
import { Info, TagIcon, Clock, Shield, ArrowRight, Euro, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import DashboardServices from './DashboardServices';

const ProductInfo: React.FC = () => {
  const { toast } = useToast();

  return (
    <div className="mt-8 space-y-6">
      {/* Dashboard Services Section */}
      <DashboardServices />
      
      <div className="p-4 bg-brand-grey/10 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-gradient-to-br from-brand-teal/20 to-brand-orange/10 p-2 flex items-center justify-center shadow-sm">
            <Info className="h-5 w-5 text-brand-teal" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-brand-teal mb-2">Product Details</h3>
            <div className="space-y-1.5 text-xs text-gray-600">
              {[
                { Icon: TagIcon, text: "Prices exclude taxes. Taxes calculated at checkout." },
                { Icon: Clock, text: "No long-term contracts. Cancel or modify subscription anytime." },
                { Icon: Shield, text: "2-year manufacturer warranty on all devices." },
                { Icon: Euro, text: "AI Devices: €4.99/mo + tax. Professional Care: €24.99/mo + tax." },
                { Icon: Globe, text: "Seamless integration within Global Health Sync ecosystem." }
              ].map(({ Icon, text }, index) => (
                <p key={index} className="flex items-start">
                  <Icon className="h-4 w-4 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                  {text}
                </p>
              ))}
            </div>
            <Button 
              variant="link" 
              className="text-brand-teal p-0 h-auto mt-2 text-xs"
              onClick={() => toast({
                title: "Documentation",
                description: "Product documentation would open in a new window."
              })}
            >
              View Documentation <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
