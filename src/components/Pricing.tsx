
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, LayoutDashboard, Shield, Activity, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import BasePlans from './pricing/BasePlans';
import DevicesTab from './pricing/DevicesTab';
import ServicesTab from './pricing/ServicesTab';
import HelpSection from './pricing/HelpSection';
import PricingFooter from './pricing/PricingFooter';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('plans');

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

        {/* New Dashboard Explanation Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-teal mb-3">Your Members Dashboard</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The foundation of your health monitoring journey starts with our intelligent dashboard
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-brand-teal/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-teal/5 rounded-bl-full -z-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-orange/5 rounded-tr-full -z-10"></div>
              
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-brand-teal/10 rounded-xl flex items-center justify-center">
                  <LayoutDashboard className="w-10 h-10 text-brand-teal" />
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-center text-brand-teal mb-4">
                Intelligent Health Hub
              </h4>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Your Members Dashboard subscription provides the central nervous system for all your health monitoring 
                  devices and services, delivering:
                </p>
                
                <Separator className="my-6" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Data Integration",
                      description: "All your health data in one secure place with smart insights"
                    },
                    {
                      title: "AI Analysis",
                      description: "Personalized health recommendations and early warning alerts"
                    },
                    {
                      title: "Family Dashboard",
                      description: "Monitor loved ones and share access with caregivers"
                    },
                    {
                      title: "Historical Tracking",
                      description: "Track trends and progress with detailed health history"
                    }
                  ].map((feature, index) => (
                    <Card key={index} className="border border-brand-teal/20 bg-brand-teal/5">
                      <CardContent className="p-4">
                        <h5 className="font-medium text-brand-teal">{feature.title}</h5>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-brand-teal">
                How Your Dashboard Works
              </h4>
              
              <div className="space-y-5">
                {[
                  {
                    icon: <Shield className="h-8 w-8 text-white" />,
                    title: "Secure Cloud Platform",
                    description: "Your dashboard runs on our secure, GDPR-compliant cloud platform with medical-grade encryption"
                  },
                  {
                    icon: <Activity className="h-8 w-8 text-white" />,
                    title: "Real-Time Monitoring",
                    description: "Continuous health tracking with instant alerts for unusual patterns or concerning readings"
                  },
                  {
                    icon: <Users className="h-8 w-8 text-white" />,
                    title: "Multi-User Access",
                    description: "Share selective access with family members or healthcare providers for comprehensive care"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-brand-teal flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-brand-teal">{item.title}</h5>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-brand-orange/10 to-brand-teal/10 p-5 rounded-lg border border-brand-teal/20">
                <p className="text-brand-teal font-medium">Your dashboard subscription is automatically included with every plan and becomes more powerful as you add devices and services.</p>
              </div>
            </div>
          </div>
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
          <TabsContent value="plans">
            <BasePlans />
          </TabsContent>

          {/* Devices Tab */}
          <TabsContent value="devices">
            <DevicesTab />
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services">
            <ServicesTab />
          </TabsContent>
        </Tabs>

        <HelpSection />
        <PricingFooter />
      </div>
    </section>
  );
};

export default Pricing;
