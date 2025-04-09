
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Shield } from 'lucide-react';
import ProductItem, { ProductItemProps } from './ProductItem';

interface Product {
  id: string;
  name: string;
  oneTimePrice: number | null;
  monthlyPrice: number | null;
  type: 'essential' | 'ai-device' | 'professional';
  image: string;
}

interface ProductCategoryProps {
  title: string;
  description?: string;
  badge?: {
    text: string;
    color: string;
  };
  icon?: React.ReactNode;
  products: Product[];
  isInCart: (id: string, isSubscription: boolean) => boolean;
  onAddToCart: (item: any, isSubscription: boolean) => void;
  bgColor?: string;
  headerBgColor?: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({
  title,
  description,
  badge,
  icon,
  products,
  isInCart,
  onAddToCart,
  bgColor = 'bg-white',
  headerBgColor = 'bg-gray-50'
}) => {
  return (
    <section className="mb-12">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-bold text-brand-teal">{title}</h2>
        {badge && (
          <Badge variant="outline" className={`ml-2 text-xs ${badge.color}`}>
            {badge.text}
          </Badge>
        )}
      </div>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      <div className={`rounded-lg overflow-hidden border border-gray-200 shadow-sm ${bgColor}`}>
        <Table>
          <TableHeader>
            <TableRow className={headerBgColor}>
              <TableHead className="font-medium">Product</TableHead>
              <TableHead className="font-medium">One-Time Purchase</TableHead>
              <TableHead className="font-medium">Monthly Subscription</TableHead>
              <TableHead className="font-medium w-[150px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <ProductItem
                key={product.id}
                {...product}
                isInCart={isInCart}
                onAddToCart={onAddToCart}
                alternateRowColor={index % 2 !== 0}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default ProductCategory;
