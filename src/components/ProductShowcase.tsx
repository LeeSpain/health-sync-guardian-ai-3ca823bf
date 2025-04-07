
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, Shield, Activity, Thermometer, Bell } from 'lucide-react';

interface Product {
  name: string;
  image: string;
  description: string;
  category: 'device' | 'service' | 'addon';
  type: string;
  icon: React.ReactNode;
}

const ProductShowcase: React.FC = () => {
  const products: Product[] = [
    {
      name: "Guardian Button",
      image: "/placeholder.svg",
      description: "One-press emergency button that works anywhere in your home, no phone needed.",
      category: "device",
      type: "Health Monitoring",
      icon: <Shield className="h-6 w-6" />
    },
    {
      name: "Heart Rate Monitor",
      image: "/placeholder.svg",
      description: "Continuous heart rate tracking with automatic alerts for irregularities.",
      category: "device",
      type: "Health Monitoring",
      icon: <Heart className="h-6 w-6" />
    },
    {
      name: "iHealth Dashboard Tablet",
      image: "/placeholder.svg",
      description: "Simple, large-format tablet pre-configured for easy health tracking.",
      category: "device",
      type: "Health Monitoring",
      icon: <Activity className="h-6 w-6" />
    },
    {
      name: "Bed Sensor",
      image: "/placeholder.svg",
      description: "Monitor sleep patterns, bed exits, and nighttime activity without wearables.",
      category: "device",
      type: "Health Monitoring",
      icon: <Activity className="h-6 w-6" />
    },
    {
      name: "SOS Call Centre",
      image: "/placeholder.svg", 
      description: "Professional emergency response team available 24/7 at the touch of a button.",
      category: "service",
      type: "Professional Services",
      icon: <Bell className="h-6 w-6" />
    },
    {
      name: "Medication Dispenser",
      image: "/placeholder.svg",
      description: "Automated medication management with reminders and verification.",
      category: "service",
      type: "Professional Services",
      icon: <Activity className="h-6 w-6" />
    },
    {
      name: "Glucose Monitor",
      image: "/placeholder.svg",
      description: "Continuous glucose tracking with alerts and trend analysis.",
      category: "device",
      type: "Health Monitoring",
      icon: <Activity className="h-6 w-6" />
    },
    {
      name: "Smart Scales",
      image: "/placeholder.svg",
      description: "Precise weight measurements with trend tracking and automatic syncing.",
      category: "device",
      type: "Health Monitoring",
      icon: <Activity className="h-6 w-6" />
    },
    {
      name: "Thermometer",
      image: "/placeholder.svg",
      description: "Contactless temperature readings with fever detection and history.",
      category: "device",
      type: "Health Monitoring",
      icon: <Thermometer className="h-6 w-6" />
    }
  ];

  // Filter products by category
  const healthMonitoringDevices = products.filter(product => product.type === "Health Monitoring");
  const professionalServices = products.filter(product => product.type === "Professional Services");

  return (
    <section id="products" className="py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-grey/30 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-0"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-teal/5 rounded-tl-full z-0"></div>
      <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-brand-orange/5 rounded-br-full z-0"></div>
      
      {/* Curved lines */}
      <svg className="absolute top-1/3 left-0 w-full h-64 z-0 text-brand-teal/10" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <path d="M0,100 C300,0 600,200 1200,100 L1200,200 L0,200 Z" fill="currentColor" />
      </svg>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-brand-teal mb-4">Complete Care Ecosystem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our integrated solutions work seamlessly together to provide comprehensive health tracking and emergency response.
          </p>
        </div>

        {/* Health Monitoring Devices Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center mr-4">
                <Heart className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="text-2xl text-brand-teal font-bold">Health Monitoring Devices</h3>
            </div>
            <Badge variant="outline" className="mt-4 md:mt-0 bg-brand-teal/10 text-brand-teal border-brand-teal px-4 py-1">
              Seamless Integration
            </Badge>
          </div>
          
          <div className="relative">
            {/* Staggered device cards with hover effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {healthMonitoringDevices.map((product, index) => (
                <div key={index} className="group relative z-10">
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-brand-teal/10 rounded-xl transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 -z-10"></div>
                  
                  {/* Product Card */}
                  <div className="relative flex flex-col h-full transform group-hover:-translate-y-2 transition-all duration-300">
                    {/* Graphic header */}
                    <div className="relative aspect-video overflow-hidden rounded-t-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-brand-teal/20 z-0"></div>
                      <div className="h-full w-full flex items-center justify-center p-6 relative z-10">
                        <div className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="h-16 w-16 object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Accent corner */}
                      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-brand-teal rounded-bl-xl transform rotate-0 origin-top-right group-hover:rotate-90 transition-transform duration-300"></div>
                        <div className="absolute top-2 right-2 text-white z-10">
                          {product.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white rounded-b-xl p-6 flex-grow shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <h4 className="text-xl text-brand-teal font-semibold mb-2">{product.name}</h4>
                      <p className="text-gray-600 mb-6">{product.description}</p>
                      <Button className="mt-auto w-full bg-brand-accent-teal hover:bg-brand-accent-teal/90 group">
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Services Section */}
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-2xl text-brand-orange font-bold">Professional Services</h3>
            </div>
            <Badge variant="outline" className="mt-4 md:mt-0 bg-brand-orange/10 text-brand-orange border-brand-orange px-4 py-1">
              Premium Care
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {professionalServices.map((product, index) => (
              <div key={index} className="group relative overflow-hidden">
                {/* Service card with split design */}
                <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm group-hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Left side visual */}
                  <div className="md:w-2/5 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-200 z-0"></div>
                    <div className="h-48 md:h-full w-full flex items-center justify-center relative z-10 p-6">
                      <div className="w-20 h-20 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Decorative element */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-orange rounded-tl-2xl md:rounded-tr-none transform translate-y-8 md:translate-y-0 md:-translate-x-8 group-hover:translate-y-0 md:group-hover:translate-x-0 transition-transform duration-300"></div>
                  </div>
                  
                  {/* Right side content */}
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <h4 className="text-xl text-brand-orange font-semibold mb-3">{product.name}</h4>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <Button className="mt-auto w-full bg-brand-orange hover:bg-brand-orange/90 group">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
