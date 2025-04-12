
import React, { useEffect, useState } from 'react';
import { Shield, MessageSquare, Activity, Globe, Brain, Check, Bot, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
      icon: <MessageSquare size={20} />,
      title: "Natural Conversation",
      description: "Friendly, accessible interface designed for users of all ages and tech abilities"
    },
    {
      icon: <Globe size={20} />,
      title: "Multilingual Support",
      description: "Communicate in English, Spanish, and other languages for inclusive care"
    },
    {
      icon: <Shield size={20} />,
      title: "Emergency Protocol",
      description: "Immediate response with clear escalation paths when urgent care is needed"
    },
    {
      icon: <Activity size={20} />,
      title: "Health Insights",
      description: "Simplified explanations of your health data with actionable recommendations"
    },
    {
      icon: <Brain size={20} />,
      title: "Adaptive Learning",
      description: "Continuously improves based on your preferences and health patterns"
    },
    {
      icon: <Sparkles size={20} />,
      title: "Personalized Care",
      description: "Tailored interactions based on your specific health conditions and goals"
    }
  ];

  const benefits = [
    "24/7 health monitoring and support",
    "Simplified medication management",
    "Personalized wellness recommendations",
    "Family updates and care coordination",
    "Seamless integration with medical professionals"
  ];

  return (
    <section ref={ref} id="ai-guardian" className="py-16 bg-white relative overflow-hidden">
      {isVisible && (
        <>
          {/* Enhanced background decorative elements */}
          <div className="absolute -left-16 top-1/4 w-64 h-64 rounded-full bg-brand-teal/10 filter blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-tl from-brand-orange/10 to-transparent"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-brand-accent-teal/5 filter blur-2xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <Badge className="mb-3 px-3 py-1 text-sm font-medium bg-gradient-to-r from-brand-teal/10 to-brand-teal/20 text-brand-teal border-none">
                AI Technology
              </Badge>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Meet Your AI Guardian
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A sophisticated AI companion that provides personalized health support, monitors your vital signs,
                and connects you with family and healthcare professionals when you need them most.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left Side - AI Guardian Demo */}
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="bg-gradient-to-br from-brand-teal/5 to-brand-teal/10 rounded-2xl p-1 shadow-lg">
                  <Card className="overflow-hidden border-none shadow-none bg-white h-full">
                    <CardContent className="p-6">
                      {/* AI Guardian Demo Header */}
                      <div className="bg-gradient-to-r from-brand-teal to-brand-accent-teal p-4 rounded-lg text-white mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">AI Guardian</h3>
                            <p className="opacity-90 text-sm">Your intelligent health assistant</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Conversation Display - Enhanced */}
                      <div className="bg-gray-50/50 rounded-lg p-4 mb-6 max-h-64 overflow-y-auto space-y-4">
                        {conversations.map((convo, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-end">
                              <div className="bg-gray-200 rounded-xl rounded-tr-none px-4 py-2 max-w-xs shadow-sm">
                                <p className="text-gray-800 text-sm">{convo.user}</p>
                              </div>
                            </div>
                            
                            <div className="flex">
                              <div className="flex items-start gap-2">
                                <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-1">
                                  <Bot className="w-4 h-4 text-brand-teal" />
                                </div>
                                <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-xl rounded-tl-none px-4 py-2 max-w-xs shadow-sm">
                                  <p className="text-gray-800 text-sm">{convo.ai}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        {/* Improved typing indicator */}
                        <div className="flex items-center gap-2 text-gray-500 pl-10">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: '200ms' }}></div>
                            <div className="w-2 h-2 rounded-full bg-brand-teal animate-bounce" style={{ animationDelay: '400ms' }}></div>
                          </div>
                          <span className="text-sm">AI Guardian is thinking...</span>
                        </div>
                      </div>
                      
                      {/* Key Benefits */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-brand-teal" />
                          AI Guardian Benefits
                        </h4>
                        <ul className="space-y-2">
                          {benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Right Side - Features Grid */}
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Intelligent Features</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center p-2 rounded-lg bg-brand-teal/10 text-brand-teal">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                              <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-2">
                      Try AI Guardian Today
                    </Button>
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
