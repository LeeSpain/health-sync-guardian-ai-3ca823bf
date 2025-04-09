
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Shield, Zap, PlusCircle, Heart } from 'lucide-react';

interface BasePlan {
  name: string;
  tagline: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  popular: boolean;
  color: string;
  icon: React.ReactNode;
}

interface DashboardAddon {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  icon: React.ReactNode;
}

const BasePlans: React.FC = () => {
  const basePlans: BasePlan[] = [
    {
      name: "Free App",
      tagline: "Basic health monitoring for individuals",
      price: "€0",
      period: "month",
      features: [
        "Basic health dashboard",
        "Single emergency contact",
        "Limited health metrics",
        "Standard alerts",
        "Mobile app access",
        "Basic support"
      ],
      cta: "Download Now",
      popular: false,
      color: "bg-brand-accent-teal",
      icon: <Shield className="h-6 w-6 mb-2" />
    },
    {
      name: "Subscribers App",
      tagline: "Complete health monitoring solution",
      price: "€9.99",
      period: "month",
      features: [
        "Advanced AI dashboard",
        "Multiple emergency contacts",
        "Comprehensive health tracking",
        "Priority alerts",
        "Multi-device access",
        "24/7 premium support"
      ],
      cta: "Subscribe",
      popular: true,
      color: "bg-brand-orange",
      icon: <Zap className="h-6 w-6 mb-2" />
    }
  ];

  const dashboardAddons: DashboardAddon[] = [
    {
      name: "iHealth Dashboard Tablet",
      price: "€99.99",
      period: "one-time",
      features: [
        "24/7 dedicated display",
        "Wall/desk mountable",
        "Continuous metrics view",
        "Auto-updating dashboard"
      ],
      cta: "Add to Cart",
      icon: <PlusCircle className="h-6 w-6 mb-2" />
    },
    {
      name: "Family Dashboard Access",
      price: "€4.99",
      period: "/month",
      features: [
        "Add family members",
        "Shared health tracking",
        "Family notifications",
        "Care coordination"
      ],
      cta: "Add to Cart",
      icon: <Heart className="h-6 w-6 mb-2" />
    }
  ];

  return (
    <div className="space-y-12">
      {/* Base Plans */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {basePlans.map((plan, index) => (
            <Card
              key={index}
              className={`border-2 overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? 'border-brand-orange shadow-lg relative'
                  : 'border-gray-200 hover:border-brand-accent-teal/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-orange text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <div className={`w-12 h-12 rounded-full ${plan.color} mx-auto flex items-center justify-center text-white mb-4`}>
                  {plan.icon}
                </div>
                <CardTitle className="text-xl text-brand-teal">{plan.name}</CardTitle>
                <p className="text-gray-500 mt-1">{plan.tagline}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                  <p className="text-xs text-gray-400 mt-1">Price excludes applicable taxes</p>
                </div>
                <ul className="space-y-3 text-left mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
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
                      : 'bg-brand-accent-teal hover:bg-brand-accent-teal/90'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Dashboard Add-ons */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-2xl text-brand-teal font-bold">Dashboard Add-ons</h3>
          <p className="text-gray-600 mt-2">
            Enhance your dashboard experience with these add-ons
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dashboardAddons.map((addon, index) => (
            <Card
              key={index}
              className="border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-4">
                  {addon.icon}
                </div>
                <CardTitle className="text-xl text-brand-teal">{addon.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-2xl font-bold">{addon.price}</span>
                  <span className="text-gray-500"> {addon.period}</span>
                  <p className="text-xs text-gray-400 mt-1">Price excludes applicable taxes</p>
                </div>
                <ul className="space-y-2">
                  {addon.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-accent-teal mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 group">
                  <span>{addon.cta}</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasePlans;
