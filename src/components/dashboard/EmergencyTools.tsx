
import React, { useState } from 'react';
import { AlertTriangle, Phone, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const EmergencyTools: React.FC = () => {
  const [isSOSActive, setIsSOSActive] = useState(false);
  const { toast } = useToast();
  
  const triggerSOS = () => {
    setIsSOSActive(true);
    
    // Show toast notification
    toast({
      title: "SOS Alert Activated",
      description: "Emergency contacts are being notified. Stay calm.",
      variant: "destructive"
    });
    
    // Simulate alert being canceled after 5 seconds
    setTimeout(() => {
      setIsSOSActive(false);
      toast({
        title: "SOS Alert Canceled",
        description: "Your emergency contacts have been notified that this was a false alarm.",
      });
    }, 5000);
  };

  return (
    <Card className="border-red-200 shadow-sm bg-white rounded-xl">
      <CardContent className="p-4">
        <CardTitle className="text-lg flex items-center gap-2 text-red-600 mb-3">
          <AlertTriangle className="h-5 w-5" />
          Emergency Tools
        </CardTitle>
        
        <Separator className="bg-red-100 mb-4" />
        
        <div className="space-y-4">
          <Button
            className={`w-full py-6 text-white font-bold ${
              isSOSActive 
                ? 'bg-red-700 hover:bg-red-800 animate-pulse' 
                : 'bg-red-600 hover:bg-red-700'
            }`}
            onClick={triggerSOS}
          >
            <AlertCircle className={`mr-2 h-6 w-6 ${isSOSActive ? 'animate-pulse' : ''}`} />
            {isSOSActive ? 'SOS ACTIVE - PRESS TO CANCEL' : 'ACTIVATE SOS ALERT'}
          </Button>
          
          <div className="text-xs text-gray-500 text-center">
            This will immediately alert your emergency contacts and healthcare team
          </div>
          
          <Separator className="bg-red-100" />
          
          <div className="flex gap-2">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700" size="sm">
              <Phone className="mr-1 h-4 w-4" />
              Call Nurse
            </Button>
            
            <Button className="flex-1 bg-green-600 hover:bg-green-700" size="sm">
              <Phone className="mr-1 h-4 w-4" />
              Call Doctor
            </Button>
          </div>
          
          <Button variant="outline" className="w-full border-gray-300 text-gray-700" size="sm">
            View Emergency Plan
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyTools;
