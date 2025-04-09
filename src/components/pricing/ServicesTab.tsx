
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
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

const ServicesTab: React.FC = () => {
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
        <div className="text-center mb-8">
          <h3 className="text-2xl text-brand-teal font-bold">Professional Care</h3>
          <p className="text-gray-600 mt-2">
            Expert healthcare services and monitoring solutions
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {professionalServices.map((service, index) => (
            <Card
              key={service.id}
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

      {/* Nurse-Sync Section Removed */}
    </div>
  );
};

export default ServicesTab;
