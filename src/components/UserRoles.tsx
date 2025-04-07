
import React from 'react';
import { User, Users, Stethoscope, Building } from 'lucide-react';

const UserRoles: React.FC = () => {
  const roles = [
    {
      icon: <User className="h-8 w-8 text-white" />,
      title: "Individual Users",
      description: "Anyone wanting to take control of their health with AI Guardian assistance.",
      features: [
        "Personalized health dashboard",
        "Daily insights and reminders",
        "Device management",
        "Emergency assistance"
      ],
      color: "bg-brand-teal",
      gradient: "from-brand-teal/20 to-brand-teal/0"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Family Members",
      description: "Invited by the user to join their care network for monitoring and support.",
      features: [
        "Live health metrics access",
        "Emergency alerts",
        "Direct messaging with user",
        "Activity monitoring"
      ],
      color: "bg-brand-accent-teal",
      gradient: "from-brand-accent-teal/20 to-brand-accent-teal/0"
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-white" />,
      title: "Healthcare Professionals",
      description: "Doctors and caregivers who provide services through the platform.",
      features: [
        "Client management tools",
        "Medical reporting system",
        "Visit scheduling",
        "Health trend analysis"
      ],
      color: "bg-brand-orange",
      gradient: "from-brand-orange/20 to-brand-orange/0"
    },
    {
      icon: <Building className="h-8 w-8 text-white" />,
      title: "Admins & Organizations",
      description: "Organizations providing health services with administrative oversight.",
      features: [
        "User and device management",
        "SOS alert monitoring",
        "Performance analytics",
        "Billing management"
      ],
      color: "bg-gray-700",
      gradient: "from-gray-700/20 to-gray-700/0"
    }
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute -left-10 -top-10 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-gray-800" 
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium mb-4">
            User-Centric Platform
          </span>
          <h2 className="text-brand-teal mb-4">A Platform For Everyone</h2>
          <p className="text-gray-600">
            iHealth-Sync connects various roles in the health ecosystem to ensure comprehensive support for users of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {roles.map((role, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Gradient background that expands on hover */}
              <div className={`absolute inset-0 bg-gradient-to-b ${role.gradient} rounded-2xl transform group-hover:scale-105 transition-all duration-300 opacity-80`}></div>
              
              <div className="relative z-10 p-1">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
                  <div className={`${role.color} h-2 w-full`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`${role.color} p-3 rounded-lg mr-4`}>
                        {role.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-brand-teal">{role.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{role.description}</p>
                    
                    <ul className="space-y-3">
                      {role.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <div className={`h-2 w-2 rounded-full ${role.color} mr-3 flex-shrink-0`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserRoles;
