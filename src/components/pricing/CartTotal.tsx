
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CreditCard, Shield, TruckIcon, Euro } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

interface CartTotalProps {
  calculateOneTimeTotal: () => number;
  calculateMonthlyTotal: () => number;
  calculateOneTimeTax: () => number;
  calculateSubscriptionTax: () => number;
  calculateTotalWithTax: () => number;
  showTaxes: boolean;
  cartLength: number;
}

const CartTotal: React.FC<CartTotalProps> = ({
  calculateOneTimeTotal,
  calculateMonthlyTotal,
  calculateOneTimeTax,
  calculateSubscriptionTax,
  calculateTotalWithTax,
  showTaxes,
  cartLength
}) => {
  const { toast } = useToast();
  
  const DASHBOARD_PRICE = 9.99;
  
  const checkout = () => {
    toast({
      title: "Checkout initiated",
      description: "Processing your order. Please complete payment on the next screen.",
    });
    // Here you would normally redirect to your payment gateway
  };

  return (
    <>
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
                  <span className="font-mono">{(calculateOneTimeTotal() * (showTaxes ? 1 + 0.21 : 1)).toFixed(2)}</span>
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
            {calculateMonthlyTotal() - DASHBOARD_PRICE > 0 && (
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
                <span className="font-mono">{(calculateMonthlyTotal() * (showTaxes ? 1 + 0.1 : 1)).toFixed(2)}/mo</span>
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
          disabled={cartLength === 0}
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
  );
};

export default CartTotal;
