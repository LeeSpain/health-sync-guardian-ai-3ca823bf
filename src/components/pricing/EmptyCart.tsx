
import React from 'react';
import { ShoppingCart } from 'lucide-react';

const EmptyCart: React.FC = () => {
  return (
    <div className="text-center py-12 text-gray-500">
      <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
      <p className="font-medium">Your cart is empty</p>
      <p className="text-sm mt-2">Add products from our catalog to get started</p>
    </div>
  );
};

export default EmptyCart;
