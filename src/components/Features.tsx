
import React from 'react';
import { Heart, Bell, Calendar, MessageSquare, Activity } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Heart className="h-12 w-12 text-brand-orange" />,
      title: "Real-Time Health Monitoring",
      description: "Track vital signs including heart rate, blood pressure, and activity levels through our connected devices."
    },
    {
      icon: <Bell className="h-12 w-12 text-brand-orange" />,
      title: "Intelligent Alerts",
      description: "Receive immediate notifications when health metrics fall outside normal ranges, with automatic updates to your care network."
    },
    {
      icon: <Calendar className="h-12 w-12 text-brand-orange" />,
      title: "Smart Reminders",
      description: "Stay on track with personalized reminders for medications, workouts, and health check-ins."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-brand-orange" />,
      title: "AI Guardian Assistant",
      description: "Interact with our caring AI companion for health advice, motivation, and system guidance tailored to your needs."
    },
    {
      icon: <Activity className="h-12 w-12 text-brand-orange" />,
      title: "Professional Support",
      description: "Access to healthcare professionals and emergency response teams when needed, 24/7."
    }
  ];

  return (
    <section id="features" className="pt-32 pb-20 bg-brand-grey relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-teal/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-brand-orange/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-brand-teal mb-4">Features Designed For Everyone</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with human compassion to create a complete health solution for users of all ages.
          </p>
        </div>

        <div className="relative">
          {/* Hexagon background pattern - decorative */}
          <div className="absolute inset-0 grid grid-cols-6 h-full w-full opacity-5 z-0 pointer-events-none">
            {Array.from({ length: 30 }).map((_, index) => (
              <div key={index} className="aspect-square bg-brand-teal rounded-lg transform rotate-45"></div>
            ))}
          </div>
          
          {/* Feature items with alternating layout */}
          <div className="space-y-12 md:space-y-24 relative z-10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse text-right' : 'text-left'} gap-8 md:gap-16`}
              >
                <div className="md:w-1/3 relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-brand-orange/20 rounded-full filter blur-xl transform scale-150"></div>
                  <div className="relative bg-white shadow-lg rounded-2xl p-6 flex items-center justify-center aspect-square">
                    <div className="bg-gradient-to-br from-brand-teal/10 to-brand-orange/10 rounded-full p-8 transform hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-teal mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
