
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { getProductsData } from '@/components/product-showcase/productData';
import PricingHeader from '@/components/pricing/PricingHeader';
import ProductCatalog from '@/components/pricing/ProductCatalog';
import Cart from '@/components/pricing/Cart';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, Activity, Users, LayoutDashboard } from 'lucide-react';

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

        {/* Dashboard Explanation Section */}
        <div className="container mx-auto px-4 py-8 mb-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-teal mb-3">Your Members Dashboard</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The foundation of your health monitoring journey starts with our intelligent dashboard
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-brand-teal/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-teal/5 rounded-bl-full -z-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-orange/5 rounded-tr-full -z-10"></div>
              
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-brand-teal/10 rounded-xl flex items-center justify-center">
                  <LayoutDashboard className="w-10 h-10 text-brand-teal" />
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-center text-brand-teal mb-4">
                Intelligent Health Hub
              </h4>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Your Members Dashboard subscription provides the central nervous system for all your health monitoring 
                  devices and services, delivering:
                </p>
                
                <Separator className="my-6" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Data Integration",
                      description: "All your health data in one secure place with smart insights"
                    },
                    {
                      title: "AI Analysis",
                      description: "Personalized health recommendations and early warning alerts"
                    },
                    {
                      title: "Family Dashboard",
                      description: "Monitor loved ones and share access with caregivers"
                    },
                    {
                      title: "Historical Tracking",
                      description: "Track trends and progress with detailed health history"
                    }
                  ].map((feature, index) => (
                    <Card key={index} className="border border-brand-teal/20 bg-brand-teal/5">
                      <CardContent className="p-4">
                        <h5 className="font-medium text-brand-teal">{feature.title}</h5>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-brand-teal">
                How Your Dashboard Works
              </h4>
              
              <div className="space-y-5">
                {[
                  {
                    icon: <Shield className="h-8 w-8 text-white" />,
                    title: "Secure Cloud Platform",
                    description: "Your dashboard runs on our secure, GDPR-compliant cloud platform with medical-grade encryption"
                  },
                  {
                    icon: <Activity className="h-8 w-8 text-white" />,
                    title: "Real-Time Monitoring",
                    description: "Continuous health tracking with instant alerts for unusual patterns or concerning readings"
                  },
                  {
                    icon: <Users className="h-8 w-8 text-white" />,
                    title: "Multi-User Access",
                    description: "Share selective access with family members or healthcare providers for comprehensive care"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-brand-teal flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-teal">{item.title}</h5>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-brand-orange/10 to-brand-teal/10 p-5 rounded-lg border border-brand-teal/20">
                <p className="text-brand-teal font-medium">Your dashboard subscription is automatically included with every plan and becomes more powerful as you add devices and services.</p>
              </div>
            </div>
          </div>
        </div>

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
