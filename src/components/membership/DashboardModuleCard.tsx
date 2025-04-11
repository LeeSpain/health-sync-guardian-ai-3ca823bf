
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface DashboardModuleCardProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
  special?: boolean;
}

const DashboardModuleCard: React.FC<DashboardModuleCardProps> = ({ 
  title, 
  icon, 
  features,
  special = false
}) => {
  return (
    <Card className={`border ${special ? 'border-brand-orange/40 bg-gradient-to-br from-brand-orange/5 to-brand-teal/5' : 'border-brand-teal/20'} hover:shadow-md transition-shadow`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-lg ${special ? 'bg-gradient-to-br from-brand-orange to-brand-teal' : 'bg-brand-teal'} flex items-center justify-center flex-shrink-0`}>
            {icon}
          </div>
          <h4 className={`font-bold ${special ? 'text-brand-orange' : 'text-brand-teal'} text-lg`}>{title}</h4>
        </div>
        
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className={`h-4 w-4 ${special ? 'text-brand-orange' : 'text-brand-teal'} flex-shrink-0 mt-0.5`} />
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardModuleCard;
