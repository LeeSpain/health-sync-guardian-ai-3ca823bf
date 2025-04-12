
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, User, Mail, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardHeader: React.FC = () => {
  // In a real application, this would come from authentication or user context
  // For now, we'll simulate a user name
  const [userName, setUserName] = useState('Sarah Johnson');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  const formatGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-5 mt-3">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-xl md:text-2xl font-bold text-brand-teal">
              {formatGreeting()}, {userName}
            </h1>
            <div className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
              <img
                className="aspect-square h-full w-full"
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                alt="User avatar"
              />
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Welcome to your personal health command center
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
              Premium Plan
            </Badge>
            <Badge variant="outline" className="text-xs bg-brand-teal/10 text-brand-teal border-brand-teal/20">
              4 Devices Active
            </Badge>
            <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
              Last sync: {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </Badge>
          </div>
        </div>
        
        <div className="flex mt-4 md:mt-0 gap-2">
          <Button variant="outline" size="sm" className="gap-1 text-xs">
            <Search className="h-3 w-3" />
            <span className="hidden md:inline">Search</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1 text-xs">
            <Calendar className="h-3 w-3" />
            <span className="hidden md:inline">Calendar</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1 relative text-xs">
            <Bell className="h-3 w-3" />
            <span className="hidden md:inline">Notifications</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-3 w-3 flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1 relative text-xs">
            <Mail className="h-3 w-3" />
            <span className="hidden md:inline">Messages</span>
            <span className="absolute -top-1 -right-1 bg-brand-teal text-white text-[10px] rounded-full h-3 w-3 flex items-center justify-center">
              5
            </span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1 text-xs">
            <User className="h-3 w-3" />
            <span className="hidden md:inline">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
