
import React from 'react';
import SectionHeader from './SectionHeader';
import NurseSyncCard from './NurseSyncCard';
import MedicSyncCard from './MedicSyncCard';
import ProfessionalCard from './ProfessionalCard';
import TrustIndicators from './TrustIndicators';
import { Product } from '../types';

interface HealthcareProfessionalsSectionProps {
  products: Product[];
}

export const HealthcareProfessionalsSection = ({ products }: HealthcareProfessionalsSectionProps) => {
  // Filter products
  const nurseSyncProduct = products.find(product => product.name === "Nurse-Sync");
  const medicSyncProduct = products.find(product => product.name === "Medic-Sync");
  const otherProfessionals = products.filter(
    product => product.name !== "Nurse-Sync" && product.name !== "Medic-Sync"
  );

  return (
    <div>
      <SectionHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Display specialized cards for Nurse-Sync and Medic-Sync */}
        {nurseSyncProduct && <NurseSyncCard product={nurseSyncProduct} />}
        {medicSyncProduct && <MedicSyncCard product={medicSyncProduct} />}
        
        {/* Display generic cards for other professionals */}
        {otherProfessionals.map((professional, index) => (
          <ProfessionalCard key={index} professional={professional} />
        ))}
      </div>
      
      <TrustIndicators />
    </div>
  );
};

export default HealthcareProfessionalsSection;
