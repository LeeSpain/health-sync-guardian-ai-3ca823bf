
import React from 'react';
import { User, Users, Video, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProfessionalServices: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-brand-teal flex items-center gap-2">
          <User className="h-5 w-5" />
          Professional Services
        </h2>
        <Button variant="ghost" size="sm" className="text-brand-teal">
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* NurseSync Card */}
        <Card className="border-brand-teal/20 overflow-hidden">
          <div className="h-2 bg-brand-teal w-full"></div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg text-brand-teal flex items-center gap-2">
                <User className="h-5 w-5" />
                NurseSync
              </CardTitle>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <p className="text-sm text-gray-600 mb-4">
              Connect with your dedicated nursing team for continuous health monitoring and personalized care.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4 text-brand-teal" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Nurse Sarah Johnson</p>
                  <p className="text-xs text-gray-500">Primary Care Nurse</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">Next Consultation</p>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    Scheduled
                  </Badge>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>April 15, 2025 - 11:00 AM</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 justify-between">
            <Button variant="outline" size="sm" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10 flex-1">
              <MessageSquare className="h-4 w-4 mr-1" />
              Message
            </Button>
            <Button className="bg-brand-teal hover:bg-brand-teal/90 flex-1" size="sm">
              <Video className="h-4 w-4 mr-1" />
              Video Call
            </Button>
          </CardFooter>
        </Card>
        
        {/* MedicSync Card */}
        <Card className="border-brand-orange/20 overflow-hidden">
          <div className="h-2 bg-brand-orange w-full"></div>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg text-brand-orange flex items-center gap-2">
                <Users className="h-5 w-5" />
                MedicSync
              </CardTitle>
              <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                Upgrade
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <p className="text-sm text-gray-600 mb-4">
              On-demand access to doctors, specialists, and electronic prescriptions when you need them most.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 opacity-60">
                <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4 text-brand-orange" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">No Doctor Assigned</p>
                  <p className="text-xs text-gray-500">Upgrade to access medical professionals</p>
                </div>
              </div>
              
              <div className="bg-amber-50 rounded-lg p-3">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-amber-800">Benefits of MedicSync:</p>
                  <ul className="text-xs text-gray-600 ml-5 list-disc space-y-1">
                    <li>24/7 access to licensed physicians</li>
                    <li>Electronic prescriptions and refills</li>
                    <li>Medical record management</li>
                    <li>Specialist referrals when needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-brand-orange hover:bg-brand-orange/90 w-full">
              Upgrade to MedicSync
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProfessionalServices;
