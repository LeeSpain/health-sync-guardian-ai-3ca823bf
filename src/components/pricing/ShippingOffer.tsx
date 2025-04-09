
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TruckIcon } from 'lucide-react';

interface ShippingOfferProps {
  oneTimeTotal: number;
}

const ShippingOffer: React.FC<ShippingOfferProps> = ({ oneTimeTotal }) => {
  const FREE_SHIPPING_THRESHOLD = 200;
  
  if (oneTimeTotal >= FREE_SHIPPING_THRESHOLD) {
    return null;
  }
  
  return (
    <Card className="mt-4 border-2 border-brand-orange/20 bg-gradient-to-br from-brand-orange/5 to-transparent">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
            <TruckIcon className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium text-sm text-brand-orange">Free Shipping Offer</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShippingOffer;

