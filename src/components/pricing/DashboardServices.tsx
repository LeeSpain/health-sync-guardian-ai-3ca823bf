
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Hospital, Stethoscope, ExternalLink, Users, ClipboardList, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DashboardServices: React.FC = () => {
  const { toast } = useToast();

  const handleVisitWebsite = (url: string) => {
    window.open(url, '_blank');
    toast({
      title: "Opening website",
      description: `Redirecting to ${url}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-10 mb-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-brand-teal mb-3">Premium Dashboard Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access exclusive healthcare monitoring services directly through your Global Health Sync dashboard
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Nurse-Sync Card */}
        <Card className="overflow-hidden border-2 border-brand-teal/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-brand-teal/5">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-brand-teal/60"></div>
            <div className="p-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-brand-teal/10">
                  <Stethoscope className="h-8 w-8 text-brand-teal" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-teal">Nurse-Sync</h3>
                  <p className="text-gray-500 mt-1">Professional healthcare monitoring</p>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  Connect with certified nurses for regular health monitoring and personalized care recommendations directly through your dashboard.
                </p>
                
                <div className="grid grid-cols-1 gap-3 mt-6">
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Personalized Care</h4>
                      <p className="text-sm text-gray-500">Regular consultations with dedicated nursing professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-brand-teal mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Health Assessments</h4>
                      <p className="text-sm text-gray-500">Comprehensive monitoring and evaluation of vital health metrics</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleVisitWebsite("https://www.nurse-sync.com")}
                  className="mt-6 w-full bg-brand-teal hover:bg-brand-teal/90 text-white"
                >
                  Visit nurse-sync.com
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Medic-Sync Card */}
        <Card className="overflow-hidden border-2 border-brand-orange/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-brand-orange/5">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-brand-orange/60"></div>
            <div className="p-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-brand-orange/10">
                  <Hospital className="h-8 w-8 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-orange">Medic-Sync</h3>
                  <p className="text-gray-500 mt-1">Professional medical consultations</p>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  Schedule virtual consultations with doctors and specialists through the Global Health Sync ecosystem for comprehensive medical care.
                </p>
                
                <div className="grid grid-cols-1 gap-3 mt-6">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-brand-orange mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">On-Demand Consultations</h4>
                      <p className="text-sm text-gray-500">Connect with specialists when you need them most</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ClipboardList className="h-5 w-5 text-brand-orange mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-700">Medical Expertise</h4>
                      <p className="text-sm text-gray-500">Access to a network of specialized healthcare professionals</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleVisitWebsite("https://www.medic-sync.com")}
                  className="mt-6 w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
                >
                  Visit medic-sync.com
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-start">
          <div className="mr-4 p-2 rounded-full bg-brand-teal/10">
            <ClipboardList className="h-6 w-6 text-brand-teal" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-brand-teal">Dashboard Integration</h4>
            <p className="text-gray-600 mt-2">
              Both Nurse-Sync and Medic-Sync services are seamlessly integrated into your Global Health Sync dashboard. 
              Access your health records, schedule appointments, and communicate with healthcare professionals—all from a single, 
              secure interface. These professional healthcare monitoring services become available immediately after joining our service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardServices;
