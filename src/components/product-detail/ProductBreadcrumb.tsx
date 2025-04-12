
import React from 'react';
import { Link } from 'react-router-dom';

interface ProductBreadcrumbProps {
  productName: string;
}

const ProductBreadcrumb: React.FC<ProductBreadcrumbProps> = ({ productName }) => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center text-sm text-gray-500">
        <Link to="/" className="hover:text-brand-teal transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/#products" className="hover:text-brand-teal transition-colors">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-brand-teal">{productName}</span>
      </div>
    </div>
  );
};

export default ProductBreadcrumb;
