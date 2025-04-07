
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Plus, Minus, Check, Shield, ArrowRight } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState('all');

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
      <main className="flex-grow">
        {/* Hero banner for pricing page */}
        <div className="bg-gradient-to-r from-brand-teal/10 to-brand-orange/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-teal mb-4">iHealth-Sync Complete Product Catalog</h1>
              <p className="text-xl text-gray-600">Customize your health monitoring system with our innovative products and services</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-brand-teal">Product Selection</h2>
              <p className="text-gray-600">Choose the products and services that work for you</p>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4 sm:mt-0">
              <TabsList>
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="essential">Essential</TabsTrigger>
                <TabsTrigger value="ai-devices">AI Devices</TabsTrigger>
                <TabsTrigger value="professional">Professional Care</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsContent value="all" className="mt-0">
                  {/* Essential Device Section */}
                  <section className="mb-12">
                    <div className="flex items-center mb-4">
                      <Shield className="h-5 w-5 text-blue-600 mr-2" />
                      <h2 className="text-xl font-bold text-brand-teal">Essential Device</h2>
                      <Badge variant="outline" className="ml-2 text-xs border-blue-500 text-blue-700">
                        Required
                      </Badge>
                    </div>
                    <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-blue-100/50">
                            <TableHead className="font-medium">Product</TableHead>
                            <TableHead className="font-medium">One-Time Purchase</TableHead>
                            <TableHead className="font-medium w-[150px]">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {essentialItems.map((item) => (
                            <TableRow key={item.id}>
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
                    </div>
                  </section>

                  {/* AI-Powered Devices Section */}
                  <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4 text-brand-teal flex items-center">
                      <Badge variant="outline" className="mr-2 text-xs border-brand-teal text-brand-teal">
                        Smart
                      </Badge>
                      AI-Powered Devices
                    </h2>
                    <div className="rounded-lg overflow-hidden border border-gray-200">
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
                    </div>
                  </section>

                  {/* Professional Care Services Section */}
                  <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4 text-brand-teal flex items-center">
                      <Badge variant="outline" className="mr-2 text-xs border-purple-500 text-purple-700">
                        Premium
                      </Badge>
                      Professional Care Services
                    </h2>
                    <div className="rounded-lg overflow-hidden border border-purple-100">
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
                    </div>
                  </section>
                </TabsContent>

                <TabsContent value="essential" className="mt-0">
                  {/* Essential Device Section - Tab Content */}
                  <section>
                    <div className="flex items-center mb-4">
                      <Shield className="h-5 w-5 text-blue-600 mr-2" />
                      <h2 className="text-xl font-bold text-brand-teal">Essential Device</h2>
                      <Badge variant="outline" className="ml-2 text-xs border-blue-500 text-blue-700">
                        Required
                      </Badge>
                    </div>
                    <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-blue-100/50">
                            <TableHead className="font-medium">Product</TableHead>
                            <TableHead className="font-medium">One-Time Purchase</TableHead>
                            <TableHead className="font-medium w-[150px]">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {essentialItems.map((item) => (
                            <TableRow key={item.id}>
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
                    </div>
                  </section>
                </TabsContent>

                <TabsContent value="ai-devices" className="mt-0">
                  {/* AI-Powered Devices Section - Tab Content */}
                  <section>
                    <h2 className="text-xl font-bold mb-4 text-brand-teal flex items-center">
                      <Badge variant="outline" className="mr-2 text-xs border-brand-teal text-brand-teal">
                        Smart
                      </Badge>
                      AI-Powered Devices
                    </h2>
                    <div className="rounded-lg overflow-hidden border border-gray-200">
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
                    </div>
                  </section>
                </TabsContent>

                <TabsContent value="professional" className="mt-0">
                  {/* Professional Care Services Section - Tab Content */}
                  <section>
                    <h2 className="text-xl font-bold mb-4 text-brand-teal flex items-center">
                      <Badge variant="outline" className="mr-2 text-xs border-purple-500 text-purple-700">
                        Premium
                      </Badge>
                      Professional Care Services
                    </h2>
                    <div className="rounded-lg overflow-hidden border border-purple-100">
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
                    </div>
                  </section>
                </TabsContent>
              </Tabs>

              <div className="mt-8 p-6 bg-brand-grey rounded-lg">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="rounded-full bg-white p-3 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-teal mb-2">Product Information</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>* All prices are inclusive of applicable taxes. Monthly subscriptions are subject to 10% VAT, while one-time purchases include 21% IVA (Spanish VAT).</p>
                      <p>* Service contracts require minimum 12-month commitment. Early termination fees may apply.</p>
                      <p>* Product warranty: All devices come with a standard 2-year manufacturer warranty.</p>
                    </div>
                    <Button 
                      variant="link" 
                      className="text-brand-teal p-0 h-auto mt-2"
                      onClick={() => toast({
                        title: "Documentation",
                        description: "Product documentation would open in a new window."
                      })}
                    >
                      View Complete Documentation <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Shopping Cart */}
            <div className="lg:sticky lg:top-24 h-fit">
              <Card className="border-2 border-brand-teal/20 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5 text-brand-teal" />
                      Your Cart
                    </h2>
                    <Badge variant="outline" className="bg-brand-teal/10 text-brand-teal border-brand-teal">
                      {cart.length} item(s)
                    </Badge>
                  </div>

                  {cart.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p className="font-medium">Your cart is empty</p>
                      <p className="text-sm mt-2">Add products from our catalog to get started</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 mb-6">
                        {cart.map((item, index) => (
                          <div key={index} className="flex justify-between items-center border-b pb-4">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className={`text-xs ${
                                  item.type === 'essential' 
                                    ? 'border-blue-500 text-blue-700 bg-blue-50' 
                                    : item.type === 'ai-device'
                                      ? 'border-brand-teal text-brand-teal bg-brand-teal/10'
                                      : 'border-purple-500 text-purple-700 bg-purple-50'
                                }`}>
                                  {item.isSubscription ? 'Monthly' : 'One-time'}
                                </Badge>
                                {item.isSubscription && (
                                  <span className="text-xs text-gray-500">12-month commitment</span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-medium">€{item.price.toFixed(2)}</span>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                onClick={() => removeFromCart(index)}
                                className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between text-sm text-gray-500 mb-1">
                          <span>Subtotal:</span>
                          <span className="font-mono">€{calculateTotal().toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500 mb-3">
                          <span>Estimated VAT:</span>
                          <span className="font-mono">€{(calculateTotal() * 0.21).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg mb-6">
                          <span>Total:</span>
                          <span className="font-mono">€{(calculateTotal() * 1.21).toFixed(2)}</span>
                        </div>
                        <Button 
                          className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white flex items-center justify-center gap-2 py-6"
                          onClick={checkout}
                        >
                          <ShoppingCart className="h-5 w-5" />
                          Proceed to Checkout
                        </Button>
                        <p className="text-xs text-center text-gray-500 mt-3">
                          Secure payment processing. No credit card data is stored on our servers.
                        </p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
