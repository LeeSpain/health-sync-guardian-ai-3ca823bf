
import React from 'react';
import { Euro } from 'lucide-react';

interface DashboardSubscriptionProps {
  price: number;
}

const DashboardSubscription: React.FC<DashboardSubscriptionProps> = ({ price }) => {
  return (
    <div className="bg-brand-teal/5 p-4 rounded-lg mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div>
            <p className="font-medium text-sm">iHealth Dashboard Subscription</p>
            <p className="text-xs text-gray-500">Essential service for health monitoring</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="font-sans font-semibold text-gray-800">{price.toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSubscription;
