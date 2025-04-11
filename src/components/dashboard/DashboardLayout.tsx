
import React, { useState } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
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
      {/* Welcome section moved to top */}
      <DashboardHeader />
      
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Sidebar for navigation */}
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main content area */}
        <div className="flex-1">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
              
              <TabsContent value="family" className="space-y-6 mt-0 focus:outline-none">
                <h2 className="text-2xl font-bold text-brand-teal">Family Management</h2>
                <p className="text-gray-600">Manage family access and view shared information.</p>
              </TabsContent>
              
              <TabsContent value="care-plan" className="space-y-6 mt-0 focus:outline-none">
                <h2 className="text-2xl font-bold text-brand-teal">Care Plan</h2>
                <p className="text-gray-600">View and track your personalized care plan.</p>
              </TabsContent>
              
              <TabsContent value="wellness" className="space-y-6 mt-0 focus:outline-none">
                <h2 className="text-2xl font-bold text-brand-teal">Mental Wellness</h2>
                <p className="text-gray-600">Track your mood and manage your mental health.</p>
              </TabsContent>
              
              <TabsContent value="learning" className="space-y-6 mt-0 focus:outline-none">
                <h2 className="text-2xl font-bold text-brand-teal">Learning Hub</h2>
                <p className="text-gray-600">Explore health education materials tailored to your needs.</p>
              </TabsContent>
              
              <TabsContent value="billing" className="space-y-6 mt-0 focus:outline-none">
                <h2 className="text-2xl font-bold text-brand-teal">Billing & Invoices</h2>
                <p className="text-gray-600">Manage your subscriptions and view payment history.</p>
              </TabsContent>
              
              <TabsContent value="emergency" className="space-y-6 mt-0 focus:outline-none">
                <h2 className="text-2xl font-bold text-brand-teal">Emergency Tools</h2>
                <p className="text-gray-600">Access emergency features and contacts.</p>
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
