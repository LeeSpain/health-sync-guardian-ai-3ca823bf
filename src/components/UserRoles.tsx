
import React from 'react';
import { User, Users, Stethoscope, Building, Shield, HeartPulse, Clock, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';

const UserRoles: React.FC = () => {
  const roles = [
    {
      icon: <User className="h-6 w-6 text-white" />,
      title: "Individual Users",
      description: "Anyone wanting to take control of their health with AI Guardian assistance.",
      features: [
        { icon: <HeartPulse className="h-4 w-4" />, text: "Personalized health dashboard" },
        { icon: <Bell className="h-4 w-4" />, text: "Daily insights and reminders" },
        { icon: <Shield className="h-4 w-4" />, text: "Device management" },
        { icon: <Clock className="h-4 w-4" />, text: "Emergency assistance" }
      ],
      image: "/lovable-uploads/2372f3d6-0624-4858-96b0-44839b74bce5.png",
      color: "bg-brand-teal",
      hoverColor: "group-hover:bg-brand-teal/90",
      gradient: "from-brand-teal/20 to-brand-teal/5"
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Family Members",
      description: "Invited by the user to join their care network for monitoring and support.",
      features: [
        { icon: <HeartPulse className="h-4 w-4" />, text: "Live health metrics access" },
        { icon: <Bell className="h-4 w-4" />, text: "Emergency alerts" },
        { icon: <Shield className="h-4 w-4" />, text: "Direct messaging with user" },
        { icon: <Clock className="h-4 w-4" />, text: "Activity monitoring" }
      ],
      image: "/lovable-uploads/30a5eb40-c8db-4c13-ba65-2af816834fb8.png",
      color: "bg-brand-accent-teal",
      hoverColor: "group-hover:bg-brand-accent-teal/90",
      gradient: "from-brand-accent-teal/20 to-brand-accent-teal/5"
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-white" />,
      title: "Healthcare Professionals",
      description: "Doctors and caregivers who provide services through the platform.",
      features: [
        { icon: <HeartPulse className="h-4 w-4" />, text: "Client management tools" },
        { icon: <Bell className="h-4 w-4" />, text: "Medical reporting system" },
        { icon: <Shield className="h-4 w-4" />, text: "Visit scheduling" },
        { icon: <Clock className="h-4 w-4" />, text: "Health trend analysis" }
      ],
      image: "/lovable-uploads/3bc60e76-02c6-4226-972b-87293e92d1cf.png",
      color: "bg-brand-orange",
      hoverColor: "group-hover:bg-brand-orange/90",
      gradient: "from-brand-orange/20 to-brand-orange/5"
    },
    {
      icon: <Building className="h-6 w-6 text-white" />,
      title: "Admins & Organizations",
      description: "Organizations providing health services with administrative oversight.",
      features: [
        { icon: <HeartPulse className="h-4 w-4" />, text: "User and device management" },
        { icon: <Bell className="h-4 w-4" />, text: "SOS alert monitoring" },
        { icon: <Shield className="h-4 w-4" />, text: "Performance analytics" },
        { icon: <Clock className="h-4 w-4" />, text: "Billing management" }
      ],
      image: "/lovable-uploads/a660c44d-8542-4391-91d0-94af264456a4.png",
      color: "bg-gray-700",
      hoverColor: "group-hover:bg-gray-700/90",
      gradient: "from-gray-700/20 to-gray-700/5"
    }
  ];

  return (
    <section id="about" className="py-12 relative overflow-hidden bg-gradient-to-b from-white via-white to-gray-50">
      {/* Decorative background elements - simplified and reduced for a more compact look */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <svg className="absolute top-0 left-0 w-full opacity-[0.15]" viewBox="0 0 1200 300" preserveAspectRatio="none">
            <path 
              d="M0,25 Q300,75 600,25 T1200,50" 
              fill="none" 
              stroke="url(#gradient-path-1)" 
              strokeWidth="2" 
            />
            <path 
              d="M0,75 Q300,125 600,75 T1200,100" 
              fill="none" 
              stroke="url(#gradient-path-2)" 
              strokeWidth="2" 
            />
            <defs>
              <linearGradient id="gradient-path-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#008B8B" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#008B8B" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="gradient-path-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e67e22" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#e67e22" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <Badge className="mb-2 px-3 py-1 text-sm font-medium bg-gradient-to-r from-brand-teal/10 to-brand-teal/20 text-brand-teal border-none">
            User-Centric Platform
          </Badge>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">A Platform For Everyone</h2>
          <p className="text-gray-600 text-lg">
            iHealth-Sync connects various roles in the health ecosystem to ensure comprehensive support for users of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {roles.map((role, index) => (
            <Card 
              key={index} 
              className="group border-0 rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white h-full"
            >
              <div className={`h-2 w-full ${role.color} transition-colors duration-300 ${role.hoverColor}`}></div>
              
              <CardContent className="p-4 h-full flex flex-col">
                <div className="flex items-center mb-3">
                  <div className={`${role.color} p-2 rounded-lg transition-colors duration-300 ${role.hoverColor}`}>
                    {role.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-brand-teal ml-3">{role.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-3 text-sm">{role.description}</p>
                
                {/* More compact image container with reduced height */}
                <div className="relative w-full h-24 mb-3 rounded-lg overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} rounded-lg z-0`}></div>
                  <OptimizedImage
                    src={role.image}
                    alt={`${role.title} illustration`}
                    className="w-full h-full object-contain p-2 relative z-10"
                    priority={index === 0}
                    preload={index < 2}
                  />
                </div>
                
                <ul className="space-y-1.5 mt-auto">
                  {role.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-xs">
                      <div className={`${role.color} p-1 rounded-full mr-2 transition-colors duration-300 ${role.hoverColor}`}>
                        {feature.icon}
                      </div>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserRoles;
