
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
  // Filter out nurse-sync products
  const nurseSyncProduct = products.find(product => product.name === "Nurse-Sync");
  const otherProfessionals = products.filter(product => product.name !== "Nurse-Sync");

  return (
    <div>
      <SectionHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Only display NurseSyncCard once */}
        {nurseSyncProduct && <NurseSyncCard product={nurseSyncProduct} />}
        
        {otherProfessionals.map((professional, index) => (
          <ProfessionalCard key={index} professional={professional} />
        ))}
      </div>
      
      <TrustIndicators />
    </div>
  );
};

export default HealthcareProfessionalsSection;
