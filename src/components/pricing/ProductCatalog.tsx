
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductTabContent from './ProductTabContent';
import ProductInfo from './ProductInfo';

export interface ProductCatalogItem {
  id: string;
  name: string;
  oneTimePrice: number | null;
  monthlyPrice: number | null;
  type: 'essential' | 'ai-device' | 'professional';
  image: string;
  dashboardOnly?: boolean;
}

interface ProductCatalogProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  essentialItems: ProductCatalogItem[];
  aiPoweredDevices: ProductCatalogItem[];
  professionalServices: ProductCatalogItem[];
  isInCart: (id: string, isSubscription: boolean) => boolean;
  onAddToCart: (item: any, isSubscription: boolean) => void;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({
  activeTab,
  setActiveTab,
  essentialItems,
  aiPoweredDevices,
  professionalServices,
  isInCart,
  onAddToCart
}) => {
  return (
    <div className="lg:col-span-2">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-brand-teal">Product Selection</h2>
            <p className="text-gray-600">Choose the products and services that work for you</p>
          </div>
          
          <TabsList className="bg-brand-grey/20 mt-4 sm:mt-0">
            <TabsTrigger value="all" className="data-[state=active]:bg-white">All Products</TabsTrigger>
            <TabsTrigger value="essential" className="data-[state=active]:bg-white">Essential</TabsTrigger>
            <TabsTrigger value="ai-devices" className="data-[state=active]:bg-white">AI Devices</TabsTrigger>
            <TabsTrigger value="professional" className="data-[state=active]:bg-white">Professional Care</TabsTrigger>
          </TabsList>
        </div>

        <ProductTabContent
          essentialItems={essentialItems}
          aiPoweredDevices={aiPoweredDevices}
          professionalServices={professionalServices}
          isInCart={isInCart}
          onAddToCart={onAddToCart}
          activeTab={activeTab}
        />
      </Tabs>

      <ProductInfo />
    </div>
  );
};

export default ProductCatalog;
