
import React from 'react';
import { ShoppingCart, Info, Euro } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

interface DashboardSubscriptionProps {
  price: number;
}

const DashboardSubscription: React.FC<DashboardSubscriptionProps> = ({ price }) => {
  return (
    <div className="bg-brand-teal/5 p-4 rounded-lg mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md overflow-hidden bg-white border border-gray-200 flex-shrink-0 shadow-sm flex items-center justify-center">
            <ShoppingCart className="h-5 w-5 text-brand-teal" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-medium text-sm">iHealth Dashboard Subscription</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-3.5 w-3.5 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-[220px]">Required for all iHealth services. Provides access to your health data and device management.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="border-brand-teal text-brand-teal bg-brand-teal/10 text-xs">
                Monthly
              </Badge>
              <Badge variant="outline" className="border-brand-orange text-brand-orange bg-brand-orange/10 text-xs">
                Required
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Euro className="h-3.5 w-3.5 mr-1 text-gray-700" />
          <span className="font-mono font-semibold text-gray-800">{price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSubscription;
