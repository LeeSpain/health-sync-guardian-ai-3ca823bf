
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ShoppingCart, CreditCard, Shield, TruckIcon, Euro } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CartItem, { CartItemProps } from './CartItem';

export interface CartItemData {
  id: string;
  name: string;
  price: number;
  type: 'essential' | 'ai-device' | 'professional';
  isSubscription: boolean;
  image?: string;
  monthlyPrice?: number;
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

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const calculateMonthlyTotal = () => {
    return cart.filter(item => item.isSubscription).reduce((total, item) => total + item.price, 0);
  };

  const calculateOneTimeTotal = () => {
    return cart.filter(item => !item.isSubscription).reduce((total, item) => total + item.price, 0);
  };
  
  const calculateTax = () => {
    const oneTimeTax = calculateOneTimeTotal() * VAT_RATE;
    const subscriptionTax = calculateMonthlyTotal() * SUBSCRIPTION_TAX;
    return oneTimeTax + subscriptionTax;
  };
  
  const calculateTotal = () => {
    if (showTaxes) {
      return calculateSubtotal() + calculateTax();
    }
    return calculateSubtotal();
  };

  const calculateMonthlyTotalWithTax = () => {
    if (showTaxes) {
      return calculateMonthlyTotal() * (1 + SUBSCRIPTION_TAX);
    }
    return calculateMonthlyTotal();
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
              {cart.length} item(s)
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
              <ScrollArea className="max-h-[300px] pr-2 mb-6">
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

              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>One-time purchases:</span>
                    <div className="flex items-center">
                      <Euro className="h-3.5 w-3.5 mr-1 text-gray-600" />
                      <span className="font-mono font-semibold">{calculateOneTimeTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Monthly subscription:</span>
                    <div className="flex items-center">
                      <Euro className="h-3.5 w-3.5 mr-1 text-gray-600" />
                      <span className="font-mono font-semibold">{calculateMonthlyTotal().toFixed(2)}/mo</span>
                    </div>
                  </div>
                  {showTaxes && (
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Taxes:</span>
                      <div className="flex items-center">
                        <Euro className="h-3.5 w-3.5 mr-1 text-gray-600" />
                        <span className="font-mono font-semibold">{calculateTax().toFixed(2)}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="bg-gradient-to-r from-brand-grey/10 to-transparent p-5 rounded-lg mb-6">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <div className="flex items-center">
                      <Euro className="h-4 w-4 mr-1 text-brand-teal" />
                      <span className="font-mono text-brand-teal">{calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  {calculateMonthlyTotal() > 0 && (
                    <div className="flex justify-between text-sm text-brand-orange font-medium mt-1">
                      <span>Recurring monthly:</span>
                      <div className="flex items-center">
                        <Euro className="h-3.5 w-3.5 mr-1 text-brand-orange" />
                        <span className="font-mono">{calculateMonthlyTotalWithTax().toFixed(2)}/mo</span>
                      </div>
                    </div>
                  )}
                  {showTaxes && (
                    <p className="text-xs text-gray-500 mt-2">
                      * One-time purchases include 21% VAT, subscriptions include 10% service tax
                    </p>
                  )}
                </div>
                
                <Button 
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white flex items-center justify-center gap-2 py-6"
                  onClick={checkout}
                  disabled={cart.length === 0}
                >
                  <CreditCard className="h-5 w-5" />
                  Proceed to Checkout
                </Button>
                <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center">
                  <Shield className="h-3 w-3 inline mr-1 text-brand-teal" />
                  Secure payment processing. No credit card data is stored on our servers.
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
      
      {/* Special Offer Card */}
      {cart.length > 0 && calculateSubtotal() < 200 && (
        <Card className="mt-4 border-2 border-brand-orange/20 bg-gradient-to-br from-brand-orange/5 to-transparent">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <TruckIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-sm text-brand-orange">Free Shipping Offer</p>
                <p className="text-xs text-gray-600">
                  Add <span className="font-mono font-semibold">€{(200 - calculateSubtotal()).toFixed(2)}</span> more to qualify for free shipping!
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
