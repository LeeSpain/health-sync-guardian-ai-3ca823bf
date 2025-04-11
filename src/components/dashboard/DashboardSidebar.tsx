
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
  AlertTriangle
} from 'lucide-react';

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'home', label: 'Dashboard', icon: <Home className="h-5 w-5" /> },
    { id: 'metrics', label: 'Health Metrics', icon: <Activity className="h-5 w-5" /> },
    { id: 'medication', label: 'Medication', icon: <Pill className="h-5 w-5" /> },
    { id: 'messaging', label: 'Messages', icon: <MessageSquare className="h-5 w-5" /> },
    { id: 'family', label: 'Family', icon: <Users className="h-5 w-5" /> },
    { id: 'services', label: 'Professional Services', icon: <Stethoscope className="h-5 w-5" /> },
    { id: 'care-plan', label: 'Care Plan', icon: <FileText className="h-5 w-5" /> },
    { id: 'wellness', label: 'Mental Wellness', icon: <Brain className="h-5 w-5" /> },
    { id: 'learning', label: 'Learning Hub', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'billing', label: 'Billing & Invoices', icon: <Receipt className="h-5 w-5" /> },
    { id: 'devices', label: 'Device Manager', icon: <Smartphone className="h-5 w-5" /> },
    { id: 'emergency', label: 'Emergency Tools', icon: <AlertTriangle className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div className="hidden lg:block w-56 bg-white rounded-xl shadow-sm p-4">
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
