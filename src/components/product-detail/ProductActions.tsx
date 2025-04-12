
import React from 'react';
import { ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductActionsProps {
  onAddToCart: () => void;
  onSaveForLater: () => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({ onAddToCart, onSaveForLater }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <Button 
        size="lg" 
        className="bg-brand-teal hover:bg-brand-teal/90 flex items-center gap-2"
        onClick={onAddToCart}
      >
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </Button>
      <Button 
        size="lg" 
        variant="outline" 
        className="border-brand-teal text-brand-teal hover:bg-brand-teal/10 flex items-center gap-2"
        onClick={onSaveForLater}
      >
        <Heart className="h-5 w-5" />
        Save for Later
      </Button>
      <Button 
        size="lg" 
        variant="ghost" 
        className="text-gray-600 hover:text-brand-teal hover:bg-brand-teal/5"
      >
        <Share2 className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ProductActions;
