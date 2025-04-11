
import React, { memo } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProfessionalService {
  id: string;
  name: string;
  price: string;
  subscription: string;
  features: string[];
  cta: string;
  image: string;
}

// Create optimized components for better re-rendering performance
const ServiceFeature = memo(({ feature }: { feature: string }) => (
  <li className="flex items-start">
    <Check className="h-5 w-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" />
    <span>{feature}</span>
  </li>
));

const ServiceCard = memo(({ service }: { service: ProfessionalService }) => (
  <Card
    key={service.id}
    className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full group"
  >
    <div className="flex flex-col h-full">
      {/* Image container with full coverage */}
      <div className="h-[300px] relative overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        
        {/* Subtle overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-100/20 to-transparent"></div>
      </div>
      
      <CardHeader className="pb-2 flex-grow-0 pt-5">
        <CardTitle className="text-xl font-bold text-brand-orange flex items-center">
          {service.name}
        </CardTitle>
        <div className="mt-3 flex items-baseline">
          <span className="text-2xl font-bold">{service.price}</span>
          <Badge className="ml-2 bg-brand-orange/10 text-brand-orange border-brand-orange">
            {service.subscription}
          </Badge>
        </div>
        <p className="text-xs text-gray-400 mt-1">Price excludes applicable taxes</p>
      </CardHeader>
      <CardContent className="flex-grow pt-2">
        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <ServiceFeature key={i} feature={feature} />
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto pt-2 pb-6">
        <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 group relative overflow-hidden shadow-md">
          <span className="relative z-10">{service.cta}</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-orange/90 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Button>
      </CardFooter>
    </div>
  </Card>
));

// Memoize the entire component to prevent unnecessary re-renders
const ServicesTab: React.FC = memo(() => {
  // Hardcoded data to avoid re-creating array on each render
  const professionalServices: ProfessionalService[] = [
    {
      id: 'sos-pendant',
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
      id: 'medication-dispenser',
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
      id: 'glucose-monitor',
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

  return (
    <div className="space-y-16">
      {/* Professional Services */}
      <div>
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-brand-orange/10 rounded-full mb-4">
            <Shield className="h-6 w-6 text-brand-orange" />
          </div>
          <h3 className="text-2xl sm:text-3xl text-brand-orange font-bold">Professional Care Services</h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Expert healthcare services and monitoring solutions designed for your peace of mind
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {professionalServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
            />
          ))}
        </div>
      </div>
    </div>
  );
});

ServicesTab.displayName = 'ServicesTab';

export default ServicesTab;
