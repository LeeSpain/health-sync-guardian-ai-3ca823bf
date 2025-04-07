
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Heart, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-teal to-brand-teal/90 py-20 sm:py-32">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
      <div 
        className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-teal/20"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)' 
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="bg-green-500 h-2 w-2 rounded-full inline-block animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">Trusted by 10,000+ seniors worldwide</span>
          </div>
          
          <h1 className="text-white mb-6 leading-tight">
            AI-Powered Health Monitoring For Elderly Care
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Providing peace of mind through intelligent health tracking, family connection, and professional support services.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <Button 
              size="lg" 
              className="bg-white text-brand-teal hover:bg-white/90 text-lg px-8 py-6 shadow-lg group"
            >
              <span>Try For Free</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm"
            >
              Explore Solutions
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center transition-transform hover:translate-y-[-5px]">
              <Shield className="h-10 w-10 text-white mb-2" />
              <h3 className="text-white text-lg font-medium">24/7 Protection</h3>
              <p className="text-white/80 text-sm">Always-on monitoring with real-time alerts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center transition-transform hover:translate-y-[-5px]">
              <Heart className="h-10 w-10 text-white mb-2" />
              <h3 className="text-white text-lg font-medium">Health Insights</h3>
              <p className="text-white/80 text-sm">Personalized tracking and trend analysis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center transition-transform hover:translate-y-[-5px]">
              <Users className="h-10 w-10 text-white mb-2" />
              <h3 className="text-white text-lg font-medium">Family Connection</h3>
              <p className="text-white/80 text-sm">Stay connected with loved ones</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
