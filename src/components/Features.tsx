
import React from 'react';
import { Heart, Bell, Calendar, MessageSquare, Activity } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-brand-orange" />,
      title: "Health Monitoring",
      description: "Track vital signs with connected devices and real-time insights."
    },
    {
      icon: <Bell className="h-8 w-8 text-brand-orange" />,
      title: "Smart Alerts",
      description: "Immediate notifications for critical health changes."
    },
    {
      icon: <Calendar className="h-8 w-8 text-brand-orange" />,
      title: "Personalized Reminders",
      description: "Stay on track with tailored health recommendations."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-brand-orange" />,
      title: "AI Companion",
      description: "Interactive health guidance and system support."
    },
    {
      icon: <Activity className="h-8 w-8 text-brand-orange" />,
      title: "Professional Support",
      description: "24/7 access to healthcare professionals."
    }
  ];

  return (
    <section id="features" className="py-16 bg-brand-grey relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-brand-teal mb-2">Key Features</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Comprehensive health solutions designed for seamless monitoring and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4 rounded-lg hover:bg-white/50 transition-colors">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg text-brand-teal mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
