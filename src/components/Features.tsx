
import React from 'react';
import { Heart, Bell, Calendar, MessageSquare, Activity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Heart className="h-10 w-10 text-brand-orange" />,
      title: "Health Monitoring",
      description: "Track vital signs with connected devices and real-time insights.",
      gradient: "from-orange-50 to-orange-100"
    },
    {
      icon: <Bell className="h-10 w-10 text-brand-teal" />,
      title: "Smart Alerts",
      description: "Immediate notifications for critical health changes.",
      gradient: "from-teal-50 to-teal-100"
    },
    {
      icon: <Calendar className="h-10 w-10 text-blue-500" />,
      title: "Personalized Reminders",
      description: "Stay on track with tailored health recommendations.",
      gradient: "from-blue-50 to-blue-100"
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-purple-500" />,
      title: "AI Companion",
      description: "Interactive health guidance and system support.",
      gradient: "from-purple-50 to-purple-100"
    },
    {
      icon: <Activity className="h-10 w-10 text-green-500" />,
      title: "Professional Support",
      description: "24/7 access to healthcare professionals.",
      gradient: "from-green-50 to-green-100"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-brand-grey/5 z-0" />
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-brand-teal/5 blur-3xl z-0" />
      <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-3xl z-0" />
      
      {/* Animated dots background */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-brand-teal"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-brand-teal mb-5">Key Features</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive health solutions designed for seamless monitoring and support.
          </p>
        </div>

        {/* Mobile view: Carousel */}
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
              <CarouselPrevious className="static translate-y-0 mx-2" />
              <CarouselNext className="static translate-y-0 mx-2" />
            </div>
          </Carousel>
        </div>
        
        {/* Desktop view: Hexagon-like pattern */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="col-span-1">
              <FeatureCard feature={features[0]} />
            </div>
            <div className="col-span-1">
              <FeatureCard feature={features[1]} />
            </div>
            <div className="col-span-1">
              <FeatureCard feature={features[2]} />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-start-2 col-span-2">
              <FeatureCard feature={features[3]} />
            </div>
            <div className="col-span-2">
              <FeatureCard feature={features[4]} />
            </div>
          </div>
        </div>
        
        {/* Connected lines */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 800 400">
            <path 
              d="M200,100 C300,50 500,50 600,100 C700,150 700,250 600,300 C500,350 300,350 200,300 C100,250 100,150 200,100" 
              fill="none" 
              stroke="rgba(0, 128, 128, 0.1)" 
              strokeWidth="2" 
              strokeDasharray="5,5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

// Feature card component
const FeatureCard = ({ feature }: { feature: any }) => (
  <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full`}>
    <div className={`bg-gradient-to-br ${feature.gradient} h-2 w-full`}></div>
    <CardContent className="p-8">
      <div className="mb-6 flex items-center justify-center">
        <div className={`p-4 rounded-lg bg-white shadow-md transform group-hover:scale-110 transition-transform duration-300 border border-gray-100`}>
          {feature.icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-brand-teal mb-3 group-hover:-translate-y-1 transition-transform duration-300">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </CardContent>
  </Card>
);

export default Features;
