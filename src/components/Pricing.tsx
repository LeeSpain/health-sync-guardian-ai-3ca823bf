import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Shield, Zap, PlusCircle, Heart, HelpCircle, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('plans');

  const basePlans = [
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

  const dashboardAddons = [
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

  const smartDevices = [
    {
      name: "Guardian Button",
      price: "€49.99",
      subscription: "+ €4.99/month",
      features: [
        "One-touch emergency alert",
        "Water-resistant design",
        "GPS tracking",
        "Long battery life"
      ],
      cta: "Add to Cart"
    },
    {
      name: "Heart Rate Monitor",
      price: "€79.99",
      subscription: "+ €4.99/month",
      features: [
        "24/7 heart rate monitoring",
        "ECG capabilities",
        "Irregular rhythm detection",
        "Mobile app integration"
      ],
      cta: "Add to Cart"
    },
    {
      name: "Smart Scales",
      price: "€89.99",
      subscription: "+ €4.99/month",
      features: [
        "Multiple health metrics",
        "Smart phone sync",
        "Family profiles",
        "Trend analysis"
      ],
      cta: "Add to Cart"
    },
    {
      name: "Thermometer",
      price: "€39.99",
      subscription: "+ €4.99/month",
      features: [
        "Instant readings",
        "Fever alerts",
        "History tracking",
        "Multi-user support"
      ],
      cta: "Add to Cart"
    },
    {
      name: "Bed Sensor",
      price: "€129.99",
      subscription: "+ €4.99/month",
      features: [
        "Sleep pattern analysis",
        "Movement detection",
        "Environmental monitoring",
        "Smart alarms"
      ],
      cta: "Add to Cart"
    }
  ];

  const professionalServices = [
    {
      name: "SOS Pendant & Call Centre",
      price: "€89.99",
      subscription: "+ €24.99/month",
      features: [
        "24/7 emergency response",
        "Professional call handlers",
        "Multi-language support",
        "GPS location tracking"
      ],
      cta: "Add to Cart"
    },
    {
      name: "Medication Dispenser",
      price: "€199.99",
      subscription: "+ €24.99/month",
      features: [
        "Automated dispensing",
        "Medication tracking",
        "Smart reminders",
        "Refill monitoring"
      ],
      cta: "Add to Cart"
    },
    {
      name: "Glucose Monitor",
      price: "€199.99",
      subscription: "+ €24.99/month",
      features: [
        "Continuous monitoring",
        "Real-time alerts",
        "Trend analysis",
        "Healthcare integration"
      ],
      cta: "Add to Cart"
    }
  ];

  const nurseServices = {
    name: "Nurse-Sync Services",
    features: [
      "Personalized care packages",
      "Professional nurse support",
      "Flexible scheduling",
      "Comprehensive care plans"
    ],
    cta: "View Nurse-Sync Packages"
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-brand-grey to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-teal mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start with our powerful health monitoring dashboard
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="plans">Base Plans</TabsTrigger>
              <TabsTrigger value="devices">Devices</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>
          </div>

          {/* Base Plans Tab */}
          <TabsContent value="plans" className="space-y-12">
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
          </TabsContent>

          {/* Devices Tab */}
          <TabsContent value="devices">
            <div className="text-center mb-8">
              <h3 className="text-2xl text-brand-teal font-bold">AI-Powered Devices</h3>
              <p className="text-gray-600 mt-2">
                Enhance Your Experience - Add smart devices to your monitoring system
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {smartDevices.map((device, index) => (
                <Card 
                  key={index} 
                  className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                    <img 
                      src="/placeholder.svg" 
                      alt={device.name} 
                      className="h-24 w-24 object-contain"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-brand-teal">{device.name}</CardTitle>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-2xl font-bold">{device.price}</span>
                      <Badge className="ml-2 bg-brand-orange/10 text-brand-orange border-brand-orange">
                        {device.subscription}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {device.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-brand-accent-teal mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-brand-accent-teal hover:bg-brand-accent-teal/90 group">
                      <span>{device.cta}</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services">
            <div className="space-y-16">
              {/* Professional Services */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-brand-teal font-bold">Professional Care</h3>
                  <p className="text-gray-600 mt-2">
                    Expert healthcare services and monitoring solutions
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {professionalServices.map((service, index) => (
                    <Card 
                      key={index} 
                      className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 flex items-center justify-center">
                        <img 
                          src="/placeholder.svg" 
                          alt={service.name} 
                          className="h-24 w-24 object-contain"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl text-brand-orange">{service.name}</CardTitle>
                        <div className="mt-2 flex items-baseline">
                          <span className="text-2xl font-bold">{service.price}</span>
                          <Badge className="ml-2 bg-brand-orange/10 text-brand-orange border-brand-orange">
                            {service.subscription}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-5 w-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 group">
                          <span>{service.cta}</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Nurse Services */}
              <div className="max-w-4xl mx-auto">
                <Card className="border-2 border-brand-teal overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-brand-teal/5 to-transparent">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl text-brand-teal">{nurseServices.name}</CardTitle>
                      <Badge className="bg-brand-teal text-white">Premium Service</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {nurseServices.features.map((feature, i) => (
                        <div key={i} className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                          <Check className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full md:w-auto ml-auto bg-brand-teal hover:bg-brand-teal/90 group">
                      <span>{nurseServices.cta}</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-brand-grey rounded-lg p-8 max-w-5xl mx-auto">
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
      </div>
    </section>
  );
};

export default Pricing;
