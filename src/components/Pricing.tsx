import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Shield, Zap, PlusCircle, Heart, HelpCircle, AlertCircle, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from 'react-router-dom';

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
      subscription: "€4.99/month",
      features: [
        "One-touch emergency alert",
        "Water-resistant design",
        "GPS tracking",
        "Long battery life"
      ],
      cta: "Add to Cart",
      image: "/lovable-uploads/c38f7f2c-ac88-45a4-be0e-6ca22e7498f1.png"
    },
    {
      name: "Heart Rate Monitor",
      price: "€79.99",
      subscription: "€4.99/month",
      features: [
        "24/7 heart rate monitoring",
        "ECG capabilities",
        "Irregular rhythm detection",
        "Mobile app integration"
      ],
      cta: "Add to Cart",
      image: "/lovable-uploads/2372f3d6-0624-4858-96b0-44839b74bce5.png"
    },
    {
      name: "Smart Scales",
      price: "€89.99",
      subscription: "€4.99/month",
      features: [
        "Multiple health metrics",
        "Smart phone sync",
        "Family profiles",
        "Trend analysis"
      ],
      cta: "Add to Cart",
      image: "/lovable-uploads/8d6cc63b-a2fa-4688-9ba8-2a6c0e3a327a.png"
    },
    {
      name: "Thermometer",
      price: "€39.99",
      subscription: "€4.99/month",
      features: [
        "Instant readings",
        "Fever alerts",
        "History tracking",
        "Multi-user support"
      ],
      cta: "Add to Cart",
      image: "/lovable-uploads/ec15308f-f7c7-4558-8c68-3a3c04deac25.png"
    },
    {
      name: "Bed Sensor",
      price: "€129.99",
      subscription: "€4.99/month",
      features: [
        "Sleep pattern analysis",
        "Movement detection",
        "Environmental monitoring",
        "Smart alarms"
      ],
      cta: "Add to Cart",
      image: "/lovable-uploads/bc5cfcc2-3468-4e5f-a99f-111609b5d011.png"
    }
  ];

  const professionalServices = [
    {
      name: "SOS Pendant & Call Centre",
      price: "€89.99",
      subscription: "€24.99/month",
      features: [
        "24/7 emergency response",
        "Professional call handlers",
        "Multi-language support",
        "GPS location tracking"
      ],
      cta: "Add to Cart",
      image: "/lovable-uploads/3bc60e76-02c6-4226-972b-87293e92d1cf.png"
    },
    {
      name: "Medication Dispenser",
      price: "€199.99",
      subscription: "€24.99/month",
      features: [
        "Automated dispensing",
        "Medication tracking",
        "Smart reminders",
        "Refill monitoring"
      ],
      cta: "Add to Cart",
      image: "/lovable-uploads/aec16bb7-f544-4fb2-a359-9daa3038709b.png"
    },
    {
      name: "Glucose Monitor",
      price: "€199.99",
      subscription: "€24.99/month",
      features: [
        "Continuous monitoring",
        "Real-time alerts",
        "Trend analysis",
        "Healthcare integration"
      ],
      cta: "Add to Cart",
      image: "/lovable-uploads/db9b76be-b145-473e-a52d-4e6dd3a111e4.png"
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
    cta: "View Nurse-Sync Packages",
    image: "/lovable-uploads/f68f076e-3106-408f-8115-40910ce100da.png"
  };

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-brand-grey/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Start with our powerful health monitoring dashboard and customize with devices and services
          </p>
          <Link to="/pricing">
            <Button className="mt-6 bg-brand-orange hover:bg-brand-orange/90">
              View Full Product Catalog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <div className="flex justify-center mb-10">
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
          </TabsContent>

          {/* Devices Tab */}
          <TabsContent value="devices">
            <div className="text-center mb-8">
              <h3 className="text-2xl text-brand-teal font-bold">AI-Powered Devices</h3>
              <p className="text-gray-600 mt-2">
                Enhance Your Experience - Add smart devices to your monitoring system
              </p>
            </div>
            <ResizablePanelGroup direction="horizontal" className="min-h-[600px] rounded-lg border">
              <ResizablePanel defaultSize={75} minSize={40}>
                <ScrollArea className="h-[600px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
                    {smartDevices.map((device, index) => (
                      <Card 
                        key={index} 
                        className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                      >
                        <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                          <img 
                            src={device.image} 
                            alt={device.name} 
                            className="h-36 w-36 object-contain"
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
                          <p className="text-xs text-gray-400 mt-1">Price excludes applicable taxes</p>
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
                </ScrollArea>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={25} minSize={20}>
                <div className="bg-brand-grey/10 p-6 h-full">
                  <h3 className="text-lg font-semibold text-brand-teal mb-4">Device Specifications</h3>
                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2 flex items-center">
                        <Star className="h-4 w-4 text-brand-orange mr-2" />
                        Advanced AI Processing
                      </h4>
                      <p className="text-sm text-gray-600">
                        All our devices utilize advanced AI algorithms to provide accurate health metrics and predictive insights.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2 flex items-center">
                        <Star className="h-4 w-4 text-brand-orange mr-2" />
                        Seamless Integration
                      </h4>
                      <p className="text-sm text-gray-600">
                        Every device connects seamlessly with the iHealth Dashboard for a unified monitoring experience.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2 flex items-center">
                        <Star className="h-4 w-4 text-brand-orange mr-2" />
                        Extended Battery Life
                      </h4>
                      <p className="text-sm text-gray-600">
                        Our devices are designed with low power consumption for extended use between charges.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-2 flex items-center">
                        <AlertCircle className="h-4 w-4 text-brand-teal mr-2" />
                        Monthly Subscription
                      </h4>
                      <p className="text-sm text-gray-600">
                        The monthly subscription includes cloud storage, continuous software updates, and priority customer support.
                      </p>
                    </div>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
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
                      <div className="h-48 bg-gradient-to-br from-orange-50 to-orange-100 p-6 flex items-center justify-center">
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="h-36 w-36 object-contain"
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
                        <p className="text-xs text-gray-400 mt-1">Price excludes applicable taxes</p>
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
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gradient-to-br from-brand-teal/10 to-transparent p-6 flex items-center justify-center">
                      <img 
                        src={nurseServices.image} 
                        alt={nurseServices.name} 
                        className="h-48 w-48 object-contain"
                      />
                    </div>
                    <div className="md:w-2/3">
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
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

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

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            For detailed pricing information including taxes and shipping costs, please proceed to the checkout page.
            <br />
            All prices are subject to applicable taxes which will be calculated at checkout.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
