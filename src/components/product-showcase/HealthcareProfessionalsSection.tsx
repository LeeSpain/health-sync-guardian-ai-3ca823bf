
import React from 'react';
import { Product } from './types';
import { HealthcareProfessionalsSection as RefactoredHealthcareProfessionalsSection } from './healthcare';

interface HealthcareProfessionalsSectionProps {
  products: Product[];
}

export const HealthcareProfessionalsSection = ({ products }: HealthcareProfessionalsSectionProps) => {
  return <RefactoredHealthcareProfessionalsSection products={products} />;
};

export default HealthcareProfessionalsSection;
