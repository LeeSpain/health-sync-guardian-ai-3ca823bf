
import React from 'react';
import { 
  Home, 
  Activity, 
  MessageSquare, 
  Pill, 
  Stethoscope, 
  Smartphone, 
  Settings,
  Users,
  FileText,
  Brain,
  BookOpen,
  Receipt,
  AlertTriangle,
  Calendar
} from 'lucide-react';

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'home', label: 'Dashboard Home', icon: <Home className="h-5 w-5" />, description: 'Overview of your health' },
    { id: 'metrics', label: 'Health Metrics', icon: <Activity className="h-5 w-5" />, description: 'Your health data' },
    { id: 'medication', label: 'Medication', icon: <Pill className="h-5 w-5" />, description: 'Manage prescriptions' },
    { id: 'messaging', label: 'Messages', icon: <MessageSquare className="h-5 w-5" />, description: 'Communication hub' },
    { id: 'calendar', label: 'Calendar', icon: <Calendar className="h-5 w-5" />, description: 'Appointments & events' },
    { id: 'family', label: 'Family', icon: <Users className="h-5 w-5" />, description: 'Manage family access' },
    { id: 'services', label: 'Professional Services', icon: <Stethoscope className="h-5 w-5" />, description: 'Healthcare support' },
    { id: 'care-plan', label: 'Care Plan', icon: <FileText className="h-5 w-5" />, description: 'Your health plan' },
    { id: 'wellness', label: 'Mental Wellness', icon: <Brain className="h-5 w-5" />, description: 'Track mental health' },
    { id: 'learning', label: 'Learning Hub', icon: <BookOpen className="h-5 w-5" />, description: 'Health education' },
    { id: 'billing', label: 'Billing & Invoices', icon: <Receipt className="h-5 w-5" />, description: 'Manage payments' },
    { id: 'devices', label: 'Device Manager', icon: <Smartphone className="h-5 w-5" />, description: 'Connected devices' },
    { id: 'emergency', label: 'Emergency Tools', icon: <AlertTriangle className="h-5 w-5" />, description: 'SOS features' },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" />, description: 'Account preferences' },
  ];

  return (
    <div className="hidden lg:block w-64 bg-white rounded-xl shadow-sm p-4">
      <h2 className="font-medium text-gray-500 uppercase text-xs tracking-wider mb-4">Navigation</h2>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              activeTab === item.id
                ? 'bg-brand-teal text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab(item.id)}
            title={item.description}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
