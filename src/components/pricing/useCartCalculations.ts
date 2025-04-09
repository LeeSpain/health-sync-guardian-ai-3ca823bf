
import { useMemo } from 'react';
import { CartItemData } from './Cart';

interface UseCartCalculationsProps {
  cart: CartItemData[];
  showTaxes: boolean;
}

export const useCartCalculations = ({ cart, showTaxes }: UseCartCalculationsProps) => {
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

  return {
    DASHBOARD_PRICE,
    calculateOneTimeTotal,
    calculateMonthlyTotal,
    calculateOneTimeTax,
    calculateSubscriptionTax,
    calculateTotalWithTax,
  };
};
