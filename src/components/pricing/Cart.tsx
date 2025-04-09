
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ShoppingCart, CreditCard, Shield, TruckIcon, Euro, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CartItem, { CartItemProps } from './CartItem';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export interface CartItemData {
  id: string;
  name: string;
  price: number;
  type: 'essential' | 'ai-device' | 'professional' | 'subscription';
  isSubscription: boolean;
  image?: string;
  monthlyPrice?: number;
  isMandatory?: boolean;
}

interface CartProps {
  cart: CartItemData[];
  removeFromCart: (index: number) => void;
  showTaxes: boolean;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, showTaxes }) => {
  const { toast } = useToast();
  
  // Tax rates
  const VAT_RATE = 0.21; // 21% VAT for one-time purchases
  const SUBSCRIPTION_TAX = 0.10; // 10% tax for subscriptions

  // Dashboard subscription constants
  const DASHBOARD_PRICE = 9.99;
  const DASHBOARD_TAX = DASHBOARD_PRICE * SUBSCRIPTION_TAX;

  const calculateOneTimeTotal = () => {
    return cart.filter(item => !item.isSubscription).reduce((total, item) => total + item.price, 0);
  };

  const calculateMonthlyTotal = () => {
    return cart.filter(item => item.isSubscription).reduce((total, item) => total + item.price, 0) + DASHBOARD_PRICE;
  };
  
  const calculateOneTimeTax = () => {
    return calculateOneTimeTotal() * VAT_RATE;
  };
  
  const calculateSubscriptionTax = () => {
    return calculateMonthlyTotal() * SUBSCRIPTION_TAX;
  };
  
  const calculateTotalWithTax = () => {
    return calculateOneTimeTotal() * (1 + VAT_RATE) + calculateMonthlyTotal() * (1 + SUBSCRIPTION_TAX);
  };

  const checkout = () => {
    toast({
      title: "Checkout initiated",
      description: "Processing your order. Please complete payment on the next screen.",
    });
    // Here you would normally redirect to your payment gateway
  };

  return (
    <div className="lg:sticky lg:top-24 h-fit">
      <Card className="border-2 border-brand-teal/20 shadow-md overflow-hidden">
        <CardHeader className="pb-4 bg-gradient-to-r from-brand-teal/10 to-transparent">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-brand-teal" />
              Your Cart
            </div>
            <Badge variant="outline" className="bg-brand-teal/10 text-brand-teal border-brand-teal">
              {cart.length + 1} item(s)
            </Badge>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-6 pt-4">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm mt-2">Add products from our catalog to get started</p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="bg-brand-teal/5 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md overflow-hidden bg-white border border-gray-200 flex-shrink-0 shadow-sm flex items-center justify-center">
                        <ShoppingCart className="h-5 w-5 text-brand-teal" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-sm">iHealth Dashboard Subscription</p>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="h-3.5 w-3.5 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-xs max-w-[220px]">Required for all iHealth services. Provides access to your health data and device management.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="border-brand-teal text-brand-teal bg-brand-teal/10 text-xs">
                            Monthly
                          </Badge>
                          <Badge variant="outline" className="border-brand-orange text-brand-orange bg-brand-orange/10 text-xs">
                            Required
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Euro className="h-3.5 w-3.5 mr-1 text-gray-700" />
                      <span className="font-mono font-semibold text-gray-800">{DASHBOARD_PRICE.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <ScrollArea className="max-h-[300px] pr-2">
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <CartItem 
                        key={`${item.id}-${item.isSubscription ? 'sub' : 'one'}-${index}`}
                        {...item} 
                        onRemove={removeFromCart} 
                        index={index}
                      />
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <div>
                <div className="space-y-3">
                  {/* One-time purchases section */}
                  {calculateOneTimeTotal() > 0 && (
                    <div className="border-t pt-3">
                      <div className="text-sm font-medium mb-1 text-gray-700">One-time purchases</div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Subtotal:</span>
                        <div className="flex items-center">
                          <Euro className="h-3.5 w-3.5 mr-1 text-gray-600" />
                          <span className="font-mono">{calculateOneTimeTotal().toFixed(2)}</span>
                        </div>
                      </div>
                      {showTaxes && (
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>VAT (21%):</span>
                          <div className="flex items-center">
                            <Euro className="h-3.5 w-3.5 mr-1 text-gray-600" />
                            <span className="font-mono">{calculateOneTimeTax().toFixed(2)}</span>
                          </div>
                        </div>
                      )}
                      <div className="flex justify-between text-sm font-medium mt-1">
                        <span>Total one-time:</span>
                        <div className="flex items-center">
                          <Euro className="h-3.5 w-3.5 mr-1 text-gray-700" />
                          <span className="font-mono">{(calculateOneTimeTotal() * (showTaxes ? 1 + VAT_RATE : 1)).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Monthly subscription section */}
                  <div className={calculateOneTimeTotal() > 0 ? "border-t pt-3" : ""}>
                    <div className="text-sm font-medium mb-1 text-gray-700">Monthly subscription</div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Dashboard:</span>
                      <div className="flex items-center">
                        <Euro className="h-3.5 w-3.5 mr-1 text-gray-600" />
                        <span className="font-mono">{DASHBOARD_PRICE.toFixed(2)}/mo</span>
                      </div>
                    </div>
                    {cart.filter(item => item.isSubscription).length > 0 && (
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Services:</span>
                        <div className="flex items-center">
                          <Euro className="h-3.5 w-3.5 mr-1 text-gray-600" />
                          <span className="font-mono">{(calculateMonthlyTotal() - DASHBOARD_PRICE).toFixed(2)}/mo</span>
                        </div>
                      </div>
                    )}
                    {showTaxes && (
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Service Tax (10%):</span>
                        <div className="flex items-center">
                          <Euro className="h-3.5 w-3.5 mr-1 text-gray-600" />
                          <span className="font-mono">{calculateSubscriptionTax().toFixed(2)}/mo</span>
                        </div>
                      </div>
                    )}
                    <div className="flex justify-between text-sm font-medium mt-1 text-brand-orange">
                      <span>Total monthly:</span>
                      <div className="flex items-center">
                        <Euro className="h-3.5 w-3.5 mr-1" />
                        <span className="font-mono">{(calculateMonthlyTotal() * (showTaxes ? 1 + SUBSCRIPTION_TAX : 1)).toFixed(2)}/mo</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-2" />
                  
                  {/* Total section */}
                  <div className="bg-gradient-to-r from-brand-grey/10 to-transparent p-4 rounded-lg">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Today's payment:</span>
                      <div className="flex items-center text-brand-teal">
                        <Euro className="h-4 w-4 mr-1" />
                        <span className="font-mono">{calculateTotalWithTax().toFixed(2)}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {showTaxes && "* Includes all applicable taxes"}
                      {calculateMonthlyTotal() > 0 && " • 12-month commitment required for subscriptions"}
                    </p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white flex items-center justify-center gap-2 py-6 mt-6"
                  onClick={checkout}
                  disabled={cart.length === 0}
                >
                  <CreditCard className="h-5 w-5" />
                  Proceed to Checkout
                </Button>
                <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center">
                  <Shield className="h-3 w-3 inline mr-1 text-brand-teal" />
                  Secure payment processing
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
      
      {/* Special Offer Card */}
      {cart.length > 0 && calculateOneTimeTotal() < 200 && (
        <Card className="mt-4 border-2 border-brand-orange/20 bg-gradient-to-br from-brand-orange/5 to-transparent">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <TruckIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-sm text-brand-orange">Free Shipping Offer</p>
                <p className="text-xs text-gray-600">
                  Add <span className="font-mono font-semibold">€{(200 - calculateOneTimeTotal()).toFixed(2)}</span> more to qualify for free shipping!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Cart;
