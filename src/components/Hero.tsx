
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Heart, Users, Activity } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pb-32">
      {/* Updated Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-brand-teal/5 z-0" />
      <div 
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 z-0"
      />
      <div 
        className="absolute top-0 right-0 w-2/3 h-full bg-brand-teal/5 rounded-bl-[100px] z-0 backdrop-blur-[2px]"
      />
      <div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-teal/5 rounded-tr-[100px] z-0 backdrop-blur-[2px]"
      />
      <div 
        className="absolute right-20 top-20 w-64 h-64 rounded-full bg-brand-teal/10 filter blur-3xl z-0"
      />
      <div 
        className="absolute left-10 bottom-20 w-72 h-72 rounded-full bg-brand-teal/5 filter blur-3xl z-0"
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-left lg:pr-10">
            <div className="relative inline-flex items-center gap-2 bg-brand-teal/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="bg-green-500 h-2 w-2 rounded-full inline-block animate-pulse"></span>
              <span className="text-brand-teal/90 text-sm font-medium">Trusted by 10,000+ users worldwide</span>
              <Badge 
                variant="outline" 
                className="absolute -right-1 -top-1 bg-brand-orange text-white border-0 rounded-full px-2 text-xs font-bold"
              >
                NEW
              </Badge>
            </div>
            
            <h1 className="text-brand-teal mb-6 leading-tight font-bold tracking-tight">
              AI-Powered Health <span className="relative inline-block">
                Monitoring
                <svg className="absolute bottom-1 w-full h-2 text-brand-orange/60" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5 L200,8 L0,8 Z" fill="currentColor" />
                </svg>
              </span> For Everyone
            </h1>
            
            <p className="text-brand-teal/90 text-lg md:text-xl mb-10">
              Providing peace of mind through intelligent health tracking, family connection, and professional support services for all ages.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-brand-teal text-white hover:bg-brand-teal/90 text-lg px-8 py-6 shadow-lg group rounded-full"
              >
                <span>Try For Free</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-teal/50 text-brand-teal hover:bg-brand-teal/10 text-lg px-8 py-6 backdrop-blur-sm rounded-full"
              >
                Explore Solutions
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-brand-teal/30 bg-gray-200 overflow-hidden flex items-center justify-center"
                    style={{ 
                      backgroundImage: `url(https://randomuser.me/api/portraits/women/${i + 20}.jpg)`,
                      backgroundSize: 'cover', 
                      zIndex: 4 - i 
                    }}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className="w-5 h-5 text-yellow-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brand-teal/80 text-sm">
                  <span className="font-bold">4.9/5</span> from 1,200+ reviews
                </p>
              </div>
            </div>
          </div>
          
          {/* Visual/Device Showcase */}
          <div className="lg:w-1/2 relative">
            <div className="relative bg-white backdrop-blur-md rounded-2xl p-6 border border-brand-teal/20 shadow-xl">
              <div className="absolute -top-4 -right-4 bg-brand-orange text-white text-xs font-bold py-1 px-3 rounded-full">
                AI Guardian
              </div>
              
              {/* Mockup dashboard */}
              <div className="bg-white rounded-lg overflow-hidden shadow-inner border border-brand-teal/10">
                <div className="bg-brand-teal/10 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-brand-teal/60 text-xs ml-2">iHealth-Sync Dashboard</div>
                </div>
                
                <div className="p-4">
                  {/* Health Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-brand-teal/5 rounded-lg p-3">
                      <div className="text-brand-teal/60 text-xs">Heart Rate</div>
                      <div className="text-brand-teal text-xl font-bold">72 bpm</div>
                      <div className="w-full h-1 bg-brand-teal/20 rounded-full mt-2 overflow-hidden">
                        <div className="h-full w-2/3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-brand-teal/5 rounded-lg p-3">
                      <div className="text-brand-teal/60 text-xs">Activity</div>
                      <div className="text-brand-teal text-xl font-bold">8,456 steps</div>
                      <div className="w-full h-1 bg-brand-teal/20 rounded-full mt-2 overflow-hidden">
                        <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Conversation */}
                  <div className="bg-brand-teal/5 rounded-lg p-3 mb-3">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-brand-teal flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">AI</span>
                      </div>
                      <div className="bg-brand-teal/10 rounded-lg p-2 text-brand-teal/90 text-sm">
                        Good morning, Alex. Your vitals look good today. You've hit 85% of your daily step goal already!
                      </div>
                    </div>
                    <div className="flex items-start gap-2 justify-end">
                      <div className="bg-brand-orange/20 rounded-lg p-2 text-brand-teal/90 text-sm">
                        Thanks! Can you remind me of my workout schedule?
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">A</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex justify-between">
                    <button className="bg-brand-teal/70 hover:bg-brand-teal text-white text-xs py-1 px-3 rounded-md transition-colors">
                      Share Data
                    </button>
                    <button className="bg-brand-orange/70 hover:bg-brand-orange text-white text-xs py-1 px-3 rounded-md transition-colors">
                      Health Insights
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-brand-teal/30 rounded-full backdrop-blur-md"></div>
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-brand-orange/30 rounded-full backdrop-blur-md"></div>
            </div>
            
            {/* Floating devices */}
            <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-brand-teal/20 shadow-lg transform rotate-6">
              <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center">
                <Heart className="text-white h-6 w-6" />
              </div>
            </div>
            <div className="absolute -bottom-8 right-20 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-brand-teal/20 shadow-lg transform -rotate-3">
              <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center">
                <Activity className="text-white h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature highlights - now as a decorative footer to the hero */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: <Shield className="h-8 w-8 text-brand-teal" />,
              title: "24/7 Protection",
              description: "Always-on monitoring with real-time alerts"
            },
            {
              icon: <Heart className="h-8 w-8 text-brand-teal" />,
              title: "Health Insights",
              description: "Personalized tracking and trend analysis"
            },
            {
              icon: <Users className="h-8 w-8 text-brand-teal" />,
              title: "Family Connection",
              description: "Stay connected with loved ones"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-brand-teal/5 backdrop-blur-sm rounded-xl p-5 border border-brand-teal/10 hover:border-brand-teal/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-brand-teal/10 rounded-lg p-3 group-hover:bg-brand-teal/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-brand-teal text-lg font-semibold">{feature.title}</h3>
                  <p className="text-brand-teal/80 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
