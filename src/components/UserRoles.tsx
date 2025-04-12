
import React from 'react';
import { User, Users, Stethoscope, Building, Shield, HeartPulse, Clock, Bell, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UserRoles: React.FC = () => {
  const roles = [
    {
      icon: <User className="h-8 w-8 text-white" />,
      title: "Individual Users",
      description: "Anyone wanting to take control of their health with AI Guardian assistance.",
      features: [
        { icon: <HeartPulse className="h-4 w-4" />, text: "Personalized health dashboard" },
        { icon: <Bell className="h-4 w-4" />, text: "Daily insights and reminders" },
        { icon: <Shield className="h-4 w-4" />, text: "Device management" },
        { icon: <Clock className="h-4 w-4" />, text: "Emergency assistance" }
      ],
      color: "bg-brand-teal",
      hoverColor: "group-hover:bg-brand-teal/90",
      gradient: "from-brand-teal to-brand-teal/70",
      lightGradient: "from-brand-teal/10 to-brand-teal/5",
      textColor: "text-brand-teal"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Family Members",
      description: "Invited by the user to join their care network for monitoring and support.",
      features: [
        { icon: <HeartPulse className="h-4 w-4" />, text: "Live health metrics access" },
        { icon: <Bell className="h-4 w-4" />, text: "Emergency alerts" },
        { icon: <Shield className="h-4 w-4" />, text: "Direct messaging with user" },
        { icon: <Clock className="h-4 w-4" />, text: "Activity monitoring" }
      ],
      color: "bg-brand-accent-teal",
      hoverColor: "group-hover:bg-brand-accent-teal/90",
      gradient: "from-brand-accent-teal to-brand-accent-teal/70",
      lightGradient: "from-brand-accent-teal/10 to-brand-accent-teal/5",
      textColor: "text-brand-accent-teal"
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-white" />,
      title: "Healthcare Professionals",
      description: "Doctors and caregivers who provide services through the platform.",
      features: [
        { icon: <HeartPulse className="h-4 w-4" />, text: "Client management tools" },
        { icon: <Bell className="h-4 w-4" />, text: "Medical reporting system" },
        { icon: <Shield className="h-4 w-4" />, text: "Visit scheduling" },
        { icon: <Clock className="h-4 w-4" />, text: "Health trend analysis" }
      ],
      color: "bg-[#9b87f5]",
      hoverColor: "group-hover:bg-[#9b87f5]/90",
      gradient: "from-[#9b87f5] to-[#9b87f5]/70",
      lightGradient: "from-[#9b87f5]/10 to-[#9b87f5]/5",
      textColor: "text-[#9b87f5]"
    },
    {
      icon: <Building className="h-8 w-8 text-white" />,
      title: "Admins & Organizations",
      description: "Organizations providing health services with administrative oversight.",
      features: [
        { icon: <HeartPulse className="h-4 w-4" />, text: "User and device management" },
        { icon: <Bell className="h-4 w-4" />, text: "SOS alert monitoring" },
        { icon: <Shield className="h-4 w-4" />, text: "Performance analytics" },
        { icon: <Clock className="h-4 w-4" />, text: "Billing management" }
      ],
      color: "bg-gray-700",
      hoverColor: "group-hover:bg-gray-700/90",
      gradient: "from-gray-700 to-gray-700/70",
      lightGradient: "from-gray-700/10 to-gray-700/5",
      textColor: "text-gray-700"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-white to-gray-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-brand-teal/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-accent-teal/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-[#9b87f5]/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge className="mb-3 px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-brand-teal/10 to-brand-teal/20 text-brand-teal border-none">
            User-Centric Platform
          </Badge>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">A Platform For Everyone</h2>
          <p className="text-gray-600 text-lg mx-auto max-w-2xl">
            iHealth-Sync connects various roles in the health ecosystem to ensure comprehensive support for users of all ages.
          </p>
        </div>

        {/* Tabs for role selection on mobile */}
        <div className="md:hidden mb-8">
          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4 w-full">
              <TabsTrigger value="individual">Individuals</TabsTrigger>
              <TabsTrigger value="family">Family</TabsTrigger>
            </TabsList>
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="admin">Admins</TabsTrigger>
            </TabsList>
            
            {roles.map((role, index) => (
              <TabsContent key={index} value={
                index === 0 ? "individual" : 
                index === 1 ? "family" : 
                index === 2 ? "healthcare" : "admin"
              }>
                <Card className="border-0 shadow-lg overflow-hidden bg-white">
                  <div className={`p-6 ${role.color} bg-gradient-to-r ${role.gradient}`}>
                    <div className="flex items-center">
                      <div className="bg-white/20 p-3 rounded-lg">
                        {role.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white ml-4">{role.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6">{role.description}</p>
                    <h4 className={`${role.textColor} font-semibold mb-4`}>Key Features:</h4>
                    <ul className="space-y-3">
                      {role.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className={`${role.color} p-1 rounded-full mr-3`}>
                            {feature.icon}
                          </div>
                          <span className="text-gray-700">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <Card 
                key={index} 
                className="group border-0 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl bg-white h-full hover:translate-y-[-5px]"
              >
                <div className={`p-6 ${role.color} bg-gradient-to-r ${role.gradient}`}>
                  <div className="flex items-center">
                    <div className="bg-white/20 p-3 rounded-lg">
                      {role.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4">{role.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6">{role.description}</p>
                  <Separator className={`my-6 ${role.color} opacity-20`} />
                  
                  <h4 className={`${role.textColor} font-semibold mb-4`}>Key Features:</h4>
                  <ul className="space-y-3">
                    {role.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className={`${role.color} p-1 rounded-full mr-3`}>
                          {feature.icon}
                        </div>
                        <span className="text-gray-700">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center">
                      <CheckCircle2 className={`h-5 w-5 ${role.textColor} mr-2`} />
                      <span className="text-sm text-gray-600">Optimized for this role</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-brand-teal via-brand-accent-teal to-[#9b87f5]">
            <button className="bg-white hover:bg-gray-50 transition-colors px-8 py-3 rounded-full text-gray-800 font-medium">
              Join Our Healthcare Ecosystem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRoles;
