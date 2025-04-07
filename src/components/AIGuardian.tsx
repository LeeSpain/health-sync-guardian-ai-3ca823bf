
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-brand-teal mb-6">Meet Your AI Guardian</h2>
            <p className="text-gray-600 mb-8 text-lg">
              AI Guardian provides personalized support, monitors your health data, and connects you with family and professionals when needed.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-brand-teal h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Friendly, conversational tone designed for all users</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-brand-teal h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Multilingual support in English and Spanish</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-brand-teal h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Transparent emergency escalation protocols</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-brand-teal h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-700">Clear, jargon-free health explanations</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="h-16 w-16 bg-brand-teal rounded-full mx-auto flex items-center justify-center mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"/>
                  <path d="M8 15H16" stroke="#008B8B" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 10H9.01" stroke="#008B8B" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M15 10H15.01" stroke="#008B8B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-brand-teal text-xl font-semibold">AI Guardian</h3>
            </div>
            
            <div className="space-y-6">
              {conversations.map((convo, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-end">
                    <Card className="bg-gray-200 max-w-xs">
                      <CardContent className="p-3">
                        <p>{convo.user}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex">
                    <Card className="bg-brand-teal/10 border-brand-teal/20 max-w-sm">
                      <CardContent className="p-3">
                        <p className="text-gray-800">{convo.ai}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGuardianSection;
