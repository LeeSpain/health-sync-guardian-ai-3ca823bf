
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import CartItem, { CartItemProps } from './CartItem';
import DashboardSubscription from './DashboardSubscription';
import { CartItemData } from './Cart';

interface CartItemsProps {
  items: CartItemData[];
  removeFromCart: (index: number) => void;
  dashboardPrice: number;
}

const CartItems: React.FC<CartItemsProps> = ({ items, removeFromCart, dashboardPrice }) => {
  return (
    <div className="mb-6">
      <DashboardSubscription price={dashboardPrice} />
      
      <ScrollArea className="max-h-[300px] pr-2">
        <div className="space-y-4">
          {items.map((item, index) => (
            <CartItem 
              key={`${item.id}-${item.isSubscription ? 'sub' : 'one'}-${index}`}
              {...item} 
              onRemove={removeFromCart} 
              index={index}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CartItems;
