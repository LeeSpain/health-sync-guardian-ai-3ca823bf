
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardHeader from './DashboardHeader';
import MetricsPanel from './MetricsPanel';
import AIGuardianConsole from './AIGuardianConsole';
import AlertsPanel from './AlertsPanel';
import MessagingHub from './MessagingHub';
import DashboardSidebar from './DashboardSidebar';
import MedicationManager from './MedicationManager';
import EmergencyTools from './EmergencyTools';
import ProfessionalServices from './ProfessionalServices';

const DashboardLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex flex-col">
      <DashboardHeader />
      
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Sidebar for navigation */}
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main content area */}
        <div className="flex-1">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 md:grid-cols-7 mb-6 bg-white rounded-xl shadow-sm">
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="metrics">Health</TabsTrigger>
              <TabsTrigger value="medication">Medication</TabsTrigger>
              <TabsTrigger value="messaging">Messages</TabsTrigger>
              <TabsTrigger value="services" className="hidden md:flex">Services</TabsTrigger>
              <TabsTrigger value="devices" className="hidden md:flex">Devices</TabsTrigger>
              <TabsTrigger value="settings" className="hidden md:flex">Settings</TabsTrigger>
            </TabsList>
            
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
              <TabsContent value="home" className="space-y-6 mt-0 focus:outline-none">
                <MetricsPanel />
                <AlertsPanel />
                <ProfessionalServices />
              </TabsContent>
              
              <TabsContent value="metrics" className="space-y-6 mt-0 focus:outline-none">
                <h2 className="text-2xl font-bold text-brand-teal">Health Metrics</h2>
                <p className="text-gray-600">Detailed view of all your health metrics coming soon.</p>
              </TabsContent>

              <TabsContent value="medication" className="space-y-6 mt-0 focus:outline-none">
                <MedicationManager />
              </TabsContent>
              
              <TabsContent value="messaging" className="mt-0 focus:outline-none">
                <MessagingHub />
              </TabsContent>
              
              <TabsContent value="services" className="space-y-6 mt-0 focus:outline-none">
                <h2 className="text-2xl font-bold text-brand-teal">Professional Services</h2>
                <p className="text-gray-600">Manage your NurseSync and MedicSync services.</p>
              </TabsContent>
              
              <TabsContent value="devices" className="space-y-6 mt-0 focus:outline-none">
                <h2 className="text-2xl font-bold text-brand-teal">Device Manager</h2>
                <p className="text-gray-600">View and manage all your connected health devices.</p>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-6 mt-0 focus:outline-none">
                <h2 className="text-2xl font-bold text-brand-teal">Settings</h2>
                <p className="text-gray-600">Manage your account settings, privacy, and notifications.</p>
              </TabsContent>
            </div>
          </Tabs>
        </div>
        
        {/* AI Guardian Console - Always visible */}
        <div className="w-full lg:w-72 mt-6 lg:mt-0">
          <AIGuardianConsole />
          <EmergencyTools />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
