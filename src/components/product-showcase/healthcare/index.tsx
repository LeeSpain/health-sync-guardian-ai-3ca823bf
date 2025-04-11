
import React from 'react';
import SectionHeader from './SectionHeader';
import NurseSyncCard from './NurseSyncCard';
import ProfessionalCard from './ProfessionalCard';
import TrustIndicators from './TrustIndicators';
import { Product } from '../types';

interface HealthcareProfessionalsSectionProps {
  products: Product[];
}

export const HealthcareProfessionalsSection = ({ products }: HealthcareProfessionalsSectionProps) => {
  // Filter out nurse-sync products since we have a dedicated component for it
  const standardProfessionals = products.filter(product => product.type !== 'Nurse-Sync');

  return (
    <div>
      <SectionHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <NurseSyncCard />
        
        {standardProfessionals.map((professional, index) => (
          <ProfessionalCard key={index} professional={professional} />
        ))}
      </div>
      
      <TrustIndicators />
    </div>
  );
};

export default HealthcareProfessionalsSection;
