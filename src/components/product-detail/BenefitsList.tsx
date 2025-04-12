
import React from 'react';
import { Check } from 'lucide-react';

interface BenefitsListProps {
  benefits?: string[];
}

const BenefitsList: React.FC<BenefitsListProps> = ({ benefits }) => {
  if (!benefits || benefits.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3 mb-8">
      <h3 className="font-semibold text-gray-800">Key Benefits:</h3>
      {benefits.map((benefit, index) => (
        <div key={index} className="flex items-start">
          <div className="rounded-full bg-brand-teal/10 p-1 mr-3 flex-shrink-0">
            <Check className="h-4 w-4 text-brand-teal" />
          </div>
          <span className="text-gray-600">{benefit}</span>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;
