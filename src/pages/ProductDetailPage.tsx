
import React from 'react';
import ProductDetail from '@/components/product-detail/ProductDetail';
import ScrollToTop from '@/components/ScrollToTop';

const ProductDetailPage: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <ProductDetail />
    </>
  );
};

export default ProductDetailPage;
