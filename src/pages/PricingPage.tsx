
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { getProductsData } from '@/components/product-showcase/productData';
import PricingHeader from '@/components/pricing/PricingHeader';
import ProductCatalog from '@/components/pricing/ProductCatalog';
import Cart from '@/components/pricing/Cart';

interface CartItem {
  id: string;
  name: string;
  price: number;
  type: 'essential' | 'ai-device' | 'professional';
  isSubscription: boolean;
  image?: string;
  monthlyPrice?: number;
}

const PricingPage: React.FC = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeTab, setActiveTab] = useState('all');
  const productsData = getProductsData();
  const [showTaxes, setShowTaxes] = useState(false);

  // Get product images from productsData
  const getProductImageByName = (name: string) => {
    const product = productsData.find(p => p.name === name);
    return product?.image || "/placeholder.svg";
  };

  // Essential item
  const essentialItems = [
    { 
      id: 'dashboard-tablet',
      name: "iHealth Dashboard Tablet", 
      oneTimePrice: 120.99,
      monthlyPrice: null,
      type: 'essential' as const,
      image: "/lovable-uploads/30a5eb40-c8db-4c13-ba65-2af816834fb8.png"
    }
  ];

  // AI-Powered Devices - Updated pricing to 4.99€ + 10% for monthly subscription
  const aiPoweredDevices = [
    { 
      id: 'guardian-button',
      name: "Guardian Button", 
      oneTimePrice: 60.49, 
      monthlyPrice: 4.99,
      type: 'ai-device' as const,
      image: getProductImageByName("Guardian Button")
    },
    { 
      id: 'heart-rate-monitor',
      name: "Heart Rate Monitor", 
      oneTimePrice: 96.79, 
      monthlyPrice: 4.99,
      type: 'ai-device' as const,
      image: getProductImageByName("Heart Rate Monitor")
    },
    { 
      id: 'smart-scales',
      name: "Smart Scales", 
      oneTimePrice: 108.89, 
      monthlyPrice: 4.99,
      type: 'ai-device' as const,
      image: getProductImageByName("Smart Scales")
    },
    { 
      id: 'thermometer',
      name: "Thermometer", 
      oneTimePrice: 48.39, 
      monthlyPrice: 4.99,
      type: 'ai-device' as const,
      image: getProductImageByName("Thermometer")
    },
    { 
      id: 'bed-sensor',
      name: "Bed Sensor", 
      oneTimePrice: 157.29, 
      monthlyPrice: 4.99,
      type: 'ai-device' as const,
      image: getProductImageByName("Bed Sensor")
    },
    { 
      id: 'family-dashboard',
      name: "Family Dashboard Access", 
      oneTimePrice: null, 
      monthlyPrice: 4.99,
      type: 'ai-device' as const,
      image: "/placeholder.svg"
    }
  ];

  // Professional Care Services - Updated pricing to 24.99€ + 10% for monthly subscription
  const professionalServices = [
    { 
      id: 'sos-pendant',
      name: "SOS Pendant & Call Centre", 
      oneTimePrice: 108.89, 
      monthlyPrice: 24.99,
      type: 'professional' as const,
      image: getProductImageByName("SOS Call Centre")
    },
    { 
      id: 'medication-dispenser',
      name: "Medication Dispenser", 
      oneTimePrice: 241.99, 
      monthlyPrice: 24.99,
      type: 'professional' as const,
      image: getProductImageByName("Medication Dispenser")
    },
    { 
      id: 'glucose-monitor',
      name: "Glucose Monitor", 
      oneTimePrice: 241.99, 
      monthlyPrice: 24.99,
      type: 'professional' as const,
      image: getProductImageByName("Glucose Monitor")
    },
    { 
      id: 'nurse-sync',
      name: "Nurse-Sync", 
      oneTimePrice: null, 
      monthlyPrice: null,
      type: 'professional' as const,
      image: getProductImageByName("Nurse-Sync"),
      dashboardOnly: true
    },
    { 
      id: 'medic-sync',
      name: "Medic-Sync", 
      oneTimePrice: null, 
      monthlyPrice: null,
      type: 'professional' as const,
      image: getProductImageByName("Medic-Sync"),
      dashboardOnly: true
    }
  ];

  // Automatically enable tax display when viewing cart
  useEffect(() => {
    if (cart.length > 0) {
      setShowTaxes(true);
    }
  }, [cart]);

  const addToCart = (item: any, isSubscription: boolean) => {
    if (item.dashboardOnly) {
      toast({
        title: "Dashboard Service",
        description: `${item.name} is accessible through your dashboard after joining.`,
        variant: "default",
      });
      return;
    }
    
    const price = isSubscription ? item.monthlyPrice : item.oneTimePrice;
    
    if (price === null) {
      toast({
        title: "Can't add to cart",
        description: `${item.name} is only available as a ${isSubscription ? 'one-time purchase' : 'subscription'}`,
        variant: "destructive",
      });
      return;
    }

    const existingItemIndex = cart.findIndex(
      cartItem => cartItem.id === item.id && cartItem.isSubscription === isSubscription
    );

    if (existingItemIndex >= 0) {
      toast({
        title: "Already in cart",
        description: `${item.name} is already in your cart`,
        variant: "default",
      });
      return;
    }

    // Create new cart item
    const newCartItem: CartItem = {
      id: item.id,
      name: item.name,
      price,
      type: item.type,
      isSubscription,
      image: item.image,
      monthlyPrice: item.monthlyPrice
    };
    
    // Add device to cart with monthly subscription if it's a one-time purchase with available subscription
    if (!isSubscription && item.monthlyPrice) {
      const alreadyHasSubscription = cart.some(
        cartItem => cartItem.id === item.id && cartItem.isSubscription === true
      );
      
      // If it doesn't already have a subscription, add it
      if (!alreadyHasSubscription) {
        const subscriptionItem: CartItem = {
          id: item.id,
          name: `${item.name} - Monthly Service`,
          price: item.monthlyPrice,
          type: item.type,
          isSubscription: true,
          image: item.image
        };
        
        setCart([...cart, newCartItem, subscriptionItem]);
        
        toast({
          title: "Added to cart with subscription",
          description: `${item.name} and its monthly service have been added to your cart`,
        });
        return;
      }
    }
    
    setCart([...cart, newCartItem]);

    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    });
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    const removedItem = newCart[index];
    newCart.splice(index, 1);
    
    // If this was a device (not a subscription) and we also added its subscription automatically,
    // find and remove the subscription too
    if (!removedItem.isSubscription) {
      const subscriptionIndex = newCart.findIndex(
        item => item.id === removedItem.id && item.isSubscription
      );
      if (subscriptionIndex >= 0) {
        newCart.splice(subscriptionIndex, 1);
        toast({
          title: "Removed from cart",
          description: `${removedItem.name} and its monthly service have been removed from your cart`,
        });
      } else {
        toast({
          title: "Removed from cart",
          description: `${removedItem.name} has been removed from your cart`,
        });
      }
    } else {
      toast({
        title: "Removed from cart",
        description: `${removedItem.name} has been removed from your cart`,
      });
    }
    
    setCart(newCart);
    
    // If cart is empty after removal, hide taxes
    if (newCart.length === 0) {
      setShowTaxes(false);
    }
  };

  const isInCart = (id: string, isSubscription: boolean) => {
    return cart.some(item => item.id === id && item.isSubscription === isSubscription);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-brand-grey/10">
      <Navbar />
      <main className="flex-grow">
        <PricingHeader />

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <ProductCatalog 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              essentialItems={essentialItems}
              aiPoweredDevices={aiPoweredDevices}
              professionalServices={professionalServices}
              isInCart={isInCart}
              onAddToCart={addToCart}
            />
            
            <Cart 
              cart={cart}
              removeFromCart={removeFromCart}
              showTaxes={showTaxes}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
