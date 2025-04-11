import React, { useState } from 'react';
import { Bot, SendHorizonal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AIGuardianConsole: React.FC = () => {
  const [input, setInput] = useState('');
  
  const handleSend = () => {
    if (input.trim()) {
      console.log('Sending message to AI Guardian:', input);
      setInput('');
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="border-brand-teal/20 shadow-sm bg-white rounded-xl mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2 text-brand-teal">
          <Bot className="h-4 w-4" />
          AI Guardian
        </CardTitle>
      </CardHeader>
      <Separator className="bg-brand-teal/10" />
      <CardContent className="pt-3 px-3 pb-2">
        <div className="h-40 overflow-y-auto space-y-2 mb-2 text-xs">
          <div className="flex items-start gap-1.5">
            <div className="rounded-full bg-brand-teal/10 p-1 flex-shrink-0">
              <Bot className="h-3 w-3 text-brand-teal" />
            </div>
            <div className="bg-gray-100 rounded-lg p-1.5 text-xs text-gray-700 max-w-[85%]">
              <p>Good morning! Your health metrics look good today.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-1.5">
            <div className="rounded-full bg-brand-teal/10 p-1 flex-shrink-0">
              <Bot className="h-3 w-3 text-brand-teal" />
            </div>
            <div className="bg-gray-100 rounded-lg p-1.5 text-xs text-gray-700 max-w-[85%]">
              <p>Don't forget to take your medication at 11:00 AM. I'll remind you again closer to the time.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-1.5 justify-end">
            <div className="bg-brand-teal/10 rounded-lg p-1.5 text-xs text-brand-teal max-w-[85%]">
              <p>Thank you! Can you show me my sleep report from last night?</p>
            </div>
          </div>
          
          <div className="flex items-start gap-1.5">
            <div className="rounded-full bg-brand-teal/10 p-1 flex-shrink-0">
              <Bot className="h-3 w-3 text-brand-teal" />
            </div>
            <div className="bg-gray-100 rounded-lg p-1.5 text-xs text-gray-700 max-w-[85%]">
              <p>Of course! You slept for 7.5 hours last night. Your deep sleep was 2.1 hours, which is excellent. Your sleep efficiency was 92%, which is above your weekly average.</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-2 px-3">
        <div className="flex w-full gap-1.5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 p-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand-teal/50"
          />
          <Button 
            size="sm" 
            onClick={handleSend}
            className="bg-brand-teal hover:bg-brand-teal/90 h-8 px-2"
          >
            <SendHorizonal className="h-3 w-3" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AIGuardianConsole;
