
import React from 'react';
import { Pill, Clock, Check, X, AlertCircle, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface MedicationCardProps {
  name: string;
  dosage: string;
  time: string;
  status: 'taken' | 'missed' | 'upcoming';
  instructions?: string;
}

const MedicationCard: React.FC<MedicationCardProps> = ({ name, dosage, time, status, instructions }) => {
  return (
    <Card className={`border-l-4 ${
      status === 'taken' ? 'border-l-green-500' : 
      status === 'missed' ? 'border-l-red-500' : 
      'border-l-amber-500'
    }`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-gray-800">{name}</h3>
            <p className="text-sm text-gray-600">{dosage}</p>
            
            <div className="flex items-center mt-2 text-sm">
              <Clock className="h-4 w-4 mr-1 text-gray-500" />
              <span>{time}</span>
            </div>
            
            {instructions && (
              <p className="text-xs text-gray-500 mt-2 italic">
                {instructions}
              </p>
            )}
          </div>
          
          <div className="flex flex-col items-end">
            <Badge className={`${
              status === 'taken' ? 'bg-green-100 text-green-800 border-green-200' : 
              status === 'missed' ? 'bg-red-100 text-red-800 border-red-200' : 
              'bg-amber-100 text-amber-800 border-amber-200'
            }`}>
              {status === 'taken' ? (
                <span className="flex items-center">
                  <Check className="h-3 w-3 mr-1" />
                  Taken
                </span>
              ) : status === 'missed' ? (
                <span className="flex items-center">
                  <X className="h-3 w-3 mr-1" />
                  Missed
                </span>
              ) : (
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Upcoming
                </span>
              )}
            </Badge>
            
            {status === 'upcoming' && (
              <Button 
                size="sm" 
                className="mt-3 bg-brand-teal hover:bg-brand-teal/90"
              >
                Mark as Taken
              </Button>
            )}
            
            {status === 'missed' && (
              <Button 
                size="sm" 
                variant="outline"
                className="mt-3 border-red-300 text-red-700 hover:bg-red-50"
              >
                Take Now
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MedicationManager: React.FC = () => {
  const medications = [
    {
      name: 'Lisinopril',
      dosage: '10mg - 1 tablet',
      time: '8:00 AM',
      status: 'taken' as const,
      instructions: 'Take with food'
    },
    {
      name: 'Metformin',
      dosage: '500mg - 1 tablet',
      time: '12:00 PM',
      status: 'upcoming' as const,
      instructions: 'Take with lunch'
    },
    {
      name: 'Atorvastatin',
      dosage: '20mg - 1 tablet',
      time: '9:00 PM',
      status: 'upcoming' as const,
      instructions: 'Take in the evening'
    },
    {
      name: 'Vitamin D3',
      dosage: '2000 IU - 1 tablet',
      time: '8:00 AM',
      status: 'missed' as const,
      instructions: 'Take with breakfast'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-brand-teal flex items-center gap-2">
          <Pill className="h-6 w-6" />
          Medication Manager
        </h2>
        <Button className="bg-brand-teal hover:bg-brand-teal/90 gap-1">
          <Plus className="h-4 w-4" />
          Add Medication
        </Button>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium text-gray-800">Today's Schedule</h3>
          <div className="flex items-center space-x-1 text-sm">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <Check className="h-3 w-3 mr-1" /> 1 Taken
            </Badge>
            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
              <Clock className="h-3 w-3 mr-1" /> 2 Upcoming
            </Badge>
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
              <AlertCircle className="h-3 w-3 mr-1" /> 1 Missed
            </Badge>
          </div>
        </div>
        
        <Card className="border border-gray-200 bg-gray-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-md flex items-center justify-between">
              <span>Tuesday, April 11, 2025</span>
              <Button variant="outline" size="sm">Weekly View</Button>
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="p-4">
            <div className="space-y-3">
              {medications.map((medication, index) => (
                <MedicationCard 
                  key={index}
                  name={medication.name}
                  dosage={medication.dosage}
                  time={medication.time}
                  status={medication.status}
                  instructions={medication.instructions}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-md">Medication History</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="p-4 h-40 flex items-center justify-center">
            <p className="text-gray-500">Coming soon: Medication history and adherence reports</p>
          </CardContent>
        </Card>
        
        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-md">Prescription Refills</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="p-4 h-40 flex items-center justify-center">
            <p className="text-gray-500">Coming soon: Prescription refill tracking and reminders</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MedicationManager;
