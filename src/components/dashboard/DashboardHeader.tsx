
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardHeader: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-teal">
            iHealth-Sync Member Dashboard
          </h1>
          <p className="text-gray-600 mt-1">Your Personal Health Command Center</p>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Premium Plan
            </Badge>
            <Badge variant="outline" className="bg-brand-teal/10 text-brand-teal border-brand-teal/20">
              4 Devices Active
            </Badge>
          </div>
        </div>
        
        <div className="flex mt-4 md:mt-0 gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Calendar className="h-4 w-4" />
            <span className="hidden md:inline">Calendar</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1 relative">
            <Bell className="h-4 w-4" />
            <span className="hidden md:inline">Notifications</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
