
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Minus } from 'lucide-react';

export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  type: 'essential' | 'ai-device' | 'professional';
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
    <div className="flex justify-between items-center border-b pb-4">
      <div className="flex items-center gap-2">
        {image && (
          <div className="w-10 h-10 rounded-md overflow-hidden bg-white border border-gray-200 flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-contain" />
          </div>
        )}
        <div>
          <p className="font-medium text-sm">{name}</p>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline" className={`text-xs ${
              type === 'essential' 
                ? 'border-blue-500 text-blue-700 bg-blue-50' 
                : type === 'ai-device'
                  ? 'border-brand-teal text-brand-teal bg-brand-teal/10'
                  : 'border-purple-500 text-purple-700 bg-purple-50'
            }`}>
              {isSubscription ? 'Monthly' : 'One-time'}
            </Badge>
            {isSubscription && (
              <span className="text-xs text-gray-500">12-month commitment</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono font-medium">€{price.toFixed(2)}</span>
        <Button 
          size="sm" 
          variant="ghost" 
          onClick={() => onRemove(index)}
          className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
