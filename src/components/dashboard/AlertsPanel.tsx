
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Bell, Pill, Heart, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AlertsPanel: React.FC = () => {
  const alerts = [
    {
      id: 1,
      title: 'Medication Reminder',
      description: 'Time to take your blood pressure medication (10mg Lisinopril).',
      icon: <Pill className="h-5 w-5" />,
      severity: 'info',
      action: 'Mark as Taken'
    },
    {
      id: 2,
      title: 'Heart Rate Alert',
      description: 'Your heart rate was above normal range for 15 minutes this morning.',
      icon: <Heart className="h-5 w-5" />,
      severity: 'warning',
      action: 'View Details'
    },
    {
      id: 3,
      title: 'Upcoming Appointment',
      description: 'Video call with Dr. Sarah Johnson tomorrow at 2:00 PM.',
      icon: <Clock className="h-5 w-5" />,
      severity: 'info',
      action: 'Prepare'
    }
  ];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-brand-teal flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Smart Alerts & Reminders
        </h2>
        <Button variant="ghost" size="sm" className="text-brand-teal">
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-3">
        {alerts.map((alert) => (
          <Alert key={alert.id} className={`border-l-4 ${
            alert.severity === 'warning' ? 'border-l-amber-500 bg-amber-50' : 'border-l-blue-500 bg-blue-50'
          }`}>
            <div className="flex items-start">
              <div className={`${
                alert.severity === 'warning' ? 'text-amber-500' : 'text-blue-500'
              } mr-2 mt-0.5`}>
                {alert.icon}
              </div>
              <div className="flex-1">
                <AlertTitle className={`${
                  alert.severity === 'warning' ? 'text-amber-700' : 'text-blue-700'
                } font-medium`}>
                  {alert.title}
                </AlertTitle>
                <AlertDescription className="text-gray-600 mt-1">
                  {alert.description}
                </AlertDescription>
              </div>
              <Button 
                size="sm" 
                variant="outline" 
                className={`ml-2 ${
                  alert.severity === 'warning' 
                    ? 'border-amber-300 text-amber-700 hover:bg-amber-100' 
                    : 'border-blue-300 text-blue-700 hover:bg-blue-100'
                }`}
              >
                {alert.action}
              </Button>
            </div>
          </Alert>
        ))}
      </div>
    </div>
  );
};

export default AlertsPanel;
