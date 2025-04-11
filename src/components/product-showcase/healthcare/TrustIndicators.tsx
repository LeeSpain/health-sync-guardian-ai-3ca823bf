
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const TrustIndicators = () => {
  return (
    <div className="mt-12 p-6 bg-[#9b87f5]/5 rounded-xl border border-[#9b87f5]/10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Users className="h-6 w-6 text-[#9b87f5] mr-3" />
          <h4 className="text-lg font-semibold text-[#9b87f5]">Certified Healthcare Professionals</h4>
        </div>
        <div className="flex flex-wrap gap-4">
          <Badge variant="outline" className="bg-white text-[#9b87f5] border-[#9b87f5]/20 px-3 py-1">
            24/7 Availability
          </Badge>
          <Badge variant="outline" className="bg-white text-[#9b87f5] border-[#9b87f5]/20 px-3 py-1">
            Secure Consultations
          </Badge>
          <Badge variant="outline" className="bg-white text-[#9b87f5] border-[#9b87f5]/20 px-3 py-1">
            Medical Board Certified
          </Badge>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Our healthcare professionals are licensed medical practitioners with years of experience in remote care. All communications are HIPAA-compliant and securely encrypted.</p>
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="link" className="text-[#9b87f5]">
          <MessageSquare className="mr-2 h-4 w-4" />
          Learn more about our professional standards
        </Button>
      </div>
    </div>
  );
};

export default TrustIndicators;
