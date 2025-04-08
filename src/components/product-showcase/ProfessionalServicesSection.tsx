
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Shield, PhoneCall } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Product } from './types';

interface ProfessionalServicesSectionProps {
  products: Product[];
}

export const ProfessionalServicesSection = ({ products }: ProfessionalServicesSectionProps) => {
  // Log products to help with debugging
  React.useEffect(() => {
    console.log("Professional Services products:", products.map(p => `${p.name}: ${p.image}`));
  }, [products]);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-orange to-brand-orange/70 flex items-center justify-center mr-4 shadow-md">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl text-brand-orange font-bold">Professional Services</h3>
        </div>
        <Badge variant="outline" className="mt-4 md:mt-0 bg-brand-orange/10 text-brand-orange border-brand-orange/30 px-4 py-1.5 font-semibold shadow-sm">
          Premium Care
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row bg-white h-full">
              {/* Image container (left side) */}
              <div className="md:w-2/5 p-6 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  {/* Direct img tag with improved size */}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-20 w-20 object-contain" 
                    width={80}
                    height={80}
                    loading="eager"
                    onLoad={() => console.log(`Image loaded successfully: ${product.name} - ${product.image}`)}
                    onError={(e) => console.error(`Image failed to load: ${product.name} - ${product.image}`, e)}
                    data-testid={`${product.name.toLowerCase().replace(/\s+/g, '-')}-image`}
                  />
                </div>
              </div>
              
              {/* Content container (right side) */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                <h4 className="text-xl text-brand-orange font-bold mb-3">{product.name}</h4>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                
                {product.benefits && (
                  <ul className="mt-2 space-y-2 mb-5">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-sm">
                        <Check className="h-3 w-3 text-brand-orange mt-1 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                <Button className="mt-auto w-full bg-gradient-to-r from-brand-orange/90 to-brand-orange hover:from-brand-orange hover:to-brand-orange/90 shadow-md group">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
