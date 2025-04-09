
import React from 'react';

const PricingFooter: React.FC = () => {
  return (
    <div className="mt-10 text-center">
      <p className="text-sm text-gray-500">
        All subscriptions include the base iHealth Dashboard access at €9.99/month + applicable taxes.
        <br />
        For detailed pricing information including taxes and shipping costs, please proceed to the checkout page.
        <br />
        All prices are subject to applicable taxes which will be calculated at checkout.
      </p>
    </div>
  );
};

export default PricingFooter;
