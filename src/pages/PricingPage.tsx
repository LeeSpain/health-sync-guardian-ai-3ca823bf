
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Plus, Minus, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CartItem {
  id: string;
  name: string;
  price: number;
  type: 'essential' | 'ai-device' | 'professional';
  isSubscription: boolean;
}

const PricingPage: React.FC = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);

  // Essential item
  const essentialItems = [
    { 
      id: 'dashboard-tablet',
      name: "iHealth Dashboard Tablet", 
      oneTimePrice: 120.99,
      type: 'essential' as const,
    }
  ];

  // AI-Powered Devices
  const aiPoweredDevices = [
    { 
      id: 'guardian-button',
      name: "Guardian Button", 
      oneTimePrice: 60.49, 
      monthlyPrice: 5.49,
      type: 'ai-device' as const,
    },
    { 
      id: 'heart-rate-monitor',
      name: "Heart Rate Monitor", 
      oneTimePrice: 96.79, 
      monthlyPrice: 5.49,
      type: 'ai-device' as const,
    },
    { 
      id: 'smart-scales',
      name: "Smart Scales", 
      oneTimePrice: 108.89, 
      monthlyPrice: 5.49,
      type: 'ai-device' as const,
    },
    { 
      id: 'thermometer',
      name: "Thermometer", 
      oneTimePrice: 48.39, 
      monthlyPrice: 5.49,
      type: 'ai-device' as const,
    },
    { 
      id: 'bed-sensor',
      name: "Bed Sensor", 
      oneTimePrice: 157.29, 
      monthlyPrice: 5.49,
      type: 'ai-device' as const,
    },
    { 
      id: 'family-dashboard',
      name: "Family Dashboard Access", 
      oneTimePrice: null, 
      monthlyPrice: 5.49,
      type: 'ai-device' as const,
    }
  ];

  // Professional Care Services
  const professionalServices = [
    { 
      id: 'sos-pendant',
      name: "SOS Pendant & Call Centre", 
      oneTimePrice: 108.89, 
      monthlyPrice: 27.49,
      type: 'professional' as const,
    },
    { 
      id: 'medication-dispenser',
      name: "Medication Dispenser", 
      oneTimePrice: 241.99, 
      monthlyPrice: 27.49,
      type: 'professional' as const,
    },
    { 
      id: 'glucose-monitor',
      name: "Glucose Monitor", 
      oneTimePrice: 241.99, 
      monthlyPrice: 27.49,
      type: 'professional' as const,
    },
    { 
      id: 'nurse-sync',
      name: "Nurse-Sync", 
      oneTimePrice: 181.49, 
      monthlyPrice: 32.99,
      type: 'professional' as const,
    },
    { 
      id: 'medic-sync',
      name: "Medic-Sync", 
      oneTimePrice: 181.49, 
      monthlyPrice: 38.49,
      type: 'professional' as const,
    }
  ];

  const addToCart = (item: any, isSubscription: boolean) => {
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

    setCart([...cart, {
      id: item.id,
      name: item.name,
      price,
      type: item.type,
      isSubscription
    }]);

    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    });
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    const removedItem = newCart[index];
    newCart.splice(index, 1);
    setCart(newCart);

    toast({
      title: "Removed from cart",
      description: `${removedItem.name} has been removed from your cart`,
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const isInCart = (id: string, isSubscription: boolean) => {
    return cart.some(item => item.id === id && item.isSubscription === isSubscription);
  };

  const checkout = () => {
    toast({
      title: "Checkout initiated",
      description: "This would normally redirect to a payment gateway",
    });
    // Here you would normally redirect to your payment gateway
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-brand-teal">iHealth-Sync – Complete Price List</h1>
          <p className="text-gray-600 mt-2">Choose the products and services that work for you</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Essential Device Section */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-brand-teal flex items-center">
                <Badge variant="outline" className="mr-2 text-xs border-blue-500 text-blue-700">
                  Essential
                </Badge>
                Essential Device
              </h2>
              <Table>
                <TableHeader>
                  <TableRow className="bg-blue-50">
                    <TableHead className="font-medium">Product</TableHead>
                    <TableHead className="font-medium">One-Time Purchase</TableHead>
                    <TableHead className="font-medium w-[150px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {essentialItems.map((item) => (
                    <TableRow key={item.id} className="bg-blue-50">
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>€{item.oneTimePrice.toFixed(2)}</TableCell>
                      <TableCell>
                        <Button 
                          size="sm" 
                          onClick={() => addToCart(item, false)}
                          disabled={isInCart(item.id, false)}
                          className="bg-brand-teal hover:bg-brand-teal/90 flex items-center gap-1"
                        >
                          {isInCart(item.id, false) ? 
                            <><Check className="h-4 w-4" /> Added</> : 
                            <><Plus className="h-4 w-4" /> Add</>}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </section>

            {/* AI-Powered Devices Section */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-brand-teal">AI-Powered Devices</h2>
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-medium">Product</TableHead>
                    <TableHead className="font-medium">One-Time Purchase</TableHead>
                    <TableHead className="font-medium">Monthly Subscription</TableHead>
                    <TableHead className="font-medium w-[150px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {aiPoweredDevices.map((device, index) => (
                    <TableRow key={device.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <TableCell className="font-medium">{device.name}</TableCell>
                      <TableCell>{device.oneTimePrice ? `€${device.oneTimePrice.toFixed(2)}` : '—'}</TableCell>
                      <TableCell>{device.monthlyPrice ? `€${device.monthlyPrice.toFixed(2)}` : '—'}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {device.oneTimePrice !== null && (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => addToCart(device, false)}
                              disabled={isInCart(device.id, false)}
                              className="text-brand-teal border-brand-teal hover:bg-brand-teal/10 flex items-center gap-1"
                            >
                              <Plus className="h-3 w-3" /> Buy
                            </Button>
                          )}
                          {device.monthlyPrice !== null && (
                            <Button 
                              size="sm" 
                              onClick={() => addToCart(device, true)}
                              disabled={isInCart(device.id, true)}
                              className="bg-brand-orange hover:bg-brand-orange/90 flex items-center gap-1"
                            >
                              <Plus className="h-3 w-3" /> Sub
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </section>

            {/* Professional Care Services Section */}
            <section className="mb-12">
              <h2 className="text-xl font-bold mb-4 text-brand-teal">Professional Care Services</h2>
              <Table>
                <TableHeader>
                  <TableRow className="bg-purple-50">
                    <TableHead className="font-medium">Service</TableHead>
                    <TableHead className="font-medium">One-Time Purchase</TableHead>
                    <TableHead className="font-medium">Monthly Subscription</TableHead>
                    <TableHead className="font-medium w-[150px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {professionalServices.map((service, index) => (
                    <TableRow key={service.id} className={index % 2 === 0 ? "bg-white" : "bg-purple-50"}>
                      <TableCell className="font-medium">{service.name}</TableCell>
                      <TableCell>{service.oneTimePrice ? `€${service.oneTimePrice.toFixed(2)}` : '—'}</TableCell>
                      <TableCell>{service.monthlyPrice ? `€${service.monthlyPrice.toFixed(2)}` : '—'}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {service.oneTimePrice !== null && (
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => addToCart(service, false)}
                              disabled={isInCart(service.id, false)}
                              className="text-brand-teal border-brand-teal hover:bg-brand-teal/10 flex items-center gap-1"
                            >
                              <Plus className="h-3 w-3" /> Buy
                            </Button>
                          )}
                          {service.monthlyPrice !== null && (
                            <Button 
                              size="sm" 
                              onClick={() => addToCart(service, true)}
                              disabled={isInCart(service.id, true)}
                              className="bg-brand-purple hover:bg-brand-purple/90 flex items-center gap-1"
                            >
                              <Plus className="h-3 w-3" /> Sub
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </section>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>* All prices are inclusive of applicable taxes. Monthly subscriptions are subject to 10% VAT, while one-time purchases include 21% IVA (Spanish VAT).</p>
              <p className="mt-2">* Service contracts require minimum 12-month commitment. Early termination fees may apply.</p>
            </div>
          </div>

          {/* Shopping Cart */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="border-2 border-brand-teal/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-brand-teal" />
                    Your Cart
                  </h2>
                  <Badge variant="outline" className="text-brand-teal">
                    {cart.length} item(s)
                  </Badge>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-6 text-gray-500">
                    <p>Your cart is empty</p>
                    <p className="text-sm mt-2">Add items from the price list</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                      {cart.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-2">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <Badge variant="outline" className={`text-xs ${
                              item.type === 'essential' 
                                ? 'border-blue-500 text-blue-700' 
                                : item.type === 'ai-device'
                                  ? 'border-brand-teal text-brand-teal'
                                  : 'border-purple-500 text-purple-700'
                            }`}>
                              {item.isSubscription ? 'Monthly' : 'One-time'}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono">€{item.price.toFixed(2)}</span>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              onClick={() => removeFromCart(index)}
                              className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t">
                      <div className="flex justify-between font-bold text-lg mb-4">
                        <span>Total:</span>
                        <span className="font-mono">€{calculateTotal().toFixed(2)}</span>
                      </div>
                      <Button 
                        className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white flex items-center justify-center gap-2"
                        onClick={checkout}
                      >
                        <ShoppingCart className="h-5 w-5" />
                        Proceed to Checkout
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
