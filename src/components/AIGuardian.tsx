
import React, { useEffect, useState } from 'react';
import { Shield, MessageSquare, Activity, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const AIGuardianSection: React.FC = () => {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  // Only render content when it becomes visible to reduce initial page load time
  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
    }
  }, [inView, isVisible]);
  
  // Pre-defined content that doesn't need to be recreated on each render
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
      icon: <MessageSquare size={18} />,
      title: "Conversational Interface",
      description: "Friendly, conversational tone designed for all users"
    },
    {
      icon: <Globe size={18} />,
      title: "Multilingual",
      description: "Multilingual support in English and Spanish"
    },
    {
      icon: <Shield size={18} />,
      title: "Emergency Protocols",
      description: "Transparent emergency escalation protocols"
    },
    {
      icon: <Activity size={18} />,
      title: "Health Insights",
      description: "Clear, jargon-free health explanations"
    }
  ];

  return (
    <section ref={ref} className="py-12 bg-white relative overflow-hidden">
      {isVisible && (
        <>
          {/* Background decorative elements - simplified */}
          <div className="absolute -left-16 top-1/4 w-24 h-24 rounded-full bg-brand-teal/10 filter blur-2xl"></div>
          <div className="absolute right-0 bottom-0 w-1/4 h-1/4 bg-gradient-to-tl from-brand-orange/10 to-transparent"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
              {/* Left Side - AI Guardian Information */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <Badge className="mb-2 px-3 py-1 text-sm font-medium bg-brand-teal/10 text-brand-teal border-none self-start">
                  AI Assistant
                </Badge>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Meet Your AI Guardian</h2>
                <p className="text-gray-600 mb-4 text-sm">
                  AI Guardian provides personalized support, monitors your health data, and connects you with family and professionals when needed.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 border border-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex items-center justify-center p-1.5 rounded-md bg-brand-teal/10 text-brand-teal">
                          {feature.icon}
                        </div>
                        <h3 className="font-semibold text-gray-800 text-sm">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 text-xs">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Side - Conversation Showcase - more compact */}
              <div className="lg:w-1/2 flex items-center">
                <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  {/* AI Assistant Header - more compact */}
                  <div className="bg-gradient-to-r from-brand-teal to-brand-accent-teal p-3 text-white">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold">AI Guardian</h3>
                        <p className="opacity-90 text-xs">Your personal health assistant</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Conversation Display - more compact */}
                  <div className="p-3 bg-gray-50/50 space-y-2 max-h-56 overflow-y-auto">
                    {conversations.map((convo, index) => (
                      <div key={index} className="space-y-1.5">
                        <div className="flex justify-end">
                          <div className="bg-gray-200 rounded-lg rounded-tr-none px-2.5 py-1.5 max-w-xs">
                            <p className="text-gray-800 text-xs">{convo.user}</p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-xs">
                            <p className="text-gray-800 text-xs">{convo.ai}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Typing indicator - smaller */}
                    <div className="flex items-center gap-1 text-gray-400 pl-1">
                      <div className="flex space-x-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: '200ms' }}></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: '400ms' }}></div>
                      </div>
                      <span className="text-xs">AI Guardian is typing...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default AIGuardianSection;
