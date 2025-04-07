
import React from 'react';
import { Shield, MessageSquare, Activity, Globe } from 'lucide-react';

const AIGuardianSection: React.FC = () => {
  const conversations = [
    {
      user: "What's my heart rate today?",
      ai: "Your heart rate is currently 72 bpm. That's within your normal range. Would you like to see your weekly trend?"
    },
    {
      user: "I need to reach my step goal.",
      ai: "You're at 8,456 steps so far today. Just 1,544 more to reach your 10,000 step goal. You've got this!"
    },
    {
      user: "¿Puedes hablar español?",
      ai: "Sí, puedo hablar español. ¿Cómo puedo ayudarte hoy con tu salud?"
    }
  ];

  const features = [
    {
      icon: <MessageSquare size={20} />,
      title: "Conversational Interface",
      description: "Friendly, conversational tone designed for all users"
    },
    {
      icon: <Globe size={20} />,
      title: "Multilingual",
      description: "Multilingual support in English and Spanish"
    },
    {
      icon: <Shield size={20} />,
      title: "Emergency Protocols",
      description: "Transparent emergency escalation protocols"
    },
    {
      icon: <Activity size={20} />,
      title: "Health Insights",
      description: "Clear, jargon-free health explanations"
    }
  ];

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-gray-50 to-white opacity-70"></div>
      <div className="absolute -left-16 top-1/4 w-32 h-32 rounded-full bg-brand-teal/10 filter blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-brand-orange/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
          {/* Left Side - AI Guardian Information */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium mb-4 self-start">
              AI Assistant
            </div>
            <h2 className="text-brand-teal mb-6">Meet Your AI Guardian</h2>
            <p className="text-gray-600 mb-10 text-lg">
              AI Guardian provides personalized support, monitors your health data, and connects you with family and professionals when needed.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center p-2 rounded-md bg-brand-teal/10 text-brand-teal">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Conversation Showcase */}
          <div className="lg:w-1/2 flex items-center">
            <div className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
              {/* AI Assistant Header */}
              <div className="bg-gradient-to-r from-brand-teal to-brand-accent-teal p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">AI Guardian</h3>
                    <p className="opacity-90">Your personal health assistant</p>
                  </div>
                </div>
              </div>
              
              {/* Conversation Display */}
              <div className="p-6 bg-gray-50/50 backdrop-blur-md space-y-6">
                {conversations.map((convo, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-gray-200 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                        <p className="text-gray-800">{convo.user}</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                        <p className="text-gray-800">{convo.ai}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                <div className="flex items-center gap-2 text-gray-400 pl-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: '600ms' }}></div>
                  </div>
                  <span className="text-sm">AI Guardian is typing...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGuardianSection;
