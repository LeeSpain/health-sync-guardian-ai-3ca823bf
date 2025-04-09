
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import ShippingOffer from './ShippingOffer';
import { useCartCalculations } from './useCartCalculations';

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
  const {
    DASHBOARD_PRICE,
    calculateOneTimeTotal,
    calculateMonthlyTotal,
    calculateOneTimeTax,
    calculateSubscriptionTax,
    calculateTotalWithTax,
  } = useCartCalculations({ cart, showTaxes });

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
            <EmptyCart />
          ) : (
            <>
              <CartItems 
                items={cart} 
                removeFromCart={removeFromCart} 
                dashboardPrice={DASHBOARD_PRICE} 
              />

              <CartTotal 
                calculateOneTimeTotal={calculateOneTimeTotal}
                calculateMonthlyTotal={calculateMonthlyTotal}
                calculateOneTimeTax={calculateOneTimeTax}
                calculateSubscriptionTax={calculateSubscriptionTax}
                calculateTotalWithTax={calculateTotalWithTax}
                showTaxes={showTaxes}
                cartLength={cart.length}
              />
            </>
          )}
        </CardContent>
      </Card>
      
      {/* Special Offer Card */}
      {cart.length > 0 && (
        <ShippingOffer oneTimeTotal={calculateOneTimeTotal()} />
      )}
    </div>
  );
};

export default Cart;
