
import React from 'react';
import { Button } from '@/components/ui/button';

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
          <p className="text-xs text-gray-500">
            {isSubscription ? 'Monthly Service' : 'One-time Purchase'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="font-sans font-medium text-gray-800">
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
