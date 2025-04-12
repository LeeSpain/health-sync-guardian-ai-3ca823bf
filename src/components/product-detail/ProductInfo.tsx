
import React from 'react';

const ProductInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
      <div>
        <span className="font-semibold block text-gray-700">Availability:</span>
        <span className="text-green-600">In Stock</span>
      </div>
      <div>
        <span className="font-semibold block text-gray-700">Warranty:</span>
        <span>2-year limited warranty</span>
      </div>
      <div>
        <span className="font-semibold block text-gray-700">Shipping:</span>
        <span>Free shipping</span>
      </div>
      <div>
        <span className="font-semibold block text-gray-700">SKU:</span>
        <span>IH-TABLET-001</span>
      </div>
    </div>
  );
};

export default ProductInfo;
