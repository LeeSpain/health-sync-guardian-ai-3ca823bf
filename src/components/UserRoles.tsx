
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const UserRoles: React.FC = () => {
  const roles = [
    {
      title: "Individual Users",
      description: "Anyone wanting to take control of their health with AI Guardian assistance.",
      features: [
        "Personalized health dashboard",
        "Daily insights and reminders",
        "Device management",
        "Emergency assistance"
      ],
      color: "bg-brand-teal"
    },
    {
      title: "Family Members",
      description: "Invited by the user to join their care network for monitoring and support.",
      features: [
        "Live health metrics access",
        "Emergency alerts",
        "Direct messaging with user",
        "Activity monitoring"
      ],
      color: "bg-brand-accent-teal"
    },
    {
      title: "Healthcare Professionals",
      description: "Doctors and caregivers who provide services through the platform.",
      features: [
        "Client management tools",
        "Medical reporting system",
        "Visit scheduling",
        "Health trend analysis"
      ],
      color: "bg-brand-orange"
    },
    {
      title: "Admins & Organizations",
      description: "Organizations providing health services with administrative oversight.",
      features: [
        "User and device management",
        "SOS alert monitoring",
        "Performance analytics",
        "Billing management"
      ],
      color: "bg-gray-700"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-teal mb-4">A Platform For Everyone</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            iHealth-Sync connects various roles in the health ecosystem to ensure comprehensive support for users of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <Card key={index} className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className={`h-2 ${role.color}`}></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-brand-teal">{role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{role.description}</p>
                <ul className="space-y-2">
                  {role.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className={`h-2 w-2 rounded-full ${role.color} mr-2`}></div>
                      {feature}
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
