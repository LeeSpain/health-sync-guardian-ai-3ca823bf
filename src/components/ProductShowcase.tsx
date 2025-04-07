
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Product {
  name: string;
  image: string;
  description: string;
  category: 'device' | 'service' | 'addon';
  type: string;
}

const ProductShowcase: React.FC = () => {
  const products: Product[] = [
    {
      name: "Guardian Button",
      image: "/placeholder.svg",
      description: "One-press emergency button that works anywhere in your home, no phone needed.",
      category: "device",
      type: "Health Monitoring"
    },
    {
      name: "Heart Rate Monitor",
      image: "/placeholder.svg",
      description: "Continuous heart rate tracking with automatic alerts for irregularities.",
      category: "device",
      type: "Health Monitoring"
    },
    {
      name: "iHealth Dashboard Tablet",
      image: "/placeholder.svg",
      description: "Simple, large-format tablet pre-configured for easy health tracking.",
      category: "device",
      type: "Health Monitoring"
    },
    {
      name: "Bed Sensor",
      image: "/placeholder.svg",
      description: "Monitor sleep patterns, bed exits, and nighttime activity without wearables.",
      category: "device",
      type: "Health Monitoring"
    },
    {
      name: "SOS Call Centre",
      image: "/placeholder.svg", 
      description: "Professional emergency response team available 24/7 at the touch of a button.",
      category: "service",
      type: "Professional Services"
    },
    {
      name: "Medication Dispenser",
      image: "/placeholder.svg",
      description: "Automated medication management with reminders and verification.",
      category: "service",
      type: "Professional Services"
    },
    {
      name: "Glucose Monitor",
      image: "/placeholder.svg",
      description: "Continuous glucose tracking with alerts and trend analysis.",
      category: "device",
      type: "Health Monitoring"
    },
    {
      name: "Smart Scales",
      image: "/placeholder.svg",
      description: "Precise weight measurements with trend tracking and automatic syncing.",
      category: "device",
      type: "Health Monitoring"
    },
    {
      name: "Thermometer",
      image: "/placeholder.svg",
      description: "Contactless temperature readings with fever detection and history.",
      category: "device",
      type: "Health Monitoring"
    }
  ];

  // Filter products by category
  const healthMonitoringDevices = products.filter(product => product.type === "Health Monitoring");
  const professionalServices = products.filter(product => product.type === "Professional Services");

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-brand-grey">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-teal mb-4">Complete Care Ecosystem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our integrated solutions work seamlessly together to provide comprehensive health tracking and emergency response.
          </p>
        </div>

        {/* Health Monitoring Devices Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl text-brand-teal font-bold">Health Monitoring Devices</h3>
            <Badge variant="outline" className="bg-brand-teal/10 text-brand-teal border-brand-teal px-4 py-1">
              Seamless Integration
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthMonitoringDevices.map((product, index) => (
              <Card key={index} className="border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:border-brand-accent-teal">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 aspect-video flex items-center justify-center p-8">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-32 w-32 object-contain"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-brand-teal">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand-accent-teal hover:bg-brand-accent-teal/90 group">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Services Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl text-brand-teal font-bold">Professional Services</h3>
            <Badge variant="outline" className="bg-brand-orange/10 text-brand-orange border-brand-orange px-4 py-1">
              Premium Care
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {professionalServices.map((product, index) => (
              <Card key={index} className="border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:border-brand-orange">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 aspect-video flex items-center justify-center p-8">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-32 w-32 object-contain"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-brand-orange">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 group">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
