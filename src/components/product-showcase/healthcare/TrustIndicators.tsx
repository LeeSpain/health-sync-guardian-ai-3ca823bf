
import React from 'react';
import { Shield, Award, Star } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12 bg-gradient-to-r from-nurse-purple/5 to-nurse-purple/10 p-6 rounded-xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-nurse-purple/20 flex items-center justify-center">
          <Shield className="h-5 w-5 text-nurse-purple" />
        </div>
        <div>
          <p className="font-medium text-nurse-dark">HIPAA Compliant</p>
          <p className="text-sm text-gray-600">Secure & protected communication</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-nurse-purple/20 flex items-center justify-center">
          <Award className="h-5 w-5 text-nurse-purple" />
        </div>
        <div>
          <p className="font-medium text-nurse-dark">Board Certified</p>
          <p className="text-sm text-gray-600">Licensed healthcare professionals</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-nurse-purple/20 flex items-center justify-center">
          <Star className="h-5 w-5 text-nurse-purple" />
        </div>
        <div>
          <p className="font-medium text-nurse-dark">4.9 Star Rating</p>
          <p className="text-sm text-gray-600">From over 10,000 patient reviews</p>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
