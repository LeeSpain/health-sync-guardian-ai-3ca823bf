
import React from 'react';
import { Heart, Bell, Calendar, MessageSquare, Activity, Monitor, Thermometer, Shield, Battery } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Heart className="h-10 w-10 text-brand-orange" />,
      title: "Health Monitoring",
      description: "Track vital signs with connected devices and real-time insights.",
      gradient: "from-orange-50 to-orange-100",
      color: "text-brand-orange",
      hoverColor: "group-hover:bg-brand-orange/10",
      borderColor: "border-brand-orange/20"
    },
    {
      icon: <Bell className="h-10 w-10 text-brand-teal" />,
      title: "Smart Alerts",
      description: "Immediate notifications for critical health changes.",
      gradient: "from-teal-50 to-teal-100",
      color: "text-brand-teal",
      hoverColor: "group-hover:bg-brand-teal/10",
      borderColor: "border-brand-teal/20"
    },
    {
      icon: <Calendar className="h-10 w-10 text-blue-500" />,
      title: "Personalized Reminders",
      description: "Stay on track with tailored health recommendations.",
      gradient: "from-blue-50 to-blue-100",
      color: "text-blue-500",
      hoverColor: "group-hover:bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-purple-500" />,
      title: "AI Companion",
      description: "Interactive health guidance and system support.",
      gradient: "from-purple-50 to-purple-100",
      color: "text-purple-500",
      hoverColor: "group-hover:bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: <Activity className="h-10 w-10 text-green-500" />,
      title: "Professional Support",
      description: "24/7 access to healthcare professionals.",
      gradient: "from-green-50 to-green-100",
      color: "text-green-500",
      hoverColor: "group-hover:bg-green-500/10",
      borderColor: "border-green-500/20"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-grey/10 z-0" />
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-brand-teal/5 blur-3xl z-0" />
      <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-3xl z-0" />
      
      {/* Animated wave background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,181.3C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
                fill="#008B8B" fillOpacity="0.1" className="animate-pulse">
            <animate attributeName="d" 
                    values="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,181.3C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                             M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,266.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                             M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,181.3C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    dur="20s" 
                    repeatCount="indefinite" />
          </path>
          
          <path d="M0,96L48,122.7C96,149,192,203,288,192C384,181,480,107,576,117.3C672,128,768,224,864,256C960,288,1056,256,1152,234.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
                fill="#FF6F42" fillOpacity="0.1" className="animate-pulse">
            <animate attributeName="d" 
                    values="M0,96L48,122.7C96,149,192,203,288,192C384,181,480,107,576,117.3C672,128,768,224,864,256C960,288,1056,256,1152,234.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                             M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,133.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                             M0,96L48,122.7C96,149,192,203,288,192C384,181,480,107,576,117.3C672,128,768,224,864,256C960,288,1056,256,1152,234.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    dur="15s" 
                    repeatCount="indefinite" />
          </path>
        </svg>
      </div>
      
      {/* Animated dots background - improved with randomized animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? "#008B8B" : "#FF6F42",
              animation: `pulse ${Math.random() * 3 + 2}s infinite, float ${Math.random() * 10 + 10}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="inline-block px-4 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium mb-4 border-brand-teal/30">
            What We Offer
          </Badge>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-brand-teal to-brand-teal/80 bg-clip-text text-transparent mb-5">
            Our Key Features
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mx-auto max-w-2xl">
            Our comprehensive health solution is designed for seamless monitoring 
            and support, providing peace of mind for you and your loved ones.
          </p>
        </div>

        {/* Mobile view: Upgraded Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index}>
                  <FeatureCard feature={feature} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="static translate-y-0 mx-2 bg-white border border-gray-200 hover:bg-gray-50" />
              <CarouselNext className="static translate-y-0 mx-2 bg-white border border-gray-200 hover:bg-gray-50" />
            </div>
          </Carousel>
        </div>
        
        {/* Desktop view: Improved hexagon-like pattern with connection lines */}
        <div className="hidden md:block relative">
          {/* First row */}
          <div className="grid grid-cols-3 gap-6 mb-6 relative">
            <div className="col-span-1 transform hover:-translate-y-1 transition-transform duration-300">
              <FeatureCard feature={features[0]} />
            </div>
            <div className="col-span-1 transform hover:-translate-y-1 transition-transform duration-300">
              <FeatureCard feature={features[1]} />
            </div>
            <div className="col-span-1 transform hover:-translate-y-1 transition-transform duration-300">
              <FeatureCard feature={features[2]} />
            </div>
          </div>
          
          {/* Second row */}
          <div className="grid grid-cols-6 gap-6 relative">
            <div className="col-start-2 col-span-2 transform hover:-translate-y-1 transition-transform duration-300">
              <FeatureCard feature={features[3]} />
            </div>
            <div className="col-span-2 transform hover:-translate-y-1 transition-transform duration-300">
              <FeatureCard feature={features[4]} />
            </div>
          </div>
          
          {/* Connected lines with subtle animation */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 800 400">
              {/* Line connecting first row to second row */}
              <path 
                d="M200,130 C300,80 500,80 600,130 C700,180 700,250 600,300 C500,350 300,350 200,300 C100,250 100,180 200,130" 
                fill="none" 
                stroke="url(#gradient-line)" 
                strokeWidth="1.5" 
                strokeDasharray="6,4"
                className="opacity-60"
              >
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="100" 
                  to="0" 
                  dur="15s" 
                  repeatCount="indefinite"
                />
              </path>
              
              {/* Gradient definition */}
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#008B8B" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#FF6F42" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#008B8B" stopOpacity="0.3" />
                  <animate 
                    attributeName="x1" 
                    values="0%;100%;0%" 
                    dur="10s" 
                    repeatCount="indefinite" 
                  />
                  <animate 
                    attributeName="x2" 
                    values="100%;0%;100%" 
                    dur="10s" 
                    repeatCount="indefinite" 
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* Featured technologies bar - new addition */}
        <div className="mt-20 py-4 px-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500 font-medium">Our technology integrates with leading health platforms</p>
            </div>
            <div className="flex items-center space-x-8 opacity-70">
              <div className="flex items-center space-x-2">
                <Monitor className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600 font-medium">HealthKit</span>
              </div>
              <div className="flex items-center space-x-2">
                <Thermometer className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600 font-medium">MedConnect</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600 font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Battery className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-600 font-medium">Long-life Battery</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* New CTA button */}
        <div className="text-center mt-14">
          <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white group shadow-lg shadow-brand-teal/20">
            Explore All Features
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Enhanced Feature card component
const FeatureCard = ({ feature }: { feature: any }) => (
  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full bg-white">
    <div className={`h-1.5 w-full bg-gradient-to-r ${feature.gradient}`}></div>
    <CardContent className="p-8">
      <div className="mb-6 relative">
        <div className="flex items-center justify-center">
          <div className={`p-4 rounded-lg bg-white border ${feature.borderColor} shadow-md transform group-hover:scale-110 transition-all duration-300 relative z-10`}>
            {feature.icon}
            <div className={`absolute -inset-1 rounded-lg opacity-0 ${feature.hoverColor} transition-opacity duration-300 group-hover:opacity-100 -z-10`}></div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-sm opacity-80"></div>
        <div className="absolute -left-3 -bottom-3 w-12 h-12 rounded-full bg-gradient-to-tr from-white to-gray-50 shadow-sm opacity-60"></div>
      </div>
      
      <h3 className={`text-xl font-semibold ${feature.color} mb-3 group-hover:-translate-y-1 transition-transform duration-300`}>
        {feature.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </CardContent>
  </Card>
);

export default Features;
