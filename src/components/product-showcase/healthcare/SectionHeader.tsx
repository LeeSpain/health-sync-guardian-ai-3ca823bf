
import React from 'react';
import { Stethoscope } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SectionHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-12">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-lg bg-nurse-purple flex items-center justify-center mr-4 shadow-md">
          <Stethoscope className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-2xl text-nurse-purple font-bold">Healthcare Professionals</h3>
      </div>
      <Badge variant="outline" className="mt-4 md:mt-0 bg-nurse-purple/10 text-nurse-purple border-nurse-purple/30 px-4 py-1.5 font-semibold shadow-sm">
        Expert Medical Team
      </Badge>
    </div>
  );
};

export default SectionHeader;
