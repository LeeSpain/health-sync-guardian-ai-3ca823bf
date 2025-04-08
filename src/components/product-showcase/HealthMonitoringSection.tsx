
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, Heart, Thermometer, Wand2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Product } from './types';
import { DeviceCard } from './DeviceCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface HealthMonitoringSectionProps {
  products: Product[];
}

export const HealthMonitoringSection = ({ products }: HealthMonitoringSectionProps) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-teal to-brand-teal/70 flex items-center justify-center mr-4 shadow-md">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl text-brand-teal font-bold">Health Monitoring Devices</h3>
        </div>
        <Badge variant="outline" className="mt-4 md:mt-0 bg-brand-teal/10 text-brand-teal border-brand-teal/30 px-4 py-1.5 font-semibold shadow-sm">
          Seamless Integration
        </Badge>
      </div>
      
      {/* Mobile view: Enhanced carousel */}
      <div className="md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index}>
                <DeviceCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="static translate-y-0 mx-2 bg-white border border-gray-200 hover:bg-gray-50" />
            <CarouselNext className="static translate-y-0 mx-2 bg-white border border-gray-200 hover:bg-gray-50" />
          </div>
        </Carousel>
      </div>
      
      {/* Desktop view: Fixed grid layout that avoids overlapping */}
      <div className="hidden md:block relative">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-brand-teal/5 to-brand-teal/2 blur-3xl -z-10"></div>
        
        {/* Improved grid system */}
        <div className="grid grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="transform transition-all duration-500 hover:-translate-y-2">
              <DeviceCard product={product} />
            </div>
          ))}
        </div>
        
        {/* Decorative connecting lines */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg className="w-full h-full opacity-30" viewBox="0 0 1200 600" preserveAspectRatio="none">
            {/* Horizontal connection lines */}
            <path 
              d="M100,150 H1100" 
              fill="none" 
              stroke="url(#gradient-path-h)" 
              strokeWidth="1.5" 
              strokeDasharray="6,4"
              className="opacity-60"
            />
            <path 
              d="M100,350 H1100" 
              fill="none" 
              stroke="url(#gradient-path-h)" 
              strokeWidth="1.5" 
              strokeDasharray="6,4"
              className="opacity-60"
            />
            
            {/* Vertical connection lines */}
            <path 
              d="M400,50 V550" 
              fill="none" 
              stroke="url(#gradient-path-v)" 
              strokeWidth="1.5" 
              strokeDasharray="6,4"
              className="opacity-60"
            />
            <path 
              d="M800,50 V550" 
              fill="none" 
              stroke="url(#gradient-path-v)" 
              strokeWidth="1.5" 
              strokeDasharray="6,4"
              className="opacity-60"
            />
            
            <defs>
              <linearGradient id="gradient-path-h" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#008B8B" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#008B8B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#008B8B" stopOpacity="0.1" />
                <animate 
                  attributeName="x1" 
                  values="0%;100%;0%" 
                  dur="20s" 
                  repeatCount="indefinite" 
                />
              </linearGradient>
              <linearGradient id="gradient-path-v" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#008B8B" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#008B8B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#008B8B" stopOpacity="0.1" />
                <animate 
                  attributeName="y1" 
                  values="0%;100%;0%" 
                  dur="15s" 
                  repeatCount="indefinite" 
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Health metrics visualization - made more professional */}
      <div className="mt-16 px-6 py-8 bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 rounded-2xl border border-brand-teal/10 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left md:max-w-xs">
            <h4 className="text-xl font-bold text-brand-teal mb-3">Complete Health Dashboard</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              All devices seamlessly connect to provide a comprehensive view of your health metrics in one place.
            </p>
            <Button variant="ghost" className="mt-4 bg-white hover:bg-white/90 text-brand-teal group px-4 py-2 h-auto shadow-sm">
              View All Metrics
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Enhanced metrics visualization with animation */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl">
              {[
                { name: "Heart Rate", icon: <Heart className="h-4 w-4" />, value: "72 bpm", color: "rose" },
                { name: "Temperature", icon: <Thermometer className="h-4 w-4" />, value: "98.6°F", color: "amber" },
                { name: "Steps", icon: <Activity className="h-4 w-4" />, value: "5,280 steps", color: "emerald" },
                { name: "Sleep", icon: <Activity className="h-4 w-4" />, value: "7.5 hours", color: "indigo" },
              ].map((metric, i) => (
                <div 
                  key={i} 
                  className={`flex flex-col items-center gap-2 bg-white py-4 px-3 rounded-xl shadow-sm border border-${metric.color}-100 hover:shadow-md transition-all duration-300`}
                  style={{animation: `float ${2 + i * 0.2}s ease-in-out infinite alternate`}}
                >
                  <div className={`w-10 h-10 rounded-full bg-${metric.color}-50 flex items-center justify-center border border-${metric.color}-100`}>
                    {metric.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500">{metric.name}</div>
                    <div className="font-medium text-brand-teal text-lg">{metric.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="mt-10 text-center">
        <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 group">
          Explore All Devices
          <Wand2 className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
        </Button>
      </div>
    </div>
  );
};
