
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface DialogueItem {
  title: string;
  content: string;
}

interface NoteItem {
  title: string;
  content: string;
}

interface StepCardProps {
  number: string;
  title: string;
  emoji: string;
  description: string;
  details: string[];
  dialogues?: DialogueItem[];
  notes?: NoteItem[];
  buttonText?: string;
}

const StepCard: React.FC<StepCardProps> = ({ 
  number, 
  title, 
  emoji, 
  description, 
  details, 
  dialogues, 
  notes,
  buttonText
}) => {
  return (
    <Card className="border border-brand-teal/20 shadow-sm overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-brand-teal/10 to-transparent p-6 flex flex-row items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-brand-teal text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
          {number}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-brand-teal">{title}</h3>
            <span className="text-2xl">{emoji}</span>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-6">
          <h4 className="font-semibold text-brand-teal mb-3">Key Steps:</h4>
          <div className="space-y-2">
            {details.map((detail, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{detail}</span>
              </div>
            ))}
          </div>
        </div>
        
        {dialogues && dialogues.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-brand-teal mb-3">AI Guardian Dialogue:</h4>
            <div className="space-y-4">
              {dialogues.map((dialogue, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-brand-teal">
                  <h5 className="font-medium text-brand-teal text-sm">{dialogue.title}</h5>
                  <p className="text-gray-600 italic">"{dialogue.content}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {notes && notes.length > 0 && (
          <div className="mb-4">
            <Separator className="mb-4" />
            <div className="space-y-3">
              {notes.map((note, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Badge variant="outline" className="flex-shrink-0 mt-0.5">
                    {note.title}
                  </Badge>
                  <p className="text-sm text-gray-600">{note.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {buttonText && (
          <div className="mt-6">
            <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/10">
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StepCard;
