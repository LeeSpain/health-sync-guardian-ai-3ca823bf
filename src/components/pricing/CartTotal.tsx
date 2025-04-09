
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
      <div className="mt-3">
        <div className="space-y-3">
          {/* One-time purchases section */}
          {calculateOneTimeTotal() > 0 && (
            <div className="border-t pt-3">
              <div className="text-sm font-medium mb-1 text-gray-700">One-time purchases</div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal:</span>
                <span className="font-mono">€{calculateOneTimeTotal().toFixed(2)}</span>
              </div>
              {showTaxes && (
                <div className="flex justify-between text-sm text-gray-600">
                  <span>VAT (21%):</span>
                  <span className="font-mono">€{calculateOneTimeTax().toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-medium mt-1">
                <span>Total one-time:</span>
                <span className="font-mono">€{(calculateOneTimeTotal() * (showTaxes ? 1 + 0.21 : 1)).toFixed(2)}</span>
              </div>
            </div>
          )}
          
          {/* Monthly subscription section */}
          <div className={calculateOneTimeTotal() > 0 ? "border-t pt-3" : ""}>
            <div className="text-sm font-medium mb-1 text-gray-700">Monthly subscription</div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Dashboard:</span>
              <span className="font-mono">€{DASHBOARD_PRICE.toFixed(2)}/mo</span>
            </div>
            {calculateMonthlyTotal() - DASHBOARD_PRICE > 0 && (
              <div className="flex justify-between text-sm text-gray-600">
                <span>Services:</span>
                <span className="font-mono">€{(calculateMonthlyTotal() - DASHBOARD_PRICE).toFixed(2)}/mo</span>
              </div>
            )}
            {showTaxes && (
              <div className="flex justify-between text-sm text-gray-600">
                <span>Service Tax (10%):</span>
                <span className="font-mono">€{calculateSubscriptionTax().toFixed(2)}/mo</span>
              </div>
            )}
            <div className="flex justify-between text-sm font-medium mt-1 text-brand-orange">
              <span>Total monthly:</span>
              <span className="font-mono">€{(calculateMonthlyTotal() * (showTaxes ? 1 + 0.1 : 1)).toFixed(2)}/mo</span>
            </div>
          </div>
          
          <Separator className="my-2" />
          
          {/* Total section */}
          <div className="bg-gradient-to-r from-brand-grey/5 to-transparent p-3 rounded-lg border border-brand-grey/10">
            <div className="flex justify-between font-bold text-lg">
              <span>Today's payment:</span>
              <span className="font-mono text-brand-teal">€{calculateTotalWithTax().toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {showTaxes && "* Includes all applicable taxes"}
              {calculateMonthlyTotal() > 0 && " • 12-month commitment required for subscriptions"}
            </p>
          </div>
        </div>
        
        <Button 
          className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-6 mt-5"
          onClick={checkout}
          disabled={cartLength === 0}
        >
          Proceed to Checkout
        </Button>
        <p className="text-xs text-center text-gray-500 mt-3">
          Secure payment processing
        </p>
      </div>
    </>
  );
};

export default CartTotal;
