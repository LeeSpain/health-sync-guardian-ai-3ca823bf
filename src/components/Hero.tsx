
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal to-brand-teal/90 py-20 sm:py-32">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white mb-6">
            AI-Powered Health Monitoring For Elderly Care
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Providing peace of mind through intelligent health tracking, family connection, and professional support services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-brand-teal hover:bg-white/90 text-lg px-8 py-6"
            >
              Try For Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              Explore Products
            </Button>
          </div>
          
          <div className="mt-12 p-4 bg-white/10 backdrop-blur-sm rounded-lg inline-block">
            <p className="text-white/90 flex items-center gap-2">
              <span className="bg-green-500 h-2 w-2 rounded-full inline-block animate-pulse"></span>
              Currently monitoring 10,000+ seniors worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
