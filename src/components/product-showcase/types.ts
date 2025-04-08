
import { ReactNode } from 'react';

export interface Product {
  name: string;
  image: string;
  description: string;
  category: 'featured' | 'device' | 'service' | 'healthcare';
  type: string;
  icon: ReactNode;
  benefits?: string[];
}
