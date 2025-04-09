
import React from 'react';
import { Shield, Badge as BadgeIcon } from 'lucide-react';
import ProductCategory from './ProductCategory';

export interface ProductData {
  id: string;
  name: string;
  oneTimePrice: number | null;
  monthlyPrice: number | null;
  type: 'essential' | 'ai-device' | 'professional' | 'subscription';
  image: string;
}

interface ProductTabContentProps {
  essentialItems: ProductData[];
  aiPoweredDevices: ProductData[];
  professionalServices: ProductData[];
  isInCart: (id: string, isSubscription: boolean) => boolean;
  onAddToCart: (item: any, isSubscription: boolean) => void;
  activeTab: string;
}

const ProductTabContent: React.FC<ProductTabContentProps> = ({
  essentialItems,
  aiPoweredDevices,
  professionalServices,
  isInCart,
  onAddToCart,
  activeTab
}) => {
  // Render the appropriate content based on the active tab
  if (activeTab === 'essential') {
    return (
      <ProductCategory
        title="Essential Device"
        icon={<Shield className="h-5 w-5 text-blue-600 mr-2" />}
        badge={{ text: "Required", color: "border-blue-500 text-blue-700" }}
        products={essentialItems}
        isInCart={isInCart}
        onAddToCart={onAddToCart}
        bgColor="bg-blue-50"
        headerBgColor="bg-blue-100/50"
      />
    );
  }

  if (activeTab === 'ai-devices') {
    return (
      <ProductCategory
        title="AI-Powered Devices"
        badge={{ text: "Smart", color: "border-brand-teal text-brand-teal" }}
        products={aiPoweredDevices}
        isInCart={isInCart}
        onAddToCart={onAddToCart}
      />
    );
  }

  if (activeTab === 'professional') {
    return (
      <ProductCategory
        title="Professional Care Services"
        badge={{ text: "Premium", color: "border-purple-500 text-purple-700" }}
        products={professionalServices}
        isInCart={isInCart}
        onAddToCart={onAddToCart}
        headerBgColor="bg-purple-50"
      />
    );
  }

  // Default (all) tab
  return (
    <>
      <ProductCategory
        title="Essential Device"
        icon={<Shield className="h-5 w-5 text-blue-600 mr-2" />}
        badge={{ text: "Required", color: "border-blue-500 text-blue-700" }}
        products={essentialItems}
        isInCart={isInCart}
        onAddToCart={onAddToCart}
        bgColor="bg-blue-50"
        headerBgColor="bg-blue-100/50"
      />

      <ProductCategory
        title="AI-Powered Devices"
        badge={{ text: "Smart", color: "border-brand-teal text-brand-teal" }}
        products={aiPoweredDevices}
        isInCart={isInCart}
        onAddToCart={onAddToCart}
      />

      <ProductCategory
        title="Professional Care Services"
        badge={{ text: "Premium", color: "border-purple-500 text-purple-700" }}
        products={professionalServices}
        isInCart={isInCart}
        onAddToCart={onAddToCart}
        headerBgColor="bg-purple-50"
      />
    </>
  );
};

export default ProductTabContent;
