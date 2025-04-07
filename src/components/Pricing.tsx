
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Free App",
      price: 0,
      features: [
        "Basic dashboard",
        "Single emergency contact",
        "Limited health metrics",
        "Daily health summaries"
      ],
      cta: "Download Free",
      popular: false
    },
    {
      name: "Subscribers App",
      price: 9.99,
      features: [
        "Advanced AI dashboard",
        "Multiple emergency contacts",
        "Full metric tracking",
        "24/7 AI Guardian access",
        "Data sharing with family members",
        "Customizable alert thresholds"
      ],
      cta: "Start Subscription",
      popular: true
    },
    {
      name: "Professional Care",
      price: 34.98,
      features: [
        "Everything in Subscribers App",
        "SOS Call Centre access",
        "Professional nurse monitoring",
        "Weekly care reports",
        "Video consultations",
        "Personalized care plans"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-brand-grey">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-teal mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Add devices and services as required for complete customization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border-2 ${
                plan.popular 
                  ? 'border-brand-accent-teal shadow-lg relative' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-accent-teal text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Popular
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl text-brand-teal">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold">€{plan.price.toFixed(2)}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 text-left mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-accent-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-brand-orange hover:bg-brand-orange/90' 
                      : 'bg-brand-accent-teal hover:bg-brand-accent-teal/90'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            All prices include applicable taxes. Device purchases may require additional one-time costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
