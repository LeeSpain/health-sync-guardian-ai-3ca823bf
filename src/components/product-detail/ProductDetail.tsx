
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Product } from '@/components/product-showcase/types';
import { getProductsData } from '@/components/product-showcase/productData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NotFound from '@/pages/NotFound';
import { useToast } from '@/hooks/use-toast';
import { OptimizedImage } from '@/components/ui/optimized-image';

// Import components
import ProductBreadcrumb from './ProductBreadcrumb';
import ProductHeader from './ProductHeader';
import BenefitsList from './BenefitsList';
import ProductActions from './ProductActions';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { toast } = useToast();
  
  // Get all products data
  const products = getProductsData();
  
  // Find the product by ID (slug)
  const product = products.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === productId);
  
  // Handle case when product is not found
  if (!product) {
    return <NotFound />;
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  const handleSaveForLater = () => {
    toast({
      title: "Saved for later",
      description: `${product.name} has been saved to your wishlist.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Breadcrumb navigation */}
        <ProductBreadcrumb productName={product.name} />
        
        {/* Product detail section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product image */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex items-center justify-center shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-w-full max-h-[500px] object-contain"
              />
            </div>
            
            {/* Product info */}
            <div className="flex flex-col">
              <ProductHeader product={product} />
              <BenefitsList benefits={product.benefits} />
              <ProductActions 
                onAddToCart={handleAddToCart}
                onSaveForLater={handleSaveForLater}
              />
              <ProductInfo />
            </div>
          </div>
          
          {/* Product details tabs */}
          <div className="mt-16">
            <ProductTabs />
          </div>
          
          {/* Back to products */}
          <div className="mt-16">
            <Link 
              to="/#products" 
              className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to all products
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
