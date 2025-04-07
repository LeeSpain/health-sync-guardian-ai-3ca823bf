
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Bell, Calendar, MessageSquare, Activity } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Heart className="h-12 w-12 text-brand-orange" />,
      title: "Real-Time Health Monitoring",
      description: "Track vital signs including heart rate, blood pressure, and oxygen levels through our connected devices."
    },
    {
      icon: <Bell className="h-12 w-12 text-brand-orange" />,
      title: "Intelligent Alerts",
      description: "Receive immediate notifications when health metrics fall outside normal ranges, with automatic family updates."
    },
    {
      icon: <Calendar className="h-12 w-12 text-brand-orange" />,
      title: "Medication Reminders",
      description: "Never miss important medications with personalized schedules and verification systems."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-brand-orange" />,
      title: "AI Guardian Assistant",
      description: "Interact with our caring AI companion for health advice, emotional support, and system guidance."
    },
    {
      icon: <Activity className="h-12 w-12 text-brand-orange" />,
      title: "Professional Support",
      description: "Access to professional nurses and emergency response teams when needed, 24/7."
    }
  ];

  return (
    <section id="features" className="py-20 bg-brand-grey">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-teal mb-4">Features Designed For Care</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with human compassion to create a complete care solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardHeader className="pb-2">
                <div className="mb-3">{feature.icon}</div>
                <CardTitle className="text-xl text-brand-teal">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
