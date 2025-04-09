
import React from 'react';

const EmptyCart: React.FC = () => {
  return (
    <div className="text-center py-10 text-gray-500">
      <p className="font-medium mb-1">Your cart is empty</p>
      <p className="text-sm">Add products from our catalog to get started</p>
    </div>
  );
};

export default EmptyCart;
