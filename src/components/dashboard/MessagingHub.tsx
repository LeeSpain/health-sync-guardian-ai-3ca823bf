
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Stethoscope, 
  User, 
  Users, 
  Search, 
  Paperclip, 
  Mic, 
  SendHorizonal,
  MoreVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

const MessagingHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState('support');
  const [messageInput, setMessageInput] = useState('');
  
  const handleSendMessage = () => {
    if (messageInput.trim()) {
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-[600px] flex flex-col">
      <h2 className="text-2xl font-bold text-brand-teal mb-4">Messaging Hub</h2>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="support" className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>Support</span>
          </TabsTrigger>
          <TabsTrigger value="nurse" className="flex items-center gap-1">
            <Stethoscope className="h-4 w-4" />
            <span>NurseSync</span>
          </TabsTrigger>
          <TabsTrigger value="doctor" className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>MedicSync</span>
          </TabsTrigger>
          <TabsTrigger value="family" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>Family</span>
          </TabsTrigger>
        </TabsList>
        
        <div className="flex flex-1 h-full">
          {/* Contact list sidebar */}
          <div className="w-64 border-r border-gray-200 pr-3 hidden md:block">
            <div className="relative mb-3">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
              />
            </div>
            
            <div className="space-y-2 overflow-y-auto h-[450px]">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${i === 1 ? 'bg-brand-teal/10' : 'hover:bg-gray-100'}`}>
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {activeTab === 'support' && <MessageSquare className="h-5 w-5 text-gray-500" />}
                    {activeTab === 'nurse' && <Stethoscope className="h-5 w-5 text-gray-500" />}
                    {activeTab === 'doctor' && <User className="h-5 w-5 text-gray-500" />}
                    {activeTab === 'family' && <Users className="h-5 w-5 text-gray-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 truncate">
                      {activeTab === 'support' && 'Support Team'}
                      {activeTab === 'nurse' && `Nurse ${['Sarah', 'Michael', 'Emma', 'David', 'Lisa'][i-1]}`}
                      {activeTab === 'doctor' && `Dr. ${['Johnson', 'Smith', 'Williams', 'Brown', 'Davis'][i-1]}`}
                      {activeTab === 'family' && `${['Spouse', 'Son', 'Daughter', 'Sister', 'Brother'][i-1]}`}
                    </p>
                    <p className="text-xs text-gray-500 truncate">Last message preview...</p>
                  </div>
                  {i === 1 && (
                    <div className="h-5 w-5 rounded-full bg-brand-teal flex items-center justify-center text-xs text-white">
                      2
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat area */}
          <div className="flex-1 flex flex-col">
            {/* Chat header */}
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  {activeTab === 'support' && <MessageSquare className="h-5 w-5 text-gray-500" />}
                  {activeTab === 'nurse' && <Stethoscope className="h-5 w-5 text-gray-500" />}
                  {activeTab === 'doctor' && <User className="h-5 w-5 text-gray-500" />}
                  {activeTab === 'family' && <Users className="h-5 w-5 text-gray-500" />}
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {activeTab === 'support' && 'Support Team'}
                    {activeTab === 'nurse' && 'Nurse Sarah'}
                    {activeTab === 'doctor' && 'Dr. Johnson'}
                    {activeTab === 'family' && 'Spouse'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {activeTab === 'support' && 'Typically responds in 10 minutes'}
                    {activeTab === 'nurse' && 'Online'}
                    {activeTab === 'doctor' && 'Last seen today at 10:45 AM'}
                    {activeTab === 'family' && 'Last seen 5 minutes ago'}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  {activeTab === 'support' && <MessageSquare className="h-4 w-4 text-gray-500" />}
                  {activeTab === 'nurse' && <Stethoscope className="h-4 w-4 text-gray-500" />}
                  {activeTab === 'doctor' && <User className="h-4 w-4 text-gray-500" />}
                  {activeTab === 'family' && <Users className="h-4 w-4 text-gray-500" />}
                </div>
                <div className="flex flex-col">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                    <p className="text-gray-800">
                      {activeTab === 'support' && "Hello! How can we help you today with your iHealth-Sync system?"}
                      {activeTab === 'nurse' && "Good morning! I've reviewed your latest health data and everything looks stable. How are you feeling today?"}
                      {activeTab === 'doctor' && "I've received your latest test results. Your blood pressure readings have improved significantly since our last appointment."}
                      {activeTab === 'family' && "Hey, just checking in. I noticed your heart rate was a bit elevated this morning. Everything okay?"}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 ml-1">10:30 AM</span>
                </div>
              </div>
              
              <div className="flex items-start justify-end gap-2">
                <div className="flex flex-col items-end">
                  <div className="bg-brand-teal text-white rounded-lg p-3 max-w-md">
                    <p>
                      {activeTab === 'support' && "Hi there! I'm having trouble connecting my new glucose monitor to the dashboard. Can you help?"}
                      {activeTab === 'nurse' && "Thanks for checking in. I'm feeling much better today, and I've been following the medication schedule as discussed."}
                      {activeTab === 'doctor' && "That's great news! I've been strictly following the treatment plan and making the dietary changes we discussed."}
                      {activeTab === 'family' && "I'm fine, thanks for checking. Just did my morning exercise routine, which probably explains the elevated heart rate."}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 mr-1">10:32 AM</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  {activeTab === 'support' && <MessageSquare className="h-4 w-4 text-gray-500" />}
                  {activeTab === 'nurse' && <Stethoscope className="h-4 w-4 text-gray-500" />}
                  {activeTab === 'doctor' && <User className="h-4 w-4 text-gray-500" />}
                  {activeTab === 'family' && <Users className="h-4 w-4 text-gray-500" />}
                </div>
                <div className="flex flex-col">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                    <p className="text-gray-800">
                      {activeTab === 'support' && "I'd be happy to help with that! Let's first make sure your glucose monitor is powered on and in pairing mode. Can you confirm that?"}
                      {activeTab === 'nurse' && "That's wonderful to hear! I'm glad the new regimen is working well for you. Have you noticed any side effects from the medication?"}
                      {activeTab === 'doctor' && "Excellent work! Your commitment is really paying off. Let's schedule a follow-up next month to see how things continue to progress."}
                      {activeTab === 'family' && "Good to hear! Just making sure. Don't forget we have dinner at mom's place tonight at 6:30."}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 ml-1">10:35 AM</span>
                </div>
              </div>
            </div>
            
            {/* Message input */}
            <div className="border-t border-gray-200 p-3">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <Mic className="h-5 w-5" />
                </Button>
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 py-2 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-brand-teal hover:bg-brand-teal/90"
                >
                  <SendHorizonal className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default MessagingHub;
