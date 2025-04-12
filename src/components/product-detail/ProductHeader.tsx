
import React from 'react';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/components/product-showcase/types';
import { getProductPrice } from './utils/productUtils';

interface ProductHeaderProps {
  product: Product;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ product }) => {
  return (
    <div className="mb-6">
      <Badge className="mb-3 px-3 py-1 text-sm font-medium bg-gradient-to-r from-brand-teal/10 to-brand-teal/20 text-brand-teal border-none">
        {product.type}
      </Badge>
      <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>
      
      {/* Reviews */}
      <div className="flex items-center mb-4">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star} 
              className={`h-5 w-5 ${star <= 4.5 ? 'text-yellow-400' : 'text-gray-300'}`}
              fill={star <= 4 ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-600">4.8 (124 reviews)</span>
      </div>
      
      <p className="text-xl font-semibold text-brand-teal mb-4">{getProductPrice(product.name)}</p>
      <p className="text-gray-600 mb-8">{product.description}</p>
    </div>
  );
};

export default ProductHeader;
