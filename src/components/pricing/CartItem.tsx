
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  type: 'essential' | 'ai-device' | 'professional' | 'subscription';
  isSubscription: boolean;
  image?: string;
  monthlyPrice?: number;
  onRemove: (index: number) => void;
  index: number;
}

const CartItem: React.FC<CartItemProps> = ({ 
  name, 
  price, 
  type, 
  isSubscription, 
  image, 
  onRemove, 
  index 
}) => {
  return (
    <div className="flex justify-between items-center border-b pb-3 pt-1">
      <div className="flex items-center gap-2">
        {image && (
          <div className="w-10 h-10 rounded-md overflow-hidden bg-white border border-gray-200 flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-contain" />
          </div>
        )}
        <div>
          <p className="font-medium text-sm line-clamp-2">{name}</p>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className={`text-xs ${
              type === 'essential' 
                ? 'border-blue-500 text-blue-700 bg-blue-50' 
                : type === 'ai-device'
                  ? 'border-brand-teal text-brand-teal bg-brand-teal/10'
                  : type === 'subscription'
                    ? 'border-brand-orange text-brand-orange bg-brand-orange/10'
                    : 'border-purple-500 text-purple-700 bg-purple-50'
            }`}>
              {isSubscription ? 'Monthly' : 'One-time'}
            </Badge>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="font-mono font-medium text-gray-800">
          €{price.toFixed(2)}
        </div>
        <Button 
          size="sm" 
          variant="ghost" 
          onClick={() => onRemove(index)}
          className="h-7 w-7 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
        >
          ×
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
