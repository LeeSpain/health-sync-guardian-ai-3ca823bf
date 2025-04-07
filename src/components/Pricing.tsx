
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Free App",
      features: [
        "Basic dashboard",
        "Single emergency contact",
        "Limited health metrics",
        "Daily health summaries"
      ],
      cta: "Download Free",
      popular: false,
      color: "brand-accent-teal"
    },
    {
      name: "Subscribers App",
      features: [
        "Advanced AI dashboard",
        "Multiple emergency contacts",
        "Full metric tracking",
        "24/7 AI Guardian access",
        "Data sharing with family members",
        "Customizable alert thresholds"
      ],
      cta: "View Subscription Details",
      popular: true,
      color: "brand-orange"
    },
    {
      name: "Professional Care",
      features: [
        "Everything in Subscribers App",
        "SOS Call Centre access",
        "Professional monitoring",
        "Weekly care reports",
        "Video consultations",
        "Personalized care plans"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "brand-teal"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-brand-grey to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-teal mb-4">Choose Your Care Level</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Flexible plans designed to meet your specific needs. Add devices and services as required for complete customization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border-2 ${
                plan.popular 
                  ? 'border-brand-orange shadow-lg relative' 
                  : 'border-gray-200 hover:border-brand-accent-teal/50 transition-all duration-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-orange text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Popular
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className={`text-xl text-${plan.color}`}>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-3 text-left mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`h-5 w-5 text-${plan.color} mr-2 mt-0.5 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full group ${
                    plan.popular 
                      ? 'bg-brand-orange hover:bg-brand-orange/90' 
                      : `bg-${plan.color} hover:bg-${plan.color}/90`
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our transparent pricing model ensures you only pay for what you need. Contact our sales team for detailed pricing information and personalized recommendations.
          </p>
          <Button variant="outline" className="mt-6 border-brand-teal text-brand-teal hover:bg-brand-teal/10">
            Request Pricing Details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
