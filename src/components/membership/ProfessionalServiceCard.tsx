
import React from 'react';
import { Check, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

interface PlanType {
  name: string;
  price: string;
  features: string[];
}

interface PromotionType {
  title: string;
  details: string[];
}

interface ProfessionalServiceCardProps {
  title: string;
  description: string;
  iconColor: string;
  plans?: PlanType[];
  features?: string[];
  promotion?: PromotionType;
  ctaText?: string;
}

const ProfessionalServiceCard: React.FC<ProfessionalServiceCardProps> = ({ 
  title, 
  description, 
  iconColor,
  plans,
  features,
  promotion,
  ctaText = "Learn More"
}) => {
  return (
    <Card className="border border-brand-teal/20 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="p-6 flex items-start gap-4">
          <div className={`w-12 h-12 rounded-full ${iconColor} flex items-center justify-center flex-shrink-0`}>
            <User className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-teal">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
        
        {plans && plans.length > 0 ? (
          <div className="px-6 pb-6">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {plans.map((plan, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-brand-teal">{plan.name}</h4>
                    <Badge variant="outline" className="text-brand-teal border-brand-teal">
                      {plan.price}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : features && features.length > 0 ? (
          <div className="px-6 pb-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
              <h4 className="font-semibold text-brand-teal mb-3">Key Features:</h4>
              <div className="space-y-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
        
        {promotion && (
          <div className="px-6 pb-6">
            <div className="bg-gradient-to-r from-brand-orange/10 to-brand-teal/10 p-4 rounded-lg border border-brand-orange/20">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-white text-brand-orange border-brand-orange">
                  {promotion.title}
                </Badge>
              </div>
              <div className="space-y-1">
                {promotion.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="px-6 pb-6 flex justify-end">
          <Button className="bg-brand-teal hover:bg-brand-teal/90">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalServiceCard;
