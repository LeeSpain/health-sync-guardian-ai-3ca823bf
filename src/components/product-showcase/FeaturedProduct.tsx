
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Product } from './types';
import { Link } from 'react-router-dom';

interface FeaturedProductProps {
  product: Product;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product }) => {
  // Create a URL-friendly slug from the product name
  const productSlug = product.name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="bg-gradient-to-br from-brand-teal/5 to-brand-teal/10 rounded-2xl p-1 shadow-lg">
      <Card className="overflow-hidden border-none shadow-none bg-white grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="p-6 md:p-8 space-y-4">
          <Badge variant="outline" className="bg-brand-teal/10 text-brand-teal border-brand-teal/30">
            Featured Device
          </Badge>
          <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.description}</p>
          
          {/* Compact Benefits List */}
          <div className="space-y-2">
            {product.benefits?.map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-700">
                <Check className="h-4 w-4 mr-2 text-brand-teal" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
          
          <Link to={`/product/${productSlug}`}>
            <Button className="w-full md:w-auto bg-brand-teal hover:bg-brand-teal/90 group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="h-80 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
