
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Product {
  name: string;
  image: string;
  description: string;
  oneTimePrice: number;
  monthlyPrice: number;
}

const ProductShowcase: React.FC = () => {
  const products: Product[] = [
    {
      name: "Guardian Button",
      image: "/placeholder.svg",
      description: "One-press emergency button that works anywhere in your home, no phone needed.",
      oneTimePrice: 49.99,
      monthlyPrice: 4.99
    },
    {
      name: "Heart Rate Monitor",
      image: "/placeholder.svg",
      description: "Continuous heart rate tracking with automatic alerts for irregularities.",
      oneTimePrice: 79.99,
      monthlyPrice: 4.99
    },
    {
      name: "iHealth Dashboard Tablet",
      image: "/placeholder.svg",
      description: "Simple, large-format tablet pre-configured for easy health tracking.",
      oneTimePrice: 99.99,
      monthlyPrice: 0
    },
    {
      name: "Bed Sensor",
      image: "/placeholder.svg",
      description: "Monitor sleep patterns, bed exits, and nighttime activity without wearables.",
      oneTimePrice: 129.99,
      monthlyPrice: 4.99
    },
    {
      name: "SOS Call Centre",
      image: "/placeholder.svg", 
      description: "Professional emergency response team available 24/7 at the touch of a button.",
      oneTimePrice: 89.99,
      monthlyPrice: 24.99
    },
    {
      name: "Medication Dispenser",
      image: "/placeholder.svg",
      description: "Automated medication management with reminders and verification.",
      oneTimePrice: 199.99,
      monthlyPrice: 24.99
    }
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-teal mb-4">Health Monitoring Devices</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our integrated devices work seamlessly together to provide comprehensive health tracking and emergency response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="border border-gray-200 overflow-hidden flex flex-col">
              <div className="bg-gray-100 aspect-video flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-40 w-40 object-contain"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-brand-teal">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between text-lg font-medium">
                  <span className="flex flex-col">
                    <span className="text-brand-teal">€{product.oneTimePrice.toFixed(2)}</span>
                    <span className="text-sm text-gray-500">One-time purchase</span>
                  </span>
                  {product.monthlyPrice > 0 && (
                    <span className="flex flex-col text-right">
                      <span className="text-brand-orange">€{product.monthlyPrice.toFixed(2)}/mo</span>
                      <span className="text-sm text-gray-500">Subscription</span>
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-brand-accent-teal hover:bg-brand-accent-teal/90">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
