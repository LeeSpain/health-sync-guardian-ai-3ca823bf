
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Star, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SmartDevice {
  name: string;
  price: string;
  subscription: string;
  features: string[];
  cta: string;
  image: string;
}

const DevicesTab: React.FC = () => {
  const smartDevices: SmartDevice[] = [
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

  return (
    <div>
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
                  className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={device.image}
                        alt={device.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
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
                  <CardFooter className="mt-auto">
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
    </div>
  );
};

export default DevicesTab;
