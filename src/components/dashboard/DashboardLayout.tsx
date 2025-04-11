
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
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col space-y-4">
      {/* Mobile sidebar toggle */}
      <Button 
        variant="outline" 
        size="sm" 
        className="lg:hidden flex items-center gap-2 mb-2"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-4 w-4" />
        <span>{sidebarOpen ? 'Hide Menu' : 'Show Menu'}</span>
      </Button>
      
      {/* Welcome section moved up */}
      <DashboardHeader />
      
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar for navigation - hidden on mobile unless toggled */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block lg:w-64 flex-shrink-0`}>
          <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        
        {/* Main content area */}
        <div className="flex-1 min-w-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="bg-white rounded-xl shadow-sm p-3 md:p-4 lg:p-5">
              <TabsContent value="home" className="space-y-6 mt-0 focus:outline-none">
                <MetricsPanel />
                <div className="mt-6">
                  <AlertsPanel />
                </div>
                <div className="mt-6">
                  <ProfessionalServices />
                </div>
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
        
        {/* AI Guardian Console and Emergency Tools - responsive placement */}
        <div className="w-full lg:w-64 flex-shrink-0 mt-4 lg:mt-0 order-last lg:order-none">
          <div className="space-y-4">
            <AIGuardianConsole />
            <EmergencyTools />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
