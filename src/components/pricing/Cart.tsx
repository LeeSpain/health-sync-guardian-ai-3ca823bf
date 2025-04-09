
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      <Card className="border border-brand-teal/30 shadow-md overflow-hidden">
        <CardHeader className="pb-4 bg-gradient-to-r from-brand-teal/5 to-transparent">
          <CardTitle className="flex items-center justify-between">
            <span className="text-brand-teal font-medium">Your Cart</span>
            <Badge variant="outline" className="bg-brand-teal/5 text-brand-teal border-brand-teal/30">
              {cart.length + 1} item(s)
            </Badge>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-5 pt-3">
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
