
import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

const HelpSection: React.FC = () => {
  return (
    <div className="mt-16 bg-brand-grey/10 rounded-lg p-8 max-w-5xl mx-auto border border-gray-200 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-md">
          <HelpCircle className="h-12 w-12 text-brand-teal" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-brand-teal mb-2">Need Help Choosing?</h3>
          <p className="text-gray-600 mb-4">
            Our health solution advisors can help you select the perfect combination of products and services based on your specific needs. Get in touch with our team for personalized recommendations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange/10">
              View Comparison Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
